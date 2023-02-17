import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

type Item = Record<string, string> & { id: string }

export type Column = {
  field: string
  headerName: string
}

type Props = {
  columns: Column[]
  items: Item[]
}

const DataTable = ({ items, columns }: Props) => {
  console.log({ items })
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 840 }}>
      <Table sx={{ minWidth: 650 }} stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.headerName}>{col.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map(col => (
                <TableCell align="right">{row[col.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
