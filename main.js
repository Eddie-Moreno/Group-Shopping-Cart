let cost = 0;
let subT = 0;

document.querySelector("#apple").onclick=function() {
    add(Number(document.getElementById("aplCost").innerHTML))
}

document.querySelector("#orange").onclick=function() {
    add(Number(document.getElementById("orangeCost").innerHTML))
}

document.querySelector("#grapes").onclick=function() {
    add(Number(document.getElementById("grapeCost").innerHTML))
}

document.querySelector("#bananas").onclick=function() {
    add(Number(document.getElementById("Bancost").innerHTML))
}

document.querySelector("#avo").onclick=function() {
  add(Number(document.getElementById("avoCost").innerHTML))
}

document.querySelector("#tomato").onclick=function() {
    add(Number(document.getElementById("tomatoCost").innerHTML))
}

document.querySelector("#crn").onclick=function() {
    add(Number(document.getElementById("cornCost").innerHTML))
}

document.querySelector("#carrot").onclick=function() {
    add(Number(document.getElementById("carrotCost").innerHTML))
}



function add(cost) {
    subT += cost
    document.querySelector("#cost").innerHTML = subT
}