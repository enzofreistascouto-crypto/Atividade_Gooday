
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/casual_dog.png")}
        style={styles.imagem}
      />

      <TouchableOpacity
        style={styles.botao}
        //onPress={() => navigation.navigate("Perfil")}
        //activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>
          Ir para Perfil
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagem: {
    width: 250,
    height: 200,
  },

  botao: {
    marginTop: 40,
    backgroundColor: '#149254',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 5,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
  },
});
