function Range(from, to){
    this.from = from;
    this.to = to;
    this.range = to - from;

    this.random = function(){
        return Map(Math.random(), 0, 1, this.from, this.to);
    }
}