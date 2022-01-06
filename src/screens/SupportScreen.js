import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import Bill from "../components/Bill/Bill";
import * as actions from "../actions/Bill/BillsActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SupportScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <View>
                    <Text>
                        Vui lòng liên hệ: 0352393384 hoặc địa chỉ trực tiếp 140 lê trọng tấn...
                    </Text>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 1,
    },
    test: {
        flex: 1,
        marginTop: 10,
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
    ButtonGoCheckOut: {
        backgroundColor: "red",
        color: "white",
        height: 40,
        paddingBottom: 40,
    },
    ButtonGoHomeContainer: {
        flexDirection: "row",
        backgroundColor: "#00ff7f",
        borderRadius: 25,
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    ButtonGoHome: {
        fontSize: 28,
        color: "tomato",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        paddingLeft: 9,
    },
    ButtonPay: {
        fontSize: 28,
        color: "tomato",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        paddingLeft: 9,

    },
});
export default SupportScreen;
