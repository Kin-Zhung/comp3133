const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('./model/message')
const EventLog = require('./model/eventLog')

const uri = 'mongodb+srv://user:user@cluster0-n7lzl.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const db = mongoose.connection;

router.get('/', (req,res)=>{
    res.send('server is up and running');
});
router.route('/admin').post((req, res)=>
    {
        if(req.body.username == 'admin' && req.body.password == 'password'){
            res.send({auth: 'true'});
        }
    }
);
router.route('/eventlog').get((req, res)=>
    {
        EventLog.find().then(history =>res.json(history)).catch(err => res.status(400).json('Error:' + err));
    }
);
router.route('/eventlog/:id').delete((req, res)=>
    {
        EventLog.findByIdAndDelete(req.params.id).then(history =>res.json(history)).catch(err => res.status(400).json('Error:' + err));
    }
);
router.route('/history').get((req, res)=>
    {
        Message.find().then(history =>res.json(history)).catch(err => res.status(400).json('Error:' + err));
    }
);
router.route('/history/:id').delete((req, res)=>
    {
        Message.findByIdAndDelete(req.params.id).then(history =>res.json(history)).catch(err => res.status(400).json('Error:' + err));
    }
);
router.route('/filter').get((req, res)=>
    {
        Message.find().distinct('chat').then(history =>res.json(history)).catch(err => res.status(400).json('Error:' + err));
    }
)
router.route('/filter/:search').get((req, res)=>
    {
        console.log(req.params)
        Message.find({'chat': req.params.search}).then(history =>res.json(history)).catch(err => res.status(400).json('Error:' + err));
    }
)

router.route('/dashboard').get((req, res)=>
    {
        console.log(historyroom);
        var data = JSON.stringify(historyroom);
        res.send(data);
    }
)

module.exports = router;