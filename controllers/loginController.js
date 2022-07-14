const loginController = {

    index: (req,res) =>{
        res.render('login');
    },
    cadastro:(req,res) =>{

        res.send("Login")
    }
    
}


module.exports = loginController;
