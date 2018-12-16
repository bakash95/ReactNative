import { createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';

class HomeNav extends Component {
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('home')}
                title="Go to Home"
            />
        )
    }
}
export default createBottomTabNavigator({
    Page1: {
        screen: HomeNav,
    },
});