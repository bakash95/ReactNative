import React, { Component } from 'react';
import { View, NavigationBar, Title, Icon, Button } from '@shoutem/ui';
import Blog from '../blogs/Blog';
import { Container, Header, Body, Text } from 'native-base';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#5E6A71',borderColor:'#940000',width:'100%'}}>
                    <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center',height:'20%',}}>
                        <Text style={{color:'#940000'}}>Blog App</Text>
                    </Body>
                </Header>
                <Blog></Blog>
            </Container>
        );
    }
}

export default Home;