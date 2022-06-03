import React, { FC } from 'react'
import InputTags3 from './InputTags3'
import "./component.scss"



const Modal = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
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
                <form action="" className='form-control' onSubmit={handleSubmit}>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Topik</label>
                    <input type="text" className="input topik-field" />
                  </div>
                  <div className="input-section p-5 ">
                    <label htmlFor="" className="name" >Keywords</label>
                    <InputTags3 placeholder="Input Keywords"  />
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name">Hashtags</label>
                    <InputTags3 placeholder="Input Hastags" />
                  </div>
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Status</label>
                    <select name="" id="" className='form-select'>
                      <option value="draft">Draft</option>
                      <option value="draft">Aktif</option>
                      <option value="draft">Non Aktif</option>
                    </select>
                  </div>
                  <div className="btn-sections">
                    <button className='btn btn-success m-2'>Simpan</button>
                    <button className='btn btn-danger m-2' onClick={() => props.setShow(false)}>Batal</button>
                  </div>
                </form>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Modal