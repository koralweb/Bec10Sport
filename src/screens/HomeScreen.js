import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <View style={styles.logoBox}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <ImageBackground
        style={styles.bg}
        source={require('../assets/images/homeBg.png')}>
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
      </ImageBackground>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  logoBox: {},
  logo: {},
  menuBlock: {},
  menuItem: {},
  menuItemText: {},
});

export default HomeScreen;
