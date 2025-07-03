import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import { useLocation } from 'react-router-dom'


export const CategoryPage = () => {
  const category = useLocation().pathname.split('/').at(-1).replaceAll("-", " ");
  return (
    <div className='flex justify-center w-full'>
      <Header />
      <Blogs category={category}/>
    </div>
  )
}

export default CategoryPage