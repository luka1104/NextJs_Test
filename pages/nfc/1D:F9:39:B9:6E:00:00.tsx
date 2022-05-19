import React, { useEffect } from 'react'
import Router from 'next/router'

const NfcId = ({ setState }) => {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/nfc/1D:F9:39:B9:6E:00:00' ){
      Router.push('/gate/bayarea')
      setState('1D:F9:39:B9:6E:00:00')
    }
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default NfcId
