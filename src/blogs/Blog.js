import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Container } from 'native-base';
import apiCall from '../services/apiCall'

export default class Blog extends Component {
    state = {
        data: {},
        pageNumber: 1,
    }

    componentWillMount = () => {
        let pageNo = this.state.pageNumber;
        apiCall('getNewsBulletin').then((respData) => this.setState({ data: JSON.stringify(respData) }))
            .catch((error) => this.setState({ data: error }) );
    }

    render() {
        return (
            <Container>
                {
                    this.state.data !== "undefined" ?
                        this.state.data.lisOfBulletins.map((blog) => {
                            <Card>
                                <CardItem>
                                    <Body>
                                        <Text>blog.headLine</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        }) : null
                }
            </Container>
        );
    }
}