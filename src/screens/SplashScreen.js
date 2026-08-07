import { View,Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useEffect } from 'react';


export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logotipo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#149254',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 70,
  },
});