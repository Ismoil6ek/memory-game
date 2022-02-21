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

        let card = document.createElement("label");
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
            <input onclick="count_clicks(${i})" id="input" type="checkbox" />
            <div class="card">                
                <img class="front" src="assets/unknown.png">
                <img class="back" src="assets/${tempElement}.png">
            </div>
        `;
        main.append(card);
    }
};

display();

var input_element = document.querySelectorAll("#input:checked");
var card_back = document.getElementsByClassName("back");
var card_label = document.querySelectorAll("#label");
var checkbox_element = document.querySelectorAll("#input");

var clicked_src;
var clicked_num;

console.log(card_label);

count_clicks = (el) => {

    clicked_src = card_back[el].src;
    clicked_num = el;
    console.log(card_back[el].src)
    console.log(clicked_src)

    if (card_back[el].src == clicked_src) {
        unclickable(el);
        unclickable(clicked_num);
        console.log("matched")
    }

    if (card_back != clicked_src) {
        clickSimulate(el);
        clickSimulate(clicked_num);

    }
}

const unclickable = (el) => { card_label[el].style.pointerEvents = "none"; }

const clickSimulate = (el) => { card_label[el].click(); }