let exponent = 0

function increase() {
    exponent+=1
    document.getElementById("number").innerHTML='2<sup>'+exponent+'</sup>'
    document.getElementById("equals").innerHTML='='+2**exponent
}