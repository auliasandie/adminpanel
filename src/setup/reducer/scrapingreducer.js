const initialState = {
    form:{
        topic: '',
        keywords: [],
        hastags: [],
        status: 'draft',
    },
    datadetail:{}
}

export const createTopicReducer = (state = initialState, action) => {
    if(action.type === 'SET_FORM_DATA'){
        return{
            ...state,
            form: {
                ...state.form,
                form: action.payload

            }
        }
    }
    if(action.type === 'GET_DATA_BY_ID'){
        return{
            ...state.datadetail,
            datadetail: action.payload

        }

    }
    return state;
}
