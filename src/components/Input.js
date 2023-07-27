import React from 'react'

function Input({makeQR}) {
    
  return (
    <div>
        <input
            className='input'
            type='text'
            Placeholder='Enter data ...'    
            onChange={makeQR}
        />
    </div>
  )
}

export default Input