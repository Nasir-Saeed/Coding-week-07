//************************************************************ */
// TASK NO 1 :

let firstDate = new Date();
let firstHour = firstDate.getHours();
let firstMin = firstDate.getMinutes();
let firstSec = firstDate.getSeconds();
let arrOne = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

document.getElementById("task01").innerHTML = `
        Today is : ${arrOne[firstDate.getDay()]} <br> <br> Current time is : ${firstHour >= 12 ? firstHour - 12 : firstHour} ${firstHour >= 12 ? "PM" : "AM"} : ${firstMin} : ${firstSec} <hr>`;
document.getElementById("task01").style.color = "blue";


//************************************************************ */
// TASK NO 2 :

let secDate = firstDate.getDate();
let secMon = firstDate.getMonth();
let secYear = firstDate.getFullYear();

if (secDate < 09) {
    secDate = "0" + secDate;
}
else if (secMon < 10) {
    secMon = secMon + 1;

}
document.getElementById("task02").innerHTML = `<strong style="color:Black;"><u> Output:</u></strong> ${secMon} - ${secDate} - ${secYear} , ${secMon} / ${secDate} / ${secYear}&nbsp Or &nbsp${secDate} - ${secMon} - ${secYear} , ${secDate} / ${secMon} / ${secYear}<hr>`;
document.getElementById("task02").style.color = "blue";


//************************************************************ */
// TASK NO 3 :

document.querySelector(".bt3").addEventListener("click", () => {
    let a = document.getElementById("ns1").value
    let b = document.getElementById("ns2").value
    let c = document.getElementById("ns3").value
    let s = (Number(a) + Number(b) + Number(c)) / 2;
    document.getElementById("area").innerHTML = `<p style="color:blue;">The Area of Given Triangle With Sides ${a}, ${b} and ${c} is ${Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)}</p>`
})

//************************************************************ */
// TASK NO 4 :

document.querySelector(".wordbtn").addEventListener("click", () => {
    let word = document.getElementById("word1").value
    let arr = word.split("");
    setInterval(() => {
        let last = arr.pop();
        arr.unshift(last);
        console.log(arr);
        document.getElementById("rotate").innerHTML = arr.join("");
        document.getElementById("rotate").style.color = "blue";
    }, 1000)
});


//************************************************************ */
// TASK NO 5 :
const year = document.querySelector("#years");
const result = document.querySelector("#result");
document.querySelector(".btn1").addEventListener("click", () => {
    if (year.value % 4 === 0) {
        result.innerHTML = `<strong style="color:Blue;"> ${year.value} is leap year in the Gregorian calendar</strong> `;
    }
    else {

        result.innerHTML = `<strong style="color:Blue;"> ${year.value} is not leap year in the Gregorian calendar</strong> `;
    }
});


//************************************************************ */
// Task N0 6
function myyear() {
    let y1 = document.getElementById("jan1").value
    let y2 = document.getElementById("jan2").value
    let y3 = "";
    for (let i = y1; i <= y2; i++) {
        let d = new Date(i, 0, 1);
        if (d.getDay() === 0) {
            y3 += '<p>' + `1st January is being a Sunday &nbsp` + i + '</p>';
        }
        else if (y3 === '') {
            document.getElementById("task06").innerHTML = `<p>No Year Exist</p>`;
            document.getElementById("task06").style.color = "blue";


        }
        else {
            document.getElementById("task06").innerHTML = `<p style="color:Black;"> Year having 
                    Sunday on 1st January are :${y3}</p>`;
        }
    }
}


//************************************************************ */
// Task N0 7
function randomNum() {
    let num1 = document.getElementById("num").value
    let num2 = Math.ceil(Math.random() * 10);
    if (num1 == num2) {
        document.getElementById("task07").innerHTML = `<span style="color:Blue;">Guess No ${num1}
                     Match Random No ${num2}</span> <br> <i style="color:green;"> Good Work. </i>`;
    }
    else {
        document.getElementById("task07").innerHTML = `<p style="color:red;">Guess No ${num1}
                     Did Not Match Random No ${num2}.</p>`;

    }

}

