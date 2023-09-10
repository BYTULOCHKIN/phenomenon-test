import React, { FC } from 'react'
import { StatusProps } from '../types/components-props'
import Loading from '../assets/loading.svg'
import Error from '../assets/error.svg'
import NotFound from '../assets/not_found.svg'

const Status: FC<StatusProps> = ({ status = 'loading' }) => {
  let bgColor
  switch (status) {
    case 'error': {
      bgColor = 'bg-[#FEDBDB] '
      break
    }
    case 'loading': {
      bgColor = 'bg-[#D2FFCE]'
      break
    }
    case 'not_found': {
      bgColor = 'bg-[#FEF0DB] '
      break
    }
    default: {
      bgColor = 'bg-[#FEDBDB] '
      break
    }
  }
  return (
    <div className={'flex flex-col justify-center items-center'}>
      <div
        className={`w-[70px] h-[70px] rounded-full border-[1px] bg border-black   ${bgColor} flex justify-center items-center`}
      >
        {status === 'loading' && (
          <img width="29" height="28" className={'animate-spin'} src={Loading} alt="loading" />
        )}
        {status === 'error' && <img width="4" height="28" src={Error} alt="error" />}
        {status === 'not_found' && <img width="28" height="28" src={NotFound} alt="not_found" />}
      </div>
      {status === 'loading' && <h3 className={'text-center'}> Loading Page</h3>}
      {status === 'error' && <h3 className={'text-center'}>Opps, something went wrong</h3>}
      {status === 'not_found' && <h3 className={'text-center'}>Not found</h3>}
    </div>
  )
}

export default Status
