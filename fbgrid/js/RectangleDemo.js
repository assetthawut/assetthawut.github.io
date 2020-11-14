/*
    size 1200*628 px 
*/
class RectangleDemo{

    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
        rect(this.x + this.w, this.y, this.w, this.h); // top right 
        rect(this.x, this.y + this.h, this.w, this.h); // bottom left 
        rect(this.x + this.w, this.y + this.h, this.w, this.h); // bottom right 

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
        let crop = photo.get(x,y,250,250);
        crop.save('p_1', 'png');
        crop = photo.get(x + 250,y,250,250);
        crop.save('p_2', 'png');
        crop = photo.get(x,y+250,250,250);
        crop.save('p_3', 'png');
        crop = photo.get(x+250,y+250,250,250);
        crop.save('p_4', 'png');
    }

}