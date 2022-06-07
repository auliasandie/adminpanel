import React from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd'
import { DetailScraping } from '../Detail/DetailPage';

const dataSource = [
  {
    nama: "test",
    keyword:"test",
    hastag:"test",
    status:"test",
    lastUpdate:"test",
    jumlahLaman:"test",
    action:"test",
  },
  ];

  const columns = [
    // {
    //   title: 'No',
    //   dataIndex: 'no',
    //   key: 'no',
    //   width: 60,
    // },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
      width: 250,
    },
    // {
    //   title: 'Topik',
    //   dataIndex: 'topik', 
    //   key: 'topik',
    // },
    {
      title: 'Keyword',
      dataIndex: 'keyword', 
      key: 'keyword',
    },
    {
      title: 'Hastag',
      dataIndex: 'hastag', 
      key: 'hastag',
    },
    {
      title: 'Status',
      dataIndex: 'status', 
      key: 'status',
    },
    {
      title: 'Last Update',
      dataIndex: 'lastUpdate', 
      key: 'lastUpdate',
    },
    {
      title: 'Jumlah Laman',
      dataIndex: 'jumlahLaman', 
      key: 'jumlahLaman',
    },
    {
      title: 'Action',
      dataIndex: 'action', 
      key: '',
      render: (text, record) => (
        <button onClick={()=> console.log(record)}>
          {"Button Text"}
        </button>
       ),
    },
  ];

  // const button = [
  //   {
  //     title: 'edit',
  //     icon: 'edit',
  //     // disibled: (e) => !((e.kodeProses === '001' || e.kodeProses === '120') && e.flagSsm === null && dataUser.npwp.substring(0, 9) === e.idPerusahaan.substring(0, 9)),
  //       // disibled: (e) => !((e.kodeProses === '001' || e.kodeProses === '120') && e.flagSsm === null),
  //     render: (e) => (<DetailScraping />)
  //   }
  // ]

const TableShow = () => {
  return (
    
        <Table dataSource={dataSource} columns={columns} />  
    
  )
}

export default TableShow