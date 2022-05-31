import React from 'react'
import {Table} from 'antd'

const dataSource = [
  {
    no: '1',
    judul: 'Mike',
    topik: 'scsidjcs',
    keyword: '10 Downing Street',
    sumber: '10 Downing Street',
    waktuLaman: '10 Downing Street',
    lastUpdate: '10 Downing Street',
    action: '',
  },
]

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
    width: 60,
  },
  {
    title: 'Judul',
    dataIndex: 'judul',
    key: 'judul',
    width: 250,
  },
  {
    title: 'Topik',
    dataIndex: 'topik',
    key: 'topik',
  },
  {
    title: 'Keyword/Hastag',
    dataIndex: 'keyword',
    key: 'keyword',
  },
  {
    title: 'Waktu Laman',
    dataIndex: 'waktuLaman',
    key: 'waktuLaman',
  },
  {
    title: 'Last Update',
    dataIndex: 'lastUpdate',
    key: 'lastUpdate',
  },
  {
    title: 'Action',
    key: '',
    dataIndex: '',
    render: () => <a href='#'>Detail</a>,
  },
]

const TableShow = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default TableShow
