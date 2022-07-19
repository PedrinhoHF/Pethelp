const PromoController ={
  index: (req,res) =>{
    res.render('contato');
},
contato:(req,res) =>{

    res.render("Contato")
},

cadastro:(req,res) =>{

  res.render("cadastro")
}
}

module.exports =  PromoController;