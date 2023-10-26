import React, { useState, useEffect, State } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, Button, FlatList } from "react-native";
import styles from "./style";

import database from '../../../src/config/firebaseconfig'
import { TextInputMask } from 'react-native-masked-text'



export default function NewTaskPerfuracao({ route, navigation }) {

    const Separator = () => (
        <View style={styles.separator} />
    );

    const [task, setTask] = useState([]);
    const [description, setDescription] = useState(
        route.params?.nfuro);
    const [statu, setStatus] = useState(null);
    const [profinic, setProfinic] = useState(String);
    const [proffin, setProffin] = useState(0);
    const [recupm, setRecupm] = useState(0);
    const [avan, setAvan] = useState(0);
    const [recupp, setRecupp] = useState(0);
    const [caixan, setCaixan] = useState(0);
    const [matatrav, setMatAtrav] = useState(null);
    const [coroan, setCoroan] = useState(null);
    const [coroad, setCoroad] = useState(null);
    const [de, setDe] = useState(0);
    const [ate, setAte] = useState(0);
    const [cod, setCod] = useState(0);

    function addTask() {
        database.collection(description).add({

            profinic: profinic,
            proffin: proffin,
            recupm: recupm,
            avan: avan,
            recupp: recupp,
            caixan: caixan,
            matatrav: matatrav,
            coroan: coroan,
            coroad: coroad,
            de: de,
            ate: ate,
            cod: cod
        })
        navigation.navigate("BOLETIM DIÁRIO DE SONDAGEM");
    }



    const sumValues = (profinic, avan) => {
        //Alert.alert("Processamento: 5 segundos");
        return (profinic + avan);
    }

    const divValue = (recupm, avan) => {
        //Alert.alert("Processamento: 5 segundos");
        return (recupm / avan * 100) * 10;
    }

    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>FURO:</Text>
                <TextInput
                    editable={false} selectTextOnFocus={false}
                    style={styles.input}

                    onChangeText={setDescription}
                    value={description}
                />
                <Text style={styles.label}>HORÁRIO DE:</Text>
                <TextInput
                    style={styles.input}

                    onChangeText={setDe}
                    value={de}
                    keyboardType='numbers'
                />
                <Text style={styles.label}>HORÁRIO ATE:</Text>
                <TextInput

                    style={styles.input}


                    onChangeText={setAte}
                    value={ate}
                />
                <Text style={styles.label}>CÓDIGO:</Text>
                <TextInput

                    style={styles.input}
                    onChangeText={setCod}
                    value={cod}
                    keyboardType='numbers'
                />





                <Text style={styles.label}>PROFUNDIDADE (m) DE:</Text>
                <TextInput
                    style={styles.input}

                    onChangeText={(valueX) => valueX.toString ? setProfinic(parseInt(valueX)) : setProfinic(0)}
                    value={profinic}
                    keyboardType='numbers'
                />
                <Text style={styles.label}>PROFUNDIDADE (m) ATE:</Text>
                <TextInputMask
                    editable={false} selectTextOnFocus={false}
                    style={styles.input}
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: ''
                    }}

                    onChangeText={setProffin}
                    value={proffin}
                />
                <Text style={styles.label}>AVANÇO(m):</Text>
                <TextInput

                    style={styles.input}
                    onChangeText={(valueY) => valueY.length ? setAvan(parseInt(valueY)) : setAvan(0)}
                    value={avan}
                    keyboardType='numbers'
                />
                <Text style={styles.label}>RECUPERAÇÃO(m):</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(valueRECU) => valueRECU.length ? setRecupm(parseInt(valueRECU)) : setRecupm(0)}
                    value={recupm}
                    keyboardType='numbers'
                />
                <Text style={styles.label}>RECUPERAÇÃO(%):</Text>
                <TextInputMask
                    style={styles.input}
                    type={'money'}
                    options={{
                        precision: 1,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: ''
                    }}
                    onChangeText={setRecupp}
                    value={recupp.toString(10)}
                />
                <Text style={styles.label}></Text>
                <Text style={styles.label}></Text>
                <Text style={styles.label}></Text>

                <TouchableOpacity
                    style={styles.buttonNewTask2}
                    onPress={() => setProffin(sumValues(profinic, avan)) | setRecupp(+divValue(recupm, avan))}
                >

                    <Text style={styles.iconButton}>=</Text>
                </TouchableOpacity>
                <Separator />
                <Text style={styles.label}>CAIXA N°:</Text>
                <TextInput

                    style={styles.input}
                    onChangeText={setCaixan}
                    value={caixan}
                    keyboardType='numbers'
                />
                <Text style={styles.label}>MATERIAL ATRAVERSSADO:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setMatAtrav}
                    value={matatrav}
                />
                <Text style={styles.label}>COROA N°:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCoroan}
                    value={coroan}
                    keyboardType='numbers'
                />
                <Text style={styles.label}>CAIXA Ø:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCoroad}
                    value={coroad}
                    keyboardType='numbers'
                />
                <Text style={styles.label}></Text>
                <Text style={styles.label}></Text>
                <Text style={styles.label}></Text>
                <Text style={styles.label}></Text>

                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => {


                        addTask()
                    }}
                >
                    <Text style={styles.iconButton}>Save</Text>
                </TouchableOpacity>

            </View>



        </ScrollView>

















    );
}







