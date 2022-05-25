import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Redirect = ({ state }) => {
  const router = useRouter()
  useEffect(() => {
    if(state){
      router.push('https://discord.gg/MuTHNCrY')
    } else {
      router.push('/gate/bayarea')
    }
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Redirect
