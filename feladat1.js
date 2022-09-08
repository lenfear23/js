let tomb = [];
for(let i =0; i<10;i++){
    tomb.push(Math.random()*100);
    console.log(tomb[i]);
}
console.log("----------")
tomb = tomb.sort();
for(let i =0; i<10;i++){
    console.log(tomb[i]);
}
