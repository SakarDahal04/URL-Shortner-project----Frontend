import React from 'react'
import "./../styles/Urls.css"
import UrlList from '../components/UrlList/UrlList'

const Urls = () => {
  return (
    <div className='url-container'>
      <h1 className='url-heading'>Your URL list</h1>
      <UrlList />
    </div>
  )
}

export default Urls
