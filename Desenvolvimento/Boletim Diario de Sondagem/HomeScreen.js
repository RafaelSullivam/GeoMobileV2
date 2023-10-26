import React, {
    useState,
    useEffect
} from "react";
import {
    Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList 
} from "react-native";
import styles from "./stylehomescreen";
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo"
import axios from 'axios'; // npm i axios
import Conexao from "../Conexao/conexao";

export default function HomeScreen() {
    api = Conexao.api
    const [processo, setProcesso] = useState();
    const [furo, setFuro] = useState(null);
    const navigation = useNavigation();
    const [connState, setConnState] = useState(0);
    const [status, setStatus] = useState('')

    const mensagemsalvaroffline = () =>
        Alert.alert(
            "                 Salvo no armazenamento interno !",
            "",
            [
                {

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
    function addTask() {
        
            navigation.navigate("BOLETIM DIÁRIO DE SONDAGEM", { nprocesso: processo  });
        
        // if (furo != '') {
            //navigation.navigate("Edite Index", { nprocesso: processo });
        // }
    };

    function Task() {
     navigation.navigate("Edite Index", { nprocesso: processo });
    };

    //Busca no banco online
    async function getItem() {

        const res = await axios.get(this.api + 'BuscarProcessoSondagemPesquisaMineral.php?Processo=' + processo);
        //setAmostra(res.data.amostra);
        console.log(res.data.furo)
        setStatus(res.data.success);
        setFuro(res.data.furo)
        if (res.data.success === true) {
            if(res.data.furo != null){
                addTask();
            }else{
            Task();
            
            }
           
        }

        console.warn(this.api + 'BuscarProcessoSondagemPesquisaMineral.php?Processo=' + processo, status,furo)
        if (res.data.success === false) {
            falha();
        }
       

    };

    useEffect(() => {


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

        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    {connState.isConnected == true ? <Image
                        source={require('../componentes/imagem/applications_internet.png')}
                        style={styles.ImageIconStyle}
                    /> : <Image
                        source={require('../componentes/imagem/Networkoff.png')}
                        style={styles.ImageIconStyle}
                    />}


                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>
                        Processo:
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setProcesso}
                        value={processo}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={getItem}
                    >
                        <Image
                            source={require('../componentes/imagem/database_search.png')}
                            style={styles.buttonImageIconStyle}
                        />
                        <Text style={{ fontSize: 16 }}>Buscar</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16 }}></Text>
                    <Text style={{ fontSize: 16 }}></Text>
                    <Text style={{ fontSize: 16 }}></Text>
                    <Text style={{ fontSize: 16 }}></Text>
                    <Text style={{ fontSize: 16 }}></Text>
                    <Text style={{ fontSize: 16 }}></Text>
                    <Text style={{ fontSize: 16 }}></Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}



