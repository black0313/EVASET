import axios from "axios";
// export  const  BaseUrl = 'http://192.168.50.82:8080/api'
export  const  BaseUrl = 'https://project3-java.herokuapp.com/api'
// https://project3-java.herokuapp.com/swagger-ui/index.html#
export const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== "api/apiCall") {
        next(action)
        return
    }
    next(action)
    const {url, method, data, onSuccess,params, onFail} = action.payload
   axios({
        baseURL: BaseUrl,

        headers:{
            Authorization:`Bearer ${localStorage.getItem('tokenname')}`
        },
        url, method, data,params
    }).then(res => {
         dispatch({
            type: onSuccess,
            payload: res.data
        })
        // console.log(res.data)
    }).catch(err => {
        dispatch({
            type: onFail,
            payload: {...err,success:false}
        })
    })
}
export default api



// axiosInstance.interceptors.request.use((req) => {
//     const {auth} = store.getState();
//     if (auth.token) {
//         req.headers.Authorization = `Bearer ${auth.token}`;
//     }
//     return req;
// })
// axiosInstance.interceptors.response.use((res) => {
//     return res;
// }, (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//         localStorage.clear();
//         store.dispatch({type: authConstants.LOGOUT_SUCCESS})
//     }
//     return Promise.reject(error)
//
// })
