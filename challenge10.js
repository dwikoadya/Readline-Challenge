
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini > '
})

rl.prompt();

rl.on('line', (answer) => {
     console.log(`hasil konversi: ${sentenceManipulation(answer.toLowerCase())}`);
  rl.prompt()      
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0)
})

sentenceManipulation = sentence => {
    let pisah = sentence.split(" ");
    let hasil = "";
    for (let i = 0; i < pisah.length; i++) {
        hasil += stringManipulation(pisah[i]) + " ";
    }
    return hasil
}

stringManipulation = word => {
    const huruf = word.charAt(0);
    if (huruf == 'a' || huruf == 'i' || huruf == 'u' || huruf == 'e' || huruf == 'o') {
        return word;
    } else {
        return word.slice(1) + word.slice(0, 1) + 'nyo';
    }
}