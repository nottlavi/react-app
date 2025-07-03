import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

export const Home = () => {
  return (
    <div className='flex justify-center'>
        <Header />
        <Blogs />
        <Pagination />
    </div>
  )
}

export default Home;