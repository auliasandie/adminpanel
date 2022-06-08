

const initialState = {
    data: [],
    id: null
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
    return state
}