import React from "react";
import { FlatList, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native-web";
import categories from '../../mocks/en-us/product-categories.json';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%'
    },
    title: {
        fontSize: 32,
    },
    itemImage:{
        width:'100%',
        height:'undefined',
        aspectRatio: 1/1
    },
    categoriesTitle:{
        fontSize: '2rem',
        fontWeight:'bold',
    },
    itemContainer:{
        width: '100%'
    }
})

function ListCategories(){
    const renderItem = ({item})=>(
        <div style={{width: '100%', margin:'5px', backgroundColor: '#f5f5f5'}} title={item.data.name} url={item.data.main_image.url}>
            <div>
                <Image style={styles.itemImage} source={item.data.main_image.url}></Image>
                <Text style={{color: '#8019c8', padding: '10px', fontSize:'1rem', fontWeight:'bold'}}>{item.data.name}</Text>
            </div>
        </div>
    );

    return(
        <div className="categories" style={{paddingBottom: '45px'}}>
            <div className='sectionTitle' style={{fontSize:'2rem', fontWeight: 'bold'}}>Categories</div>
            <SafeAreaView styles={styles.container}>
                <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
                    <FlatList
                        style={{width:'100%'}}
                        contentContainerStyle={{margin:4}}
                        horizontal={false}
                        numColumns={5}
                        data={categories.results}
                        renderItem={renderItem}
                        keyExtractor={(item)=>item.id}
                        columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly', width:'100%'}}
                    />
                </ScrollView>
            </SafeAreaView>
        </div>
    );
};

export default ListCategories;