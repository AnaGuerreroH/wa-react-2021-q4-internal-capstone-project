import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Image, Text, ScrollView } from "react-native-web";
import './css/productsGrid.css';
import categories from '../../mocks/en-us/product-categories.json';
import { Link } from "react-router-dom";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import { PRODUCTS, PRODUCT_DETAIL } from "../../utils/constants";

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
    const {mainImage, productName, category, price, id} = props
    return(
        <div style={{width:'100%', backgroundColor:'#fff', margin: '5px'}}>
            <Link to={`${PRODUCT_DETAIL}${id}`}>
            <Image style={{aspectRatio: 1/1, margin: '10px'}} source={mainImage}/>
            <div style={{display: 'grid', paddingBottom:'15px'}}>
                <Text style={{color: '#19c880', fontWeight:'bold', fontSize: '1rem', paddingBottom: '5px'}}>{productName}</Text>
                <Text>{category}</Text>
                <Text style={{color: '#8019c8', fontWeight:'bold', paddingTop:'5px', fontSize: '1.25rem'}}>$ {price}</Text>
            </div>
            </Link>
            <button className="addToCart">Add to cart</button>
        </div>
    );
};

const renderItem = ({item})=>{
    var category = categories.results.filter((category)=>{ return category.id === item.data.category.id})
    return(
        <Item mainImage={item.data.mainimage.url} productName={item.data.name} category={category[0].data.name} price={item.data.price} id={item.id}/>
    )
}

function ListProducts() {
    const {data: products = [], isLoading, error } = useFeaturedProducts()
    console.log(products)
    
    const showProducts = () => {
        if(products.results != undefined && products.results.length>0){
            return(
                <div>
                    <div className='sectionTitle' style={{fontSize:'2rem', fontWeight: 'bold'}}>Our products</div>
                    <div style={{paddingLeft: '10px', paddingRight: '10px', backgroundColor:'#f5f5f5'}}>
                        <SafeAreaView styles={styles.container}>
                            <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', backgroundColor:'#f5f5f5'}}>
                                <FlatList
                                    contentContainerStyle={{margin:4}}
                                    horizontal={false}
                                    numColumns={6}
                                    data={products.results}
                                    renderItem={renderItem}
                                    columnWrapperStyle={{flex: 1,justifyContent: 'space-evenly'}}
                                />
                            </ScrollView>
                        </SafeAreaView>
                        <Link to={PRODUCTS}>
                            <button className="viewAllBtn" >View all products</button>
                        </Link>
                    </div>
                </div>
            )
        }
    }
        
    return(
        <div className="products" style={{paddingBottom: '45px'}}>
            {showProducts()}
        </div>
    );
}

export default ListProducts;