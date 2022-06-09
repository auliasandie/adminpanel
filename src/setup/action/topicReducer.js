import axios from "axios"


export const getAllTopic = () => {
    return (dispatch) => {
        axios.get('http://192.168.10.170:4008/api/v1/config/crawling?limit=9&page=1')
        .then(res => {
            dispatch({ type: 'GET_DATA_TOPIC', payload: res.data.data.result})
        })
        .catch(err => console.log(err, 'error'))
    }
}
export const getIdToDelete = (id) => {
    return (dispatch) => {console.log(id)
        axios.delete(`http://192.168.10.170:4008/api/v1/config/crawling/${id}`)
        .then(res => console.log(res))
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