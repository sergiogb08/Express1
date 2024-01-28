const quiniela = async () => { 
    let arrayQ = [];
    for (let i = 1; i <= 15; i++){
        let numRand = Math.floor(Math.random() * 3);
        if(numRand === 0){
            numRand = 'x';
        }
        arrayQ.push(numRand);
    }
    return arrayQ;
}

module.exports = {quiniela}
