const indexController = {
    index: (req,res) =>{
        res.render('index');
    },
    indexPets:(req,res) =>{
        res.send("Pet Help!")
    }
}

module.exports = indexController;
