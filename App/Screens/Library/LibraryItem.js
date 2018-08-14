import React from "react";
import {Text, View, StyleSheet, TouchableNativeFeedback, Platform} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {theme} from "../../theme";

const styles = StyleSheet.create({
    item: {
        padding: 16,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between"
    },
    info: {
        flexDirection: "column",
        flex: 1
    },
    duration: {
        justifyContent: "center"
    },
    options: {
        justifyContent: "center",
        paddingLeft: 8
    },
    titleText: {
        fontSize: 18
    },
    artistText: {
        opacity: theme.opacityLight
    },
    durationText: {
        fontSize: 14,
        opacity: theme.opacityLight
    },
    moreIcon: {
        opacity: theme.opacityLight
    }
});

export default class LibraryItem extends React.PureComponent {
    handleOnPress = () => {
        this.props.onItemPress(this.props.songData);
    };

    handleOnMorePress = () => {
        // TODO implement
    };

    render() {
        const {songData} = this.props;

        const title = songData[3];
        const artist = songData[4];
        const duration = songData[5];

        return (
            <View>
                <TouchableNativeFeedback
                    onPress={this.handleOnPress}
                    background={Platform.OS === "android" ? TouchableNativeFeedback.SelectableBackground() : ""}
                >
                    <View style={styles.item}>
                        <View style={styles.info}>
                            <Text style={styles.titleText}>{title}</Text>
                            <Text style={styles.artistText}>{artist}</Text>
                        </View>
                        <View style={styles.duration}>
                            <Text style={styles.durationText}>{duration}</Text>
                        </View>
                        <View style={styles.options}>
                            <Icon name="more-vert" size={28} color="black" style={styles.moreIcon}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}