import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

import styles from "./styleSondagem";

const TelaSondagem = (props) => {






  // BoletimPesquisaMinera
  
 


  return (


      <View style={styles.container}>
  <TouchableOpacity  style={styles.button}
  onPress={() => props.navigation.navigate('FuroSondagem')}
   >
  <Text style={styles.text}> Sondagem</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.button}
   onPress={() => props.navigation.navigate('CadastroPesquisaSondagem')}
  >
  <Text style={styles.text}>Dados Cadastrais Sondagem </Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.button}
   onPress={() => props.navigation.navigate('InfiltracaoSoloSondagem')}
  >
  <Text style={styles.text}>Ensaio</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.button}
   onPress={() => props.navigation.navigate('TrasnsporteAmostra')}
  >
  <Text style={styles.text}>Transporte de Amostras</Text>
  </TouchableOpacity>
  {/* <TouchableOpacity  style={styles.button}
   onPress={() => props.navigation.navigate('AlmoxarifadoSondagem')}
  >
  <Text style={styles.text}>Almoxarifado Sondagem</Text>
  </TouchableOpacity> */}
 
      </View>



  );
};


export default TelaSondagem;