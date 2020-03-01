/*
let x = require('./players');

let example = ()=> {
    document.getElementById('ttt').innerHTML = x.lion.power;
}

example()
*/
let players = require('./players');
let kitzo = players.kitzo;
document.getElementById('ttt').innerHTML = kitzo.power