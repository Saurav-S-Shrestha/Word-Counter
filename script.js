const char = document.getElementById('char');
const words = document.getElementById('words');
const space = document.getElementById('space');
const lines = document.getElementById('lines');

const text = document.getElementById('text');

let charCount = 0;
let wordsCount = 0;
let spaceCount = 0;
let linesCount = 0;

text.focus();
// text.autofocus = 'true';

// text.addEventListener('keydown', event => {
//     console.log(event.keyCode)
// })
text.addEventListener('input', e => {

    linesCount = 0;
    spaceCount = 0;
    wordsCount = 0;

    var str = e.target.value;

    if(str.length > 0) {
        linesCount++;
    }

    countAll(str);
    space.innerText = spaceCount;
    lines.innerText = linesCount;
    char.innerText = str.length;
    words.innerText = wordsCount;
});

function countAll(str) {
    var flag = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == '\n') {
            linesCount ++;
        }
        if(str[i] == ' ') {
            spaceCount ++;
        }
        if(str[i] == ' ' || str[i] == '.' || str[i] == '\n') {
            if(str[i+1] != ' ' && str[i+1] != '.' && str[i+1] && str[i+1] != '\n') {
                wordsCount++;
            }
        }else {
            if(str[0] != ' ' && str[0] != '.') {
                if(flag == 1) {
                    wordsCount++;
                    flag = 0;
                }
            }
        }
    }
}