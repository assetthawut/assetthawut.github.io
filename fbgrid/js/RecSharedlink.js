/*
    size 1200*628 px 
*/

class RecSharedlink{

    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        // this.w = w;
        // this.h = h;
        this.w = 600;
        this.h = 312;        
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
    }

    show(px,py){
        if (this.dragging) {
            this.x = px + this.offsetX;
            this.y = py + this.offsetY;
        }
        stroke(255);
        noFill();
        rect(this.x, this.y, this.w, this.h); // top left 

    }
    // press
    pressed(px,py){
        if (px > this.x && px < this.x + (this.w*2) && py > this.y && py < this.y + (this.h*2)) {
            this.dragging = true;
            this.offsetX = this.x - px;
            this.offsetY = this.y - py;
        }
    }
    // notpress
    notPressed(px,py){
        this.dragging = false;
    }

    getCurrentPoistion(){
        return [this.x ,this.y]
    }


    downloadCropping(){
        let x = this.x;
        let y = this.y;
        let crop = photo.get(x,y,600,312);
        let imgName = getImageName();
        crop.save(imgName+'_1', 'png');
    }
}
