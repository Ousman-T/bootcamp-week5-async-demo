const path = require('path');
const {readFile, writeFile} = require('fs').promises

async function main(){
    console.log('======Synchronous========');
    let newPokemon = {
        name: "Pikachu",
        type: "Electric"
    };
    console.log('New Pokemon Created');
    let dbArr = [];
    console.log('DB array created');
    dbArr.push(newPokemon);
    console.log('Pokemon added to DB');
    console.log(dbArr);

    console.log('=======Asynchronous=======');

    // console.log(__dirname);
    const buffer = await readFile(path.join(__dirname, 'pokemonDB.txt'));
    // console.log(buffer);
    const db = JSON.parse(buffer);
    // console.log(db);
    db.push(newPokemon);
    console.log(db);
    const presave = JSON.stringify(db);
    await writeFile(path.join(__dirname, 'pokemonDB.txt'), presave);
};

main();