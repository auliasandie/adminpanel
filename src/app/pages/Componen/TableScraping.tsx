/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG } from '../../../_metronic/helpers'

type Props = {
  className: string
  data: Array<string>
}

interface ItemType{
    id: number
    topic: string
    keywords: Array<string>
    hastags: Array<string>
    status: string
}

const TablesScraping: React.FC<Props> = ({className,data}) => {
    console.log(data)
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>New Arrivals</span>
        </h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Member
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='ps-4 min-w-50px rounded-start'>Id</th>
                <th className='ps-4 min-w-100px rounded-start'>Topik</th>
                <th className='min-w-225px text-center'>Keywords</th>
                <th className='min-w-225px text-center'>Hastags</th>
                <th className='min-w-100px text-center'>Status</th>
                <th className='min-w-100px text-center'>Last Update</th>
                <th className='min-w-200px text-center rounded-end'>Action</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
             {
                 data.map((item) => {
                     return (
                        <tr>
                            <td className='text-center'>
                             <span className='text-muted fw-bold text-muted d-block fs-7'>1</span>
                            </td>
                            <td>
                                <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span>
                            </td>
                            <td>
                                <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span>
                            </td>
                            <td>
                                <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span>
                            </td>
                            <td className='text-center '>
                                <span className='badge badge-light-primary fs-7  fw-bold'>Approved</span>
                            </td>
                            <td>
                                <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span>
                            </td>
                            <td className='text-center'>
                                <a href='#'  className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                </a>
                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                </a>
                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                </a>
                            </td>
                      </tr>
                      
                     )
                 })
             }
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesScraping}
