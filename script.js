dragElement(document.querySelector("#welcome"));
dragElement(document.querySelector("#finder"));

function closeWindow(element) {
    element.style.display = "none";
}

// Finder window
var finderWindow = document.querySelector('#finder');
var finderWindowClose = document.querySelector('#finderclose');
var finderWindowMinimize = document.querySelector('#finderminimize');
var finderWindowOpen = document.querySelector('#finderopen');

finderWindowClose.addEventListener("click", function () {
    closeWindow(finderWindow);
});

finderWindowMinimize.addEventListener("click", function () {
    closeWindow(finderWindow);
});

finderWindowOpen.addEventListener("click", function () {
    finderWindow.style.display = "block";
});

closeWindow(finderWindow);

// Welcome window
var welcomeWindow = document.querySelector('#welcome');
var welcomeWindowClose = document.querySelector('#welcomeclose');
var welcomeWindowMinimize = document.querySelector('#welcomeminimize');

console.log(welcomeWindowClose, welcomeWindowMinimize);

welcomeWindowClose.addEventListener("click", function () {
    closeWindow(welcomeWindow);
});

welcomeWindowMinimize.addEventListener("click", function () {
    closeWindow(welcomeWindow);
});

// Function to make a window fullscreen
var selectedIcon = undefined;

function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element;
}

function deselectIcon(element) {
    element.classList.remove("selected");
    selectedIcon = undefined;
}

function handleIconClick(element) {
    if (element.classList.contains("selected")) {
        deselectIcon(element);
    } else {
        selectIcon(element);
    }
}

function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}