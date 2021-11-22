Q ) Problem
    For this assignment you need to create a database called assignment and collection called users that has following fields :-

    first_name

    last_name

    email

    gender

    ip_address

    age

    Insert 10 documents in this users collection using both insert and insertMany.

A ) Command :

    Create Database : 

     use assignment

    Insert :

     db.users.insert({first_name : "Rekha",last_name:"Devi",email: "rekha2@gmail.com", gender: "Female",ip_address : "192.0.2.1"  ,age: 24})

     db.users.insert({first_name : "Rakhesh",last_name:"Rao",email: "rakhesh@gmail.com", gender: "Male",ip_address : "195.0.4.1"  ,age: 22})
 
     db.users.insert({first_name : "Nandini",last_name:"Roy",email: "nandini89@gmail.com", gender: "Female",ip_address : "182.0.2.1"  ,age: 25})

     db.users.insert({first_name : "Radhika",last_name:"Raj",email: "radhika@gmail.com", gender: "Female",ip_address : "147.1.2.7"  ,age: 24})

     InsertMany :

    db.users.insertMany([{first_name : "Radhika",last_name:"Raj",email: "radhika@gmail.com", gender: "Female",ip_address : "147.1.2.7"  ,age: 24},{first_name : "Sekhar",last_name:"Das",email: "sekhar9@gmail.com", gender: "Male",ip_address : "172.0.8.1"  ,age: 44},{first_name : "Nirmala",last_name:"Singha",email: "nirmala999@gmail.com", gender: "Female",ip_address : "177.0.8.1"  ,age: 48},{first_name : "Sanjiboni",last_name:"Kumar",email: "sanjibani52@gmail.com", gender: "Female",ip_address : "122.0.6.1"  ,age: 14},{first_name : "Siba",last_name:"Das",email: "siba19@gmail.com", gender: "Male",ip_address : "142.4.8.1"  ,age: 32},{first_name : "Nimai",last_name:"kar",email: "nimai@gmail.com", gender: "Male",ip_address : "135.0.8.0"  ,age: 24},{first_name : "Rakhi",last_name:"Sen",email: "rakhi6@gmail.com", gender: "Female",ip_address : "182.0.7.1"  ,age: 34}])
    


Q ) Select all the documents in the users collection using find and also a single document using findOne

A ) Command :

    db.users.find().pretty()

    db.users.findOne()

    db.users.find({"_id" : ObjectId("619bb11831dea6a3bf1fabf3")}).pretty()


Q ) Update at least 3 documents using update and updateMany

A ) Command :

    db.users.update({ "_id" : ObjectId("619bb11831dea6a3bf1fabf3")}, {$set:{hobbies : "Reading" }})

    db.users.updateMany({gender : "Female" } , {$set : { honorific : "Mrs"}}) 


Q ) Delete documents using remove, remove that will remove just 1 document,       deleteOne, deleteMany

A ) Command :

    db.users.remove({"_id" : ObjectId("619bb0b931dea6a3bf1fabf2")})   //delete only one data where id = ObjectId("619bb0b931dea6a3bf1fabf2")

    db.users.deleteOne({ gender : "Male"})     // delete first data where gender = "Male"

    db.users.deleteMany({ gender : "Female"})    // delete all data where  gender = "Female"


Q ) Then delete the database

A ) Command :

    db.dropDatabase()