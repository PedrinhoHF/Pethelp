const path = require('path');
const fs = require('fs');

const consultasFilePath = path.join(__dirname, '../data/consultasDataBase.json');
const petsFilePath = path.join(__dirname, '../data/petsDataBase.json');

const consultas = JSON.parse(fs.readFileSync(consultasFilePath,'utf-8'));
const pets = JSON.parse(fs.readFileSync(petsFilePath,'utf-8'));

const ClientesController = {

    index: (req,res) =>{
        res.render('clientes_inicial',{consultas, pets});
        
    },
    clientesConsultas:(req,res)=> {

        res.render('clientes_consultas')
    },

    cadastroPets:(req,res) =>{

       res.render('clientes_cadastro_pet')
    },
    
    cadastroCliente:(req,res) =>{
        res.render("clientes_cadastro")
    }
}

module.exports = ClientesController;