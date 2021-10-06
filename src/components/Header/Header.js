import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
class HeaderCo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }
    updateSearch = (search) => {
        this.setState({ search });
    };
    render() {

        const { search } = this.state;
        return (
            <>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 50 }}>
                    <View style={{ paddingTop: 12, paddingLeft: 15 }}>
                        <FontAwesome name="search" size={24} color="black" />
                    </View>
                    <TextInput
                        placeholder="Bạn tìm gì hôm nay ?"
                        onChangeText={this.updateSearch}
                        value={search}
                        lightTheme="default"
                        style={{ width: 340, height: 50, paddingLeft: 8, fontSize: 20, backgroundColor: 'white' }}
                    />
                    <View style={{ paddingTop: 12, paddingLeft: 0 }} >
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Giỏ Hàng')}
                        >
                            <FontAwesome name="shopping-cart" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                </View>
            </>
        );
    }
}

export default HeaderCo;