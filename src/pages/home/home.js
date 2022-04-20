import React from 'react';
import Carousel from "./../../components/carousel/carousel"
import ListCategories from './../../components/categories/categories'
import ListProducts from './../../components/products/products'

function Home({handleRoute}) {
    return (
        <div className='Home'>
            <Carousel/>

            <ListCategories/>

            <ListProducts onChange={handleRoute} />
        </div>
    )
}

export default Home;