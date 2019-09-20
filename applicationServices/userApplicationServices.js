const User = require('../models/user');


var methods = {

addUser: function(request, response){
    User.create(
        request.body
        )
        .then(user=>{
        response
        .status(200)
        .send('user added successfully');
        })
        .catch(error=>
        response.send("Error adding User: "+ error))        
},
    
getUsers: function(request,response){
    User.findAll()
    .then(users=>{
        response.json(users);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
    })
},

getUserById: function(request,response){
    User.findOne({
        where:{
            id: request.params.id,
        }
    })
    .then(users=>{
        response.json(users);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
        })
},

getUserByName: function(request, response){
    User.findOne({
        where:{
            name: request.params.name,
        }
    })
    .then(users=>{
        response.json(users);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
        })
    
},

deleteUser: function(request,response){
    User.destroy({
        where: {
            id: request.params.id
        }
    })
    .then(user=>{
        response
        .status(200)
        .send('User has been deleted successfully!')
    })
    .catch(error=>
        response.send("Error: "+error))
},



}


module.exports= methods;