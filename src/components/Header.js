import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Menu from './Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const defaultHeight = 50;
  const headerHeight = showMenu
    ? Dimensions.get('window').height
    : defaultHeight;

  const styles = StyleSheet.create({
    cont: {
      position: 'relative',
      height: headerHeight,
    },
    workBlock: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimensions.get('window').width,
      height: headerHeight,
    },
    bars: {
      width: 90 / 2,
      height: 47 / 2,
    },
    topLine: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      height: defaultHeight,
    },
    cartIcon: {
      width: 89 / 2,
      height: 82 / 2,
    },
  });

  return (
    <View style={styles.cont}>
      <View style={styles.workBlock}>
        <View style={styles.topLine}>
          <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
            <Image
              style={styles.bars}
              source={require('../assets/images/bars.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.cartIcon}
              source={require('../assets/images/cartIcon.png')}
            />
          </TouchableOpacity>
        </View>

        {showMenu && <Menu />}
      </View>
    </View>
  );
};

export default Header;
