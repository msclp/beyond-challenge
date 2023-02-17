import { useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:4000'

const api = async (url: string) => {
  const response = await fetch(`${BASE_URL}${url}`)
  const data = await response.json()
  return data
}

export const useApi = <T>(url: string) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T>()
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const data = await api(url)
      setData(data)
      setLoading(false)
    }
    getData()
  }, [url])

  return { data, loading }
}
