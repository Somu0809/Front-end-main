var empty = document.getElementById("empty");
var values = document.getElementById("values");
var count = 0;
values.innerHTML = count;

function colorred() {
    empty.style.backgroundColor = "red"
    count++
    values.innerHTML = count;
}

function colorblue() {
    empty.style.backgroundColor = "blue"
    count++
    values.innerHTML = count;
}

function change() {

    count++;
    values.innerHTML = count;

    if (count % 5 === 0) {
        empty.classList.add("circle");
        empty.classList.remove("square");
    }
    
    else if (count % 2 === 0) {
        empty.classList.remove("circle");
        empty.classList.add("square");
    }
    
    else {
        empty.classList.remove("circle");
        empty.classList.remove("square");
    }

}

function startover() {
    count = 0;
    values.innerHTML = count;
    empty.classList.remove("square")
    empty.classList.remove("circle")
    empty.style.backgroundColor = "black"
}