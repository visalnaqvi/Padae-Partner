"use client";

import { Table } from "antd";

export default function TableBlock({ headers = [], rows = [] }) {
  if (!headers.length || !rows.length) {
    return null;
  }

  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: `column-${index}`,
    key: `column-${index}`,
  }));

  const dataSource = rows.map((row, rowIndex) => {
    const rowData = { key: rowIndex };

    row.forEach((cell, cellIndex) => {
      rowData[`column-${cellIndex}`] = cell;
    });

    return rowData;
  });

  return (
    <div className="table-wrapper">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
}
