const contatoController = {

    index: (req,res) =>{
        res.render('contato');
    },
    contato:(req,res) =>{

        res.send("Contato")
    }
    
}

module.exports = contatoController;