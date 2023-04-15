const express = require("express")
const router = express.Router()
const { sqlModel } = require("../db")


router.post("/notes", (req, res) => {
    try{
    let data = req.body;
    let option = `insert into note (title, description, date) values ('${data.title}', '${data.description}', '${data.date}')`

    sqlModel.query(option, (err, data) => {
        if (err) {res.status(400).send(err.message) }
        else { res.status(201).send(data) }
    })}
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
})

router.get("/notes", (req, res) => {
    try{
    let option = "select * from note"
    sqlModel.query(option, (err, data) => {
        if (err) { res.status(400).send(err.message) }
        else { res.status(200).send(data) }
    })}
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
})

router.delete("/notes/:id", (req, res) => {
    try{
    let id = req.params.id
    if (!id) { res.send("Please enter id in params") }
    let option = `delete from note where id=${id}`
    sqlModel.query(option, (err, data) => {
        if (err) { res.status(400).send(err.message) }
        else { res.status(200).send("Deleted") }
    })}
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
})

router.get("/*", (req, res)=>{
    res.send("page not found")
})

module.exports = router