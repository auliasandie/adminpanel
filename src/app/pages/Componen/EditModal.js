import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputTags3 from './InputTags3'

const EditModal = (props) => {
  const {topic, hastags,keywords, status, setHastags, setKeywords, setTopic, setStatus, id} = props
  // const [topic, setTopic] = useState('')
  // const [status, setStatus] = useState('')


  const handleSubmit = () => {
    console.log(topic)
    console.log(hastags)
    console.log(keywords)
    console.log(status)

    const data ={
      topic: topic,
      hastags: hastags,
      keywords: keywords,
      status: status,
    }

   
    axios.put(`http://192.168.10.170:4008/api/v1/config/crawling/${id}`, data)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  
    
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
                    <label htmlFor="" className="name py-2">Topik</label>
                    <input type="text" className="input topik-field" onChange={(e) => setTopic(e.target.value)} value={topic} />
                  </div>
                  <div className="input-section p-5 ">
                    <label htmlFor="" className="name" >Keywords</label>
                   {
                     keywords === '' || undefined ? (
                      <InputTags3 placeholder="Input Keywords"
                      items={[]}  
                      />
                     ) : (
                      <InputTags3 placeholder="Input Keywords"
                      items={keywords}
                      setItems={setKeywords}  
                      />
                     )
                   }
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name">Hashtags</label>
                    {
                     hastags === '' ||  undefined ? (
                      <InputTags3 placeholder="Input Keywords"
                      items={[]}  
                      />
                     ) : (
                      <InputTags3 placeholder="Input Keywords"
                      items={hastags} 
                      setItems={setHastags} 
                      />
                     )
                   }
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Status</label>
                    <select name="" id="" className='form-select' value={status} onChange={(e) => setStatus(e.target.value)} >
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