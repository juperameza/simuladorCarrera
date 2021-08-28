import Dice from "./dice.js";
import Runner from './runner.js';
let runner1= new Runner();
let runner2=new Runner();
let dice =new Dice();

do {
    let t=dice.throw();
    runner1.move(t);
    console.log(`El corredor 1 esta en ${runner1.position}` );
    t=dice.throw();
    runner2.move(t);
    console.log(`El corredor 2 esta en ${runner2.position}` );
  
    
} while (runner1.position<100 && runner2.position<100);

if(runner1.position>=100&&runner2.position>=100){
    console.log("Fue un empate!")
}
else if(runner1.position>=100){
    console.log("Gano el corredor 1!")
}
else{
    console.log("Gano el corredor 2!")
}