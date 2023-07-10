let base = 2
let exponent = 0
let exponentials = 0
let increase_per_click = 1
let tetrationals = 0

function increase() {
    exponent += increase_per_click
}

function get_expos() {
    exponentials += Math.min(Math.round(Math.log10(base ** exponent)), 308)
    exponent = 0
}

function tetrate() {
    if (base ** exponent == Infinity) {
        base += 1
        exponent = 0
        exponentials = 0
        increase_per_click = 1
        tetrationals += 1
    }
}

function update() {
    document.getElementById("number").innerHTML = base + '<sup>' + exponent + '</sup>'
    document.getElementById("equals").innerHTML = '=' + base ** exponent
    document.getElementById("exponentials").innerHTML = 'You have ' + exponentials + ' exponentials.'
    document.getElementById("tetrationals").innerHTML = 'You have ' + tetrationals + ' tetrationals.'
}

setInterval(() => {
    update()
}, 50);