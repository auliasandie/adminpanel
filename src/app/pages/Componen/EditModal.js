import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendEditData } from '../../../setup/action/topicReducer'
import InputTags3 from './InputTags3'

const EditModal = (props) => {
  const dispatch = useDispatch()
  // const {dataToEdit} = useSelector((state) => state.getDataTopic)
  // const {topic, hastags,keywords, status, setHastags, setKeywords, setTopic, setStatus, id} = props
  // const [Topic, setNewTopic] = useState('')
  // const [newStatus, setNewStatus] = useState([])
  // const [newKeywords, setNewKeywords] = useState([])
  // const [newHastags, setNewHastags] = useState('')
  // setNewTopic(dataToEdit[0].topic)
  // setNewKeywords(dataToEdit[0].keywords)
  // setNewHastags(dataToEdit[0].hastags)
  // setNewStatus(dataToEdit[0].status)

  // console.log(dataToEdit, 'datao'


 

  const handleSubmit = () => {
    // console.log(newTopic)
    // console.log(hastags)
    // console.log(keywords)
    // console.log(status)
    console.log(props)

    const data ={
      topic: props.topic,
      hastags: props.hastags,
      keywords: props.keywords,
      status: props.status,
    }
    // console.log(data, 'lawhdlh')


   dispatch(sendEditData(data, props.id))
   props.setShow(false)
  
    
  }
  return (
    <div>
         <div>
         <div className={`${props.show ? 'modal-box open' : 'modal-box'}`} >
         <div className='bg' onClick={() => props.setShow()}></div>
        <div className='box'>

            <h3>Search Topik</h3>

            <div className="container">
              <div className="box col-md-12 p-5 bg-white">
                <div>
                  
                  <h1>Edit Topik</h1>
                  {/* <i className="bi bi-x-circle close-icon" onClick={() => props.setShow(false)}></i> */}
                </div>
                <div action="" className='form-control' style={{border: 'transparent'}} >
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Topic</label>
                    <input type="text" className="input topik-field" onChange={(e) => props.setTopic(e.target.value)} value={props.topic} />
                  </div>
                  <div className="input-section p-5 ">
                    <label htmlFor="" className="name" >Keywords</label>
                   {
                     props.keywords === '' || undefined ? (
                      <InputTags3 placeholder="Input Keywords"
                      items={[]}  
                      />
                     ) : (
                      <InputTags3 placeholder="Input Keywords"
                      items={props.keywords}
                      setItems={props.setKeywords}  
                      />
                     )
                   }
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name">Hashtags</label>
                    {
                     props.hastags === '' ||  undefined ? (
                      <InputTags3 placeholder="Input Keywords"
                      items={[]}  
                      />
                     ) : (
                      <InputTags3 placeholder="Input Keywords"
                      items={props.hastags} 
                      setItems={props.setHastags} 
                      />
                     )
                   }
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Status</label>
                    <select name="" id="" className='form-select' value={props.status} onChange={(e) => props.setStatus(e.target.value)} >
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
    </div>
  )
}

export default EditModal