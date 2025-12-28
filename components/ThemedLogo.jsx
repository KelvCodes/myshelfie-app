import { Image, StyleSheet, useColorScheme } from 'react-native';

// images
const LightLogo = require('../assets/images/logo_light.png');
const DarkLogo = require('../assets/images/logo_dark.png'); 

const ThemedLogo = () => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;

  return (
    <Image source={logo} style={styles.logo} />
  );
};

export default ThemedLogo;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
