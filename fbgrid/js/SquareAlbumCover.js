/*
    size 1200*1200 px
*/

class SquareAlbumCover{

    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        // this.w = w;
        // this.h = h;
        this.w = 600;
        this.h = 400;
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
        rect(this.x, this.y + 400, 200, 200); // bottom left 
        rect(this.x + 200, this.y + 400, 200, 200); // bottom middle
        rect(this.x + 200 + 200, this.y + 400, 200, 200); // bottom right

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
        let crop = photo.get(x,y,600,400);
        crop.save(imgName+'_1', 'png');
        crop = photo.get(x,y+400,200,200);
        crop.save(imgName+'_2', 'png');
        crop = photo.get(x+200,y+400,200,200);
        crop.save(imgName+'_3', 'png');
        crop = photo.get(x+200+200,y+400,200,200);
        crop.save(imgName+'_4', 'png');
    }
}