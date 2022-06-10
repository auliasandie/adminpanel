import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const setdatatopic = (payload) =>{
    return {type: 'SET_FORM_DATA',payload}
}


export const SimpanToApi = (data) => {
    return (dispatch) => {
        axios.post('http://192.168.10.170:4008/api/v1/config/crawling', data)
        .then(res => {
          console.log(res)
          MySwal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
          MySwal.fire({
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 1500
          })
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

export const getdetailbyid = (id) => {
  return (dispatch) => {
    axios.get(`http://192.168.10.170:4008/api/v1/config/crawling/${id}`)
    .then(res => {
      dispatch({type: 'GET_DATA_BY_ID',payload: res.data.data});

      // console.log(res.data.data,"data detail")
    })
    .catch(err => {
      console.log(err)
    })
}
}