const fs = require('fs');
const readline = require('readline');
const args = process.argv.length > 2 && process.argv[2];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
})

if (args) {
    const data = fs.readFileSync(args, 'utf8');
    const dataObj = JSON.parse(data);

    console.log(`Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini '${args}'.`);
    console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.');
    console.log(`Gunakan 'skip' untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan ditanyakan lagi.\n`)

    let i = 0;
    let wrong = 0;
    let lewat = [];

    console.log(`Pertanyaan: ${dataObj[i].definition}`)
    rl.prompt();

    rl.on('line', (answer) => {
        if (answer === dataObj[i].term) {
            console.log(`Anda Beruntung!\n`)
            dataObj.shift()
            if (i < dataObj.length) {
                console.log(`Pertanyaan: ${dataObj[i].definition}`);
                rl.prompt();
            } else {
                console.log(`Anda Berhasil!`);
                rl.close()
            }
        } else if (answer === 'skip') {
            lewat = dataObj.splice(0, 1)
            dataObj.push(lewat[0])
            wrong = 0;
            console.log(`Pertanyaan: ${dataObj[i].definition}`);
            rl.prompt();
        } else {
            wrong++;
            console.log(`Anda kurang beruntung, anda telah salah ${wrong} kali, silahkan coba lagi.\n`);
            rl.prompt();
        }
    })
} else {
    console.log('Tolong sertakan nama file sebagai inputan soalnya');
    console.log("Misalnya 'node solution.js data.json'")
    rl.close()
}
