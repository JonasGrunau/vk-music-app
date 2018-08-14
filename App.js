import React from "react";
import {createStackNavigator} from "react-navigation";
import LibraryScreen from "./App/Screens/Library/LibraryScreen";
import PlayerScreen from "./App/Screens/Player/PlayerScreen";

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}

const RootStack = createStackNavigator({
    Library: LibraryScreen,
    Player: PlayerScreen
}, {
    initialRouteName: "Library"
});