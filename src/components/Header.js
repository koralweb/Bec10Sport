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

  const headerHeight = showMenu ? Dimensions.get('window').height : 50;

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
  });

  return (
    <View style={styles.cont}>
      <View style={styles.workBlock}>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Image
            style={styles.bars}
            source={require('../assets/images/bars.png')}
          />
        </TouchableOpacity>
        {showMenu && <Menu />}
      </View>
    </View>
  );
};

export default Header;
