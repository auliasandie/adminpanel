/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import './styles.css'
import FormFilter from './FormFilter'
import TableShow from './TableShow'

const DashboardNewspage: FC = () => {
  return (
    <div className='bg-white rounded'>
  

      <div className='text-center border-bottom'>
      
      <FormFilter />
      </div>
      <div className='card-body py-3 mt-4' style={{background: 'white'}}>
        <div className='tab-content border-1'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              <TableShow/>
              {/* begin::Table */}
              {/* <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
              
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px text-center'>No</th>
                    <th className='p-0 min-w-100px text-center'>Judul</th>
                    <th className='p-0 min-w-100px text-center'>Data</th>
                    <th className='p-0 min-w-110px text-center'>Status</th>
                    <th className='p-0 min-w-50px text-center'>Learn</th>
                    <th className='p-0 min-w-50px text-center'>Created At</th>
                    <th className='p-0 min-w-50px text-center'>Action</th>
                  </tr>
                </thead>
             
                <tbody>
                 
                  <tr>
                    <td className='text-center'>2</td>
                    <td>Hari Sinaga</td>
                    <td className='text-end text-muted fw-bold text-center'>Python, MySQL</td>
                    <td className='text-center'>sldhvlsklkj</td>
                    <td className='text-center'>true</td>
                    <td className='text-center'>true</td>
                    <td className='text-center'>
                      <button className='btn btn-success mx-2'>Detail</button>
                      <button className='btn btn-primary mx-2'>To Url</button>
                    </td>
                  </tr>
                </tbody>
                
              </table> */}
            </div>
            {/* end::Table */}
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardNews: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'NEWS'})}</PageTitle>
      <DashboardNewspage />
    </>
  )
}

export {DashboardNews}
