import React, { useEffect, useState } from "react";
import './css/carousel.css'
import { Image, Text, StyleSheet } from 'react-native';
import myJson from '../../mocks/en-us/featured-banners.json'

const styles = StyleSheet.create({
    title:{
        display:'inline-block',
        alignItems:'center',
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:'40px',
        fontWeight:'bold',
        color: '#fff'
    },
    description:{
        display:'inline-block',
        alignItems:'center',
        textAlign:'center',
        fontSize:'18px',
        color: '#fff'
    }
})

export const CarouselItem = (props) => {
    const {title, description, url, itemIndex, activeItem} = props
    
    var measure = 0
    
    if(itemIndex === activeItem){
        measure = 0
    } else if(activeItem===0 && itemIndex===myJson.results.length-1){
        measure = -100
    } else if(itemIndex===0 && activeItem===myJson.results.length-1){
        measure = 100
    } else {
        const diff = itemIndex - activeItem
        measure = diff * 100
    }

    return (
        <div className="carousel-item" style={{
            justifyContent: "center",
            alignItems: "center",
            width:'100%',
            transform : `translateX(${measure}%)`,
            backgroundColor: '#8019c8',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
            <div className="titleContainer">
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </div>
            <Image style={{width: '100%', height: undefined, aspectRatio: 10/3}} source={url}/>
        </div>
    );
};

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPause] = useState(false)

    const updateIndex = (newIndex) => {
        if(newIndex<0){
            newIndex = myJson.results.length-1
        } else if(newIndex>= myJson.results.length){
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!paused){
                updateIndex(activeIndex + 1)
            }
        }, 3000);

        return() => {
            if(interval){
                clearInterval(interval)
            }
        };
    })

    return (
        <div className="carousel"
            onMouseEnter={()=>setPause(true)}
            onMouseLeave={()=>setPause(false)}
        >
            <div className="inner" style={{width: '100%'}}>
                {myJson.results.map((item, index)=>{
                    return(
                        <CarouselItem key={index} title={item.data.title} description={item.data.description[0].text} url={item.data.main_image.url} itemIndex={index} activeItem={activeIndex}/>
                    )
                })}
            </div>
            <div className="indicators">
                {
                    myJson.results.map((item, index)=>{
                        return(
                            <span key={index} className={`${index === activeIndex? "active": ""}`} onClick={()=>{updateIndex(index)}} ></span>
                        )
                    })
                }
            </div>
        </div>
    );
};



export default Carousel;