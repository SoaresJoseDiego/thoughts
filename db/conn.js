const {Sequelize} = require('sequelize');

const sequezile = new Sequelize('toughts', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequezile.authenticate();
    console.log('Connection has been established successfully.');
}catch(err){
    console.log(`Não foi possivel conectar : ${err}`);
    
}


module.exports = sequezile