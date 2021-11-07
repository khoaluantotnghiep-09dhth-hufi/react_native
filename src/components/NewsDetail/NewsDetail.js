import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  Swiper,
  ScrollView
} from "react-native";
import HTMLView from 'react-native-htmlview';
export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data, onPress } = this.props;
    console.log(data)

    return (
      <>
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={{ uri: data.image }}
            style={styles.productImage}
          ></Image>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.dateCreate}>Ngày đăng: {data.date}</Text>
          <HTMLView
            value={data.descriptionHTML}
            stylesheet={styles.description}
          />
        </ScrollView>

      </>
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
  dateCreate: {
    textTransform: "uppercase",
    marginBottom: 8,
    paddingTop: 10,
    textAlign: "center",
    fontSize: 18,
    color: "black",
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    paddingTop: 10,
    textAlign: "center",
    fontSize: 20,
    color: "#ff4500",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
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
    width: 400,
    height: 400,
    borderRadius: 150 / 2,
  },
  wrapper: {
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: "#ff4500",
  },
});
