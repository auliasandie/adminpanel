import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const getAllTopic = () => {
    return (dispatch) => {
        axios.get('http://192.168.10.170:4008/api/v1/config/crawling?limit=9&page=1')
        .then(res => {
            dispatch({ type: 'GET_DATA_TOPIC', payload: res.data.data.result})
        })
        .catch(err => console.log(err, 'error'))
    }
}
export const getDataReducer = () => {
    return (dispatch) => {
        axios.get('http://192.168.10.170:4008/api/v1/crawling/data')
        .then(res => console.log(res, 'iniresult'))
        .catch(err => console.log(err, 'iniresult' ))
    }
}
export const getIdToDelete = (id) => {
    return (dispatch) => {
        axios.delete(`http://192.168.10.170:4008/api/v1/config/crawling/${id}`)
        .then(res => {
            console.log(res)
            MySwal.fire({
                icon: 'success',
                title: 'Item deleted',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err => console.log(err))
    }
}
export const idToEdit = (data) => {
    return (dispatch) => {
        dispatch({type: 'ID_TO_EDIT', payload: data})
    }
}
export const topicToEdit = (data) => {
    return (dispatch) => {
        dispatch({type: 'TOPIC_TO_EDIT', payload: data})
    }
}
export const statusToEdit = (data) => {
    return (dispatch) => {
        dispatch({type: 'STATUS_TO_EDIT', payload: data})
    }
}
export const hastagsToEdit = (data) => {
    return (dispatch) => {
        dispatch({type: 'HASTAGS_TO_EDIT', payload: data})
    }
}
export const keywordsToEdit = (data) => {
    return (dispatch) => {
        dispatch({type: 'KEYWORDS_TO_EDIT', payload: data})
    }
}