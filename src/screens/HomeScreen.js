import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List } from 'react-native';
import { SearchBar, ButtonGroup, Button, Icon, Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header2 from '../components/Header';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedIndex: 2,
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
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Trang Chủ', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Header2 />
                <View style={{ backgroundColor: 'white', flexDirection: 'column' }}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        selectedButtonStyle={{
                            backgroundColor: 'black',
                            color: 'black',
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                            // marginBottom: 30,
                        }}
                        containerStyle={{
                            height: 40,
                            color: 'black',
                            fontWeight: "bold",
                            backgroundColor: 'white',
                            borderRadius: 0,
                            borderColor: 'white',
                            elevation: 0,
                            alignItems: 'center',
                        }}
                    />

                </View>

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
export default HomeScreen;