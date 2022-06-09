/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import FormFilter from '../Componen/FormFilter'
import { TableHasilScraping } from './HasilScrapingTable'
import './hasilScraping.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getDataReducer } from '../../../setup/action/topicReducer'
import { getDataHasilCrawling } from '../../../setup/action/hasilScrapingAction'
import { RootState } from '../../../setup'

const HasilScrappingPage: FC = () => {
  const {data} = useSelector((state: RootState) => state.getDataCrawling)
  const [showFilter, setShowFilter] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataHasilCrawling())
  }, [])

  const expand = () => {
    setShowFilter(!showFilter)
  }

  console.log(data, 'anjay data')


  return (
    <div className='bg-white rounded'>
      <div className='border-bottom'>
        <div className='title-filter'>
        <div onClick={expand} className="filter-btn">
          <h3>Filter</h3>
          <span>V</span>
        </div>
        </div>
        <div className={`${showFilter? 'slide on' : 'slide off'}`} >
          <FormFilter />
        </div>
      </div>
      <div className='card-body py-3' style={{background: 'white'}}>
        <div className='tab-content border-1'>
        <TableHasilScraping className='mb-5 mb-xl-8' data={data} />          
        </div>
      </div>
    </div>
  )
}

const HasilScrapping: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Hasil Scraping'})}</PageTitle>
      <HasilScrappingPage />
    </>
  )
}

export {HasilScrapping}
