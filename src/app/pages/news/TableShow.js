import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd'
import { DetailScraping } from '../Detail/DetailPage';
import EditModal from '../Componen/EditModal';

// const dataSource = [
//   {
//     topic: "topic",
//     keyword:"test",
//     hastag:"test",
//     status:"test",
//     lastUpdate:"test",
//     jumlahLaman:"test",
//     action:"test",
//   },
//   ];

  


  // const button = [
  //   {
  //     title: 'edit',
  //     icon: 'edit',
  //     // disibled: (e) => !((e.kodeProses === '001' || e.kodeProses === '120') && e.flagSsm === null && dataUser.npwp.substring(0, 9) === e.idPerusahaan.substring(0, 9)),
  //       // disibled: (e) => !((e.kodeProses === '001' || e.kodeProses === '120') && e.flagSsm === null),
  //     render: (e) => (<DetailScraping />)
  //   }
  // ]

const TableShow = (props) => {
  const [show, setShow] = useState(false)
  const [dataToEdit, setDataToEdit] = useState([])

  
  const history = useHistory();
  // const detailpage = useCallback(() => history.push('/sample'), [history]);
  const detailpage = () => history.push('/detail-scraping');

const dataSource = [
  {
    nama: "test",
    keyword:"test",
    hastag:"test",
    status:"test",
    lastUpdate:"test",
    jumlahLaman:"test",
    action:"testaaa",
  },
  ];

  const columns = [
 
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
      width: 150,
      align: 'center'
    },

    {
      title: 'Keywords',
      dataIndex: 'keywords', 
      key: 'keywords',
      width: 300
      
    },
    {
      title: 'Hastags',
      dataIndex: 'hastags', 
      key: 'hastags',
      align: 'center'
    },
    {
      title: 'Status',
      dataIndex: 'status', 
      key: 'status',
      align: 'center'
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
        <a onClick={() => handleClick(record)}>
          {"Edit"}
        </a>
       ),
    },
  ];
  const handleClick = (data) => {
    setShow(true)
    setDataToEdit(data)
    // console.log(data, 'anjay')
  }

  return (
    <>
        <Table dataSource={props.data} columns={columns} />  
        <EditModal show={show} setShow={setShow} data={dataToEdit}/>
    </>
  )
}

export default TableShow