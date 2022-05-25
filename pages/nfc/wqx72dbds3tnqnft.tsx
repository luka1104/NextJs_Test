import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Redirect = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('https://discord.gg/MuTHNCrY')
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Redirect
