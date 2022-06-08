import React, { FC, useState } from 'react'
import InputTags3 from './InputTags3'
import "./component.scss"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { SimpanToApi } from '../../../setup/action/scrapingaction';



const Modal = (props) => {
  const [topik, setTopik] = useState('')
  const [dataKeyword, setDataKeyword] = useState([])
  const [dataHastags, setDataHastags] = useState([])
  const [status, setStatus] = useState('draft')
  const [submit, setSubmit] = useState(false)
  const dispatch = useDispatch();
  // const {form} = useSelector(state => state.createTopicReducer);
  

  const handleSubmit = (e) => {
    e.preventDefault()

    const datapost = {
      topic: topik,
      keywords: dataKeyword,
      hastags: dataHastags,
      status: status,
    }
    // dispatch(postDataTopic(datapost));
    dispatch(SimpanToApi(datapost));
    // console.log('data',datapost)
   
        // axios.post('http://192.168.10.170:4008/api/v1/config/crawling', datapost)
        // .then(res => {
        //   console.log(res)
        //   setSubmit(false)
        // })
        // .catch(err => {
        //   console.log(err)
        // })

   

  }

 
  return (
    <div>
      <div className={`${props.show ? 'modal-box open' : 'modal-box'}`} >
         <div className='bg' onClick={() => props.setShow()}></div>
        <div className='box'>

            <h3>Search Topik</h3>

            <div className="container">
              <div className="box col-md-12 p-5 bg-white">
                <div>
                  
                  <h1>Tambah Topik</h1>
                  {/* <i className="bi bi-x-circle close-icon" onClick={() => props.setShow(false)}></i> */}
                </div>
                <div action="" className='form-control' style={{border: 'transparent'}}>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Topik</label>
                    <input type="text" className="input topik-field" required onChange={(e) => setTopik(e.target.value)}/>
                  </div>
                  <div className="input-section p-5 ">
                    <label htmlFor="" className="name" >Keywords</label>
                    <InputTags3 placeholder="Input Keywords" items={dataKeyword} setItems={setDataKeyword} />
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name">Hashtags</label>
                    <InputTags3 placeholder="Input Hastags" items={dataHastags} setItems={setDataHastags}/>
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Status</label>
                    <select name="" id="" className='form-select' required value={status} onChange={(e) => setStatus(e.target.value)}>
                      <option value="Draft">Draft</option>
                      <option value="Aktif">Aktif</option>
                      <option value="Non Aktif">Non Aktif</option>
                    </select>
                  </div>
                  <div className="btn-sections">
                    <button className='btn btn-success m-2'  onClick={handleSubmit}>Simpan</button>
                    <button className='btn btn-danger m-2' onClick={() => props.setShow(false)}>Batal</button>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Modal