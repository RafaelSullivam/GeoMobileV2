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

const TelaInitSSMT = (props) => {

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
    <Text style={styles.paragraph}></Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('TelaEpi')}
      >
        <Text style={styles.paragraph}>Entrega de Epi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('CheckPipa')}
      >
        <Text style={styles.paragraph}>Check Liste</Text>
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

        <ImageBackground source={require('../../../assets/tela.png')}  style={styles.image}>
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
    height: 500,
  },
  paragraph: {
    textAlign: "center",
    padding: 1,
    fontSize: 15,
    textAlign: "center"
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  image: {
    flex:1,
    height:'auto',
    width: '100%',
    justifyContent: "center",
    resizeMode:'contain'
  },
  text: {
    color: "white",
    fontSize: 42,
    width: 980,
    height: 500,
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

export default TelaInitSSMT;