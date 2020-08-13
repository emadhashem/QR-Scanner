import React, { useState } from 'react'
import { View , Text, Button, TouchableWithoutFeedback } from 'react-native'

//import {Video} from 'expo'
import { Video } from 'expo-av';
const Home = ({navigation , route}) => {   
    var data = ""
    if(route.params) {
        data = route.params.data;
    }
    return (
        <View style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center"
        }}>
            {/* <Text>
                {
                    (route.params) ? route.params.data.substring(0 , route.params.data.length - 4) : ""
                }
                
            </Text> */}
            
            <Video
                source={{uri : data.substring(0 , data.length - 4) + ".mp4"}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay = {false}
                isLooping
                style={{ width: 300, height: 300 }}
            />
            {/* </View></TouchableWithoutFeedback> */}
            <Button onPress = {() => navigation.navigate('qrScanner')} title = "scan code"/>
        </View>
    )
}

export default Home
