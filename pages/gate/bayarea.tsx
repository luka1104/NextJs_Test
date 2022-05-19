import React from 'react'

const bayarea = ({ state }) => {
  return (
    <>
      {state === '1D:F9:39:B9:6E:00:00' ? (
        <div>
          Authenticated!!
        </div>
      ) : (
        <div>
          Error!!
        </div>
      )}
    </>
  )
}

export default bayarea
