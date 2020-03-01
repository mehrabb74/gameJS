let group1 = ["deniz", "veron","arma","lion"];
document.getElementById('gp1r1').innerHTML = group1.join(" & ");
let group2 = ["rose", "kitzo", "liakov" , "dowson"];
document.getElementById('gp2r1').innerHTML = group2.join(" & ");
var player1Round1 = group1[Math.floor(Math.random()*4)];
var player2Round1 = group2[Math.floor(Math.random()*4)];
console.log("ready for first round: \n" + group1 +"|"+ group2);
console.log("first round:\n" +'------' +player1Round1+" VS "+player2Round1 +'------');

//function for second round

function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
};

function rSelect(members) {
    return Math.floor(Math.random()*members)
};

//second round
group1 = arrayRemove(group1,player1Round1);
group2 = arrayRemove(group2, player2Round1);

console.log("ready for second round: \n" + group1 +"|"+ group2);
let player1Round2 = group1[rSelect(3)];
let player2Round2 = group2[rSelect(3)];
console.log("second round:\n" +'------' +player1Round2+" VS "+player2Round2 +'------');
//html parts round2
document.getElementById('gp1r2').innerHTML = group1.join(" & ");
document.getElementById('gp2r2').innerHTML = group2.join(" & ");
//round3

group1 = arrayRemove(group1,player1Round2);
group2 = arrayRemove(group2, player2Round2);

console.log("ready for third round: \n" + group1 +"|"+ group2);
let player1Round3 = group1[rSelect(2)];
let player2Round3 = group2[rSelect(2)];
console.log("third round:\n" +'------' +player1Round3+" VS "+player2Round3 +'------');
//html parts round3
document.getElementById('gp1r3').innerHTML = group1.join(" & ");
document.getElementById('gp2r3').innerHTML = group2.join(" & ");

//round4
console.log("***********FINAL ROUND***********");

group1 = arrayRemove(group1, player1Round3);
group2 = arrayRemove(group2, player2Round3);
console.log(group1+ " VS "+ group2);
let winner = group1.concat(group2);
console.log(winner[rSelect(2)]);

//html part final round
document.getElementById('gp1r4').innerHTML = group1.join(" & ");
document.getElementById('gp2r4').innerHTML = group2.join(" & ");

//winner
document.getElementById('finalWinner').innerHTML = winner[rSelect(2)];