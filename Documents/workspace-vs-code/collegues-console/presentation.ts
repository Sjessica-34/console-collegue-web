class Presentation {

    demarrer() {
        console.log("1. Lister les collegues\n99. Sortir")
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

//      rl.on('line', (line) => {
//      console.log(`Received: ${line}`);
//       });
        rl.question('', (answer: string) => {
            switch (answer) {
                case "1":
                    console.log(">> Liste des clients")
                    rl.close();
                    this.demarrer();
            };
            break;
                case "99":
                     console.log("Au revoir !")
                rl.close();
            break;

        });