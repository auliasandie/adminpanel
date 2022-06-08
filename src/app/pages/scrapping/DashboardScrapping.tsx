/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTopic } from '../../../setup/action/topicReducer'
import {PageTitle} from '../../../_metronic/layout/core'
import Modal from '../Componen/Modal'
import { TablesScraping } from '../Componen/TableScraping'
import { RootState } from '../../../setup'





const DashboardScraping: FC = () => {
  const intl = useIntl()
  // const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [dataConfiguration, setDataConfiguration] = useState([])
  const dispatch :any = useDispatch()
  const { data } : any = useSelector((state: RootState) => state.getDataTopic)

  useEffect(() => {
    dispatch(getAllTopic())
  }, [])

  // console.log(data, 'data guys')
  
  

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Management Topik'})}</PageTitle>
      {/* <DashboardTwitterpage /> */}

      <div>
        <div className='bg-white rounded'>
          <div>
            <div className='pt-4 p-lg-5'>
              <Modal show={show} setShow={setShow}  />
            </div>

            <div className='search-section'>
              <h4>
                Search: 
              </h4>
              <input type="text" className='search-field' />
            </div>

            <div className='my-5 p-5 '>
              {/* <TableShow data={dataConfiguration} /> */}
              <TablesScraping data={data} setShowAdd={setShow} className='mb-5 mb-xl-8' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {DashboardScraping}
