const express = require("express");
require("./db")
const user_details = require("./models")
var validator = require("email-validator") //npm library for email validation

const app = express();
app.use(express.json());

//CRUD APP -> create,read,update,delete

//CREATE
app.post('/api/details', async(req, res) => {
    try{
        const Details = new user_details({    // new data with variable name 'Details'
            name: req.body.name,
            email: req.body.email,
        })

        if(validator.validate(req.body.email)==true)
        {
            await Details.save();
            return res.status(201).send(Details);
        }
        else{
            return res.status(500).send("Enter valid email address")
        }       
    } catch(e){
        return res.status(500).send(e)
    }
});

//READ
//all data
app.get('/api/details', async (req, res) => {
    try{
        const Details = await user_details.find();
        return res.status(200).send(Details);
    } catch(e){
        return res.status(500).send(e)
    }
})

//data by id
app.get('/api/details/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const Details = await user_details.findById(_id);
        return res.status(200).send(Details);
    } catch(e){
        return res.status(500).send(e)
    }
});

//UPDATE
app.patch('/api/details/:id',async (req, res) => {
    const _id = req.params.id
    try {
        const Details = await user_details.findByIdAndUpdate(_id, req.body)
        if(Details) {
            const detailsUp = await user_details.findById(_id);
            return res.status(200).send(detailsUp)
        } 
        else{
            return res.status(400).send("Update Failed")
        }
    } catch(e) {
       return res.status(500).send(e) 
    }
})

//DELETE
app.delete('/api/details/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const Details = await user_details.findByIdAndDelete(_id);
        if(Details){
            return res.status(400).send("Details Succesfully Deleted")
        }
        return res.send("Details deletion failed")
    } catch (e){
        return res.status(500).send(e);
    }
})

app.listen(3000, () => {console.log("Listening on Port 3000")})
