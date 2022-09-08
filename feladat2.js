let tomb = [];

let eletkor = () => Math.floor(Math.random()*20);

for(let i =0; i<20;i++){
tomb.push({nev:`cirmos ${i}`,eletkor: eletkor()});
}
for(let i =0; i<20; i++){
    if(tomb[i].eletkor == 2)
    {
        console.log(tomb[i]);
    }
}