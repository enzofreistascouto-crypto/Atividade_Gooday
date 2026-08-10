
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
//importação dos componentes e bibliotecas

export default function HomeScreen({ navigation }) {
  return (  //retorna os textos, imagens, "botões"
    <View style={styles.container}>

      <Image
        source={require("../../assets/casual_dog.png")}
        style={styles.imagem}
      />
      <Text style={styles.texto1}>
        Ótimo dia!
      </Text>

      <Text style={styles.texto2}>
        Como deseja acessar?
        </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Acesse")}
        activeOpacity={0.7}
      >
        <Image
        source={require("../../assets/Google.png")}
        style={styles.imagemGoogle}
      />

        <Text style={styles.textoBotao}>
          Como deseja acessar?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao2}
        onPress={() => navigation.navigate("Acesse")}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao2}>
          Outras opções
        </Text>
      </TouchableOpacity>

    </View>
  );
}

//estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagem: {
    width: 300,
    height: 240,
  },

  imagemGoogle: {
    width: 30,
    height: 30,
    marginRight: 30,
    backgroundColor: '#c5bfbf',
    borderRadius: 2
  },

  botao: {
    marginTop: 40,
    backgroundColor: '#00b050',
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  botao2: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 13,
    paddingHorizontal: 85,
    borderRadius: 5,
    borderWidth: 2, 
    borderStyle: 'solid',
    borderColor: '#00b050'
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 460,
    marginRight: 50
  },

  textoBotao2: {
    color: '#363434',
    fontSize: 13,
    fontWeight: 500
  },

  texto1: {
    color: "#363434",
    fontWeight: 700,
    fontSize: 33,
    marginTop: 30
  },

  texto2: {
    color: "#363434",
    fontWeight: 600,
    fontSize: 13,
    marginTop: 10,
    fontWeight: 650,
    textAlign: "justify"
  }
});
