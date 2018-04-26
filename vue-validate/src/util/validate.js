import validateObj from './validateObj'
let myValidate = {}

myValidate.install = function(Vue,options){
    Vue.prototype.$validate = function(){

    }

    Vue.directive("validate",{
        bind(el,binding,vnode,oldVnode){
            // console.log(el)
            // console.log(binding)
            // console.log(vuer.context)
            // vnode.context[binding.value.key] = el.value
            let a = new validateObj(el.value,binding.value.rules,vnode)
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
            vnode.context[binding.value.key] = el.value
            let a = new validateObj(el.value,binding.value.rules,vnode)
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