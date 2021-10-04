import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
class CategoryScreen extends React.Component {
    render() {
        return (
            <>
                <Header />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>CategoryScreen!</Text>
                </View>
            </>
        );
    }
}
export default CategoryScreen;