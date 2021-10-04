import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateSearch = (search) => {
        this.setState({ search });
    };
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const { search } = this.state;
        const buttons = ['Nam', 'Nữ', 'Trẻ Em', 'Trẻ Sơ Sinh']
        const { selectedIndex } = this.state
        return (
            <>
                <Header />
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 40 }}
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home!</Text>
                </View>
            </>
        );
    }
}

export default HomeScreen;