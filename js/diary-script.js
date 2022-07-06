window.onload = () => {
    var listDay = document.getElementsByClassName('day-container');
    var listAddButton = document.getElementsByClassName('add');
    var length = listDay.length;

    for (let i = 0; i < length; i++) {
        attachmentAddTask(listDay[i], listAddButton[i]);
        attachmentEditTask(listDay[i]);
    }
}

var deleteCheckedButton = document.getElementById('delete');
var notzero = false;

function attachmentAddTask(ul, button) {
    button.onclick = () => {
        let task = prompt('Add task');
        if (task) {
            ul.innerHTML += `<li><input type="checkbox" name="checkbox" class="checkbox"> <label for="checkbox"> ${task}</label></li>`;
        }
        checkbox = document.getElementsByClassName('checkbox');
        for (let i = 0; i < checkbox.length; i++) { attachmentCheckboxFunc(checkbox[i]);}
        if (checkbox.length != 0) { notzero = true;}
        else { notzero = false;}
    }
}

function attachmentEditTask(ul) {
    ul.ondblclick = (event) => {
        let elem = event.target;
        if (elem.nodeName == "LI" || elem.nodeName == "LABEL") {
            let task = prompt('Edit task', elem.innerText);
            if (task) elem.innerText = task;
        }
    }
}

function attachmentCheckboxFunc(c) {
    c.onchange = () => {
        if (c.hasAttribute("checked")) { c.removeAttribute("checked");}
        else { c.setAttribute("checked", "checked");}
    }
}

deleteCheckedButton.addEventListener("click", () => {
    if (notzero) {
        console.log(checkbox.length);
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) { document.getElementsByTagName('li').item(i).remove();}
        }
    }
});