import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
//importação dos componentes e bibliotecas

export default function AcesseScreen({ navigation }) {
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const [ocultarSenha, setOcultarSenha] = useState(true);
//meso que na AcesseScreen.js, usa useState para definir o estado dos "olhinhos"
  return (
    <View style={styles.container}>
      <View style={styles.ContainerEsquerda}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Acesse")} //define navegação
            activeOpacity={0.7}
        >
            <Image
             source={require("../../assets/voltar.png")}
             style={styles.imagem} //importa imagem
             />
        </TouchableOpacity>
        
        <Text style={styles.texto1}>Cadastre-se</Text>
        <Text style={styles.texto2}>Informe seu E-mail e crie uma senha</Text>
        <Text style={styles.texto3}>E-mail</Text>
        
        <TextInput
            style={styles.input} //define input 
            placeholder='Digite seu E-mail'
            keyboardType='default'
        />

        <Text style={styles.texto3}>Crie uma senha</Text>
        
        <View style={styles.containerSenha}>
          <TextInput
              style={styles.inputSenha}
              placeholder='Digite sua senha'
              secureTextEntry={ocultarSenha} 
          />
          <TouchableOpacity //vai definir o estado dos "olhos" com o auxílio do operador ternário também
            style={styles.botaoOlho}
            onPress={() => setOcultarSenha(!ocultarSenha)}
            activeOpacity={0.7}
          >
            {ocultarSenha ? (
              <EyeOff size={20} color="#9ea6aa" />
            ) : (
              <Eye size={20} color="#00b050" />
            )}
          </TouchableOpacity>
        </View>

         <Text style={styles.texto3}>Repita senha</Text>
        
        <View style={styles.containerSenha}>
          <TextInput
              style={styles.inputSenha}
              placeholder='Digite sua senha'
              secureTextEntry={ocultarSenha} 
          />
          <TouchableOpacity 
            style={styles.botaoOlho}
            onPress={() => setOcultarSenha(!ocultarSenha)}
            activeOpacity={0.7}
          >
            {ocultarSenha ? (
              <EyeOff size={20} color="#9ea6aa" />
            ) : (
              <Eye size={20} color="#00b050" />
            )}
          </TouchableOpacity>
        </View>
      </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

      <Text style={[styles.textoBaixo, { marginTop: 20 }]}>
        ------------ Ou continue com ------------
      </Text>

          <View style={styles.containerImagens}>
            <Image
              source={require("../../assets/Google.png")}
              style={styles.imagemBaixo}
              />
      
            <Image
              source={require("../../assets/Facebook.png")}
              style={styles.imagemBaixo}
            />
            </View>
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
  ContainerEsquerda: {
    width: '90%', 
    alignItems: 'flex-start', 
  },

  containerImagens: {
    flexDirection: 'row',       
    justifyContent: 'space-between', 
    width: '40%',               
    marginTop: 6,
    marginBottom: 8 
  },

  imagem: {
    width: 30,
    height: 24,
  },
  
   imagemBaixo: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botao: {
    backgroundColor: '#00b050',
    paddingVertical: 13,
    paddingHorizontal: 140,
    width: '48%',               
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 40
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',          
  },
 
  texto1: {
    color: "#363434",
    fontWeight: '700',
    fontSize: 33,
    marginBottom: 1
  },
  textoBaixo: {
    color: "#363434",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: '700'
  },
  texto2: {
    color: "#363434",
    fontSize: 11,
    marginBottom: 20,
    fontWeight: '700'
  },
  texto3: {
    color: "#363434",
    fontWeight: '600',          
    fontSize: 12,
    marginLeft: 5, 
  },
  input: {
    backgroundColor: '#dee5ec',
    width: '100%', 
    height: 40,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 3,
    fontSize: 12,
    fontWeight: '500',          
    color: '#9e9494'            
  },
  containerSenha: {
    flexDirection: 'row',
    backgroundColor: '#dee5ec',
    width: '100%',
    height: 40,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 3,
    alignItems: 'center',
  },
  inputSenha: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 12,
    fontWeight: '500',
    color: '#9e9494',
  },
  botaoOlho: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
