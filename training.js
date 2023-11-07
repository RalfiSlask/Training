const list = document.querySelector("#list");
const button = document.querySelector("#button");
const button2 = document.querySelector("#button2");
const input = document.querySelector("input");
let listItems = document.querySelectorAll("li");

const updateListItems = () => {
    listItems = document.querySelectorAll("li")
}

const handleClick = () => {
    if(input.value === "") {
        alert("input is empty")
    } else {
        const listitem = document.createElement("li");
        listitem.textContent = input.value;
        list.append(listitem)
        updateListItems();
    }
};

// Event Delegation

const removeTask = (e) => {
    console.log(e.target.tagName)
    if(e.target.tagName === "LI") {
        console.log(e.target.value)
        e.target.remove();
    }
}

list.addEventListener("click", (e) => {removeTask(e)})
button.addEventListener("click", handleClick);

document.addEventListener("keydown", (event) => {
    alert("Halleluja")
    console.log(event)
    console.log(event.target)
})


