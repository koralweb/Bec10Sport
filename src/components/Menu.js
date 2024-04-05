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

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cont}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.menuBlock}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.push('Shop')}>
          <Text style={styles.menuItemText}>Меню</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Резерв стола</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Трансляции</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>События</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Контакты</Text>
        </TouchableOpacity>
      </View>
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
