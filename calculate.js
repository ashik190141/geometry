var a = 0;
//calculate area
function getAreaThree(firstInput, secondInput) {
    const calArea = parseFloat(0.5 * firstInput * secondInput).toFixed(2);
    return calArea;
}
//calculate area
function getAreaTwo(firstInput, secondInput) {
    const calArea = parseFloat(firstInput * secondInput).toFixed(2);
    return calArea;
}
//display area result and create a div
function createElement(a, shapeName, area) {

    const mainDiv = document.getElementById('hiddenArea');

    const div = document.createElement('div');
    div.classList.add("set");

    const div1 = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerText = a+". "+shapeName;
    p1.classList.add("me-2");
    p1.classList.add("fs-4");
    div1.appendChild(p1);

    const div2 = document.createElement('div');

    const subdiv2 = document.createElement('div');
    subdiv2.classList.add("aginset");

    const p2 = document.createElement('p');
    p2.innerText = area;
    p2.classList.add("fs-4");
    subdiv2.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = "cm<sup>2</sup>";
    p3.classList.add("fs-4");
    subdiv2.appendChild(p3);

    div2.appendChild(subdiv2);

    const btn = document.createElement("button");
    btn.innerHTML = "Convert to m<sup>2</sup>"
    btn.classList.add("bg-primary");

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(btn);

    mainDiv.appendChild(div);
}
//triangle
document.getElementById('triangleButton').addEventListener('click', function () {
    const firstInput = document.getElementById('triangleInputFieldFirst').value;
    const secondInput = document.getElementById('triangleInputFieldSecond').value;
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Please Enter Valid Number")
    } else if (firstInput == "" || secondInput == "") {
        alert("Please Enter All Field");
    } else if (firstInput < 0 || secondInput < 0) {
        alert("Please Enter Positive Number");
    } else {
        a=a+1;
        const area = getAreaThree(firstInput, secondInput);
        createElement(a, "Triangle", area);
    }
})
//blog
document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href = "blog.html";
})
//rectangle
document.getElementById('rectangleButton').addEventListener('click', function () {
    const firstInput = document.getElementById('rectangleInputFieldFirst').value;
    const secondInput = document.getElementById('rectangleInputFieldSecond').value;
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Please Enter Valid Number")
    } else if (firstInput == "" || secondInput == "") {
        alert("Please Enter All Field");
    } else if (firstInput < 0 || secondInput < 0) {
        alert("Please Enter Positive Number");
    } else {
        a=a+1;
        const area = getAreaTwo(firstInput, secondInput);
        createElement(a, "Rectangle", area);
    }
})
//parallelogram
document.getElementById('parallelogramButton').addEventListener('click', function () {
    const firstInput = document.getElementById('parallelogramInputFieldFirst').value;
    const secondInput = document.getElementById('parallelogramInputFieldSecond').value;
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Please Enter Valid Number")
    } else if (firstInput == "" || secondInput == "") {
        alert("Please Enter All Field");
    } else if (firstInput < 0 || secondInput < 0) {
        alert("Please Enter Positive Number");
    } else {
        a=a+1;
        const area = getAreaTwo(firstInput, secondInput);
        createElement(a, "Parallelogram", area);
    }
})
//rhombus
document.getElementById('rhombusButton').addEventListener('click', function () {
    const firstInput = document.getElementById('rhombusFirstInput').value;
    const secondInput = document.getElementById('rhombusSecondInput').value;
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Please Enter Valid Number")
    } else if (firstInput == "" || secondInput == "") {
        alert("Please Enter All Field");
    } else if (firstInput < 0 || secondInput < 0) {
        alert("Please Enter Positive Number");
    } else {
        a=a+1;
        const area = getAreaThree(firstInput, secondInput);
        createElement(a, "Rhombus", area);
    }
})
//pentagon
document.getElementById('pentagonButton').addEventListener('click', function () {
    const firstInput = document.getElementById('pentagonFirstInput').value;
    const secondInput = document.getElementById('pentagonSecondInput').value;
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Please Enter Valid Number")
    } else if (firstInput == "" || secondInput == "") {
        alert("Please Enter All Field");
    } else if (firstInput < 0 || secondInput < 0) {
        alert("Please Enter Positive Number");
    } else {
        a=a+1;
        const area = getAreaThree(firstInput, secondInput);
        createElement(a, "Pentagon", area);
    }
})
//ellipse
document.getElementById('ellipseButton').addEventListener('click', function () {
    const firstInput = document.getElementById('ellipseFirstInput').value;
    const secondInput = document.getElementById('ellipseSecondInput').value;
    if (isNaN(firstInput) || isNaN(secondInput)) {
        alert("Please Enter Valid Number")
    } else if (firstInput == "" || secondInput == "") {
        alert("Please Enter All Field");
    } else if (firstInput < 0 || secondInput < 0) {
        alert("Please Enter Positive Number");
    } else {
        a=a+1;
        const area = parseFloat(3.14*firstInput*secondInput).toFixed(2);
        createElement(a, "Ellipse", area);
    }
})
//random color picker onmouseenter
function changeBackground(num) {
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (var i = 0; i < 6; i++){
        color = color+ symbols[Math.floor(Math.random()*16)]
    }
    if (num == 1) {
        document.getElementById('triShape').style.background = color;
    }
    else if (num == 2) {
        document.getElementById('recShape').style.background = color;
    }
    else if (num == 3) {
        document.getElementById('paraShape').style.background = color;
    }
    else if (num == 4) {
        document.getElementById('rhombusShape').style.background = color;
    }
    else if (num == 5) {
        document.getElementById('penShape').style.background = color;
    }
    else if (num == 6) {
        document.getElementById('elliShape').style.background = color;
    }
}
// mouseleave
function undo(num) {
    if (num == 1) {
        document.getElementById('triShape').style.background = "white";
    }
    else if (num == 2) {
        document.getElementById('recShape').style.background = "white";
    }
    else if (num == 3) {
        document.getElementById('paraShape').style.background = "white";
    }
    else if (num == 4) {
        document.getElementById('rhombusShape').style.background = "white";
    }
    else if (num == 5) {
        document.getElementById('penShape').style.background = "white";
    }
    else if (num == 6) {
        document.getElementById('elliShape').style.background = "white";
    }
}