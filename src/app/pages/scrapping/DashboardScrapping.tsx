/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import Modal from '../Componen/Modal'
import { TablesScraping } from '../Componen/TableScraping'
import TableShow from '../Componen/TableShow'








const DashboardScraping: FC = () => {
  const intl = useIntl()
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [dataConfiguration, setDataConfiguration] = useState([])
  

  useEffect(() => {
    axios.get('http://192.168.10.170:4008/api/v1/config/crawling?limit=10&page=1')
    .then(res => {
      console.log(res.data.data.result, 'result')
      setDataConfiguration(res.data.data.result)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  
  

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Management Topik'})}</PageTitle>
      {/* <DashboardTwitterpage /> */}

      <div>
        <div className='bg-white rounded'>
          <div>
            <div className='pt-4 p-lg-5'>
            <Modal show={show} setShow={setShow}  />
            <button className='btn btn-primary' onClick={() => setShow(true)}>Tambah</button>
            </div>

            <div className='search-section'>
              <h4>
                Search: 
              </h4>
              <input type="text" className='search-field' />
            </div>

            <div className='my-5 p-5 '>
              <TableShow data={dataConfiguration} />
              <TablesScraping data={dataConfiguration} className='mb-5 mb-xl-8' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {DashboardScraping}
