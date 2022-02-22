'use string'

var length = 20;
const main = document.querySelector(".wrapper");
let count = 0;

function display() {
    var stack = [
        "android",
        "apple",
        "beats",
        "css",
        "edge",
        "firefox",
        "html",
        "photoshop",
        "safari",
        "windows",
    ];

    // clear screen before adding new cards
    main.innerHTML = '';
    let tempArray = new Array;

    // add new cards
    for (let i = 0; i < length; i++) {

        let card = document.createElement("div");
        card.id = "label";

        let tempElement;

        if (stack.length > 0) {
            while (stack.length > 0) {

                let tempIndex = Math.floor(Math.random() * (length / 2));

                if (tempIndex >= 0 && tempIndex < stack.length) {
                    tempElement = stack[tempIndex];
                    tempArray.push(tempElement);
                    stack.splice(tempIndex, 1);
                    break;
                }
            }

        } else if (stack.length == 0) {

            while (tempArray.length > 0) {

                let tempIndex = Math.floor(Math.random() * (tempArray.length));

                if (tempIndex >= 0 && tempIndex < tempArray.length) {
                    tempElement = tempArray[tempIndex];
                    tempArray.splice(tempIndex, 1);
                    break;
                }
            }
        }

        // card structure
        card.innerHTML = `
            
            <div onclick="checkCard(${i})" class="flip-card">
                <div class="flip-card-inner for_logic${i}">
                    <div class="flip-card-front">
                        <img src="assets/unknown.png" alt="Question Mark" style="width: 100px; height: 100px;">
                    </div>
                    <div class="flip-card-back for_second_logic${i}">
                        <img class="back" src="assets/${tempElement}.png" alt="Answer">
                    </div>
                </div>
            </div>
        `;
        main.append(card);
    }
};

display();

let check_arr = [];
let cursors = [];

function checkCard(el) {
    const card = document.querySelector(`.for_logic${el}`);
    card.style.pointerEvents = "none";
    const img = document.querySelector(`.for_second_logic${el} img`).src;
    card.classList.add('flipper');
    check_arr.unshift(card);
    check_arr.unshift(img);
    console.log(check_arr);

    if (check_arr.length % 4 == 0) {

        for (let n = 0; n < length; n++) {

            const cursor = document.querySelector(`.for_logic${n}`);
            cursor.style.pointerEvents = "none";

        }
        if (check_arr[0] != check_arr[2]) {

            const timeout = setTimeout(check, 500);

        } else {

            for (let n = 0; n < length; n++) {
                const cursor = document.querySelector(`.for_logic${n}`);
                let result = cursors.indexOf(cursor);
                if (result == -1) {
                    cursor.style.pointerEvents = "auto";
                } else {
                    cursor.style.pointerEvents = "none";
                }
            }

            check_arr[1].style.pointerEvents = "none";
            check_arr[3].style.pointerEvents = "none";
            cursors.unshift(check_arr[1]);
            cursors.unshift(check_arr[3]);

        }
    }
}

function check() {
    check_arr[1].classList.remove('flipper')
    check_arr[3].classList.remove('flipper')
    for (let n = 0; n < length; n++) {
        const cursor = document.querySelector(`.for_logic${n}`)
        let result = cursors.indexOf(cursor)
        if (result == -1) {
            cursor.style.pointerEvents = "auto"
        } else {
            cursor.style.pointerEvents = "none"
        }
    }
}