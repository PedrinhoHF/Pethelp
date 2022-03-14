const ClientesController = {

    index: (req,res) =>{
        res.render('clientes');
    },
    cadastroPets:(req,res) =>{

        res.send("Cadastro de Pets")
    }
    
}

module.exports = ClientesController;