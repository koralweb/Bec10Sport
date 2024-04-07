import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import screensList from '../screens/screensList';

const Menu = () => {
  const navigation = useNavigation();

  const renderMenu = () => {
    return screensList
      .filter(screen => screen.showInMenu)
      .map(screen => (
        <TouchableOpacity
          key={screen.name}
          style={styles.menuItem}
          onPress={() => navigation.push(screen.name)}>
          <Text style={styles.menuItemText}>{screen.title}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.cont}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.menuBlock}>{renderMenu()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#2E9C45',
    marginTop: 'auto',
    height: Dimensions.get('window').height - 200,
  },
  logo: {},
  menuBlock: {},
  menuItem: {},
  menuItemText: {},
});

export default Menu;
