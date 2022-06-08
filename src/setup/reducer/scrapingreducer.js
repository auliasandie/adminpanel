const initialState = {
    form:{
        topic: '',
        keywords: [],
        hastags: [],
        status: 'draft',
    }
}

const createTopicReducer = (state = initialState, action) => {
    if(action.type === 'SET_FORM_DATA'){
        return{
            ...state,
            form: {
                ...state.form,
                form: action.payload

            }
        }
    }
    return state;
}

export default createTopicReducer;