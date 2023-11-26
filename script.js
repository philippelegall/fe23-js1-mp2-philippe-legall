let randomNumber = Math.ceil(Math.random() * 3);

const player = document.querySelector("#spelare");
const computer = document.querySelector("#dator");
const result = document.querySelector("#resultat");
const submit = document.querySelector("#playerName");

const rock = document.querySelector("#rock");
const scissor = document.querySelector("#sax");
const pose = document.querySelector("#paper");

let spelare;
let datorsumma = 0;
let spelaresumma = 0;
let namn;

submit.addEventListener("click", nameInput);
function nameInput(event) {
    event.preventDefault();
    const el = document.createElement("h2");
    document.body.appendChild(el);
    const textinput = document.querySelector("#name-input");
    player.innerText = textinput.value;
    namn = textinput.value;
    textinput.value = " ";
}

container.addEventListener("click", game);
function game(event) {
    if (event.target.tagName == "BUTTON") {
        randomNumber = Math.ceil(Math.random() * 3);
        console.log(randomNumber);
        if (event.target.id == "rock") {
            spelare = event.target.innerText;
            const el2 = document.createElement("h2");
            document.body.appendChild(el2);
            player.innerText = (`${namn}` + ":" + spelare);

            if (randomNumber == 1) {
                computer.innerText = "Computer: Rock";
                result.innerText = "Result: Tie";

            } else if (randomNumber == 2) {
                computer.innerText = "Computer: Paper";
                result.innerText = "Result: Computer Won";
                datorsumma++;

            } else if (randomNumber == 3) {
                computer.innerText = "Computer: scissor";
                result.innerText = "Result: Player Won";
                spelaresumma++;
            }
        } else if (event.target.id == "paper") {
            spelare = event.target.innerText;
            const el3 = document.createElement("h2");
            document.body.appendChild(el3);
            player.innerText = (`${namn}` + ":" + spelare);

            if (randomNumber == 0) {
                computer.innerText = "Computer: Rock";
                result.innerText = "Result: Player won";
                spelaresumma++;

            } else if (randomNumber == 1) {
                computer.innerText = "Computer: Paper";
                result.innerText = "Result: Tie";

            } else if (randomNumber == 2) {
                computer.innerText = "Computer: scissor";
                result.innerText = "Result: Computer won";
                datorsumma++;
            }
        } else if (event.target.id == "scissor") {
            spelare = event.target.innerText;
            const el4 = document.createElement("h2");
            document.body.appendChild(el4);
            player.innerText = (`${namn}` + ":" + spelare);

            if (randomNumber == 0) {
                computer.innerText = "Computer: Rock";
                result.innerText = "Result: Computer won";
                datorsumma++;

            } else if (randomNumber == 1) {
                computer.innerText = "Computer: Paper";
                result.innerText = "Result: Player won";
                spelaresumma++;

            } else if (randomNumber == 2) {
                computer.innerText = "Computer: scissor";
                result.innerText = "Result: Tie";
            }
        }
        document.querySelectorAll("h3")[0].innerText = `Computer :  ${datorsumma}`;
        document.querySelectorAll("h3")[1].innerText = `${namn} :  ${spelaresumma}`;
        setTimeout(function () {
            if (datorsumma == 3) {
                datorsumma = 0;
                alert('The computer won the game')

                location.reload(true);
            } else if (spelaresumma == 3) {
                spelaresumma = 0;
                alert(` ${namn} won the game`)
                location.reload(true);
            }

        }, 20)

    }
}