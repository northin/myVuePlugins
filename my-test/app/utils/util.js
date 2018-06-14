import reg from "./reg.js"
Array.prototype.removeIndex = function(num){
    let pos = this.indexOf(num)
    return this.splice(pos,1)
}


export const valide =  {
        phone:function(str){
            return reg.phone.key.test(str)?null:reg.phone.message
        }
    
}