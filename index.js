// Code your solutions in this file


function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(num) {
    let countdown = 0;
    while (num >= countdown) {
        console.log(num--);
    }
}

countDown(10);