//************************************************************ */
// Task N0 8
function confirmDay() {
    let dateAug = document.getElementById("dateAug").value

    let todo = new Date();
    let todoOne = todo.getFullYear();
    todoOne = todoOne + 1;

    let ndate = new Date(`08-14-${todoOne}`);
    console.log(ndate)
    let oneDay = 1000 * 60 * 60 * 24;

    let remainingDay = Math.ceil((ndate.getTime() - todo.getTime()) / (oneDay));
    document.getElementById("task08").innerHTML = `<p style="color:Blue;">There are ${remainingDay} Days Left Until 14 August 2022</p>
            `;
}

//************************************************************ */
// Task N0 9
function Tables() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let oper = document.getElementById("operator").value

    if (oper === '*') {
        document.getElementById("task09").innerHTML = `<p style="color:Blue;"> The Multiply of ${n1} and ${n2} is ${Number(n1) * Number(n2)}</p>`;
    }

    else if (oper === '/') {
        document.getElementById("task09").innerHTML = `<p style="color:Blue;"> The Division of ${n1} and ${n2} is ${(Number(n1) / Number(n2)).toFixed(2)}</p>`;
    }
    else if (oper === 'select') {
        document.getElementById("task09").innerHTML = `<p style="color:Red;">Please Enter Any Number</p>`;
    }
    else {
        document.getElementById("task09").innerHTML = `<p style="color:Red;">Value Does Not Exist</p>`
    }
}
//************************************************************ */
// Task N0 10
function checkTem() {
    let temp = document.getElementById("temp1").value
    let operator = document.getElementById("temperature").value
    let c1 = (temp * 9) / 5 + 32;
    let f1 = (temp - 32) * 5 / 9;
    if (operator === 'f') {
        document.getElementById("task10").innerHTML = `<p style="color:Blue;">The Given Temprature ${temp} is Equal to ${f1}°F</p>`
    }
    else if (operator === 'c') {
        document.getElementById("task10").innerHTML = `<p style="color:Blue;">The Given Temprature ${temp} is Equal to ${c1}°C</p>`
            ;
    }
    else if (operator === 'select') {
        document.getElementById("task10").innerHTML = `<p style="color:red;">Please Enter Any Number for Check Temperature</p>`;
    }
    else {
        document.getElementById("task10").innerHTML = `<p style="color:red;">Value Does Not Exist</p>`;

    }

}

//************************************************************ */
// Task N0 11
function AddTwo() {
    let add1 = document.getElementById("add1").value
    let add2 = document.getElementById("add2").value

    if (add1 == add2) {
        document.getElementById("task11").innerHTML = `<p style="color:blue;"> The sum of two same number is ${(3 * (Number(add1) + Number(add2)))} </p>`;
    }
    else {
        document.getElementById("task11").innerHTML = `<p style="color:blue;"> The sum of two Different number is ${(Number(add1) + Number(add2))} </p>`


    }

}
//************************************************************ */
// Task N0 12
function valCheck() {
    let val1 = document.getElementById("val1").value
    if ((Math.abs(100 - val1) <= 20) || (Math.abs(400 - val1) <= 20)) {
        document.getElementById("task12").innerHTML = `<p style="color:blue;">The Entered No ${val1} is Within The 20 of 100
                </p>`
    }

    else {
        document.getElementById("task12").innerHTML = `<p style="color:red;">The Entered No ${val1} is Not Within The 20 of 100 or 400</p>`;
    }
}

//************************************************************ */
// Task N0 13
function gradCheck() {
    let inp1 = document.getElementById("inp1").value
    let inp2 = document.getElementById("inp2").value
    let inp3 = document.getElementById("inp3").value

    if ((inp1 == inp2 && inp1 == inp3)) {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">All inputs are Same no Greater number</p>`;
    }

    else if ((inp2 == inp1 && inp2 == inp3)) {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">All inputs are Same no Greater number</p>`;
    }
    else if ((inp3 == inp2 && inp3 == inp1)) {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">All inputs are Same no Greater number</p>`;
    }

    else if (Number(inp1) == '') {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">Please Entered Number in First Box</p>`;
    } else if (Number(inp2) == '') {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">Please Entered Number in Second Box</p>`;
    } else if (Number(inp3) == '') {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">Please Entered Number in Third Box</p>`;
    }

    // FOR INPUT NO 1
    else if ((Number(inp1) >= Number(inp2) && Number(inp1) >= Number(inp3))) {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">Input 1 is Greater</p>`;
    }

    // FOR INPUT NO 2
    else if ((Number(inp2) >= Number(inp1) && Number(inp2) >= Number(inp3))) {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">Input 2 is Greater</p>`;
    }

    // FOR INPUT NO 3
    else if ((Number(inp3) >= Number(inp2) && Number(inp3) >= Number(inp1))) {
        document.getElementById("task13").innerHTML = `<p style="color:blue;">Input 3 is Greater</p>`;
    }
    else {
        document.getElementById("task13").innerHTML = `<p style="color:red;">Value Does not Exist</p>`;
    }


}
//************************************************************ */
// Task N0 14 
function checkStr() {
    let st = document.getElementById("str1").value
    document.getElementById("task14").innerHTML = `<span style="color:blue;"> ${st.split(' ')
        .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
        .join(' ')} </span>`;
}

