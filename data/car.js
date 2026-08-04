class Car{
    brand;
    model;
    speed;
    isTrunkOpen;

    constructor(carDetails){
        this.brand=carDetails.brand;
        this.model=carDetails.model;
        this.speed=0
        this.isTrunkOpen=false;
    }

    displayInfo(){
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Trunk open:${this.isTrunkOpen}`);
    }

    go(){
        if(this.speed+5>200){
            console.log('Cant go any faster');
        }else{
            this.speed+=5;
        }

    }
    brake(){
        if(this.speed-5<0){
            console.log('Car cannot go any slower!');
        }else{
            this.speed-=5;
        }
    }
    
    openTrunk(){
        if(this.isTrunkOpen){
            console.log('trunk is already open');
        }else if(this.speed!=0){
            console.log('Cant open trunk on moving car');
        }else{
            this.isTrunkOpen=true;
            console.log('Trunk opened');
        }
    }
    closeTrunk(){
        if(!this.isTrunkOpen){
            console.log('Trunk already closed');
        }else{
            this.isTrunkOpen=false;
            console.log('Trunk closed');
        }
    }

}

class RaceCar extends Car{
    
}
const car1= new Car({
    brand:'Toyota',
    model: 'Corolla'
});
const car2=new Car({
    brand:'Tesla',
    model:'Model 3'
});
car1.displayInfo();
car2.displayInfo();
car1.go();
car2.brake();
car2.openTrunk();
car1.displayInfo();
car2.displayInfo();