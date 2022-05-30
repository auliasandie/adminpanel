import React from 'react'
import DatePickerr from '../Componen/DatePicker'
// import './form-filter.scss'

const FormFilter = () => {
  return (
    <div>
      <h3 className='text-start m-5 p-5'>Filter</h3>
      <form action='' className='form-filter col-md-8' onSubmit={(e) => e.preventDefault()}>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Topik
          </label>
          <input type='text' className='input' />
        </div>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Keywords
          </label>
          <input type='text' className='input' />
        </div>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Hashtags
          </label>
          <input type='text' className='input' />
        </div>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Sumber
          </label>
          <select name='' id=''>
            <option value='draft'>CNN</option>
            <option value='draft'>Antara</option>
            <option value='draft'>Detik</option>
            <option value='draft'>Kompas</option>
            <option value='draft'>Twitter</option>
          </select>
        </div>

        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Waktu
          </label>
          <DatePickerr />
        </div>
        <div className='btn-section'>
          <button className='btn btn-warning m-2'>Simpan</button>
          <button className='btn btn-success m-2'>Batal</button>
        </div>
      </form>
    </div>
  )
}

export default FormFilter
