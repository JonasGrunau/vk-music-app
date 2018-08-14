import React from "react";
import {FlatList, View} from "react-native";
import LibraryItem from "./LibraryItem";

export default class LibraryScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            musicList: []
        };

        this.fetchMusicList();
    }

    fetchMusicList = () => {
        fetch("http://92.42.47.38/?token=2000")
            .then(result => result.json())
            .then(result => this.setState({musicList: result.payload}));
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

    handleOnItemPress = songData =>{
        this.props.navigation.navigate("Player", {"songData": songData});
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.musicList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <LibraryItem songData={item} onItemPress={this.handleOnItemPress}/>}
                />
            </View>
        );
    }
}