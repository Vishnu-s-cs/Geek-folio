import axios from 'axios'

const instance=axios.create({
    baseURL:'https://api.traverze.ml',
    withCredentials:true
})
export default instance;