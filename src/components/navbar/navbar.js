import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-web';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgLogo from './../../images/sofaIcon.jpeg';
import cartLogo from './../../images/cart-icon.png';
import './css/navbar.css';
import Dropdown from '../dropdown/dropdown';
import { Link } from 'react-router-dom';
import searchLogo from './../../images/search_icon.png';
import { HOME_PATH, SEARCH_PATH } from '../../utils/constants';

const styles = StyleSheet.create({
    text:{
        display:'inline-block',
        alignItems:'center',
        textAlign:'left',
        textTransform:'uppercase',
        fontSize:'24px',
        fontWeight:'bold'
    },
    textInput:{
        alignItems:'center',
        display:'inline-block',
    }
})

export default function NavBar (){
    const [searchValue, setSearchValue] = useState("")

    const handleChange = (e) => {
        setSearchValue({value: e.target.value})
    }

    return(
        <div className='mainNavbar' style={{padding: '10px'}}>
            <div className='navStart'>
                <Link to={HOME_PATH}>
                    <img className='imgLogo' src={imgLogo}/>
                </Link>
                <Text style={styles.text}>Furniture Store</Text>
                <Dropdown className='burguerMenu'/>
            </div>
            <div className='navbarEnd'>
                <div className='search'>
                    <TextInput style={styles.textInput} value={searchValue.value} placeholder="Search" onChange={(e)=>handleChange(e)}/>
                    <Link to={`${SEARCH_PATH}?q=${searchValue.value}`}>
                        <img className='searchBtn' src={searchLogo}/>
                    </Link>
                </div>
                <img className='cart' style={{width: '50px', marginLeft: '10px'}} src={cartLogo} />
            </div>
        </div>
      );
}