import React, { useState} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import burguerLogo from './../../images/burguer-icon.png';



const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const options = [
    {label: 'Hacer búsqueda'},
    {label: 'Ver carrito'}
];

  const renderDropdown = () => {
    if (visible) {
      return (
          <div style={{top: '50'}}>
              {
              options.map((item, index)=>{
                <Text style={styles.dropdown}>{item.label}</Text>
              })
          }
          </div>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <img className='burguerMenu' src={burguerLogo}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: 50,
  },
});

export default Dropdown;