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

    
    movie_name : { type: String , required: true ,unique: true},
    movie_genre : { type: String , required: false },
    production_year  : { type: Number , required: true , default: 2000 },
    budget  : { type: Number , required: true}
}, {
    versionKey : false,
    timestamps : true,
}
);
 
//step 3 
const User = mongoose.model('movies' , userSchema);  // collection name , schema name

//post

app.post('/movies' , async (req, res) => {
    //thenable

    try {
        const users = await User.create( req.body );
        return res.status( 201 ).send( users ); 
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});


// get 

app.get('/movies' , async (req, res) => {
    //thenable

    try {
        const users = await User.find().lean().exec();
        return res.status( 201 ).send( users ); 
    }catch(e){
        return res.status(500).json( { message : e.message , status : 'Failed' } )
    }
});

//get single

app.get('/movies/:id' , async (req, res) => {
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

app.patch('/movies/:id' , async (req, res) => {
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

app.delete('/movies/:id' , async (req, res) => {
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