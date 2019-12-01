import React from 'react';
import { Text, StyleSheet , View , Button , TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = (props) => {
  const { navigate } = props.navigation
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button 
        title='Go To Components Demo' 
        onPress={() => navigate('Components') }
      />
      <Button 
        title='Go To List Demo' 
        onPress={() => navigate('List') }
      />
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
