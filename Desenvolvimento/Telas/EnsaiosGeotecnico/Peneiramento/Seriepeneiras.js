import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList } from 'react-native';
import styles from "../style.js";
import * as SQLite from "expo-sqlite";
import NetInfo from "@react-native-community/netinfo"


export default function Seriepeneira() {
    const [seriepeneira, setSeriepeneira] = useState('')
    const [designacao1, setDesignacao1] = useState('')
    const [designacao2, setDesignacao2] = useState('')
    const [designacao3, setDesignacao3] = useState('')
    const [designacao4, setDesignacao4] = useState('')
    const [designacao5, setDesignacao5] = useState('')
    const [designacao6, setDesignacao6] = useState('')
    const [designacao7, setDesignacao7] = useState('')
    const [designacao8, setDesignacao8] = useState('')
    const [designacao9, setDesignacao9] = useState('')
    const [designacao10, setDesignacao10] = useState('')
    const [designacao11, setDesignacao11] = useState('')
    const [designacao12, setDesignacao12] = useState('')
    const [designacao13, setDesignacao13] = useState('')
    const [designacao14, setDesignacao14] = useState('')
    const [designacao15, setDesignacao15] = useState('')
    const [designacao16, setDesignacao16] = useState('')
    const [dimensao1, setDimensao1] = useState('')
    const [dimensao2, setDimensao2] = useState('')
    const [dimensao3, setDimensao3] = useState('')
    const [dimensao4, setDimensao4] = useState('')
    const [dimensao5, setDimensao5] = useState('')
    const [dimensao6, setDimensao6] = useState('')
    const [dimensao7, setDimensao7] = useState('')
    const [dimensao8, setDimensao8] = useState('')
    const [dimensao9, setDimensao9] = useState('')
    const [dimensao10, setDimensao10] = useState('')
    const [dimensao11, setDimensao11] = useState('')
    const [dimensao12, setDimensao12] = useState('')
    const [dimensao13, setDimensao13] = useState('')
    const [dimensao14, setDimensao14] = useState('')
    const [dimensao15, setDimensao15] = useState('')
    const [dimensao16, setDimensao16] = useState('')
    const [connState, setConnState] = useState(0);
    const Separator1 = () => (
        <View style={styles.separator1} />
    );
    const Separator = () => (
        <View style={styles.separator} />
    );
    const mensagemsalvaroffline = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            "                                     Processo =" + seriepeneira,
            [
                {
                    // text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    // style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const falha = () =>
        Alert.alert(
            "                          Amostra não cadastrada!",
            "",
            [
                {

                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );


    function openDatabase() {
        // if (Platform.OS === "web") {
        //     return {
        //         transaction: () => {
        //             return {
        //                 executeSql: () => { },
        //             };
        //         },
        //     };
        // }

        const db = SQLite.openDatabase("db.db");
        return db;
    }
    const db = openDatabase();

    const gerarBanco = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists se ( seriepeneira text, designacao1 text, designacao2 text, designacao3 text, designacao4 text, designacao5 text, designacao6 text, designacao7 text, designacao8 text, designacao9 text, designacao10 text, designacao11 text, designacao12 text, designacao13 text, designacao14 text, designacao15 text, designacao16 text, dimensao1 text, dimensao2 text, dimensao3 text, dimensao4 text, dimensao5 text, dimensao6 text, dimensao7 text, dimensao8 text, dimensao9 text, dimensao10 text, dimensao11 text, dimensao12 text, dimensao13 text, dimensao14 text, dimensao15 text, dimensao16 text);", () => { }, (error) => { console.log(error) })
                console.log("Banco de dados iniciado")
            });

    }


    const SalvarBanco = () => {

        db.transaction(
            (tx) => {
                tx.executeSql(`insert into se (seriepeneira , designacao1 , designacao2 , designacao3 , designacao4 , designacao5 , designacao6 , designacao7 , designacao8 , designacao9 , designacao10 , designacao11 , designacao12 , designacao13 , designacao14 , designacao15 , designacao16 , dimensao1 , dimensao2 , dimensao3 , dimensao4 , dimensao5 , dimensao6 , dimensao7 , dimensao8 , dimensao9 , dimensao10 , dimensao11 , dimensao12 , dimensao13 , dimensao14 , dimensao15 , dimensao16 ) values ('${seriepeneira}', '${designacao1}' , '${designacao2}' , '${designacao3}' , '${designacao4}' , '${designacao5}' , '${designacao6}' , '${designacao7}' , '${designacao8}' , '${designacao9}' , '${designacao10}' , '${designacao11}' , '${designacao12}', '${designacao13}', '${designacao14}', '${designacao15}', '${designacao16}', '${dimensao1.toString().replace(".", ",")}', '${dimensao2.toString().replace(".", ",")}', '${dimensao3.toString().replace(".", ",")}', '${dimensao4.toString().replace(".", ",")}', '${dimensao5.toString().replace(".", ",")}', '${dimensao6.toString().replace(".", ",")}', '${dimensao7.toString().replace(".", ",")}', '${dimensao8.toString().replace(".", ",")}', '${dimensao9.toString().replace(".", ",")}', '${dimensao10.toString().replace(".", ",")}', '${dimensao11.toString().replace(".", ",")}', '${dimensao12.toString().replace(".", ",")}', '${dimensao13.toString().replace(".", ",")}', '${dimensao14.toString().replace(".", ",")}', '${dimensao15.toString().replace(".", ",")}', '${dimensao16.toString().replace(".", ",")}' )`, () => { }, (error) => { console.log(error) });

            },
            null,
            mensagemsalvaroffline()
        );
    };

    const [flatListItems, setFlatListItems] = useState([]);
    const BuscaBanco = () => {

        db.transaction((tx) => {
            // tx.executeSql('select * from se ', [], (_, { rows }) =>
            //     console.log(JSON.stringify(rows)));
            tx.executeSql('SELECT * FROM se WHERE seriepeneira = ?', [seriepeneira], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
                temp.push(results.rows.item(i));
            setFlatListItems(temp);
            console.log(temp)
        }, (error) => { console.log(error) }
        );

         });

    };

    const listItemView = (item) => {
        setDesignacao1(item.designacao1)
    };












    useEffect(() => {
        var total = 3.5 * 7;

        console.log(total.toString().replace(".", ","));
        gerarBanco()
        NetInfo.fetch().then(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });

        const unsubscribe = NetInfo.addEventListener(state => {
            setConnState(state);
            console.log("Tipo de conexão", state.type);
            console.log("Está conectado?", state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);







    return (

        <View>
            <ScrollView >
                <View style={styles.container}>

                    {connState.isConnected == true ? <Image
                        source={require('../../../componentes/imagem/applications_internet.png')}
                        style={styles.ImageIconStyle}
                    /> : <Image
                        source={require('../../../componentes/imagem/Networkoff.png')}
                        style={styles.ImageIconStyle}
                    />}


                </View>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>

                    </Text>

                    <Text style={styles.textStyle}>
                        Serie de peneiras:
                    </Text>
                    <TextInput
                        style={styles.inputlef2t}
                        onChangeText={setSeriepeneira}
                        value={seriepeneira}
                        placeholder="Serie de peneiras"
                    />

                    <View style={styles.containerbtnbuscar}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={BuscaBanco}
                        >
                            <Image
                                source={require('../../../componentes/imagem/database_search.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={{ fontSize: 16 }}>Buscar</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 1:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao1}
                        value={designacao1}
                 
                        placeholder="DESIGNAÇÃO DA PENEIRA 1"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao1}
                        value={dimensao1}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />

                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 2:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao2}
                        value={designacao2}

                        placeholder="DESIGNAÇÃO DA PENEIRA 2"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao2}
                        value={dimensao2}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />

                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 3:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao3}
                        value={designacao3}

                        placeholder="DESIGNAÇÃO DA PENEIRA 3"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao3}
                        value={dimensao3}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 4:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao4}
                        value={designacao4}

                        placeholder="DESIGNAÇÃO DA PENEIRA 4"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao4}
                        value={dimensao4}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 5:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao5}
                        value={designacao5}

                        placeholder="DESIGNAÇÃO DA PENEIRA 5"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao5}
                        value={dimensao5}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />

                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 6:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao6}
                        value={designacao6}

                        placeholder="DESIGNAÇÃO DA PENEIRA 6"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao6}
                        value={dimensao6}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 7:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao7}
                        value={designacao7}

                        placeholder="DESIGNAÇÃO DA PENEIRA 7"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao7}
                        value={dimensao7}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 8:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao8}
                        value={designacao8}

                        placeholder="DESIGNAÇÃO DA PENEIRA 8"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao8}
                        value={dimensao8}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 9:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao9}
                        value={designacao9}

                        placeholder="DESIGNAÇÃO DA PENEIRA 9"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao9}
                        value={dimensao9}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 10:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao10}
                        value={designacao10}

                        placeholder="DESIGNAÇÃO DA PENEIRA 10"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao10}
                        value={dimensao10}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />

                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 11:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao11}
                        value={designacao11}

                        placeholder="DESIGNAÇÃO DA PENEIRA 11"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao11}
                        value={dimensao11}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 12:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao12}
                        value={designacao12}

                        placeholder="DESIGNAÇÃO DA PENEIRA 12"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao12}
                        value={dimensao12}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 13:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao13}
                        value={designacao13}

                        placeholder="DESIGNAÇÃO DA PENEIRA 13"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao13}
                        value={dimensao13}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 14:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao14}
                        value={designacao14}

                        placeholder="DESIGNAÇÃO DA PENEIRA 14"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao14}
                        value={dimensao14}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 15:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao15}
                        value={designacao15}

                        placeholder="DESIGNAÇÃO DA PENEIRA 15"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao15}
                        value={dimensao15}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator></Separator>
                    <Text style={styles.labelcontanier}>
                        DESIGNAÇÃO DA PENEIRA 16:
                    </Text>
                    <Separator1></Separator1>


                    <TextInput
                        //1
                        style={styles.inputleft}
                        onChangeText={setDesignacao16}
                        value={designacao16}

                        placeholder="DESIGNAÇÃO DA PENEIRA 16"
                    />


                    <Separator1></Separator1>
                    <Text style={styles.labelcontanier}>
                        DIMENSÃO (mm):
                    </Text>
                    <Separator1></Separator1>



                    <TextInput
                        style={styles.inputleft}
                        onChangeText={setDimensao16}
                        value={dimensao16}
                        keyboardType='numeric'
                        placeholder="DIMENSÃO (mm)"
                    />
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <Separator1></Separator1>
                    <View style={styles.containerbtnbuscar}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={SalvarBanco}
                        >
                            <Image
                                source={require('../../../componentes/imagem/save.png')}
                                style={styles.buttonImageIconStyle}
                            />
                            <Text style={{ fontSize: 16 }}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    <Separator1></Separator1>

                </View>

            </ScrollView>
            <FlatList
                data={flatListItems}
                renderItem={({ item }) => listItemView(item)}
            />
        </View>

    );
};

