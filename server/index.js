const express = require('express');
const socketio= require('socket.io');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const Message = require('./model/message');
const EventLog = require('./model/eventLog');
const {addUser, removeUser, getUser, getUserInRoom} = require ('./users');
const cors = require('cors');

const uri = 'mongodb+srv://user:user@cluster0-n7lzl.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const db = mongoose.connection;

const PORT = process.env.PORT || 5000;

const router = require('./router')


const app = express();
app.use(cors());
app.use(express.json());
app.use('/dashboard',router);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static("client/build"));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'));
    })
}

const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket)=>{
    console.log('user connected');

    socket.on('join', ({name,room}, callback)=>{
        const user = addUser({id: socket.id,name,room});
        console.log(user)
        socket.join(user.room);
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'admin', text:`${user.name} has joined`});

        Message.find({'chat': user.room})
        .exec()
        .then(data =>{
            for( var x =0; x < data.length; x++){
                socket.emit('message', {user: data[x].userName,text:data[x].message});
            }
        })

        const eventLog= new EventLog({
            event: 'CONNECTION',
            userName: name,
            date:  new Date(),
            room: room
        });
        eventLog.save();
        callback();
    });


    socket.on('disconnect', () => {
    
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        
        const eventLog= new EventLog({
            event: 'DISCONNECTION',
            userName: user.name,
            date:  new Date(),
            room: user.room
        });
        eventLog.save();
        const user = removeUser(socket.id);
        callback();
      });

    socket.on('sendMessage',(message, callback)=>{
        const user = getUser(socket.id);
        console.log(user);
        console.log(user.room)
        io.to(user.room).emit('message',{user: user.name, text:message});
        const newMessage= new Message({
            chat: user.room,
            userName: user.name,
            message: message,
            date: new Date()
        });
        newMessage.save();
        callback();
    });

    socket.on('disconnect',()=>{
        console.log('user left');
        const user = getUser(socket.id);
        const eventLog= new EventLog({
            event: 'DISCONNECT',
            userName: user.name,
            date:  new Date(),
            room: user.room
        });
        eventLog.save();
    });
});





server.listen(PORT, ()=>(console.log(`server running on port ${PORT}`)));
//