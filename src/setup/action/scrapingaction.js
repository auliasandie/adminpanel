import axios from "axios"
export const setdatatopic = (payload) =>{
    return {type: 'SET_FORM_DATA',payload}
}


export const SimpanToApi = (data) => {
    return () => {
        axios.post('http://192.168.10.170:4008/api/v1/config/crawling', data)
        .then(res => {
          console.log(res,"wwwww")
        })
        .catch(err => {
          console.log(err,"errorr")
        })

        // Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
        // .then(result => {
        //     // console.log('data API', result.data);
        //     const responseAPI = result.data;

        //     // setDataBlog(responseAPI.data);  === state local yang baru Global use redux
        //     dispatch({type: 'UPDATE_DATA_BLOG',payload: responseAPI.data});
        //     dispatch({type: 'UPDATE_PAGE',payload: {
        //         currentPage: responseAPI.current_Page,
        //         totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_Page)
        //     } })
        // })
        // .catch(err => {
        //     console.log('error:',  err);
        // })
    }
}