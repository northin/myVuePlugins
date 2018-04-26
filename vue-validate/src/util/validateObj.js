import reg from './reg'
class validateObj{
    constructor(value,rules,vuer){
       this.result = this.check(value,rules,vuer)
       this.vuer = vuer
    }

    check(value,rules,vuer){
        let rulesList = rules.split(",")
        let keyList = Object.keys(validateObj.prototype)
        let fristkey = ""
        let secondKey = ""
        
        for (let j = 0; j < rulesList.length; j++) {
            let rule = rulesList[j];
            
            if(rule.indexOf("[")>0){
                let fristPos = rule.indexOf("[")
                let oldRule = rule
                let oldRuleList = oldRule.slice(fristPos).slice(1,-1).split(":")
                
                rule = rule.slice(0,fristPos)
                fristkey = oldRuleList[0]
                secondKey = oldRuleList.length==2?oldRuleList[1]:""

            }
            for (let i = 0; i < keyList.length; i++) {
                const validatRules = keyList[i];
               
                if(rule == validatRules){
                    let result = validateObj.prototype[validatRules](value,fristkey,secondKey,vuer);
                    // this.toString(result)
                    if(result != true){
                        return result
                    }
                }
                
            }
        }

        return true
        
    }
    static getVuer(){
        return this.vuer
    }
    toString(result) {
        return result;
      }
}
validateObj.prototype.add = function(rules,fn){
    validateObj.prototype[rules] = fn  
}

validateObj.prototype.add('require',function(value){
    // console.log(value)
    if(value){
        return true
    }else{
        return "请输入，该项不为空！"
    }
})


let regList = ["user","pass","email","qq","wx","momey","fox","post","id","phone","posI","negI","numI","posF","negF","numF"]

for (let i = 0; i < regList.length; i++) {
    const regKey = regList[i];
    
    validateObj.prototype.add(regKey,function(value){
        // console.log(value)
        if((reg[regKey].key).test(value)){
            return true
        }else{
            return reg[regKey].message
        }
    })
    
}


//len[6] 大于6
//len[0,6] 小于6
//len[3,6] 3到6之间
validateObj.prototype.add('len',function(value,firstKey,secondKey){
    // console.log(firstKey)
    let regValue = secondKey==""?new RegExp("\\d{"+firstKey+"}$"):(firstKey == 0? new RegExp("\\d{"+secondKey+",}$") :new RegExp("^\\d{"+firstKey+","+secondKey+"}$"))
    let data = secondKey==""?!regValue.test(value):regValue.test(value)
   
    if(data){
        return true
    }else{
       let message = secondKey==""?"请输入不超过"+firstKey+"位的字符":( firstKey==0? "请输入至少"+secondKey+"位的字符":"请输入"+firstKey+"到"+secondKey+"位的字符")
       
       return message
    }
})


//equal[pass]  pass是validate的key值
validateObj.prototype.add('equal',function(value,firstKey,secondKey,vuer){
    let childList = vuer.context.$parent.$children
    
    for (let i = 0; i < childList.length; i++) {
        const child = childList[i];
        
        if(child[firstKey] == value){
            return true
        }
        
    }
    return "两次输入不一样"

})

//不能输入中文
validateObj.prototype.add('chinaLanguage',function(value,firstKey,secondKey,vuer){
    if(!reg.chinaLanguage.test(value)){
        return true
    }else{
        return "不能包含中文"
    }

})
//只能中文
validateObj.prototype.add('allChinaLanguage',function(value,firstKey,secondKey,vuer){
    if(reg.allChinaLanguage.test(value)){
        return true
    }else{
        return "只能输入中文"
    }

})


validateObj.prototype.add('not',function(value,firstKey,secondKey,vuer){
    if(value !== firstKey){
        return true
    }else{
        return "不能输入"+firstKey
    }

})

validateObj.prototype.add('more',function(value,firstKey,secondKey,vuer){
    if((+value) > (+firstKey)){
        return true
    }else{
        return "输入不能小于"+firstKey
    }

})

validateObj.prototype.add('less',function(value,firstKey,secondKey,vuer){
    if((+value) < (+firstKey)){
        return true
    }else{
        return "输入不能大于"+firstKey
    }

})


export default validateObj