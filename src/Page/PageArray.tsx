import React from 'react'
import { ArrayStore as store} from '../Store/ArrayStore'

const ArrayPage = () => {
  return (
    <div>{store.a}</div>
  )
}

export default ArrayPage