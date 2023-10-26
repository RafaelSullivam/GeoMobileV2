import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "../CadastroPesquisaSondagem/StyleCadastro";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";




export default function CadastroPesquisaSondagem(props) {


  return (



    <ScrollView style={styles.scrollView} >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
         onPress={() => props.navigation.navigate('SondaSondagem')}
        >
          <Text style={styles.text}>Sonda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('TurnoSondagem')}
        >
          <Text style={styles.text}>Turno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('DiametroSondagem')}
          >
          <Text style={styles.text}>Diâmetro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate('LitologiaSondagem')}
        >
          <Text style={styles.text}>Litologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
              onPress={() => props.navigation.navigate('MaterialSondagem')}
        >
          <Text style={styles.text}>Material/Insumo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('AtividadeSondagem')}
        >
          <Text style={styles.text}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => props.navigation.navigate('EmpresaSondagem')}
        >
          <Text style={styles.text}>Empresa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('FuncaoSondagem')}
        >
          <Text style={styles.text}>Função</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => props.navigation.navigate('StatusFuroSondagem')}
        >
          <Text style={styles.text}>Status Furo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => props.navigation.navigate('StatusTurnoSondagem')}
        >
          <Text style={styles.text}>Status Turno</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

