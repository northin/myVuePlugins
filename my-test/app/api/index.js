import axios from 'axios'
//BASE_URL是默认的url地址，如果你安装了webpack，可以在webpack配置全局变量
// axios.defaults.baseURL = BASE_URL;
/*
如果没有安装webpack，就使用下面这种写法

*/
axios.defaults.baseURL = "http://127.0.0.1:3000"
const getData = (url, param) => {
    return (
        immutable.fromJS(axios.get(`${url}`) || {})
    )
}

const postData = (url, param) => {
    return (
        immutable.fromJS(axios.post(`${url}`, param) || {})
    )
}

class API{
    async UserQueryAll(){
        try {
            let response = await postData(`/cat`)
            return response
        } catch (error) {
            console.log('error: ', error)
        }
    }
}

export default new API()
