import React from 'react';
import { View , Text , StyleSheet , Image } from 'react-native';

const ImageDetail = (props) =>{
    const { imgSrc , title } = props;
    return (
        <View>
            <Image source={imgSrc}/>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;