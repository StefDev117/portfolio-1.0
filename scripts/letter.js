const letters = document.querySelector("#letters");

const stringsTech = ["Javascript", "React JS", "MongoDB", "SASS", "HTML", "CSS"];

let bool = true;
let elem = letters[0];
let index = 0;
let idLsTechs = 0;

setInterval(() => {
    if(idLsTechs > stringsTech.length - 1) {
        idLsTechs = 0;
    }

    elem = stringsTech[idLsTechs].slice(0, index);

    if(!bool) {
        index--;
        if(index <= 0) {
            bool = true;
            idLsTechs++;
        }
    } else {
        if(index >= stringsTech[0].length) {
            setTimeout(() => {
                bool = false;
            }, 1000);
        }
        index++;
    }
    letters.textContent = elem;
}, 125);