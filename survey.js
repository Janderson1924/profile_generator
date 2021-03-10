const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's your favorite hobby ", (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);

        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);

          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`);

              console.log(answer + '\n' + answer2 + '\n' + answer3 + '\n' + answer4 + '\n' + answer5 + '\n' + answer7 + '\n' + answer6);

              rl.close();
            });
          });
        });
      });
    });
  });
});