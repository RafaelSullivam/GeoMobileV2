import React, { useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styleManutencao";




const ManutencaoPesquisaOS = (props) => {



    return (




        <View style={styles.container}>




            <Text style={styles.text}>Nomero da Ordem de Serviço </Text>
            <TextInput

               
                style={styles.inputleft}


            ></TextInput>






            <TouchableOpacity style={styles.button}

                onPress={() => props.navigation.navigate('Manutencao')}>

                <Text style={styles.text}> Buscar </Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.button}

onPress={() => props.navigation.navigate('APROPRIAÇÃO')}>

<Text style={styles.text}> AP </Text>

</TouchableOpacity>



        </View>



    );
};


export default ManutencaoPesquisaOS;