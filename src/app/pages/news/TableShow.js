import React from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd'

const dataSource = [
  {
    topic: "topic",
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
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
      width: 150,
      align: 'center'
    },
    // {
    //   title: 'Topik',
    //   dataIndex: 'topik', 
    //   key: 'topik',
    // },
    {
      title: 'Keywords',
      dataIndex: 'keywords', 
      key: 'keywords',
      
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
      render: () => <a href='#'>test</a>,
    },
  ];

const TableShow = (props) => {
  return (
    
        <Table dataSource={props.data} columns={columns} />  
    
  )
}

export default TableShow