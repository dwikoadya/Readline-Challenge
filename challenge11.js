const fs = require('fs');
let data = fs.readFileSync('data.json', 'utf8')
let dataObj = JSON.parse(data);
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
    prompt: 'Jawaban: '
})

console.log('Selamat datang di permainan Tebak kata, silahkan isi jawaban dengan benar ya!\n')
let i = 0;
console.log(`Pertanyaan: ${dataObj[i].definition}`)
rl.prompt();

rl.on('line', (answer) => {
    if (answer.toLowerCase() === dataObj[i].term.toLowerCase()) {
        console.log('Selamat Anda Benar!\n');
        i++;
        if (i < dataObj.length) {
            console.log(`Pertanyaan: ${dataObj[i].definition}`);
            rl.prompt();
        } else {
            console.log('Hore Anda Menang!');
            rl.close();
        }
    } else {
        console.log('Wkwkwk, Anda kurang beruntung!');
        rl.prompt();
    }
})