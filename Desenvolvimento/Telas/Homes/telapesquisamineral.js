import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

import styles from "./stylePesquisaMineral";

const TelaPesquisaMineral = (props) => {






  // BoletimPesquisaMinera
  
 


  return (


      <View style={styles.container}>
  <TouchableOpacity  style={styles.button}
  onPress={() => props.navigation.navigate('BoletimPesquisaMineral')}
   >
  <Text style={styles.text}>Boletim de Sondagem</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.button}
   onPress={() => props.navigation.navigate('Cadastro da pesquisa')}
  >
  <Text style={styles.text}>Dados Cadastrais</Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.button}
   onPress={() => props.navigation.navigate('AlmoxarifadoBoletimCadastorPesquisaMineral')}
  >
  <Text style={styles.text}>Almoxarifado</Text>
  </TouchableOpacity>


      </View>



  );
};


export default TelaPesquisaMineral;