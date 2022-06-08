import React from 'react'

const EditModal = (props) => {
  const {topic, hastags,keywords, status} = props.data

  const handleSubmit = () => {
    
  }
  return (
    <div>
         <div>
      <div className={`${props.show ? 'modal-box open' : 'modal-box'}`} >
         <div className='bg' onClick={() => props.setShow()}></div>
        <div className='box'>

            <h3>Edit Topik</h3>

            <div className="container">
              <div className="box col-md-12 p-5 bg-white">
                <div>
                  
                  <h1>Tambah Topik</h1>
                  {/* <i className="bi bi-x-circle close-icon" onClick={() => props.setShow(false)}></i> */}
                </div>
                <div action="" className='form-control'  >
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Topik</label>
                    <input type="text" value={topic} className="input topik-field" required />
                  </div>
                 
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Keywords</label>
                    <input type="text" value={keywords} className="input topik-field" required />
                  </div>
                 
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Hastags</label>
                    <input type="text" value={hastags} className="input topik-field" required />
                  </div>
                 
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Status</label>
                    <input type="text" value={status} className="input topik-field" required />
                  </div>
                 
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Last Update</label>
                    <input type="text" className="input topik-field" required />
                  </div>
                 
                  <div className="input-section p-5">
                    <label htmlFor="" className="name py-2">Jumlah Laman</label>
                    <input type="text" className="input topik-field" required />
                  </div>
                 
                 
                  <div className="btn-sections">
                    <button className='btn btn-success m-2' onClick={() => handleSubmit()} >Simpan</button>
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