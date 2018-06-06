Array.prototype.removeIndex = function(num){
    let pos = this.indexOf(num)
    return this.splice(pos,1)
}