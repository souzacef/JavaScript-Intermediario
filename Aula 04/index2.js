const { log } = require("console");
const fs = require("fs");

fs.writeFile("./files/arquivo2.txt","Esse é o meu segundo arquivo.", function(err){
    if(err){
        return console.log(`Algo deu errado: ${err}` );        
    }
});