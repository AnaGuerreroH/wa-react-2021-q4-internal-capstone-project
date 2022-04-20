import React from 'react';
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    text:{
        fontSize:'18px',
        paddingBottom: '5px'
    }
})

const Footer = () => {
  return(
    <div style={{display: "grid", paddingBottom: '20px', background:'#fff'}}>
      <Text style={styles.text}>Ecommerce created during Wizeline’s Academy React Bootcamp</Text>
      <Text style={styles.text}>Made by Ana Guerrero</Text>
    </div>
  );
}

export default Footer;