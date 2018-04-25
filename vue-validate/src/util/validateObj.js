import reg from './reg'
class validateObj{
    constructor(value,rules){
       this.result = this.check(value,rules)
    }

    check(value,rules){
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
                    let result = validateObj.prototype[validatRules](value,fristkey,secondKey);
                    // this.toString(result)
                    if(result != true){
                        return result
                    }
                }
                
            }
        }

        return true
        
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


let regList = ["user","pass","email","qq","wx","momey","fox","post","id","phone"]

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



export default validateObj