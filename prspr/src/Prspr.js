import React, { Component } from 'react';
import { View, Text, Stylesheet, Image } from 'react-native';

class Prspr extends Component {

    render() {
        return (
            <View style={{ flex:1, width: 100 + "%", height: 100 + "%"}}>
                <View style={{ width: 100 + "100%", height: 75}}/>
                <Image 
                    style={{ width: 100 + "%", height: 100 + "%"}}
                    source={{
                        uri:"https://cdn-images-1.medium.com/max/800/1*NvV8YbFKCH022zjqfazrRQ.jpeg"
                    }} 
                />
            </View>
        );
    }
}

export default Prspr