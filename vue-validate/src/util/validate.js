import validateObj from './validateObj'
let myValidate = {}

myValidate.install = function(Vue,options){
    Vue.prototype.$validate = function(){

    }

    Vue.directive("validate",{
        bind(el,binding,vnode,oldVnode){
            // console.log(el.value)
            // console.log(binding)
            // console.log()
            let a = new validateObj(el.value,binding.value.rules)
            // a.check(12,2)
            // console.log(a)
            if(a.result == true){
                binding.value.success = true
            }else{
                binding.value.success = false
                binding.value.message = a.result;
                // console.log(binding)
            }
        },
        update(el,binding,vnode,oldVnode){
            // console.log(el)
            // console.log(binding)
            let a = new validateObj(el.value,binding.value.rules)
            if(a.result == true){
                binding.value.success = true
            }else{
                binding.value.success = false
                binding.value.message = a.result;
                // console.log(a.result)
            }
            // console.log(binding)
        }
    })
}

export default myValidate;