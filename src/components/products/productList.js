import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Image, Text, ScrollView } from "react-native-web";
import './css/productsGrid.css'
import categories from '../../mocks/en-us/product-categories.json';
import { Link } from "react-router-dom";
import { PRODUCT_DETAIL } from "../../utils/constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor:'#f5f5f5',
        paddingLeft: '20px'
    },
    title: {
        fontSize: 32,
    },
    itemImage:{
        width:'100%',
        height:'200px'
    },
    categoriesTitle:{
        fontSize: 40
    }
})

const Item = (props)=>{
    const {mainImage, productName, category, price, id, shortDesc} = props
    return(
        <div style={{width:'100%', padding: '10px'}}>
            <Link to={`${PRODUCT_DETAIL}${id}`}>
                <Image style={{aspectRatio: 1/1, margin: '10px'}} source={mainImage}/>
                <div style={{display: 'grid', paddingBottom:'15px'}}>
                    <Text style={{color: '#19c880', fontWeight:'bold', fontSize: '1rem', paddingBottom: '5px'}}>{productName}</Text>
                    <p>{shortDesc}</p>
                    <Text>{category}</Text>
                    <Text style={{color: '#8019c8', fontWeight:'bold', paddingTop:'5px', fontSize: '1.25rem'}}>$ {price}</Text>
                </div>
            </Link>
            <button className="addToCart">Add to cart</button>
        </div>
    );
};



export default class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: this.props.list
        }
    }

    render(){
        const { list } = this.state

        const renderItem = (item)=>{
            var category = categories.results.filter((category)=>{ return category.id === item.data.category.id})
            return (
                <Item mainImage={item.data.mainimage.url} productName={item.data.name} category={category[0].data.name} price={item.data.price} id={item.id} shortDesc={item.data.short_description}/>
            )
        }
        return(
            <div className="products">
                <div style={{paddingLeft: '10px', paddingRight: '10px', backgroundColor:'#f5f5f5'}}>
                {
                    list.map((item, index)=>{
                        return(
                            <div key={item.id} className="productItem">
                                {renderItem(item)}
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
};