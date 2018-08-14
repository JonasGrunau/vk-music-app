import React from "react";
import {View, StyleSheet, Text, Image, TouchableNativeFeedback} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {theme} from "../../theme";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16,
        backgroundColor: "#263238",
        justifyContent: "space-between"
    },
    info: {
        alignItems: "center"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 16
    },
    coverImage: {
        padding: "50%"
    },
    titleText: {
        color: "white",
        fontSize: 22
    },
    artistText: {
        color: "white",
        fontSize: 20,
        opacity: theme.opacityLight
    },
    genericCover: {
        flex: 1,
        backgroundColor: "red"
    }
});

export default class PlayerScreen extends React.Component {
    static navigationOptions = {
        title: "Player",
        headerStyle: {
            backgroundColor: "#224b7a"
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
            fontWeight: "bold"
        },
    };

    handleOnPressPrevious = event => {
        // TODO implement
    };

    handleOnPressNext = event => {
        // TODO implement
    };

    handleOnPressPlayPause = event => {
        // TODO implement
    };

    render() {
        const {navigation} = this.props;
        const songData = navigation.getParam("songData", {id: 0, title: "fallback"});

        console.log(songData);
        const title = songData[3];
        const artist = songData[4];
        const cover = songData[14];

        return (
            <View style={styles.root}>
                {cover ? (
                    <Image source={{uri: cover}} style={styles.coverImage} resizeMode="contain"/>
                ):(
                    <View style={styles.genericCover}/>
                )}
                <View style={styles.info}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.artistText}>{artist}</Text>
                </View>
                <View style={styles.controls}>
                    <TouchableNativeFeedback onPress={this.handleOnPressPrevious}>
                        <Icon name="skip-previous" size={56} color="white" style={styles.icon}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.handleOnPressPlayPause}>
                        <Icon name="play-arrow" size={56} color="white" style={styles.icon}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.handleOnPressNext}>
                        <Icon name="skip-next" size={56} color="white" style={styles.icon}/>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}