import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
class FavoriteScreen extends React.Component {
    render() {
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Yêu Thích', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Header2 />
                <View style={styles.container}>
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Dan' },
                            { key: 'Dominic' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'white',
        flex: 2,
        flexDirection: 'row',

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },
});
export default FavoriteScreen;