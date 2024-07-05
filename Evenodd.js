let play = document.querySelector(".input");
let conditions = document.querySelector(".conditions");
let main = document.querySelector(".main");
let bet = document.querySelectorAll(".bet");
let amount = document.getElementById("amt");
let even = document.getElementById("button1");
let odd = document.getElementById("button2");
let retry = document.querySelector(".button3");
let x;
let y = 10;
let dice = document.querySelectorAll(".dierolling");
let Win = document.querySelector(".Win");
let Lose = document.querySelector(".Lose");
let add = document.querySelector(".add");
let add1 = document.querySelector(".add1");
let check = document.querySelectorAll(".button");
let a, b, dice1, dice2;
add.style.opacity = '0';
Win.style.opacity = '0';
newgame();
retry.addEventListener("click", () => {
    console.log(y);
    console.log(x);
    conditions.style.opacity = "1";
    main.style.opacity = "0";
    dice1.style.opacity = '0';
    dice2.style.opacity = '0';
    retry.style.opacity = '0';
    add.style.opacity = '0';
    Win.style.opacity = '0';
    newgame();
});
function newgame() {
    check.forEach(function (ticket) {
        let newTicket = ticket.cloneNode(true);
        ticket.parentNode.replaceChild(newTicket, ticket);
    });
    bet.forEach(function (e) {
        e.addEventListener("click", () => {
            x = parseInt(e.innerHTML);
            main.style.opacity = "1";
            conditions.style.opacity = "0";
        })
    })
    a = Math.floor(11 + 5 * Math.random());
    b = Math.floor(21 + 5 * Math.random());
    let c = a % 10;
    let d = b % 10;
    let sum = c + d;
    let checker = "0";
    checker = abc();
    function abc() {
        if (sum % 2 == 0) {
            return "Even";
        }
        else {
            return "Odd";
        }
    }
    console.log(checker);
    dice1 = document.querySelector(`.dice${a}`);
    dice2 = document.querySelector(`.dice${b}`);
    check = document.querySelectorAll(".button");
    check.forEach(function (ticket) {
        ticket.addEventListener('click', function () {
            dice1.style.opacity = "1";
            dice2.style.opacity = "1";
            even.style.opacity = '0';
            odd.style.opacity = '0';
            if (ticket.innerHTML == checker) {
                Win.style.opacity = '1';
                Win.innerHTML = "You Win";
                add.style.opacity = "1";
                retry.style.opacity = "1";
                add1.innerHTML = `+${x}`;
                y += x;
            } else {
                Win.style.opacity = '1';
                Win.innerHTML = "You Lose";
                add.style.opacity = "1";
                retry.style.opacity = "1";
                add1.innerHTML = `-${x}`;
                y -= x;
            }
            amount.innerHTML = y;
        });
    });
}
