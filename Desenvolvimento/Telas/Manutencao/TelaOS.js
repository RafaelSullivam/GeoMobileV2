import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import styles from "./styleManutencao";
import { Dropdown } from 'react-native-element-dropdown';
import * as SQLite from "expo-sqlite";
import AntDesign from '@expo/vector-icons/AntDesign';


const TelaOS = (props) => {

    const [equipamento, setEqupamento] = useState();
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        
    ];

    





// const BuscaBancoSQlite = () => {

//   db.transaction((tx) => {

//       tx.executeSql('SELECT * FROM OrdemDeServico', null, (tx, results) => {
//           var temp = [];
//           for (let i = 0; i < results.rows.length; ++i)
//               temp.push(results.rows.item(i));
          
//           console.log(temp)
//       });

//   });







    return (

        <View style={styles.container}>

<Text style={styles.text}>Equipamento</Text>   
            <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                textItem={styles.textItem}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.textItem}
                dropdownPosition="bottom"
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder=""
                searchPlaceholder="Search..."
                value={equipamento}
                onChange={item => {
                    setEqupamento(item.equipamento);
                }}
                renderLeftIcon={() => (
                    <AntDesign />
                )}

            />


            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.button}
            
            onPress={() => props.navigation.navigate('Tela de Chamado')}
            
            >

                
                <Text style={styles.text}>Abrir</Text>
            </TouchableOpacity>

            
            

              
        </View>




    );











};


export default TelaOS;