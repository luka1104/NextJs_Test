import React, { useEffect } from 'react'
import Router from 'next/router'

const NfcIdApp = ({ setState }) => {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/nfc/1D:4D:0C:B9:6E:00:00' ){
      Router.push('/gate/bayarea')
      setState('1D:4D:0C:B9:6E:00:00')
    }
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default NfcIdApp
