function Zone(point, radius){
    this.point = point;
    this.radius = radius;
    this.from = this.point - this.radius;
    this.to = this.point + this.radius;

    this.active = function(pct){
        return ((this.from >= pct) && (this.to <= pct));
    }
}