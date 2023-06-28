let base = 2
let exponent = 0
let exponentials = 0
let increase_per_click = 1
let tetrationals = 0

function increase() {
    exponent+=1
    document.getElementById("number").innerHTML=base+'<sup>'+exponent+'</sup>'
    document.getElementById("equals").innerHTML='='+base**exponent
}

function tetrate(params) {
    
}