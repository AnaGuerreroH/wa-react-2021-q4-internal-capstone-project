import React from 'react';
import { StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-web';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgLogo from './../../images/sofaIcon.jpeg';
import cartLogo from './../../images/cart-icon.png';
import './css/navbar.css';
import Dropdown from '../dropdown/dropdown';

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

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.handleRoute = this.handleRoute.bind(this)
    }

    handleRoute(event){
        this.props.onChange('home');
    }

    render(){
        return(
            <div className='mainNavbar' style={{padding: '10px'}}>
                <div className='navStart'>
                    <img className='imgLogo' src={imgLogo} onClick={this.handleRoute}/>
                    <Text style={styles.text}>Furniture Store</Text>
                    <Dropdown className='burguerMenu'/>
                </div>
                <div className='navbarEnd'>
                    <TextInput style={styles.textInput} placeholder="Search"/>
                    <img className='cart' style={{width: '50px', marginLeft: '10px'}} src={cartLogo} />
                </div>
            </div>
          );
    }
  
}