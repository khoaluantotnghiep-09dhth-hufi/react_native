import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import * as actionsRating from "../actions/Rating/RatingProduct";
import RatingProductt from '../components/Rating/RatingProduct';
class RatingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchRating();

    }
    render() {
        const { navigation } = this.props;
        let { ratingProduct } = this.props;
        let dataRating = ratingProduct.map((item, index) => {
            return item;
        })
        (dataRating);
        return (
            <>
                <View>
                    <Text style={styles.titleRating}>
                        Lượt đánh giá
                    </Text>
                    <SafeAreaView>
                        <FlatList
                            data={dataRating}
                            renderItem={({ item }) => <RatingProductt dataRating={item} key={item.id}
                                onPress={() =>
                                    navigation.navigate('Đánh Giá')} navigation={navigation} />}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={styles.container}
                        >
                        </FlatList>
                    </SafeAreaView>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        width: '100%'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

});
var mapStateToProps = (state) => {
    return {
        ratingProduct: state.ratingProduct,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchRating: () => {
            return dispatch(actionsRating.fetchRatingRequest());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RatingScreen);