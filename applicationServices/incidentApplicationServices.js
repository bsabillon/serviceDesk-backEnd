const Incident = require('../models/incident');


var methods = {

getIncidents: function(request,response){
    Incident.findAll()
    .then(incidents=>{
        response.json(incidents);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
    })
},

addIncident: function(request, response){
    Incident.create(
        request.body
        )
        .then(incident=>{
        response
        .status(200)
        .send('incident added successfully');
        })
        .catch(error=>
        response.send("Error adding incident: "+ error))        
},
    

getIncidentById: function(request,response){
    Incident.findOne({
        where:{
            id: request.params.id,
        }
    })
    .then(incidents=>{
        response.json(incidents);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
        })
},

getIncidentByName: function(request, response){
    Incident.findOne({
        where:{
            name: request.params.name,
        }
    })
    .then(incidents=>{
        response.json(incidents);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
        })
    
},

deleteIncident: function(request,response){
    Incident.destroy({
        where: {
            id: request.params.id
        }
    })
    .then(incident=>{
        response
        .status(200)
        .send('Incident has been deleted successfully!')
    })
    .catch(error=>
        response.send("Error: "+error))
},



}


module.exports= methods;