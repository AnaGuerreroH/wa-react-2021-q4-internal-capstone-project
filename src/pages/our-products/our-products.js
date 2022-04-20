import React from "react";
import CategoriesList from "../../components/categories/categoriesList";
import ProductList from "../../components/products/productsList";
import products from './../../mocks/en-us/products.json'
import './css/our-products-css.css'

export default class OutProducts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoriesSelected: []
        }
        this.onCategorySelect = this.onCategorySelect.bind(this)
    }

    onCategorySelect(categoriesSelected){
        this.setState({categoriesSelected});
    }

    render(){
        const {categoriesSelected} = this.state
        return(
            <div className="ourProductsBody">
                <h1>Our products</h1>
                <div className="ourProductsWrapper" style={{paddingLeft: '10px', paddingRight: '10px'}}>
                    <div className="categoriesWrapper">
                        <CategoriesList onCategorySelect={this.onCategorySelect}/>
                    </div>
                    <div className="productWrapper">
                        <ProductList list={products.results} categories={categoriesSelected}/>
                    </div>
                </div>
            </div>
            
        )
    }
}