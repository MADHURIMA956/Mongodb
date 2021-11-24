const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());


//step 1
const connect = () => {
    return mongoose.connect(" mongodb://127.0.0.1:27017/test");
};

//step 2
const userSchema = new mongoose.Schema({

    first_name : { type: String , required: true},
    last_name : { type: String , required: false},
    email : { type: String , required: true, unique: true},
    gender : { type: String , required: false , default: 'Male' },
    age : { type: Number , required: true}
}, {
    versionKey : false,
    timestamps : true,
}
);
 
//step 3 
const User = mongoose.model('users' , userSchema);  // collection name , schema name

//post

app.post('/users' , async (req, res) => {
    //thenable

    try {
        const users = await User.create( req.body );
        return res.status( 201 ).send( users ); 
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});


// get 

app.get('/users' , async (req, res) => {
    //thenable

    try {
        const users = await User.find().lean().exec();
        return res.status( 201 ).send( users ); 
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});

//get single

app.get('/users/:id' , async (req, res) => {
    //thenable

    let idd = req.params.id

    try {
        const users = await User.findById( idd ).lean().exec();
        return res.status( 201 ).send( users );  
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});


//patch

app.patch('/users/:id' , async (req, res) => {
    //thenable
    let idd =  req.params.id 
    try {
        
        const users = await User.findByIdAndUpdate(idd , req.body , { new : true  } ).exec();
        return res.status( 201 ).send( users );  
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});


// delete users

app.delete('/users/:id' , async (req, res) => {
    //thenable
    let idd =  req.params.id 
    try {
        const users = await User.findByIdAndDelete( idd ).lean().exec();
        return res.status( 201 ).send( users );  
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});


app.listen(2345, async function () {
    await connect();
    console.log('listening on port 2345')
})