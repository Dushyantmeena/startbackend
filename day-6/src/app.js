const express = require('express')

const notesModel = require('./models/notes.model')

const app = express()

app.use(express.json())

app.post("/notes", async(req,res)=>{
    const { title, description } = req.body
    
   const note = await notesModel.create({
        title,description
    })
    
    res.status(201).json({
        message: "Note created successfully",
        note
    })


})

app.get('/notes', async (req, res) => {
    const notes = await notesModel.find()
     
res.status(200).json({
    message: "Notes fetched successfully",
    
})

})

module.exports = app