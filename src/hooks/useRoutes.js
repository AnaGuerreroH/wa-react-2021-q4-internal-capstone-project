import React from "react";
import Home from './../pages/home/home'
import OurProducts from './../pages/our-products/our-products'

function UseRoutes({route, handleRoute}) {
    switch(route){
        case 'home': return <Home handleRoute={handleRoute}/>;
        case 'our-products': return <OurProducts/>;
        default: return <Home handleRoute={handleRoute}/>;
    }
}

export default UseRoutes;