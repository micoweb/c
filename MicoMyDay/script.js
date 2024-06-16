var audioA = new Audio('audio/addTask.mp3');
var audioC = new Audio('audio/compleated.mp3');
var audioE = new Audio('audio/error.mp3');
var audioT = new Audio('audio/touch.mp3');





// Start
setTimeout(function () {
    document.querySelector('#title').style.fontSize = '40px';
    document.querySelector('#titleDiv').style.transform = 'translate(0%, 0%)';
    document.querySelector('#titleDiv').style.top = '0%';
    document.querySelector('#titleDiv').style.left = '0%';

    document.querySelector('#mainFocusInput').style.display = 'block';
    document.querySelector('#calAndDoNowDiv').style.display = 'block';

    let today = new Date();
    let curHr = today.getHours();
    let time = null;

    if (curHr < 12) {
        time = "Morning";
    }
    else if (curHr < 14) {
        time = "Afternoon";
    }
    else {
        time = "Evening";
    }

    document.querySelector('#timeText').innerHTML = "Good " + time + " " + localStorage.getItem("username");

    let html = document.querySelector("html");
    
    if(curHr < 12) {
        html.style.background = "url('backgrounds/ll.jpg')"
    }
    else if(curHr < 17){
        html.style.background = "url('backgrounds/yy.webp')";
    }
    else{
        html.style.background = "url('backgrounds/aa.jpg')";
    }
}, 200);


// Main Focus
let mainFocusInput = document.getElementById("mainFocusInput");
let mainFocus = document.getElementById("mainFocusInput").value;

mainFocusInput.addEventListener("keyup", function () {
    mainFocus = document.getElementById("mainFocusInput").value;
    if (mainFocus === '') {
        document.getElementsByName("mainFocusInput")[0].placeholder = localStorage.setItem("mainFocusMyDay", "What is your main focus Today")
        document.getElementsByName("mainFocusInput")[0].placeholder = "What is your main focus Today";
    
    } else {
        document.getElementsByName("mainFocusInput")[0].placeholder = localStorage.setItem("mainFocusMyDay", mainFocus);
    }
});

function showData() {
    document.getElementsByName("mainFocusInput")[0].placeholder = localStorage.getItem("mainFocusMyDay")
};

showData();

// Add Name
function addName() {
    let username = document.getElementById("nameInputBox").value;

    if (username === "") {
        setTimeout(function () {
            document.getElementsByName("nameInputBox")[0].placeholder = "Enter your name here...";
        }, 3000)
    } else {
        localStorage.setItem("username", username)
        localStorage.setItem("mainFocusMyDay", "What is your main focus Today");
        localStorage.setItem("password", "Enter here");
        location.reload()
    }
}

if (localStorage.getItem("username")) {
    document.querySelector('#inputNameBackgroundDiv').style.display = "none"
} else {
    document.querySelector('#inputNameBackgroundDiv').style.display = "block"
}

// Tabs
function showDoNow() {
    document.querySelector('#micoDoNowDiv').style.display = "block"
    document.querySelector('#calculator').style.display = "none"
    document.querySelector('#more').style.display = "none"
    document.querySelector('#settings').style.display = "none"

    document.querySelector('#doNowBtn').style.background = "#ffd000"
    document.querySelector('#calBtn').style.background = "#9e9e9e"
    document.querySelector('#moreBtn').style.background = "#c0c0c0"

    audioT.play()
}

function showCalculator() {
    document.querySelector('#micoDoNowDiv').style.display = "none"
    document.querySelector('#calculator').style.display = "block"
    document.querySelector('#more').style.display = "none"
    document.querySelector('#settings').style.display = "none"

    document.querySelector('#doNowBtn').style.background = "#c0c0c0"
    document.querySelector('#calBtn').style.background = "#ffd000"
    document.querySelector('#moreBtn').style.background = "#9e9e9e"
    audioT.play()
}

function showMore() {
    document.querySelector('#micoDoNowDiv').style.display = "none"
    document.querySelector('#calculator').style.display = "none"
    document.querySelector('#more').style.display = "block"
    document.querySelector('#settings').style.display = "none"

    document.querySelector('#doNowBtn').style.background = "#c0c0c0"
    document.querySelector('#calBtn').style.background = "#9e9e9e"
    document.querySelector('#moreBtn').style.background = "#ffd000"
    audioT.play()
}

function showSettings() {
    document.querySelector('#micoDoNowDiv').style.display = "none"
    document.querySelector('#calculator').style.display = "none"
    document.querySelector('#more').style.display = "none"
    document.querySelector('#settings').style.display = "block"

    document.querySelector('#doNowBtn').style.background = "#505050"
    document.querySelector('#calBtn').style.background = "#505050"
    document.querySelector('#moreBtn').style.background = "#505050"
    audioT.play()
}


