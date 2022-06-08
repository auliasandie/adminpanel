/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import { Table } from 'react-bootstrap-v5'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import './detail.scss'

const DashboardDetail: FC = () => {
  return (
    <div className='bg-white rounded'>
      <div className='text-center border-bottom'>
        <h1 className='p-5 text-start'>Detail</h1>

        <div className="detail-box">
          <div className="box">
            <Table className='table table-striped table-hover'>
              <tbody>
                <tr>
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
                </tr>
                
              </tbody>
            </Table>
          </div>
        </div>

      </div>
    </div>
  )
}

const DetailScraping: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'Detail'})}</PageTitle>
      <DashboardDetail />
    </>
  )
}

export {DetailScraping}
