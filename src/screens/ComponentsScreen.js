import React from 'react';
import { Text , StyleSheet , View , Button} from 'react-native';

const ComponentsScreen = () => {
    const name = 'abdelaziz'
    return (
        <View>
            <Text style={styles.textStyle}> This is the components screen </Text>
            <Text style={styles.sectextStyle}>Abdelaziz</Text>
            <Button title='LOVE' color='red'></Button>
            <Text style={styles.subtextStyle}>Huda</Text>
        </View>
    )
};  

const styles = StyleSheet.create({
    textStyle: {
        textAlign:'center',
        fontSize: 30,
        padding:5
    },subtextStyle: {
        textAlign:'center',
        padding:5
    }


})

export default ComponentsScreen;