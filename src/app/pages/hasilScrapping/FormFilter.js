import React from 'react'
import DatePickerr from '../Componen/DatePicker'
// import './form-filter.scss'

const FormFilter = () => {
  return (
    <div>
      <form action='' className='form-filter'>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Topik
          </label>
          <input type='text' className='form-control input-filter' />
        </div>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Keywords
          </label>
          <input type='text' className='form-control input-filter' />
        </div>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Hashtags
          </label>
          <input type='text' className='form-control input-filter' />
        </div>
        <div className='input-section p-5'>
          <label htmlFor='' className='name'>
            Sumber
          </label>
          <select name='' id='' className='form-select form-slct'>
            <option value='draft'>CNN</option>
            <option value='draft'>Antara</option>
            <option value='draft'>Detik</option>
            <option value='draft'>Kompas</option>
            <option value='draft'>Twitter</option>
            <option value='draft'>Semua</option>
          </select>
        </div>

        <div className='input-section p-5'>
          
          <label htmlFor='' className='name'>
            Waktu
          </label>
          <DatePickerr />



        </div>
        <div className='btn-filter'>
          <button className='btn btn-success m-2'>Simpan</button>
          <button className='btn btn-danger m-2'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default FormFilter
