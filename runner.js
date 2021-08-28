export default class Runner {
    constructor(){
        this.position=1;
       
    }
    move(dice){
        if(dice%2==0){
           
            this.position+=2;
        }
        else if(dice==3 || dice==5){
            
            this.position++;
        }
        else{
            
            this.position+=3;
        }
            
    }
}