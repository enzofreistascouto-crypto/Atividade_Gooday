import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
//importação dos componentes e bibliotecas

export default function AcesseScreen({ navigation }) {
  const [lembrarSenha, setLembrarSenha] = useState(false);  //usa o useState para alterar os valores de acordo com que os ícones são pressionados
  const [ocultarSenha, setOcultarSenha] = useState(true);
  const [email, setEmail] = useState(""); //"passa os valores" digitados de email e senha;
  const [senha, setSenha] = useState("");
  const [loginValid, setLoginValid] = useState(0);

  function acessar(){

    if(
      email === 'EnzoFreitasCouto' && senha === '190609'
    ){
      setLoginValid(true)
    } else {
      setLoginValid(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.ContainerEsquerda}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Home")}  //define navegação de volta à primeira página
            activeOpacity={0.7}
        >
            <Image
             source={require("../../assets/voltar.png")}
             style={styles.imagem}
             />
        </TouchableOpacity>
        
        <Text style={styles.texto1}>Acesse</Text>
        <Text style={styles.texto2Form}>Com E-mail e senha</Text>
        <Text style={styles.texto3}>E-mail</Text>
        

        <TextInput   
            style={styles.input}
            placeholder='Digite seu E-mail'
            keyboardType='default'
            onChangeText={setEmail}
            value={email}
        />
        <Text style={styles.texto3}>Senha</Text>
        
        <View style={styles.containerSenha}>
          <TextInput
              style={styles.inputSenha}
              placeholder='Digite sua senha'
              secureTextEntry={ocultarSenha} 
              onChangeText={setSenha}
              value={senha}
          />
          <TouchableOpacity //usa um operador ternário (quase um if/else) para decidir como o "olho" deve ficar em cada estado 
            style={styles.botaoOlho}
            onPress={() => setOcultarSenha(!ocultarSenha)} //define a váriavel que vai definir o estado do "olhinho"
            activeOpacity={0.7}
          > 
            {ocultarSenha ? (<EyeOff size={20} color="#9ea6aa" />) : (<Eye size={20} color="#00b050" />)}
          </TouchableOpacity>
        </View>

        <View style={styles.containerResposta}>
        <Text style={[styles.textoCorreto, loginValid ? {display: "block"} : {display: 'none'}]}>Login completo!</Text>
        <Text style={[styles.textoIncorreto, !loginValid ? {display: "block"} : {display: 'none'}]}>Login incorreto!</Text>
        </View>

        <View style={styles.linhaOpcoes}> 
          <TouchableOpacity 
            style={styles.checkboxContainer} //essas próximas linhas definem o checkbox
            onPress={() => setLembrarSenha(!lembrarSenha)} 
            activeOpacity={0.8}
          >
            <View style={[
              styles.checkbox, 
              lembrarSenha && styles.checkboxSelecionado 
            ]}>
              {lembrarSenha && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.textoCheckbox}>Lembrar senha</Text>
          </TouchableOpacity>

          <Text style={styles.textoEsqueci}>
            Esqueci minha senha
          </Text>
        </View>
      </View>

      <View style={styles.containerBotoes}>
        <TouchableOpacity style={
          styles.botao}
          onPress={() => acessar()}>
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("Cadastro")}
        activeOpacity={0.7}
        style={styles.botao2}
        >
          <Text style={styles.textoBotao2}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.texto2, { marginTop: 20 }]}>
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

  containerBotoes: {
    flexDirection: 'row',       
    justifyContent: 'space-between', 
    width: '90%',               
    marginTop: 15, 
    marginBottom: 30
  },

  containerImagens: {
    flexDirection: 'row',       
    justifyContent: 'space-between', 
    width: '40%',               
    marginTop: 15, 
  },

   containerResposta: {
    flexDirection: 'row',       
    justifyContent: 'center', 
    width: '100%',      
    textAlign: 'center'

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
    width: '48%',               
    alignItems: 'center',
    borderRadius: 5,
  },
  botao2: {
    backgroundColor: '#ffffff',
    paddingVertical: 13,
    width: '48%',               
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2, 
    borderStyle: 'solid',
    borderColor: '#00b050'
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',          
  },
  textoBotao2: {
    color: '#363434',
    fontSize: 13,
    fontWeight: '500'
  },
  texto1: {
    color: "#363434",
    fontWeight: '700',
    fontSize: 33,
    marginBottom: 1
  },
  texto2: {
    color: "#363434",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: '700'
  },
  texto2Form: {
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

  textoCorreto: {
    color: "#07b507",
    fontWeight: '600',          
    fontSize: 12,
    marginLeft: 5, 
    textAlign: 'center'
  },

  textoIncorreto: {
    color: "#ce1515",
    fontWeight: '600',          
    fontSize: 12,
    marginLeft: 5, 
    textAlign: 'center',
  },
  
  input: {
    backgroundColor: '#dee5ec',
    width: '100%', 
    height: 45,
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
    height: 45,
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
  linhaOpcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#00b050', 
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#ffffff',
  },
  checkboxSelecionado: {
    backgroundColor: '#00b050', 
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 14,
  },
  textoCheckbox: {
    color: '#363434',
    fontSize: 12,
    fontWeight: '600',
  },
  textoEsqueci: {
    color: '#363434',
    fontSize: 12,
    fontWeight: '600',
  }
});
