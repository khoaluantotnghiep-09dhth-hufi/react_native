import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import Products from './../components/Product/Products';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import * as actionsProductFavorite from "./../actions/ProductFavorite/ProductFavoriteActions";
import { connect } from "react-redux";
class FavoriteScreen extends React.Component {
    componentDidMount() {
        this.props.fetchProductFavorite();
      
    }
    
    render() {
        var{productFavorite}=this.props
        const { navigation } = this.props;
        console.log("Favorite "+  Object.entries(productFavorite))
        return (
            <>
               
                <Header2 navigation={this.props.navigation} />
               

                <ScrollView>
                <SafeAreaView >
                       
                       <FlatList
                           data={productFavorite}
                           numColumns={2}
                           renderItem={({ item }) => <Products dataProduct={item}  />}
                      
                         
                       >
                       </FlatList>
                   </SafeAreaView>
                </ScrollView>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },
});
var mapStateToProps = (state) => {
    return {
     
productFavorite:state.productFavorite
     
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
       
        fetchProductFavorite: () => {
            return dispatch(actionsProductFavorite.fetchProductFavorite());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)( FavoriteScreen);