// Calculator
const fN = document.getElementById("fNumInput");
const sN = document.getElementById("sNumInput");
const calHistory = document.getElementById("calHistoryList");

function plus() {
    let a = parseFloat(document.querySelector("#fNumInput").value)
    let b = parseFloat(document.querySelector("#sNumInput").value)

    if (fN.value === '') {
        document.getElementsByName('fN')[0].placeholder = "..........................";
        setTimeout(() => {
            document.getElementsByName('fN')[0].placeholder = "";
        }, "3000");
    }

    else if (sN.value === '') {
        document.getElementsByName('sN')[0].placeholder = "..........................";
        setTimeout(() => {
            document.getElementsByName('sN')[0].placeholder = "";
        }, "3000");
    }

    else {
        let c = a + b

        document.querySelector("#fNumInput").value = '';
        document.querySelector("#sNumInput").value = '';

        let li = document.createElement("li");
        li.innerHTML = a + "+" + b + " = " + c;
        calHistory.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveCalculationsToLocalStorage()
    }
}
function min() {
    let a = parseFloat(document.querySelector("#fNumInput").value)
    let b = parseFloat(document.querySelector("#sNumInput").value)

    if (fN.value === '') {
        document.getElementsByName('fN')[0].placeholder = "No first number added";
        setTimeout(() => {
            document.getElementsByName('fN')[0].placeholder = "";
        }, "3000");
    }

    else if (sN.value === '') {
        document.getElementsByName('sN')[0].placeholder = "No second number added";
        setTimeout(() => {
            document.getElementsByName('sN')[0].placeholder = "";
        }, "3000");
    }

    else {
        let c = a - b

        document.querySelector("#fNumInput").value = '';
        document.querySelector("#sNumInput").value = '';

        let li = document.createElement("li");
        li.innerHTML = a + "-" + b + " = " + c;
        calHistory.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveCalculationsToLocalStorage()
    }
}
function mul() {
    let a = parseFloat(document.querySelector("#fNumInput").value)
    let b = parseFloat(document.querySelector("#sNumInput").value)

    if (fN.value === '') {
        document.getElementsByName('fN')[0].placeholder = "No first number added";
        setTimeout(() => {
            document.getElementsByName('fN')[0].placeholder = "";
        }, "3000");
    }

    else if (sN.value === '') {
        document.getElementsByName('sN')[0].placeholder = "No second number added";
        setTimeout(() => {
            document.getElementsByName('sN')[0].placeholder = "";
        }, "3000");
    }

    else {
        let c = a * b

        document.querySelector("#fNumInput").value = '';
        document.querySelector("#sNumInput").value = '';

        let li = document.createElement("li");
        li.innerHTML = a + "x" + b + " = " + c;
        calHistory.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveCalculationsToLocalStorage()
    }
}
function divi() {
    let a = parseFloat(document.querySelector("#fNumInput").value)
    let b = parseFloat(document.querySelector("#sNumInput").value)

    if (fN.value === '') {
        document.getElementsByName('fN')[0].placeholder = "No first number added";
        setTimeout(() => {
            document.getElementsByName('fN')[0].placeholder = "";
        }, "3000");
    }

    else if (sN.value === '') {
        document.getElementsByName('sN')[0].placeholder = "No second number added";
        setTimeout(() => {
            document.getElementsByName('sN')[0].placeholder = "";
        }, "3000");
    }

    else {
        let c = a / b

        document.querySelector("#fNumInput").value = '';
        document.querySelector("#sNumInput").value = '';

        let li = document.createElement("li");
        li.innerHTML = a + "÷" + b + " = " + c;
        calHistory.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveCalculationsToLocalStorage()
    }
}

function saveCalculationsToLocalStorage() {
    localStorage.setItem("CalData", calHistory.innerHTML)
}

function showCalculations() {
    calHistory.innerHTML = localStorage.getItem("CalData")
}

showCalculations()


calHistory.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveCalculationsToLocalStorage()
    }
}, false)


// DoNow
const inputBox = document.getElementById("doNowInput")
const doNowList = document.getElementById("doNowList")

function addTask() {
    if (inputBox.value === '') {
        document.getElementsByName('doNowInput')[0].placeholder = "Empty Tasks can't be added";
        setTimeout(() => {
            document.getElementsByName('doNowInput')[0].placeholder = "Hey, add a task now...";
        }, "3000");
        audioE.play()
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        doNowList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

        audioA.play()
    }
    inputBox.value = '';
    saveToLocalStorage()
}

doNowList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveToLocalStorage()
        audioC.play()
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveToLocalStorage()
        audioT.play()

    }
}, false)

function saveToLocalStorage() {
    localStorage.setItem("tasks", doNowList.innerHTML)
}

function showTasks() {
    doNowList.innerHTML = localStorage.getItem("tasks")
}

showTasks()

