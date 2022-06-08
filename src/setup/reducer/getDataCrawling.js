const initialState = {
    data: []
}

export const getDataCrawling = (state = initialState, action) => {
    if(action.type === 'GET_DATA_CRAWLING') {
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}