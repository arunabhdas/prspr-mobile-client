import React, { Component } from 'react';
import { View, Text, Stylesheet, Image } from 'react-native';

class Prspr extends Component {

    render() {
        return (
            <View>
                <Text>Welcome to Prspr</Text> 
                <Image 
                    style={{ width: 100, height: 100}}
                    source={{
                        uri:"https://cdn-images-1.medium.com/max/800/1*NvV8YbFKCH022zjqfazrRQ.jpeg"
                    }} 
                />
            </View>
        );
    }
}

export default Prspr