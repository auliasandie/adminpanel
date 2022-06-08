/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import FormFilter from '../Componen/FormFilter'
import { TableHasilScraping } from './HasilScrapingTable'
import './hasilScraping.scss'
import { useDispatch } from 'react-redux'
import { getDataReducer } from '../../../setup/action/getDataReducer'

const HasilScrappingPage: FC = () => {
  const [showFilter, setShowFilter] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataReducer())
  }, [])

  const expand = () => {
    setShowFilter(!showFilter)
  }



  return (
    <div className='bg-white rounded'>
      <div className='border-bottom'>
        <div className='title-filter'>
        <h3 onClick={expand}>Filter</h3>
        </div>
        <div className={`${showFilter? 'slide on' : 'slide off'}`} >
          <FormFilter />
        </div>
      </div>
      <div className='card-body py-3 mt-4' style={{background: 'white'}}>
        <div className='tab-content border-1'>
        <TableHasilScraping className='mb-5 mb-xl-8' data={['']} />          
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
