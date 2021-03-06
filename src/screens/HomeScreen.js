import React from "react";
import {
  FlatList, LogBox, SafeAreaView, ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../actions/Banner/BannerActions";
import * as actionsCategory from "../actions/Category/CategoryActions";
import * as actionsProduct from "../actions/Product/ProductActions";
import Category from "../components/Category/Category";
import Products from "../components/Product/Products";
import callApi from "./../constants/CallAPI";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      selectedIndex: 2,
      activeIndex: 0,
      data2: [],
      dataProductAPI: [],
      dataBannerAPI: [],
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategory();
    callApi("products-adminMobile", "GET", null).then((response) => {
      this.setState({
        dataProductAPI: response.data,
      });
    });
    callApi("banners", "GET", null).then((response) => {
      this.setState({
        dataBannerAPI: response.data,
      });
    });
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  render() {
    const {  dataProductAPI,dataBannerAPI } = this.state;
    const { navigation } = this.props;
   
    
    let { category } = this.props;

    let dataBanner = dataBannerAPI.map((item, index) => {
      return item.image;
    });
    let dataProduct = dataProductAPI.map((item, index) => {
      return item;
    });
    let data = category.map((item, index) => {
      return item;
    });
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            height: 70,
            paddingTop: 9,
            backgroundColor: "white",
            paddingBottom: 9,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("T??m Ki???m")}
            style={styles.search}
          >
            <View style={{ paddingTop: 12, paddingLeft: 15 }}>
              <FontAwesome name="search" size={34} color="black" />
            </View>
            <Text
              style={{
                width: 320,
                height: 70,
                paddingLeft: 15,
                fontSize: 27,
                color: "#ff4500",
                paddingTop: 12,
              }}
            >
              B???n t??m g?? h??m nay ?
            </Text>
          </TouchableOpacity>
          <View style={{ paddingTop: 12, justifyContent: "flex-end" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Gi??? H??ng")}
            >
              <FontAwesome name="shopping-cart" size={34} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {dataProduct && dataProduct.length > 0 && data && data.length > 0 ? (
          <>
            <ScrollView>
              <SliderBox
                images={
                  dataBanner && dataBanner.length > 0
                    ? dataBanner
                    : this.state.data2
                }
                sliderBoxHeight={200}
                sliderBoxWidth={500}
                onCurrentImagePressed={(index) =>
                  console.warn(`image ${index} pressed`)
                }
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={"resize"}
                resizeMode={"cover"}
                ImageComponentStyle={{
                  borderRadius: 15,
                  width: "100%",
                  marginTop: 5,
                }}
                imageLoadingColor="#2196F3"
                paginationBoxStyle={{
                  position: "absolute",
                  bottom: 0,
                  padding: 0,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  paddingVertical: 10,
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(128, 128, 128, 0.92)",
                }}
              />
              <Text style={styles.title}>Danh M???c</Text>
              <SafeAreaView>
                <ScrollView horizontal={true}>
                  <FlatList
                    data={data && data.length > 0 ? data : this.state.data2}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <Category
                        data={item}
                        onPress={() =>
                          navigation.navigate("S???n Ph???m Theo Danh M???c", {
                            categoryId: item.id,
                            categoryName: item.name,
                          })
                        }
                      />
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                  />
                </ScrollView>
                <FlatList
                  data={
                    dataProduct && dataProduct.length > 0
                      ? dataProduct
                      : this.state.data2
                  }
                  numColumns={2}
                  renderItem={({ item }) => (
                    <Products
                      dataProduct={item}
                      onPress={() =>
                        navigation.navigate("Chi Ti???t S???n Ph???m", {
                          productId: item.id,
                        })
                      }
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item) => `${item.id}`}
                  contentContainerStyle={styles.container}
                  ListHeaderComponent={() => (
                    <Text style={styles.title}>S???n Ph???m M???i</Text>
                  )}
                ></FlatList>
              </SafeAreaView>
            </ScrollView>
          </>
        ) : (
          <View>
            <Text>H??? th???ng ??ang l???i ! Vui l??ng th??? l???i</Text>
          </View>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff4500",
  },
  search: {
    flexDirection: "row",
    width: "90%",
  },
});
var mapStateToProps = (state) => {
  return {
    banner: state.banner,
    product: state.product,
    category: state.category,
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    fetchBanner: () => {
      return dispatch(actions.fetchBannerRequest());
    },
    fetchProduct: () => {
      return dispatch(actionsProduct.fetchProductRequest());
    },
    fetchCategory: () => {
      return dispatch(actionsCategory.fetchCategoryRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
