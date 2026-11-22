
const elements = [
    { tag: "button", id: "block-inline-button", type: "Inline" },
    { tag: "div", id: "block-inline-div", type: "Block" },
    { tag: "span", id: "block-inline-span", type: "Inline" },
    { tag: "p", id: "block-inline-p", type: "Block" },
    { tag: "input", id: "block-inline-input", type: "Inline" },
    { tag: "cite", id: "block-inline-cite", type: "Inline" },
    { tag: "code", id: "block-inline-code", type: "Inline" },
    { tag: "h1", id: "block-inline-h1", type: "Block" },
    { tag: "sup", id: "block-inline-sup", type: "Inline" },
    { tag: "sub", id: "block-inline-sub", type: "Inline" }
];

const output = document.getElementById("output");

elements.forEach(function(element) {

    const div = document.createElement("div");
    div.className = "item";

    for (let i = 1; i <= 2; i++) {

        const newElement = document.createElement(element.tag);

        newElement.setAttribute("data-ns-test", element.id);

        if (element.tag === "input") {
            newElement.value = "Test" + i;
        } else {
            newElement.textContent = "Test" + i;
        }

        div.appendChild(newElement);
        div.appendChild(document.createTextNode(" "));
    }

    const answer = document.createElement("p");
    answer.className = "answer";
    answer.textContent = "Answer: " + element.type;

    div.appendChild(answer);
    output.appendChild(div);
});
