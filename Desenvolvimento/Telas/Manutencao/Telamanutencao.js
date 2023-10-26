import React, { useRef, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styleManutencao";


// const Finalizar0 = () => {

//   db.transaction((tx) => {
//     tx.executeSql('SELECT * FROM ManutecaoPreventivaCorretiva WHERE numerOs = ? ', [numeroOs], (tx, results) => {
//       var temp = [];
//       if (results.rows.length > 0) {

const TelaManutencao = (props) => {




  return (


    <View style={styles.container}>
      <TouchableOpacity style={styles.button}

        onPress={() => props.navigation.navigate('Tela OS')}
      >
        <Text style={styles.text}> Abertura de OS</Text>
      </TouchableOpacity>




      <Text style={styles.text}> </Text>






      <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate('Manutencao')}
      >


        <Text style={styles.text}>Manutenção </Text>
      </TouchableOpacity>


    </View>



  );
};


export default TelaManutencao;