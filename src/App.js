import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import OurProducts from './pages/our-products/our-products';
import ProductDetail from './pages/product-detail/product-detail';
import Search from './pages/search/search';
import { HOME_PATH, HOME_PATH_2, PRODUCTS_PATH, PRODUCT_DETAIL_PATH, SEARCH_PATH } from '../src/utils/constants';

export default class App extends React.Component {
  render(){
    return(
      <div className='App'>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path={HOME_PATH} element={<Home/>}/>
            <Route exact path={HOME_PATH_2} element={<Home/>}/>
            <Route path={PRODUCTS_PATH} element={<OurProducts/>}/>
            <Route exact path={PRODUCT_DETAIL_PATH} element={<ProductDetail/>}/>
            <Route path={SEARCH_PATH} element={<Search/>}/>
          </Routes>
        </Router>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )
  }
}