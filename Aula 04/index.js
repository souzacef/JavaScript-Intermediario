const { log } = require("console");
const fs = require("fs");

// fs.writeFile("./files/arquivo.txt", "Esse é o meu primeiro arquivo", function(err){
//         if (err) {
//             return console.log(`Algo deu errado: ${err}`);
//         }
//     });

//     fs.readFile("./files/arquivo.txt","utf8", function(err, data){
//         if (err) {
//             return console.log(`Algo deu errado: ${err}`);
//         }

//         console.log(data);
//     });

//     fs.rename("./files/arquivo.txt", "./files/novo-nome.txt", function(err){

//         if (err) {
//             return console.log(`Algo deu errado: ${err}`);
//         }

//         console.log("Renomeado com sucesso");
        

//     });

fs.unlink("./files/novo-nome.txt", function (err) {
    if (err) {
        return console.log(`Algo deu errado: ${err}`);
    }
});