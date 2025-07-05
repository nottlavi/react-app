import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import { useLocation, useNavigate } from 'react-router-dom';

export const TagPage = () => {
  // const location = useLocation();
  const tag = useLocation().pathname.split('/').at(-1);
  console.log("printing tag", tag)
  return (
    <div className='flex w-full justify-center'>
      <Header />
      <Blogs tag={tag}/>
    </div>
  )
}

export default TagPage;