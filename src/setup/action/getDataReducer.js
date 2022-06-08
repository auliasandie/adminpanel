import axios from "axios"


export const getDataReducer = () => {
    return (dispatch) => {
        axios.get('http://192.168.10.170:4008/api/v1/crawling/data')
        .then(res => console.log(res, 'iniresult'))
        .catch(err => console.log(err, 'iniresult' ))
    }
}