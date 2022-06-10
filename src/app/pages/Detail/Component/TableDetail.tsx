/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {Table} from 'react-bootstrap-v5'
import {useIntl} from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../../../setup'
import { getdetailbyid } from '../../../../setup/action/scrapingaction'
import { PageLink } from '../../../../_metronic/layout/core'

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

const TableDetail : FC<Props> = () => {
  const { dataDetail } : any = useSelector((state: RootState) => state.getDataTopic)
  let {id}: any = useParams()
console.log(dataDetail, 'ini')

//   useEffect(() => {
  //     dispatch(getdetailbyid(id))
  //   }, [])
  return (
    <>
    <div className='bg-white rounded'>
      <div className='text-center border-bottom'>
        <h1 className='p-5 text-start'>Detail</h1>

        <div className='detail-box'>
          <div className='box'>
            <table className='table table-striped table-hover'>
             <tbody>
                  {
                    dataDetail.map(({topic,keywords,hastags,status,last_crawled}: any) => {
                      return (
                        <tr key={id}>
                        
                        <td>
                            <span className='text-muted fw-bold text-muted d-block fs-7'>Topik</span>
                        </td>
                        <td>
                            <span className='text-muted fw-bold text-muted d-block fs-7'>{topic}</span>
                        </td>
                       <tr>
                         <td>
                           Keywords
                         </td>
                        <td>
                              {
                                keywords.map((keyword: string, i:number) => {
                                  return (
                                    <span key={i} className='badge badge-light-primary fs-7 m-1  fw-bold'>{keyword}</span>
                                  )
                                })
                              }
                          </td>
                       </tr>
                       <tr>
                        <td>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>Hastags</span>
                          </td>
                        <td>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>{hastags}</span>
                          </td>
                       </tr>
                       <tr>
                       <td >
                          Status
                        </td>
                       <td >
                           {
                             status === 'AKTIF' ? (
                              <span className='badge badge-light-primary fs-7  fw-bold'>{status}</span>
                             ) : (
                              <span className='badge badge-light-danger fs-7  fw-bold'>{status}</span>
                             )
                           }
                        </td>
                       </tr>
                        <tr>
                          <td>
                              <span className='badge badge-light-primary fs-7 fw-bold'>Last Update</span>
                          </td>
                          <td>
                              <span className='badge badge-light-primary fs-7 fw-bold'>{last_crawled}</span>
                          </td>
                        </tr>
                  </tr>
                      )
                    })
                  }
                       
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}


export {TableDetail}
