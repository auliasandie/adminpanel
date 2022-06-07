/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import { type } from 'os'
import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import { array } from 'yup'
import {PageTitle} from '../../../_metronic/layout/core'

import Modal from '../Componen/Modal'
import TableShow from '../news/TableShow'




// const DashboardTwitterpage: FC = () => (
//   // <div>
//   //   <div className='bg-white rounded'>
//   //     <div>
//   //       {/* <TagsInputri /> */}
//   //       <InputTags2 />
//   //       <div className='with-username'>
//   //         <h4 className='m-2'>Search By Username</h4>
//   //         <div className='input-section'>
//   //            <input className='input-name' />
//   //           <button className='btn btn-primary mx-5'>Search</button>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     <div className='card-body py-3 mt-4' style={{background: 'white'}}>
//   //       <div className='tab-content border-1'>
//   //         {/* begin::Tap pane */}
//   //         <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
//   //           {/* begin::Table container */}
//   //           <div className='table-responsive'>
//   //             {/* begin::Table */}
//   //             <table className='table table-row-dashed table-row-gray-500 align-middle gs-0 gy-4'>
//   //               {/* begin::Table head */}
//   //               <thead>
//   //                 <tr className='border-0'>
//   //                   <th className='p-0 w-50px text-center'>No</th>
//   //                   <th className='p-0 min-w-100px text-center'>Judul</th>
//   //                   <th className='p-0 min-w-100px text-center'>Data</th>
//   //                   <th className='p-0 min-w-110px text-center'>Status</th>
//   //                   <th className='p-0 min-w-50px text-center'>Learn</th>
//   //                   <th className='p-0 min-w-50px text-center'>Created At</th>
//   //                 </tr>
//   //               </thead>
//   //               {/* end::Table head */}
//   //               {/* begin::Table body */}
//   //               <tbody>
//   //                 <tr>
//   //                   <td className='text-center'>1</td>
//   //                   <td>Hafidz</td>
//   //                   <td className='text-end text-muted fw-bold text-center'>React, HTML</td>
//   //                   <td className='text-center'>sldhvlsklkj</td>
//   //                   <td className='text-center'>False</td>
//   //                   <td className='text-center'>False</td>
//   //                 </tr>

//   //                 <tr>
//   //                   <td className='text-center'>2</td>
//   //                   <td>Hari Sinaga</td>
//   //                   <td className='text-end text-muted fw-bold text-center'>Python, MySQL</td>
//   //                   <td className='text-center'>sldhvlsklkj</td>
//   //                   <td className='text-center'>true</td>
//   //                   <td className='text-center'>true</td>
//   //                 </tr>
//   //                 <tr>
//   //                   <td className='text-center'>2</td>
//   //                   <td>Hari Sinaga</td>
//   //                   <td className='text-end text-muted fw-bold text-center'>Python, MySQL</td>
//   //                   <td className='text-center'>sldhvlsklkj</td>
//   //                   <td className='text-center'>true</td>
//   //                   <td className='text-center'>true</td>
//   //                 </tr>
//   //                 <tr>
//   //                   <td className='text-center'>2</td>
//   //                   <td>Hari Sinaga</td>
//   //                   <td className='text-end text-muted fw-bold text-center'>Python, MySQL</td>
//   //                   <td className='text-center'>sldhvlsklkj</td>
//   //                   <td className='text-center'>true</td>
//   //                   <td className='text-center'>true</td>
//   //                 </tr>
//   //                 <tr>
//   //                   <td className='text-center'>2</td>
//   //                   <td>Hari Sinaga</td>
//   //                   <td className='text-end text-muted fw-bold text-center'>Python, MySQL</td>
//   //                   <td className='text-center'>sldhvlsklkj</td>
//   //                   <td className='text-center'>true</td>
//   //                   <td className='text-center'>true</td>
//   //                 </tr>
//   //               </tbody>
//   //               {/* end::Table body */}
//   //             </table>
//   //           </div>
//   //           {/* end::Table */}
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </div>
// )





const DashboardTwitter: FC = () => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {DashboardTwitter}
