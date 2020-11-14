/*
    size 1200*1200 px
*/

class SquareAlbumVerticalCover{

    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        // this.w = w;
        // this.h = h;
        this.w = 400;
        this.h = 600;
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
        rect(this.x, this.y, this.w, this.h); // top
        rect(this.x + 400, this.y, 200, 200); // right top    
        rect(this.x + 400, this.y + 200, 200, 200); // right middle
        rect(this.x + 400, this.y + 200 + 200, 200, 200); // right bottom         

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
        let imgName = getImageName();
        let crop = photo.get(x,y,400,600);
        crop.save(imgName+'_1', 'png');
        crop = photo.get(x + 400,y,200,200);
        crop.save(imgName+'_2', 'png');
        crop = photo.get(x + 400,y + 200,200,200);
        crop.save(imgName+'_3', 'png');
        crop = photo.get(x + 400,y + 200+200,200,200);
        crop.save(imgName+'_4', 'png');
    }
}