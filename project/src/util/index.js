Array.prototype.indexOf = function(val){
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if(val == element){
            return i
        }
    }
    return -1
}

Array.prototype.remove = function(val){
    let pos = this.indexOf(val)
    if (index > -1) {
        this.splice(pos,1)
    }
    
}