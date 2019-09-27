import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        elevation: 10,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          letterSpacing: 5,
          textTransform: 'uppercase',
        }}>
        Todo
      </Text>
    </View>
  );
};

export default Header;
