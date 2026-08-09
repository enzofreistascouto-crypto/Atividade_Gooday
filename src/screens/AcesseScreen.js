import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function AcesseScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.texto1}>
        Ótimo dia!
      </Text>

      <Text style={styles.texto2}>
        Como deseja acessar?
        </Text>

      <TouchableOpacity
        style={styles.botao}
        //onPress={() => navigation.navigate("Perfil")}
        //activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>
          Como deseja acessar?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao2}
        //onPress={() => navigation.navigate("Perfil")}
        //activeOpacity={0.7}
      >
        <Text style={styles.textoBotao2}>
          Outras opções
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
    width: 300,
    height: 240,
  },

  botao: {
    marginTop: 40,
    backgroundColor: '#00b050',
    paddingVertical: 13,
    paddingHorizontal: 65,
    borderRadius: 5,
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
    fontWeight: 460
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
