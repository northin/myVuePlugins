//action生成函数
// export const userLogin = actionFactory(LOGIN,"data")
// export function userLogin(data){
//     return {type:LOGIN,data}
// }
export function actionFactory(type,...argNames){
    return function(...args){
        let action = { type }
        argNames.forEach((element,index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
}