// Background Change
let title = document.getElementById("title")
let themeImg = document.querySelector(".themeImg");
let themeImg1 = document.getElementById("themeImg1");
let themeImg2 = document.getElementById("themeImg2");
let themeImg5 = document.getElementById("themeImg5");
let themeImg6 = document.getElementById("themeImg6");
let timeText = document.getElementById("timeText");
let html = document.querySelector("html");

function bgImg1() {
    themeImg1.style.border = "2px solid #414040";
    themeImg2.style.border = "none";
    themeImg5.style.border = "none";
    themeImg6.style.border = "none";
    timeText.style.color = "#faebd7";
    title.style.color = "#faebd7";
    html.style.background = "url('backgrounds/background1.jpg') no-repeat"
    localStorage.setItem("bgImg", "1")
}
function bgImg2() {
    themeImg1.style.border = "none";
    themeImg2.style.border = "2px solid #414040";
    themeImg5.style.border = "none";
    themeImg6.style.border = "none";
    timeText.style.color = "black";
    title.style.color = "#633b06";
    html.style.background = "url('backgrounds/background2.jpg') no-repeat center center fixed"
    mainFocusInput.classList.remove('mainFocusInput');
    mainFocusInput.classList.remove('white');
    mainFocusInput.classList.add('gray');
    localStorage.setItem("bgImg", "2")
}
function bgImg5() {
    themeImg1.style.border = "none";
    themeImg2.style.border = "none";
    themeImg5.style.border = "2px solid #414040";
    themeImg6.style.border = "none";
    title.style.color = "#633b06";
    html.style.background = "url('backgrounds/background5.jpg') no-repeat center center fixed"
    mainFocusInput.classList.remove('mainFocusInput');
    mainFocusInput.classList.remove('gray');
    mainFocusInput.classList.add('white');
    localStorage.setItem("bgImg", "3")
}
function bgImg6() {
    themeImg1.style.border = "none";
    themeImg2.style.border = "none";
    themeImg5.style.border = "none";
    title.style.color = "#faebd7";
    themeImg6.style.border = "2px solid #414040";
    html.style.background = "url('backgrounds/background6.jpeg') no-repeat center center fixed"
    mainFocusInput.classList.remove('mainFocusInput');
    mainFocusInput.classList.remove('gray');
    mainFocusInput.classList.add('white');
    localStorage.setItem("bgImg", "4")
}

if (localStorage.getItem("bgImg") == "1") {
    bgImg1()
} else if (localStorage.getItem("bgImg") == "2") {
    bgImg2()
} else if (localStorage.getItem("bgImg") == "3") {
    bgImg5()
} else if (localStorage.getItem("bgImg") == "4") {
    bgImg6()
}

// Change Name
document.getElementsByName("changeName")[0].placeholder = localStorage.getItem("username");

function changeNameFunc() {
    if (document.getElementById("changeName").value == "") {
        document.getElementsByName("changeName")[0].placeholder = "No name added";
        setTimeout(function () { document.getElementsByName("changeName")[0].placeholder = localStorage.getItem("username") }, 2000)
    } else {
        localStorage.setItem("username", document.getElementById("changeName").value)
        location.reload()
    }
}

// Password
let checkValue;

function checkboxOnClick() {
    if (document.getElementById("check").checked = false || checkValue == 0){
        document.querySelector("#changePasswordInp").style.display = "inline";
        document.querySelector("#changePasswordBtn").style.display = "inline";
        document.getElementById("check").checked = true;
        checkValue = 1;
    } else if (document.getElementById("check").checked = true || checkValue == 1){
        document.querySelector("#changePasswordInp").style.display = "none"
        document.querySelector("#changePasswordBtn").style.display = "none"
        document.getElementById("check").checked = false;
        checkValue = 0;
    }

    localStorage.setItem("passValue", checkValue)
}


function enablePassword(){
    if (localStorage.getItem("passValue") == 0 || localStorage.getItem("password") == null){
        document.querySelector("#changePasswordInp").style.display = "none"
        document.querySelector("#changePasswordBtn").style.display = "none"
        document.getElementById("check").checked = false;
    } else if (localStorage.getItem("passValue") == 1){
        document.querySelector("#changePasswordInp").style.display = "inline"
        document.querySelector("#changePasswordBtn").style.display = "inline"
        document.getElementById("check").checked = true;
    }
} enablePassword();

function addPassword(){
    if (document.getElementById("changePasswordInp").value == "") {
        document.getElementsByName("changePasswordInp")[0].placeholder = "No password added";
        setTimeout(function () { document.getElementsByName("changePasswordInp")[0].placeholder = localStorage.getItem("password") }, 2000)
    } else {
        localStorage.setItem("password", document.getElementById("changePasswordInp").value)
        location.reload()
    }
} addPassword();

