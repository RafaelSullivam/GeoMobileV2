import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert, Image, FlatList, CheckBox } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { TextInputMask } from 'react-native-masked-text'
import { FontAwesome } from "@expo/vector-icons";

export default function ManobraBoletimCadastorPesquisaMineral({ route, navigation }, props) {
    const [task1, setTask1] = useState([]);
    const [task, setTask] = useState([]);
    const [task2, setTask2] = useState([]);
    const [de, setDe] = useState()
    const [ate, setAte] = useState()
    const [av, setAv] = useState()
    const [rec, setRec] = useState()
    const [recporcento, setRecPorCento] = useState()
    const [litologia, setLitologia] = useState('')
    const [diametro, setDiametro] = useState('')
    const [tempocorte, setTempoCorte] = useState('')
    const [luvanserie, setLuvaNSerie] = useState('')
    const [coroanserie, setCoroaNSerie] = useState('')
    const [tipo, setTipo] = useState();
    const [reload, setReload] = useState(false)
    const [apagar, setApagar] = useState(false)
    const [state, setState] = useState('')

    const [statusfuro, setStatusFuro] = useState();
    const [processo, setProcesso] = useState(
        route.params?.nprocesso
    )
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdLitologia }</Text>

            </View>
        );
    };
    const _renderItem1 = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.IdDiamentro }</Text>

            </View>
        );
    };
    const MensagemSalvarOffline = () =>
        Alert.alert(
            "                          Salvo com sucesso! ",
            ""
            [
            { text: "OK", onPress: (listarDados()) }
            ]
        );
    const MensagemDeleteBancoSQLite = () =>
        Alert.alert(
            "                          Deseja Apagar Sonda! " + de,
            ""
            [
            { text: "OK", onPress: (Apagar()) }
            ]
        );

    function listarDados() {
        setReload(true)
    }
    function Apagar() {
        setApagar(true)
    }
    function ApagarText() {
        setDe()
        setAv()
        setAte()
        setTipo()
    }
   
    const sumValues = (av,de) => {
       
        return av + de
    }  
    const divValue = (rec, av) => {
    
        return (rec / av * 100);
    }
    function openDatabase() {
        transaction: () => {
            return {
                executeSql: () => { },
            };
        }
        const db = SQLite.openDatabase("db.db");
        return db;
    }
    const db = openDatabase();
    const gerarBancoSQlite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists ManobraSondagemPesquisaMineral (id INTEGER PRIMARY KEY AUTOINCREMENT, idFuro text, De text, Ate text, Av text, Rec text , RecPorCento text, Litologia text, Diametro text , TempoCorte text, LuvaSerie text, CoroaSerie text);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into ManobraSondagemPesquisaMineral (idFuro, De, Ate, Av, Rec, Litologia, Diametro, TempoCorte, LuvaSerie, CoroaSerie, RecPorCento) values ('${processo}','${de}','${ate}','${av}','${rec}', '${litologia}', '${diametro}', '${tempocorte}', '${luvanserie}', '${coroanserie}', '${recporcento}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            console.log('ok2'),
            MensagemSalvarOffline(),
            ApagarText()
        );
    };
    

    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM LitologiaPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask(temp);
            });

        });

    };
    const BuscaBancoSQlite1 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM ManobraSondagemPesquisaMineral WHERE IdFuro =?',[processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask1(temp);
                console.log(temp,'ok')
            });

        });

    };
    const BuscaBancoSQlite2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM DiametroPesquisaMIneral', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setTask2(temp);
               
            });

        });

    };
    const BuscaBancoSQlite3 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM BoletimSondagemPesquisaMineral where IdFuro = ?', [processo], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
               
                setStatusFuro(results.rows.item(0).StatusBoletim)
                setTipo(results.rows.item(0).Tipo)
            });

        });

    };
    let DeleteBancoSQlite = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM   ManobraSondagemPesquisaMineral where id =?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Successo',
                            'Empresa Deletada com Sucesso',
                            [

                                {
                                    text: 'Ok', onPress: (Apagar())
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Por Favor Inserir um Id Empresa Valida');
                    }
                }
            );
        });
    };
    let DeleteBancoSQlite1 = (furo) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS ManobraSondagemPesquisaMineral'
               
            );
        });
    };

    useEffect(() => {
        //getItem()
       
        gerarBancoSQlite()
        BuscaBancoSQlite()
        BuscaBancoSQlite1()
        BuscaBancoSQlite2()
        BuscaBancoSQlite3()
    }, []);
    useEffect(() => {
       console.log(processo)
   
        if ( av !== 0){

        setAte(sumValues(av,de))
        
         }
         if(rec !== 0){
           setRecPorCento(divValue(rec,av)+"%")
        
     
        }
        
        if (reload) {
            BuscaBancoSQlite1()
            setReload(false)
        }
        if (apagar) {
            BuscaBancoSQlite1()
            ApagarText()
            setApagar(false)
        }
    })
    return (


        <ScrollView style={styles.scrollView} >
            <View style={styles.container}>
                {/* <View style={styles.containerrow}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => props.navigation.navigate('BoletimCadastroPesquisaMineral')}>
                        <Text style={styles.text}>Novo Furo</Text>
                        <View style={styles.buttonIconSeparatorStyle} />

                    </TouchableOpacity>

                </View> */}
     <Text style={styles.text}>{`${processo}`} | {`${tipo}`} | {`${state}`}| {`${statusfuro}`}</Text>
     <Text style={styles.text}></Text>
                <Text style={styles.text}>De (m)</Text>
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

                    onChangeText={(valueDe) => valueDe.length ? setDe(parseFloat(valueDe.replace(",", "."))): setDe(0)}
                    value={de}
          
                />
               
               
                <Text style={styles.text}>Até (m)</Text>
                <TextInputMask
                    editable={false} selectTextOnFocus={false}
                 style={styles.input}
                 type={'money'}
                 options={{
                     precision: 1,
                     separator: ',',
                     delimiter: '.',
                     unit: '',
                     suffixUnit: ''
                 }}
              
                    onChangeText={setAte}
                    value={ate}
                    placeholder="Até (m)"
                
                />
                <Text style={styles.text}>Av (m)</Text>
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
                 
                    onChangeText={(valueAv) => valueAv.length ? setAv(parseFloat(valueAv.replace(",", "."))): setAv(0)}
                    value={av}
                />
                <Text style={styles.text}>Rec (m)</Text>
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
             
                 onChangeText={(valueAv) => valueAv.length ? setRec(parseFloat(valueAv.replace(",", "."))): setRec(0)}
                 value={rec}
             />
                <Text style={styles.text}>Litologia</Text>
                <Dropdown
                    style={styles.dropdown2}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    data={task}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={litologia}

                    onChange={item => {
                        setLitologia(item.IdLitologia);
                        //
                        console.log(litologia);

                    }}
                    value={litologia}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />
                <Text style={styles.text}>Diâmetro</Text>
                <Dropdown
                    style={styles.dropdown2}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    data={task2}
                    search
                    searchPlaceholder="Buscar"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder={diametro}

                    onChange={item => {
                        setDiametro(item.IdDiamentro);
                        //
                        console.log(diametro);

                    }}
                    value={diametro}
                    renderItem={item => _renderItem1(item)}
                    textError="Error"
                />
                <Text style={styles.text}>Tempo de Corte</Text>
                <TextInput style={styles.input}
                    onChangeText={setTempoCorte}
                    value={tempocorte}
                    placeholder="Tempo de Corte"
                >
                </TextInput>
                <Text style={styles.text}>Luva nº de série</Text>
                <TextInput style={styles.input}
                    onChangeText={setLuvaNSerie}
                    value={luvanserie}
                    placeholder="Luva nº de série"
                >
                </TextInput>
                <Text style={styles.text}>Coroa nº de Série</Text>
                <TextInput style={styles.input}
                    onChangeText={setCoroaNSerie}
                    value={coroanserie}
                    placeholder="Coroa nº de Série"
                >
                </TextInput>
                <View style={styles.containerrow}>
                 
                    <TouchableOpacity style={styles.button}
                        onPress={() => SalvarBancoSQLite()}
                    >
                        <Text style={styles.text}>Salvar</Text>
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Image style={styles.buttonImageIconStyle}
                            source={require('../../../assets/SaveIcon.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView horizontal={true} style={styles.scrollView} >
                <FlatList

                    showsVerticalScrollIndicator={true}
                    data={task1}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.Tasks}>

                                <Text style={styles.labelperfuracao}>De:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                    onPress={() =>
                                        setDe(item.IdFuro) ||
                                        setAte(item.AZ)

                                    }
                                >
                                    {item.De}
                                </Text>
                                <Text style={styles.labelperfuracao}>Até:</Text>

                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Ate}
                                </Text>
                                <Text style={styles.labelperfuracao}>Av:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.Av}
                                </Text>
                                <Text style={styles.labelperfuracao}>Rec:</Text>
                                <Text
                                    style={styles.DescriptionTask}
                                >
                                    {item.RecPorCento}
                                </Text>

                                <TouchableOpacity
                                    style={styles.deleteTask}
                                    onPress={() => {
                                        DeleteBancoSQlite(item.id)
                                    }}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={24}
                                        color="#F02726"
                                    >
                                    </FontAwesome>

                                </TouchableOpacity>


                            </View>
                        )
                        
                    }}
                    
                />
                
            </ScrollView  >
        </ScrollView>

    );
};

