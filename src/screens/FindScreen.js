import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
class FindScreen extends React.Component {
    render() {
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Find!</Text>
                </View>
            </>
        );
    }
}
export default FindScreen;