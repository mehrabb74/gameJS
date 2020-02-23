let group1 = ["sima", "rahim","arman","ali"];
let group2 = ["saman", "taha", "mohsen" , "danial"];
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
}

//second round
group1 = arrayRemove(group1,player1Round1);
group2 = arrayRemove(group2, player2Round1);

console.log("ready for second round: \n" + group1 +"|"+ group2);
let player1Round2 = group1[rSelect(3)];
let player2Round2 = group2[rSelect(3)];
console.log("second round:\n" +'------' +player1Round2+" VS "+player2Round2 +'------');

//round3

group1 = arrayRemove(group1,player1Round2);
group2 = arrayRemove(group2, player2Round2);

console.log("ready for third round: \n" + group1 +"|"+ group2);
let player1Round3 = group1[rSelect(2)];
let player2Round3 = group2[rSelect(2)];
console.log("third round:\n" +'------' +player1Round3+" VS "+player2Round3 +'------');

//round4
console.log("***********FINAL ROUND***********");

group1 = arrayRemove(group1, player1Round3);
group2 = arrayRemove(group2, player2Round3);
console.log(group1+ " VS "+ group2);
let winner = group1.concat(group2);
console.log(winner[rSelect(2)])
