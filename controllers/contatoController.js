const contatoController = {

    index: (req,res) =>{
        res.render('contato');
    },
    contato:(req,res) =>{

        res.render("Contato")
    }
    
}

module.exports = contatoController;