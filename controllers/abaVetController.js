const path = require('path');
const fs = require('fs');

const consultasFilePath = path.join(__dirname, '../data/consultasDataBase.json');
const petsFilePath = path.join(__dirname, '../data/petsDataBase.json');

const consultas = JSON.parse(fs.readFileSync(consultasFilePath,'utf-8'));
const pets = JSON.parse(fs.readFileSync(petsFilePath,'utf-8'));
const abaVetController  = {

  index: (req, res)=>{
  res.render('abaVet');
  },
  abaVet: (req, res)=> {
    res.render("abaVet")
  }
  
}

module.exports = abaVetController;