import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import { useLocation } from 'react-router-dom';

export const TagPage = () => {
  const tag = useLocation.pathname.split('/').at(-1);
  
  return (
    <div className='flex w-full justify-center'>
      <Header />
      <Blogs tag={tag}/>
    </div>
  )
}

export default TagPage;