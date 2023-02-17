import React from 'react'
import { useApi } from '../../api'
import { Influencer } from '../../types'
import DataTable from '../../components/DataTable'

const Influencers = () => {
  const { data, loading } = useApi<Influencer[]>('/influencers')

  if (loading || !data) return null

  const columns = Object.keys(data[0])
    .filter(col => col !=='id')
    .map(col => ({
      field: col,
      headerName: col
    }))

  return (
    <DataTable columns={columns} items={data} />
  )
}

export default Influencers
