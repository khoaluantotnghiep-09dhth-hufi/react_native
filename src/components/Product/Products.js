import React, { Component } from "react";
import {
  Badge,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import ImageSP from "../../assets/sp.jpg";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handlePress = () => {
    alert("THêm thành công nè =))");
  };
  currencyFormat=(num)=> {
    return  num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ'
 }
  render() {
    const { dataProduct, onPress } = this.props;
   //Sản Phẩm Có Sale thì hiện
    var elementSale =
      dataProduct.percentSale === "0" ? (
        <Text style={styles.title__sale} >
       </Text>
      ) : (
        <Text style={styles.title__sale} numberOfLines={2}>
          {dataProduct.percentSale} %
          </Text>
      );
        // Tính Giá SP khi Sale
      if ( dataProduct.percentSale>0) {
        var cacularSale = (parseInt( dataProduct.percentSale) / 100) *  dataProduct.price;
        var newPrice= dataProduct.price - cacularSale;
      }
      //Hiển Thị Giá Sale
      var elementNewPrice = newPrice ? (
        <Text style={styles.price}> {this.currencyFormat(newPrice)}</Text>
      ) : (
         null
      );
  
      var elementPrice = elementNewPrice ? (
        
          <Text style={styles.price__del}> {this.currencyFormat(dataProduct.price)}</Text>
      
      ) : (
        <Text style={styles.price}> {this.currencyFormat(dataProduct.price)}</Text>
      );
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Image
            source={{ uri: dataProduct.image }}
            style={styles.productImage}
          ></Image>
          {/* {elementSale} */}
         <Text style={styles.title} numberOfLines={2}>{dataProduct.name}</Text>
            {/* {elementPrice}
            {elementNewPrice}
         */}
          {/* <Text style={styles.price}> {this.currencyFormat(dataProduct.price)}</Text> */}
        
          {/* <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
                        <Text style={styles.appButtonText}>Thêm Giỏ Hàng</Text>
                    </TouchableOpacity> */}
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  title__sale: {
    position: 'absolute',
    left:     0,
    top:      0,
    borderRadius: 4,
    color: "white",
    fontSize: 18,
    backgroundColor:'#ff0000',

  },
  price__del:{
    textDecorationLine:'line-through',
  },
  title: {
    textTransform: "uppercase",
    marginTop: 16,
    width: 170,
    lineHeight:23,
    textAlign:'justify'
  },
  price: {
    marginBottom: 8,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
    paddingTop: 10,
  },
  productImage: {
    width: 170,
    height: 170,
    marginLeft:-5,
    borderRadius: 20 / 2,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff4500",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});