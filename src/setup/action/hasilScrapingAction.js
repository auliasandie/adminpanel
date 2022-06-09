import axios from "axios"


export const getDataHasilCrawling = () => {
    return (dispatch) => {
        axios.post('http://192.168.10.170:4009/api/v1/content/searchcontent')
        .then(res => {
            // console.log(res.data.data)
            dispatch({type: 'GET_DATA_CRAWLING', payload: res.data.data})
        })
        .catch(err => console.log(err))
    }
}