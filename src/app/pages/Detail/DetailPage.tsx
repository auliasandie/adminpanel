/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {Table} from 'react-bootstrap-v5'
import {useIntl} from 'react-intl'
import {PageTitle,PageLink} from '../../../_metronic/layout/core'
import {useDispatch, useSelector} from 'react-redux'
import './detail.scss'
import {RootState} from '../../../setup'
import {useParams} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import {getdetailbyid} from '../../../setup/action/scrapingaction'
import { TableDetail } from './Component/TableDetail'

type Props = {
  data: Array<string>
}

const detailScrapingBreadcrumb: Array<PageLink> = [
  {
    title: 'Scraping',
    path: '/scraping',
    isSeparator: false,
    isActive: false,
  }
]

const DashboardDetail: React.FC<Props> = () => {
  const intl = useIntl()
  let {id}: any = useParams()
  const dispatch: any = useDispatch()
  const {datadetail}: any = useSelector((state: RootState) => state.createTopicReducer)
// console.log(data, 'ini')

  useEffect(() => {
    dispatch(getdetailbyid(id))
  }, [])
  return (
    <>
    <PageTitle breadcrumbs={detailScrapingBreadcrumb}>Detail Data</PageTitle>
    <div className='bg-white rounded'>
      <div className='text-center border-bottom'>
        <h1 className='p-5 text-start'>Detail</h1>

        <div className='detail-box'>
          <div className='box'>
            <TableDetail data={datadetail}/>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

{
  /* <tr>
                  <td>Judul</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Alamat Url</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Channel</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Topik</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Keywords</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Waktu Dokumen</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Waktu Scrap</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Jumlah Komen</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>Like</td>
                  <td>Test</td>
                </tr>

                <tr>
                  <td>Retweet</td>
                  <td>Test</td>
                </tr> */
}

const DetailScraping: FC = () => {
  const intl = useIntl()
  const {datadetail}: any = useSelector((state: RootState) => state.createTopicReducer)
  return (
    <>
      <PageTitle breadcrumbs={detailScrapingBreadcrumb}>Detail Data</PageTitle>
      
      <DashboardDetail data={datadetail}/>
    </>
  )
}

export {DashboardDetail}
