import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Header2 from '../components/Header/Header';
import * as actionsRating from "../actions/Rating/RatingProduct";
import { connect } from "react-redux";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // componentDidMount() {
    //     this.props.fetchRating();

    // }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TextInput style={styles.titleSearch}
                        placeholder="Nhập vào để tìm !"
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.buttonSearch1}>
                        <View style={{ paddingTop: 7, paddingLeft: 7 }}>
                            <FontAwesome name="search" size={24} color="black" />
                        </View>
                        <Text style={styles.buttonSearch2}>
                            Tìm Kiếm
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: '6%',
        paddingLeft: 5,
    },
    titleSearch: {
        width: '65%',
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonSearch1: {
        flexDirection: 'row',
        width: '35%',
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
    },
    buttonSearch2: {
        paddingLeft: 7,
        width: '100%',
        paddingTop: 7,
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },
});
// var mapStateToProps = (state) => {
//     return {
//         ratingProduct: state.ratingProduct,
//     };
// };
// var mapDispatchToProps = (dispatch, props) => {
//     return {
//         fetchRating: () => {
//             return dispatch(actionsRating.fetchRatingRequest());
//         },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
export default SearchScreen;