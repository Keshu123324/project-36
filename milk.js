class milk{
    constructor(){

        this.foodStock = 0;
        this.lastFeed;
        this.image = loadImage("images/Milk.png")

    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;

    }

    getFeedTime(){
        this.lastFeed = lastFeed;

    }

    getFoodStock(){
        return this.foodStock;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1;
        }
    }
    display(){

        var x= 100,y=110;

      imageMode(CENTER);
     // image(this.image,x,y,60,60);

      if(foodStock!=0){
        for(var i = 0;i<this.foodStock;i++){
            if(i%10==0){
                x= 100;
                y=y+50;
            }
        image(this.image,x,y,50,50);
        x= x+30;

        }
      }
    }
}