import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
class FindScreen extends React.Component {
    render() {
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Tìm Kiếm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Header2 />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Các gợi ý tìm kiếm!</Text>
                </View>
            </>
        );
    }
}
export default FindScreen;