export default class Runner {
    constructor(){
        this._position=1;
        this._moves=0;
    }
    move(dice){
        if(dice%2==0){
            this._position+=2;
        }
        else if(dice%3==0){
            this._position+=1;
        }
        else{
            this._position+=3;
        }
        this._moves++;        
    }
}