const CadastroController = {

    index: (req,res) =>{
        res.render('cadastro');
    },
    cadastro:(req,res) =>{

        res.send("Cadastro de usuario")
    }
    
}

module.exports = CadastroController;