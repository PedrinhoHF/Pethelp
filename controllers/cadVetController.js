const cadVetController = {
    index: (req,res) =>{
        res.render('cadVet');
    },
    cadVet:(req,res) =>{
        res.send("Cadastro de Veterinário")
    }
}

module.exports = cadVetController;