//************************************************************ */
// Task N0 15
function checkDays() {
    let hour = document.getElementById("hour").value
    let hh = (hour * 24);
    let mmin = (hour * 1440);
    let ssec = (hour * 86400);
    let ssecMill = (hour * 86400000);
    if (hour == 1) {
        document.getElementById("task15").innerHTML = `<span style="color:blue;">${hour} day is equal  to ${hh} &nbsp hours &nbsp ${mmin} &nbsp minutes &nbsp ${ssec} &nbsp second &nbsp and &nbsp ${ssecMill} &nbsp milisecond</span>`
    } 
    else if (hour) {
        document.getElementById("task15").innerHTML = `<span style="color:blue;">${hour} day is equal  to ${hh} &nbsp hours &nbsp ${mmin} &nbsp minutes &nbsp ${ssec} &nbsp second &nbsp and &nbsp ${ssecMill} &nbsp milisecond</span>`
    }
    else {
        document.getElementById("task15").innerHTML = ` <span style="color:red;">Entered Number</span>`
    }
}

//************************************************************ */
// Task N0 16
function reverStr() {
    let rev = document.getElementById("reversing").value
    let arri = [];
    for (let irev = rev.length - 1; irev >= 0; irev--) {
        arri.push(rev[irev]);
    }
    document.getElementById("task16").innerHTML = `<span style="color:blue;">The Reversed Array is &nbsp : &nbsp ${arri} </span> `

    setInterval(() => {
        arri
    }, 1000)
}

//************************************************************ */
// Task N0 17
document.querySelector('#task17 form').addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('#task17 input').value.split(',');

    document.querySelector(
        '#task17 #result'
    ).innerHTML = `<h2 style="color:blue;">The Final Array is:  ${input[0] > input[input.length - 1]
        ? new Array(input.length).fill(input[0]).join(' ')
        : input[0] < input[input.length - 1]
            ? new Array(input.length).fill(input[input.length - 1]).join(' ')
            : 'Both Of The Elements Have Same Value'
    } </h2>`;
});




//************************************************************ */
// Task N0 18

document.querySelector('#task18 form').addEventListener('submit', (e) => {
    e.preventDefault();

    const input1 = document
        .querySelector('#task18 .input1')
        .value.split(',')
        .sort((a, b) => b - a);
    const input2 = document.querySelector('#task18 .input2').value;

    document.querySelector('#task18 #result1').innerHTML = `<h2 style="color:blue;"> ${input1[parseInt(input2) - 1]
        } </h2>`;
});



//************************************************************ */
// Task N0 19

document.querySelector('#task19 form').addEventListener('submit', (e) => {
    e.preventDefault();

    const memo = {};

    document
        .querySelector('#task19 input')
        .value.split(',')
        .forEach((el) => {
            memo[el] !== undefined ? memo[el]++ : (memo[el] = 1);
        });

    document.querySelector(
        '#task19 #result2'
    ).innerHTML = `<h2 style="color:blue;">The Most Appearing No is: ${Object.keys(memo).sort((a, b) => memo[b] - memo[a])[0]
    } </h2>`;
});

//************************************************************ */
// Task 20
document.querySelector(".btny").addEventListener("click", () => {
    let anum1 = document.getElementById("anum1").value.split(',');
    let anum2 = document.getElementById("anum2").value
    let anum3 = document.getElementById("anum3").value


    for (let v = 0; v < anum1.length; v++) {
        if (anum1[v] == anum2) {
            anum1[v] = anum3;
            document.getElementById("task200").innerHTML = `<p style="color:blue;">Replaced all occurances of '${anum2}' from Array with '${anum3}' and the result is: ${anum1}</p>`
        }
        else {
            document.getElementById("task200").innerHTML = `<p style="color:red;">Value Does not Exit</p>`
        }

    }

});
