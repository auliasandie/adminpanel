import axios from "axios"


export const getAllTopic = () => {
    return (dispatch) => {
        axios.get('http://192.168.10.170:4008/api/v1/config/crawling?limit=10&page=1')
        .then(res => {
            dispatch({ type: 'GET_DATA_TOPIC', payload: res.data.data.result})
        })
        .catch(err => console.log(err, 'error'))
    }
}