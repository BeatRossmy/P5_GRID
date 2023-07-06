class Grid {
  constructor(x,y,w,h,raster,interactive) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.width = w*raster;
    this.height = h*raster;
    this.r = raster;
    this.interactive = interactive;
    
    this.data = [
      0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0
    ];
  }
  draw (step) {
    rectMode(CENTER);
    let s = 0.8*this.r;
    let c = 0.1*this.r;

    for (let _x=0; _x<this.w; _x++) {
      for (let _y=0; _y<this.h; _y++) {
        let col = map(this.data[_y*this.w+_x],0,1,130,230);
        if (_x==(step%this.w)) col = col+25;
        fill(col);
        rect(this.x+(_x+0.5)*this.r,this.y+(_y+0.5)*this.r,s,s,c);
      }
    }
  }
  toggle (mx,my) {
    if (!this.interactive) return;
    
    let s = 0.8*this.r;
    let c = 0.1*this.r;

    mx = int((mx-this.x)/this.r);
    my = int((my-this.y)/this.r);

    if (mx>=0 && mx<this.w && my>=0 && my<this.h) {
      this.data[mx+my*this.w] = (this.data[mx+my*this.w]==0)?1:0;
      this.onToggle(mx,my,this.data[mx+my*this.w]);
    }
  }

  onToggle (x,y,s) {
    // OVERWRITE  
  }
}

print("hello world")
