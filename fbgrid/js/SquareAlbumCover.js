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
        // stroke(color(0, 0, 255));
        // background(100, 100, 250)
        // tint(0, 153, 204); 
        // blendMode(DARKEST);
        // tint(0, 153, 204, 126);
        strokeWeight(2);
        // rect(20, 20, 60, 60);
        stroke(255);
        noFill();
        // noStroke();
        // fill(250, 100, 100);
        rect(this.x, this.y, this.w, this.h); // top
        // erase();
        rect(this.x + 400, this.y, 200, 200); // right top  
        rect(this.x + 400, this.y + 200, 200, 200); // right middle
        rect(this.x + 400, this.y + 200 + 200, 200, 200); // right bottom
        // var context = drawingContext; // or p5.drawingContext
        //     context.shadowOffsetX = 5;
        //     context.shadowOffsetY = -5;
        //     context.shadowBlur = 1;
        //     context.shadowColor = '#FFF';
        fill(224, 224, 224,100);
        // translate(50, 50);
        stroke(255, 255, 255);
        beginShape();
        // Exterior part of shape, clockwise winding
        vertex(0,0);
        vertex(1000,0);
        vertex(1000,1000);
        vertex(0,1000);
        // Interior part of shape, counter-clockwise winding
        beginContour();
        // vertex(this.x, this.y);
        // vertex(this.x+600, this.y);
        // vertex(this.x+600, this.y+600);
        // vertex(this.x, this.y+600);
        vertex(this.x -2, this.y -2); // top left
        vertex(this.x -2, this.y + 600 + 2); // bottom left
        vertex(this.x + 600+2 , this.y + 600 +2); // bottom right
        vertex(this.x + 600+2, this.y-2); // top right
        endContour();
        endShape(CLOSE);
    }
    // press
    pressed(px,py){
        if (px > this.x && px < this.x + (this.w +200) && py > this.y && py < (this.y + this.h)) {
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

    removeFromCanvas(){
    }


    downloadCropping(){
        let x = this.x;
        let y = this.y;
        this.x = 1000;
        this.y = 1000;
        let imgName = getImageName();
        let crop = photo.get(x,y,400,600);
        crop.save(imgName+'_1', 'png');
        crop = photo.get(x + 400,y,200,200);
        crop.save(imgName+'_2', 'png');
        crop = photo.get(x + 400,y + 200,200,200);
        crop.save(imgName+'_3', 'png');
        crop = photo.get(x + 400,y + 200+200,200,200);
        crop.save(imgName+'_4', 'png');
        this.x = x;
        this.y = y;  
    }

    downloadCroppingCanvas(canvas){
        let x = this.x;
        let y = this.y;
        this.x = 1000;
        this.y = 1000;
        let imgName = getImageName();
        let crop = canvas.get(x,y,400,600);
        crop.save(imgName+'_1', 'png');
        crop = canvas.get(x + 400,y,200,200);
        crop.save(imgName+'_2', 'png');
        crop = canvas.get(x + 400,y + 200,200,200);
        crop.save(imgName+'_3', 'png');
        crop = canvas.get(x + 400,y + 200+200,200,200);
        crop.save(imgName+'_4', 'png');
        this.x = x;
        this.y = y;  
    }    
}