

const initialState = {
    data: [],
    id: null, 
    idEdit: null,
    hastags: [],
    keywords: [],
    last_crawled: null,
    topic: '',
    status: '',
    dataDetail: []
    
}

export const getDataTopic = (state = initialState, action) => {
    if (action.type === 'GET_DATA_TOPIC') {
        return {
            ...state,
            data: action.payload
        }
    }
    if (action.type === 'GET_ID_TO_DELETE') {
        return {
            ...state,
            id: action.payload
        }
    }
    if (action.type === 'SET_ID_EDIT') {
        return {
            ...state,
                idEdit: action.payload.id,
        }
    }
    if (action.type === 'SET_TOPIC_EDIT') {
        return {
            ...state,
                idEdit: action.payload.id,
        }
    }
    if (action.type === 'SET_HASTAGS_EDIT') {
        return {
            ...state,
                idEdit: action.payload.id,
        }
    }
    if (action.type === 'SET_KEYWORDS_EDIT') {
        return {
            ...state,
                idEdit: action.payload.id,
        }
    }
    if (action.type === 'SET_STATUS_EDIT') {
        return {
            ...state,
                idEdit: action.payload.id,
        }
    }
    if (action.type === 'SET_DATA_DETAIL') {
        return {
            ...state,
                dataDetail: action.payload
        }
    }
    return state
}