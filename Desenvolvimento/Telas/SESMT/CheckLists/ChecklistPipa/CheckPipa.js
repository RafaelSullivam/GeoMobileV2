import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import axios from 'axios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
const ChecklistPipa = () => {
    const [item1, setItem1] = useState('');
const [item2, setItem2] = useState('');
const [item3, setItem3] = useState('');
const [item4, setItem4] = useState('');
const [item5, setItem5] = useState('');
const [item6, setItem6] = useState('');
const [item7, setItem7] = useState('');
const [item8, setItem8] = useState('');
const [item9, setItem9] = useState('');
const [item10, setItem10] = useState('');
const [item11, setItem11] = useState('');
const [item12, setItem12] = useState('');
const [item13, setItem13] = useState('');
const [item14, setItem14] = useState('');
const [item15, setItem15] = useState('');
const [item16, setItem16] = useState('');
const [item17, setItem17] = useState('');
const [item18, setItem18] = useState('');
const [item19, setItem19] = useState('');
const [item20, setItem20] = useState('');
const [item21, setItem21] = useState('');
const [item22, setItem22] = useState('');
const [item23, setItem23] = useState('');
const [item24, setItem24] = useState('');
const [item25, setItem25] = useState('');
const [item26, setItem26] = useState('');
const [item27, setItem27] = useState('');
const [item28, setItem28] = useState('');
const [item29, setItem29] = useState('');
const [item30, setItem30] = useState('');
const [item31, setItem31] = useState('');
    const [responses, setResponses] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
        question11: '',
        question12: '',
        question13: '',
        question14: '',
        question15: '',
        question16: '',
        question17: '',
        question18: '',
        question19: '',
        question20: '',
        question21: '',
    });
    const data = [
        { label: 'Sim', value: 'Sim' },
        { label: 'Não', value: 'Não' },
        { label: 'N.A', value: 'N.A' },

    ];
    const datadia = Array.from({ length: 31 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }));
    const handleResponse = (question, response) => {
        setResponses({ ...responses, [question]: response });
    };
    const [selected, setSelected] = useState("");


    // ...

    const handleSubmit = () => {
        axios.post('/api/form', responses)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };





    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>
            CHECK LIST DE INSPEÇÃO DIÁRIA - CAMINHÃO PIPA
                </Text>
                <Text style={styles.title}>
                    PROJETO
                </Text>
                <TextInput
                    style={styles.inputleft}
                    // onChangeText={setAmostra}
                    // value={amostra}
                    keyboardType='numeric'
                    placeholder="Amostra"
                />
                <Text style={styles.title}>
                    MÊS
                </Text>
                <SelectList
                    setSelected={setSelected}
                    data={datadia}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                 <Text style={styles.title}>
                    ANO
                </Text>
                <SelectList
                    setSelected={setSelected}
                    data={datadia}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    PLACA/TAG
                </Text>
                <TextInput
                    style={styles.inputleft}
                    // onChangeText={setAmostra}
                    // value={amostra}
                    keyboardType='numeric'
                    placeholder="Placa/Tag"
                />
                <Text style={styles.title}>
                    RELAÇÃO DE CONDUTORES X DIA
                </Text>
                <Text style={styles.title}>
                    DIA
                </Text>
                <SelectList
                    setSelected={setSelected}
                    data={datadia}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    NOME DO CONDUTOR / MATRÍCULA
                </Text>
                <TextInput
                    style={styles.inputleft}
                    // onChangeText={setAmostra}
                    // value={amostra}
                    keyboardType='numeric'
                    placeholder="Amostra"
                />
                <Text style={styles.title}>
                    DIAS DO MÊS
                </Text>
                <SelectList
                    setSelected={setSelected}
                    data={datadia}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    PLANO DE AÇÃO
                </Text>
                <Text style={styles.title}>
                    ITEM
                </Text>
                <SelectList
                    setSelected={setSelected}
                    data={datadia}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    QUAL A AÇÃO TOMADA?
                </Text>
                <TextInput
                    style={styles.inputleft}
                    // onChangeText={setAmostra}
                    // value={amostra}
                    keyboardType='numeric'
                    placeholder="Amostra"
                />
                <Text style={styles.title}>
                    STATUS
                </Text>
                <SelectList
                    setSelected={setSelected}
                    data={datadia}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    1- Renavan, DUT, Seguro Obrigatório estão na validade?
                </Text>
                <SelectList
                    setSelected={setItem1}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />

                <Text style={styles.title}>2- Extintor ABC na validade e carregado? </Text>
                <SelectList
                    setSelected={setItem2}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />

                <Text style={styles.title}>3- Luz giroscópica, antena com bandeirola e iluminação na ponta para  veículo que  acessa área de mineração? </Text>
                <SelectList
                    setSelected={setItem3}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    4- Sistema de registro de velocidade ou Tacógrafo estão funcionando?
                </Text>
                <SelectList
                    setSelected={setItem4}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    5- Faróis, lanternas, luz (de ré, de freio, do painel, da placa, de alerta) e buzina em perfeito funcionamento?
                </Text>
                <SelectList
                    setSelected={setItem5}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    6- Freio de estacionamento está funcionando?
                </Text>
                <SelectList
                    setSelected={setItem6}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    7- Sinalização sonora de marcha-à-ré está funcionando?
                </Text>
                <SelectList
                    setSelected={setItem7}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    8- Limpador de pára-brisa e sistema de injeção de água funcionando?
                </Text>
                <SelectList
                    setSelected={setItem8}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    9- O reservatório do limpador de para brisas está abastecido com água limpa?
                </Text>
                <SelectList
                    setSelected={setItem9}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    10- Rodas e pneus (inclusive estepe) em  condição de uso? Possui macaco, chave de roda e triângulo de sinalização?
                </Text>
                <SelectList
                    setSelected={setItem10}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    11- Os cintos de segurança estão em perfeitas condições de uso e funcionamento, sem dispositivos que travem, afrouxem ou modifiquem seu funcionamento?
                </Text>
                <SelectList
                    setSelected={setItem11}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    12- Possui no mínimo dois calços de segurança, que garantam sua imobilização quando estacionado?
                </Text>
                <SelectList
                    setSelected={setItem12}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    13- Possui combustível suficiente para o deslocamento pretendido?
                </Text>
                <SelectList
                    setSelected={setItem13}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    14- Objetos que podem causar lesões em caso de colisão (mochilas,bolsas, laptops, etc) estão acondicionados no porta malas ou afixados com cinto de segurança?
                </Text>
                <SelectList
                    setSelected={setItem14}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    15- A limpeza e higiene interna estão adequadas?
                </Text>
                <SelectList
                    setSelected={setItem15}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    16- Para brisas, faróis, lanternas e placas estão limpos?
                </Text>
                <SelectList
                    setSelected={setItem16}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    17- Possui logotipo da empresa e TAG?
                </Text>
                <SelectList
                    setSelected={setItem17}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    18- Os espelhos retrovisores externos estão adequados?
                </Text>
                <SelectList
                    setSelected={setItem18}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    19- As partes móveis do equipamento estão devidamente protegidas?
                </Text>
                <SelectList
                    setSelected={setItem19}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    20- Possui sistema retardador de velocidade acoplado à caixa de transmissão, conjugado com o freio ou sistema similar de freio auxiliar (Top break, turbo break e outros)?
                </Text>
                <SelectList
                    setSelected={setItem20}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    21- Os pára-choques dianteiro e traseiro estão adequados?
                </Text>
                <SelectList
                    setSelected={setItem21}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    22- As condições gerais estão adequadas (motor, parte elétrica etc)?
                </Text>
                <SelectList
                    setSelected={setItem22}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    23- Condutor/Operador habilitado/autorizado a executar suas atividades?
                </Text>
                <SelectList
                    setSelected={setItem23}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    24- Possui vazamento água, óleo hidraúlico ou diesel?
                </Text>
                <SelectList
                    setSelected={setItem24}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    25- O controle de monoitoramento de fumaça preta está em dia? E está disponivel no véiculo/equipamento?
                </Text>
                <SelectList
                    setSelected={setItem25}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    26- Degruas da cabine , escadas e estribibus em boas condições de uso?
                </Text>
                <SelectList
                    setSelected={setItem26}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    27- Sistema de asperção de água em perfeitas condições de uso?
                </Text>
                <SelectList
                    setSelected={setItem27}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    28- Bancos de assento em boas condições de uso?
                </Text>
                <SelectList
                    setSelected={setItem28}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    29- Possui indicação de capacidade de carga/litros máxima?
                </Text>
                <SelectList
                    setSelected={setItem29}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    30- Possui identificação de "Água Não Potável" no tanque?
                </Text>
                <SelectList
                    setSelected={setItem30}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />
                <Text style={styles.title}>
                    31- Possui sinalização/faixa refletiva que permita sua identificação à distância?
                </Text>
                <SelectList
                    setSelected={setItem31}
                    data={data}
                    boxStyles={{ backgroundColor: 'white', width: 300 }}
                    listStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyle={{ color: 'white' }}
                    dropdownItemStyles={{ backgroundColor: 'white' }}
                />


                <TouchableOpacity onPress={() => console.log(responses)}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <View>
                    {/* ... */}
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F4F4F'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 10
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputleft: {
        textAlign: 'center',
        height: 40,
        width: 300,
        fontSize: 12,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        padding: 1,
        backgroundColor: '#ffff',
        borderRadius: 10,


    },
});

export default ChecklistPipa;

