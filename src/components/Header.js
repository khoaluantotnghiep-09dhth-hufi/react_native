import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class Header extends React.Component {
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
                <View style={{ flexDirection: 'row', paddingTop: 4, paddingBottom: 4 }}>
                    <SearchBar
                        placeholder="Bạn tìm gì hôm nay ?"
                        onChangeText={this.updateSearch}
                        value={search}
                        lightTheme="default"
                        containerStyle={{ width: 350 }}
                    />
                    <View style={{ paddingTop: 10, paddingLeft: 6 }}>
                        <FontAwesome name="shopping-cart" size={44} color="red" />
                    </View>
                </View>
            </>
        );
    }
}

export default Header;