function login(){
    if (localStorage.getItem("passValue") == 0  || localStorage.getItem("password") == "Enter here" || localStorage.getItem("password") == null){
        document.getElementById("loginMenu").style.display = "none";
        localStorage.setItem("passValue", 0)
    } else if (localStorage.getItem("passValue") == 1 ){
        document.getElementById("loginMenu").style.display = "block";
        document.getElementById("appContents").style.display = "none";
        document.getElementById("title").style.display = "none";
    } else{
        document.getElementById("loginMenu").style.display = "none";
    }
} login();

function checkPassword(){
    if (localStorage.getItem("password") == document.getElementById("PasswordInputBox").value) {
        document.getElementById("loginMenu").style.display = "none";
        document.getElementById("appContents").style.display = "block";
        document.getElementById("title").style.display = "block";
    } else {
        document.getElementsByName("PasswordInputBox")[0].placeholder = 'incorrect password';
        setTimeout(function () { document.getElementsByName("PasswordInputBox")[0].placeholder = 'Enter here'}, 2000)
        alert("incorrect password")
    }
}

function googleSearch() {
    var searchItem = document.getElementById('searchBar').value;

    if (searchItem == "") {

    } else {
        var searchItem = document.getElementById('searchBar').value;
        window.open('https://www.google.com/search?q=' + searchItem);
    }
}


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
        var searchItem = document.getElementById('searchBar').value;
        window.open('https://www.google.com/search?q=' + searchItem);
    }
}

function openSharePannel(){
    document.getElementById('shareBtn').style.display = "none";
    document.getElementById('sharePannel').style.display = "block";
}
function closeSharePannel(){
    document.getElementById('shareBtn').style.display = "block";
    document.getElementById('sharePannel').style.display = "none";
}

// Calculator New

let previosNumber;
let option;
let firstNumber;
let secondNumber;
let erasedPre

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "49") {
        fn1()
    } else if (evt.keyCode == "50") {
        fn2()
    } else if (evt.keyCode == "51") {
        fn3()
    } else if (evt.keyCode == "52") {
        fn4()
    } else if (evt.keyCode == "53") {
        fn5()
    } else if (evt.keyCode == "54") {
        fn6()
    } else if (evt.keyCode == "55") {
        fn7()
    } else if (evt.keyCode == "56") {
        fn8()
    } else if (evt.keyCode == "57") {
        fn9()
    } else if (evt.keyCode == "48") {
        fn0()
    } else if (evt.keyCode == "190") {
        fnDec()
    } else if (evt.keyCode == "8") {
        fEr()
    } else if (evt.keyCode == "16" && evt.keyCode == "187") {
        fPlu()
    } else if (evt.keyCode == "") {
        fMin()
    } else if (evt.keyCode == "56") {
        fMul()
    } else if (evt.keyCode == "8") {
        fDvi()
    } else if (evt.keyCode == "56") {
        fEqu()
    } else if (evt.keyCode == "8") {
        fAc()
    };
}

function fn1(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 1
}
function fn2(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 2
}
function fn3(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 3
}
function fn4(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 4
}
function fn5(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 5
}
function fn6(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 6
}
function fn7(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 7
}
function fn8(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 8
}
function fn9(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 9
}
function fn0(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + 0
}
function fn00(){
    previosNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previosNumber + "00";
}
function fnDec(){
    previosNumber = document.getElementById("display").innerHTML;
    let decNum = previosNumber + ".";
    document.getElementById("display").innerHTML = decNum 
}

function fEr(){
    previosNumber = document.getElementById("display").innerHTML;
    erasedPre = previosNumber.slice(0, -1);
    document.getElementById("display").innerHTML = erasedPre
}

function fPlu(){
    firstNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    option = 1
}
function fMin(){
    firstNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    option = 2
}
function fMul(){
    firstNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    option = 3
}
function fDvi(){
    firstNumber = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    option = 4
}

function fEqu(){
    secondNumber = document.getElementById("display").innerHTML;
    if(option == 1){
        previosNumber =  parseFloat(firstNumber) + parseFloat(secondNumber)
        document.getElementById("display").innerHTML = previosNumber
    }
    else if(option == 2){
        previosNumber =  parseFloat(firstNumber) - parseFloat(secondNumber)
        document.getElementById("display").innerHTML = previosNumber
    }
    else if(option == 3){
        previosNumber =  parseFloat(firstNumber) * parseFloat(secondNumber)
        document.getElementById("display").innerHTML = previosNumber
    }
    else if(option == 4){
        previosNumber =  parseFloat(firstNumber) / parseFloat(secondNumber)
        document.getElementById("display").innerHTML = previosNumber
    }
    else{
        document.getElementById("display").innerHTML = ""
    }
}

function fAc(){
    op = null;
    previosNumber = null; 
    firstNumber = null;
    secondNumber = null;
    document.getElementById("display").innerHTML = null
}

