import React from 'react';
import { useProductDetail } from '../../utils/hooks/useProductDetail';
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./product-detail.css"
import categories from '../../mocks/en-us/product-categories.json';

function ProductDetail() {
    const { id } = useParams()
    const { data: detailInfo = {}, isLoading, error } = useProductDetail(id)

    const showTags = (tags) => {
        if(tags != undefined && tags.length>0){
            return(
                <p><b>Tags: </b>
                {
                    tags.map((tag, index)=>{
                        return ` ${tag}, `
                    })
                }
                </p>
            )
        }
    }

    const showSpecs = (specs) => {
        if(specs != undefined && specs.length>0){
            return(
                <div>
                    {
                        specs.map((spec, index)=>{
                            return (
                                <p><b>{spec.spec_name}:</b> {spec.spec_value}</p>
                            )
                        })
                    }
                </div>
            )
        }
    }

    const showCategory = (categoryId) => {
        var category = categories.results.filter((category)=>{ return category.id === categoryId})
        if(category.length>0){
            return(
                <p><b>Category:</b> {category[0].data.name}</p>
            )
        }
    }

    const showImages = (images) => {
        if(images != undefined && images.length>0){
            return(
                <Swiper
                    navigation={true} 
                    modules={[Navigation]} 
                    className="mySwiper"
                >
                {
                    images.map((imageWrapper, index)=>{
                        return(
                            <SwiperSlide>
                                <img className='swipeObject' src={imageWrapper.image.url}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            )
        }
    }

    const showDescription = (description) => {
        if(description != undefined && description.length>0){
            return(
                <div>
                    <h5>About this product:</h5>
                    <p>{description[0].text}</p>
                </div>
            )
        }
    }

    const showAddCartButton = (title, price) => {
        return(
            <div className='productTitle'>
                <h1>{title}</h1>
                <h3 className='price'>$ {price}</h3>
                <input type="number"/>
                <button className="addToCart">Add to cart</button>
            </div>
        )
    }

    const showInfo = () => {
        if(detailInfo.results != undefined && detailInfo.results.length>0){
            let item = detailInfo.results[0]
            
            return(
                <div>
                    {showImages(item.data.images)}
                    {showAddCartButton(item.data.name, item.data.price)}
                    <div>
                        <div className='contentDetailLeft'>
                            {showDescription(item.data.description)}
                        </div>
                        <div className='contentDetailRight'>
                            <h5>Product details:</h5>
                            {showCategory(item.data.category.id)}
                            {showTags(item.tags)}
                            <p><b>SKU:</b> {item.data.sku}</p>
                            {showSpecs(item.data.specs)}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='ProductDetail'>
            {showInfo()}
        </div>
    )
}

export default ProductDetail;