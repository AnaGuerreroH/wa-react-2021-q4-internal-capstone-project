import React from "react";
import { FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native-web";
import categories from '../../mocks/en-us/product-categories.json';
import './css/categoriesListCss.css'

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
        fontFamily:"Roboto"
    },
    itemContainer:{
        width: '100%'
    }
})

export default class CategoriesList extends React.Component {
    constructor(props){
        super(props)
        this.onCategorySelect = this.onCategorySelect.bind(this)
        this.state = {
            categoriesSelected: []
        }
    }
    
    onCategorySelect(categoriesSelected){
        this.setState({categoriesSelected});
        this.props.onCategorySelect(categoriesSelected);
    }

    render(){
        const {categoriesSelected} = this.state

        const onChange = (e) => {
            var categoriesCopy = categoriesSelected
            var index = categoriesCopy.indexOf(e.target.value)

            if(e.target.checked){
                if(index<0){
                    categoriesCopy.push(e.target.value)
                }
            }else{
                if(index>=0){
                    categoriesCopy.splice(index, 1)
                }
            }
            this.onCategorySelect(categoriesCopy)
        }

        return(
            <div className="categories" style={{paddingBottom: '45px'}}>
                <h2>Categories</h2>
                <SafeAreaView styles={styles.container}>
                    <ScrollView>
                        <FlatList
                            data={categories.results}
                            renderItem={({item})=>(
                                <div style={{margin:'5px', textAlign:'left'}}>
                                    <input type="checkbox" name="categories" value={item.id} onChange={onChange}/>
                                    <label>{item.data.name}</label>
                                </div>
                            )}
                            keyExtractor={(item)=>item.id}
                        />
                    </ScrollView>
                </SafeAreaView>
            </div>
        );
    }
}