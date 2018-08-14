import React from "react";
import {FlatList, View, ActivityIndicator, StyleSheet} from "react-native";
import LibraryItem from "./LibraryItem";

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default class LibraryScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            musicList: []
        };

        this.fetchMusicList();
    }

    fetchMusicList = () => {
        fetch("http://92.42.47.38/")
            .then(result => result.json())
            .then(result => this.setState({musicList: result.payload, isLoaded: true}))
            .catch(error => console.error(error));
    };

    static navigationOptions = {
        title: "Music",
        headerStyle: {
            backgroundColor: "#224b7a"
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
            fontWeight: "bold"
        },
    };

    handleOnItemPress = () => songData => {
        this.props.navigation.navigate("Player", {"songData": songData});
    };

    render() {
        if (this.state.isLoaded) {
            return (
                <View>
                    <FlatList
                        data={this.state.musicList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={
                            ({item}) => <LibraryItem songData={item} onItemPress={this.handleOnItemPress(item)}/>
                        }
                    />
                </View>
            );
        }
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator color="#224b7a" size="large"/>
            </View>
        );
    }
}