import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "../CadastroPesquisa/style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";




export default function CadastroPesquisa(props) {


  return (



    <ScrollView style={styles.scrollView} >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
         onPress={() => props.navigation.navigate('SondaPesquisaMineral')}
        >
          <Text style={styles.text}>Sonda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('TurnoPesquisaMineral')}
        >
          <Text style={styles.text}>Turno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('DiametroPesquisaMineral')}
          >
          <Text style={styles.text}>Diâmetro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate('LitologiaPesquisaMineral')}
        >
          <Text style={styles.text}>Litologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
              onPress={() => props.navigation.navigate('MaterialPesquisaMineral')}
        >
          <Text style={styles.text}>Material/Insumo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('AtividadePesquisaMineral')}
        >
          <Text style={styles.text}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => props.navigation.navigate('EmpresaPesquisaMineral')}
        >
          <Text style={styles.text}>Empresa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('FuncaoPesquisaMineral')}
        >
          <Text style={styles.text}>Função</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate('FuroPesquisaMineral')}
        >
          <Text style={styles.text}>Status Furo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => props.navigation.navigate('StatusTurnoPesquisaMineral')}
        >
          <Text style={styles.text}>Status Turno</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

