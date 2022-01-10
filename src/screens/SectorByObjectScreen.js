import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';

import Sector from '../components/Sector/Sector';
import * as actions from "../actions/Sector/SectorActions";

import { connect } from "react-redux";
class SectorByObjectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data2: []
        }
    }
    componentDidMount() {
        this.props.fetchSector();
    }
    render() {
        const { route, sector } = this.props;
        const { objectId } = route.params;

        let data = sector.filter(item => item.id_object === objectId);
        const { data2 } = this.state;
        const { navigation } = this.props;
        return (
            <>



                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <FlatList
                            data={data && data.length > 0 ? data : this.state.data2}
                            numColumns={2}
                            renderItem={({ item }) => <Sector data={item} onPress={() =>
                                navigation.navigate('Danh Mục Theo Khu Vực', {
                                    sectorId: item.id,
                                    sectorName: item.name,
                                })} />}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={styles.container}
                        />
                    </SafeAreaView>
                </View>

            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      
        
        justifyContent: 'center',
        borderRadius: 1
    },
    item: {
       
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ff4500',
    }
});
var mapStateToProps = (state) => {
    return {
        sector: state.sector,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {

        fetchSector: () => {
            return dispatch(actions.fetchSectorRequest())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SectorByObjectScreen);