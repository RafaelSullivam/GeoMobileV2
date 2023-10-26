import React, { useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
// import DrawerLayoutAndroid from 'react-native-drawer-layout';
const TelaInicialLaboratorio = (props) => {

  const Stack = createStackNavigator();

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };


  const navigationView = () => (
    <ScrollView>
      <View style={[styles.container, styles.navigationContainer]}>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Programacao')}
        >
          <Text style={styles.paragraph}>Programação</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('TeorAgua')}
        >
          <Text style={styles.paragraph}>Controle do Teor de Àgua</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Compactacao')}
        >
          <Text style={styles.paragraph}>Compactação</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('FrascoAreia')}
        >
          <Text style={styles.paragraph}>Frasco de Areia</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Hilf')}
        >
          <Text style={styles.paragraph}>Hilf</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Peneiramento')}
        >
          <Text style={styles.paragraph}>Peneiramento</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Seriepeneira')}
        >
          <Text style={styles.paragraph}>Series Peneiras</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('MassaEspecificaGraos')}
        >
          <Text style={styles.paragraph}>Massa Especifica dos Grãos</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Peneiramentosedimentacao')}
        >
          <Text style={styles.paragraph}>Peneiramento por Sedimentação</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('IndiceSuporteCalifornia')}
        >
          <Text style={styles.paragraph}>CBR</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('LimitesLiquidezPlasticidade')}
        >
          <Text style={styles.paragraph}>Limites Liquidez Plasticidade</Text>

        </TouchableOpacity>

        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('PermeabilidadeConstante')}
        >
          <Text style={styles.paragraph}>Permeabilidade Carga Constante</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('PermeabilidadeVariavel')}
        >
          <Text style={styles.paragraph}>Permeabilidade Carga Variavel</Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('MassaAparenteLonaPlastica')}
        >
          <Text style={styles.paragraph}>Massa Aparente Lona Plástica</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('CilindroCravacao')}
        >
          <Text style={styles.paragraph}>Compactação Cilindro Cravacão</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('DeterminacaoMassaEspecificaAparente')}
        >
          <Text style={styles.paragraph}>Determinacao Massa Especifica Aparente</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}></Text>
      </View>
    </ScrollView>


  );

  return (

    <DrawerLayoutAndroid

      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>

        <ImageBackground source={require('../../../assets/tela.png')} style={styles.image}>
          <Text style={styles.text}
            onPress={() => drawer.current.openDrawer()}
          >

          </Text>
        </ImageBackground>



      </View>
    </DrawerLayoutAndroid>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#2F4F4F'
  },
  modal: {
    flex: 1,
    backgroundColor: '#b2b2b2'

  },
  navigationContainer: {
    backgroundColor: '#2F4F4F',
    height: 1300,
  },
  paragraph: {
    textAlign: "center",
    padding: 1,
    fontSize: 15,
    textAlign: "center",
    height: 'auto',
    width: 'auto'
  },
  button: {
    width: 200,
    height: 'auto',
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  image: {
    flex: 1,
    height: 'auto',
    width: '100%',
    justifyContent: "center",
    resizeMode: 'contain'
  },
  text: {
    color: "white",
    fontSize: 42,
    width: 980,
    height: 650,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000000"
  },
  textoModal: {

    color: '#FFF',

    marginLeft: 15,
    fontSize: 25,


  },

  modalHeader: {

    marginLeft: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,

  },


  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 13
  },
  botaoModal: {
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',

  },

  navbar: {
    backgroundColor: '#00335c',
    padding: 12,
    color: '#FFF',
    flexDirection: 'row',
    marginTop: 35,

  },

  textonavbar: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao: {
    position: 'absolute',
    right: 13,
    marginTop: 11,
  },


  grid: {
    marginTop: 8,

  },

  griditem: {
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  gridbotaoEditar: {
    position: 'absolute',
    right: 40,
    color: '#5c7ef6',
  },

  gridbotaoExcluir: {
    position: 'absolute',
    right: 15,
    color: '#cc1414',
  },

  inputBuscar: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 15,
    borderBottomColor: "#767676",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    position: 'relative',

  },

  ViewinputBuscar: {
    flexDirection: 'row',
  },

  iconeBuscar: {
    position: 'absolute',
    right: 20,
    top: 15,
  }
});

export default TelaInicialLaboratorio;