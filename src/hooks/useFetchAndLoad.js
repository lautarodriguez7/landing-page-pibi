import {useState} from 'react'

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false)

  const callEndpoint = async (axiosCall) => {
    setLoading(true)
    try {
      const result = await axiosCall.call
      setLoading(false)
      return result
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return {loading, callEndpoint}
}

export default useFetchAndLoad
