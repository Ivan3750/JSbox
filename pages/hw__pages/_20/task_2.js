const boxes = document.getElementById('boxes');

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        boxes.append(div);
    }
}

document.querySelector('[data-action="render"]').addEventListener("click", () => {
    const numBox = document.querySelector('.numBox');
    createBoxes(numBox.value);
});
document.querySelector('[data-action="destroy"]').addEventListener("click", () => {
    boxes.innerHTML = ""
});