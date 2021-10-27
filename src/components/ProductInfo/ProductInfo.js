import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import * as actionsCart from "../../actions/Cart/CartActions";
import * as actionsProductFavorite from "../../actions/ProductFavorite/ProductFavoriteActions";

import { connect } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setIsVisible: false,
      quantity: 1,
      idColor: "",
      idSize: "",
      ColorSizeArr: [],
      liked: false,
      setLiked: false,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.dataproductInfoSizeColor !== this.props.dataproductInfoSizeColor
    ) {
      let arrColor = this.props.dataproductInfoSizeColor;
      this.setState({
        ColorSizeArr: arrColor,
        idColor: arrColor && arrColor.length > 0 ? arrColor[0].idColor : "",
        idSize: arrColor && arrColor.length > 0 ? arrColor[0].idSize : "",
      });
    }
  }
  _handlePress = () => {
    this.setState({
      setIsVisible: true,
    });
  };
  onChangedQuantityPlus = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  onChangedQuantityMinus = () => {
    if (this.state.quantity < 1 || this.state.quantity === 1) {
      alert("Số lượng fai lớn hơn 0");
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };
  onChangeSelectSize = (value) => {
    this.setState({
      idSize: value,
    });
  };
  onChangeSelectColor = (value) => {
    this.setState({
      idColor: value,
    });
  };
  onAddCart = (product) => {
    let { dataProductInfo, productId, dataproductInfoSizeColor } = this.props;

    for (let i = 0; i < dataproductInfoSizeColor.length; i++) {
      console.log(
        "Xem cai ProductInfoSize:" + "\n\n" + dataproductInfoSizeColor[i].id+"\n"+dataproductInfoSizeColor[i].id_product
      );
    }
    let dataID = dataproductInfoSizeColor.map((item, index) => {
      return item.id;
    });

    let { quantity, idColor, idSize } = this.state;
    var result = null;
    result = product.find((product) => product.id === productId);
    ///Nếu SP có khuyến mãi phải tính giá khuyễn mãi mới bỏ vào giỏ
    if (result.percentSale) {
      var newPrice = (parseInt(result.percentSale) / 100) * result.price;
    }

    var product = {
      /// Lấy đúng mã id_product_info sẽ thanh toán được
      id_product_info: dataID,
      name: result.name,
      image: result.image,
      quantity: quantity,
      nameColor: dataproductInfoSizeColor.nameColor,
      nameSize: dataproductInfoSizeColor.nameSize,
      idColor: idColor,
      idSize: idSize,
      priceSale: newPrice,
      price: dataProductInfo.price,
    };
    //Dang khong lay duocj id_product
    console.log("Cart dang them  id_product_info: " + "\n" + dataID);
    this.props.AddCart(product, quantity);
  };
  currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ";
  };

  /// other them sp yeu thich
  clickLikeProduct = (dataProductInfo) => {
    var { liked } = this.state;

    if (liked === false) {
      this.props.AddProductFavorite(dataProductInfo);
    } else {
      this.props.DeleteProductFavorite(dataProductInfo);
    }
    this.setState({
      liked: !this.state.liked,
    });
  };
  //kiem tra co ton tại favorite
  isExistFavorite = (product, arrFavorite) => {
    if (
      arrFavorite.filter((item) => item.id_product === product.id_product)
        .length > 0
    ) {
      return true;
    }
    return false;
  };
  render() {
    const {
      dataProductInfo,
      dataproductInfoSizeColor,
      product,
      productFavorite,
    } = this.props;
    var { liked } = this.state;

    let { idColor, idSize, quantity } = this.state;
    const { navigation } = this.props;

    //Sản Phẩm Có Sale thì hiện
    var elementSale =
      dataProductInfo.percentSale === "0" ? null : (
        <Text style={styles.title__sale} numberOfLines={2}>
          {dataProductInfo.percentSale} %
        </Text>
      );
    // Tính Giá SP khi Sale
    if (dataProductInfo.percentSale > 0) {
      var cacularSale =
        (parseInt(dataProductInfo.percentSale) / 100) * dataProductInfo.price;
      var newPrice = dataProductInfo.price - cacularSale;
    }
    //Hiển Thị Giá Sale
    var elementNewPrice = newPrice ? (
      <Text style={styles.price}> {this.currencyFormat(newPrice)}</Text>
    ) : null;

    var elementPrice = elementNewPrice ? (
      <Text style={styles.price__del}>
        {" "}
        {this.currencyFormat(dataProductInfo.price)}
      </Text>
    ) : (
      <Text style={styles.price}>
        {" "}
        {this.currencyFormat(dataProductInfo.price)}
      </Text>
    );
    return (
      <>
        <View style={styles.container}>
          <Image
            source={{ uri: dataProductInfo.image }}
            style={styles.productImage}
          ></Image>
          {elementSale}
          <Text style={styles.title}>{dataProductInfo.name}</Text>
          {elementPrice}
          {elementNewPrice}
          <View style={styles.appButtonContainerMain}>
            <TouchableOpacity
              style={styles.appButtonContainerAddCart}
              onPress={() => this.RBSheet.open()}
            >
              <FontAwesome
                name="cart-plus"
                size={36}
                color="#1e1e1e"
                style={styles.appButtonText}
              />
              <Text style={styles.appButtonText}>Thêm Giỏ Hàng</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                this.clickLikeProduct(dataProductInfo);
              }}
            >
              {this.isExistFavorite(dataProductInfo, productFavorite) ? (
                <AntDesign name="heart" size={24} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              )}
              <Text style={{ marginLeft: 10 }}>
                {liked ? "Danh sách yêu thích" : "Gỡ khỏi danh sách yêu thích"}
              </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
          </View>
          <Text style={styles.description}>
            Mô Tả: {dataProductInfo.description}
          </Text>
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            height={340}
            width={200}
            openDuration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                borderRadius: 30 / 2,
              },
            }}
          >
            <Text style={styles.textSizeColor}>Kích Cỡ</Text>
            <Picker
              selectedValue={idSize}
              style={styles.textPickerel}
              onValueChange={(itemValue, itemIndex) =>
                this.onChangeSelectSize(itemValue)
              }
            >
              {dataproductInfoSizeColor &&
                dataproductInfoSizeColor.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.nameSize}
                      value={item.idSize}
                      key={index}
                    />
                  );
                })}
            </Picker>
            <Text style={styles.textSizeColor}>Màu</Text>
            {/*  */}
            <Picker
              selectedValue={idColor}
              style={styles.textPickerel}
              onValueChange={(itemValue, itemIndex) =>
                this.onChangeSelectColor(itemValue)
              }
            >
              {dataproductInfoSizeColor &&
                dataproductInfoSizeColor.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.nameColor}
                      value={item.idColor}
                      key={index}
                    />
                  );
                })}
            </Picker>
            <Text style={styles.textSizeColor}>Số Lượng</Text>
            {/*  */}
            <View style={styles.containerQuantity}>
              <TouchableOpacity
                style={styles.buttonContainerQuantity}
                onPress={() => this.onChangedQuantityMinus()}
              >
                <Text style={styles.buttonQuantity}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.quantity}
                // onChangeText={(text) => this.onChanged(text)}
                maxLength={10}
                value={quantity.toString()}
              />
              <TouchableOpacity
                style={styles.buttonContainerQuantity}
                onPress={() => this.onChangedQuantityPlus()}
              >
                <Text style={styles.buttonQuantity}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => this.onAddCart(product)}
            >
              <Text style={styles.appButtonText2}>Thêm</Text>
            </TouchableOpacity>
          </RBSheet>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  title__sale: {
    position: "absolute",
    left: 16,
    top: 16,
    height: 40,
    width: 60,
    paddingTop: 8,
    textAlign: "center",
    borderRadius: 4,
    color: "white",
    fontSize: 20,
    backgroundColor: "#ff0000",
  },
  price__del: {
    textDecorationLine: "line-through",
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "justify",
    color: "#ff4500",
    marginTop: 16,
  },
  price: {
    marginBottom: 8,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 22,
    color: "#ff4500",
    paddingTop: 10,
  },
  description: {
    marginBottom: 8,
    fontWeight: "normal",
    fontSize: 18,
    color: "black",
    paddingTop: 10,
  },
  productImage: {
    width: 380,
    height: 500,
    borderRadius: 30 / 2,
  },
  buttons: {
    color: "#ff4500",
    fontWeight: "bold",
    fontSize: 18,
  },
  appButtonContainerMain: {
    flexDirection: "row",
    paddingRight: 20,
    justifyContent: "flex-start",
    paddingLeft: 2,
    paddingRight: 2,
    flex: 1,
  },
  appButtonContainerPay: {
    elevation: 8,
    backgroundColor: "#ff4500",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 190,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff4500",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 28,
  },
  appButtonContainerAddCart: {
    width: 190,
    flexDirection: "row",
    elevation: 8,

    backgroundColor: "#00ff7f",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",

    textTransform: "uppercase",

    paddingRight: 10,
  },
  appButtonText2: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textSizeColor: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  textPickerel: {
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#ff4500",
  },
  quantity: {
    alignSelf: "center",
    width: 20,
    color: "#ff4500",
    fontSize: 18,
    paddingLeft: 7,
  },
  containerQuantity: {
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
  },
  buttonContainerQuantity: {
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonQuantity: {
    fontSize: 28,
  },
});
var mapStateToProps = (state) => {
  return {
    product: state.product,
    cart: state.cart,
    productFavorite: state.productFavorite,
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    AddCart: (product, quantity) => {
      return dispatch(actionsCart.addToCart(product, quantity));
    },
    AddProductFavorite: (productFavorite) => {
      return dispatch(
        actionsProductFavorite.addProductFavorite(productFavorite)
      );
    },
    DeleteProductFavorite: (productFavorite) => {
      return dispatch(
        actionsProductFavorite.removeProductFavorite(productFavorite)
      );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
