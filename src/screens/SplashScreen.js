import { View,Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useEffect } from 'react';
//importação dos componentes e bibliotecas


export default function SplashScreen({ navigation }) {

  useEffect(() => { //define tempo e pra qual página será redirecionado
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}> 
      <Image   //importa magem da pasta assets
        source={require("../../assets/logotipo.png")}
        style={styles.logo}
      />
    </View>
  );
}

//estilização
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