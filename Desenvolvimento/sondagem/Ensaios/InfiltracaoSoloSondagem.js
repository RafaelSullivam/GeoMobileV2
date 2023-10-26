import React, { useEffect, useState } from "react";
import { Image, Text, View, Alert, ScrollView, TouchableOpacity, TextInput } from "react-native";

import styles from "./style";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import * as SQLite from "expo-sqlite";
import axios from 'axios'; // npm i axios
import Conexao from "../../Conexao/conexao";




export default function InfiltracaoSoloSondagem(props) {


    api = Conexao.api



    const [idFuro, setIdFuro] = useState("")
    const [trecho, setTrecho] = useState("")
    const [trecho2, setTrecho2] = useState("")
    const [rtCampo, setRtCampo] = useState("")
    const [ensaio, setEnsaio] = useState("")
    const [cuoucs, setCuoucs] = useState()
    const [q, setQ] = useState()
    const [h, setH] = useState()
    const [h1, setH1] = useState()
    const [hd1, setHD1] = useState()
    const [l, setL] = useState()

    const [ae12, setAe12] = useState(0.00001)
    const [ah12, setAH12] = useState()
    const [ag12, setAG12] = useState()

    const [d, setD] = useState()
    const [lh, setLh] = useState()
    const [hr, setHr] = useState()
    const [lr, setLr] = useState(0)
    const [tempo0, setTempo0] = useState(0)
    const [tempo1, setTempo1] = useState(0)
    const [tempo2, setTempo2] = useState(0)
    const [tempo3, setTempo3] = useState(0)
    const [tempo4, setTempo4] = useState(0)
    const [tempo5, setTempo5] = useState(0)
    const [tempo6, setTempo6] = useState(0)
    const [tempo7, setTempo7] = useState(0)
    const [tempo8, setTempo8] = useState(0)
    const [tempo9, setTempo9] = useState(0)
    const [tempo10, setTempo10] = useState(0)
    const [tempo11, setTempo11] = useState(0)
    const [tempo12, setTempo12] = useState(0)
    const [tempo13, setTempo13] = useState(0)
    const [tempo14, setTempo14] = useState(0)
    const [tempo15, setTempo15] = useState(0)
    const [tempo16, setTempo16] = useState(0)
    const [tempo17, setTempo17] = useState(0)
    const [tempo18, setTempo18] = useState(0)
    const [tempo19, setTempo19] = useState(0)
    const [tempo20, setTempo20] = useState(0)
    




    const [leitura0, setLeitura0] = useState(0)
    const [leitura1, setLeitura1] = useState(0)
    const [leitura2, setLeitura2] = useState(0)
    const [leitura3, setLeitura3] = useState(0)
    const [leitura4, setLeitura4] = useState(0)
    const [leitura5, setLeitura5] = useState(0)
    const [leitura6, setLeitura6] = useState(0)
    const [leitura7, setLeitura7] = useState(0)
    const [leitura8, setLeitura8] = useState(0)
    const [leitura9, setLeitura9] = useState(0)
    const [leitura10, setLeitura10] = useState(0)
    const [leitura11, setLeitura11] = useState(0)
    const [leitura12, setLeitura12] = useState(0)
    const [leitura13, setLeitura13] = useState(0)
    const [leitura14, setLeitura14] = useState(0)
    const [leitura15, setLeitura15] = useState(0)
    const [leitura16, setLeitura16] = useState(0)
    const [leitura17, setLeitura17] = useState(0)
    const [leitura18, setLeitura18] = useState(0)
    const [leitura19, setLeitura19] = useState(0)
    const [leitura20, setLeitura20] = useState(0)
   


    const [sigma, setSigma] = useState("")
    const [sigma1, setSigma1] = useState("")

    const [result, setResult] = useState(0)
    const [result1, setResult1] = useState()
    const [result2, setResult2] = useState()
    const [result3, setResult3] = useState()

    const [na, setNA] = useState(0)


    const [acimanade, setAcimaNADE] = useState()
    const [abaixona, setAbaixoNA] = useState()
    const [datePicker, setDatePicker] = useState(false);
    const [data1, setData1] = useState(new Date());
    const [data2, setData2] = useState(new Date());


    const [kabge, setKabge] = useState("");
    const [klefranc, setKlefranc] = useState("");

    const [condicaoEnsaio, setCondicaoensaio] = useState();
    const dt = [


        { label: 'ACIMA DO NA ', value: 'ACIMA DO NA ' },
        { label: 'ABAIXO DO NA', value: 'ABAIXO DO NA' },


    ];

    const [leitorVazao, setLeitorVazao] = useState();
    const dt1 = [


        { label: 'PROVETA', value: 'PROVETA' },
        { label: 'HIDROMETRO', value: 'HIDROMETRO' },


    ];

    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

            </View>
        );
    };





    const MensagemSalvarOffline = () =>
        Alert.alert(
            "                          Salvo com sucesso OffLine! ",
            ""
            [
            { text: "OK" }
            ]
        );




    const mensagemsalvar = () =>
        Alert.alert(
            "                          Salvo com sucesso na nuvem!",
            "",
            [
                {

                },
            ]
        );






    const calculoPotenciaAF3 = (hr) => {
        const constante1 = -3 * Math.pow(10, -18);
        const constante2 = 3 * Math.pow(10, -14);
        const constante3 = -1 * Math.pow(10, -10);
        const constante4 = 3 * Math.pow(10, -7);
        const constante5 = -0.0002;
        const constante6 = 0.3099;
        const constante7 = 13.565;


        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );


        return resultado;


    };
    const resultadoCalculoAF3 = calculoPotenciaAF3(h);











    const calculoPotenciaAF4 = (hr) => {
        const constante1 = 0.0000000000000000007;
        const constante2 = -0.000000000000009;
        const constante3 = 0.00000000004;
        const constante4 = -0.00000007;
        const constante5 = 0.00003;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            hr
        );

        return resultado;
    };

    const resultadoCalculoAF4 = calculoPotenciaAF4(hr);







    const calculoPotenciaAF5 = (hr) => {
        const constante1 = -0.000000000000000001;
        const constante2 = 0.00000000000003;
        const constante3 = -0.0000000002;
        const constante4 = 0.0000004;
        const constante5 = -0.0005;
        const constante6 = 0.7095;
        const constante7 = 15.475;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };

    const resultadoCalculoAF5 = calculoPotenciaAF5(hr);





    const calculoPotenciaAF6 = (hr) => {
        const constante1 = -0.000000000000000003;
        const constante2 = 0.00000000000003;
        const constante3 = -0.0000000001;
        const constante4 = 0.0000002;
        const constante5 = -0.0003;
        const constante6 = 0.8262;
        const constante7 = 21.58;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };
    const resultadoCalculoAF6 = calculoPotenciaAF6(hr);








    const calculoPotenciaAF7 = (hr) => {
        const constante1 = -0.00000000000000002;
        const constante2 = 0.0000000000002;
        const constante3 = -0.0000000008;
        const constante4 = 0.000001;
        const constante5 = -0.0011;
        const constante6 = 1.1958;
        const constante7 = 15.313;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };


    const resultadoCalculoAF7 = calculoPotenciaAF7(hr);












    const calculoAE23 = (lh) => {
        if (lh <= 0.1) {
            return resultadoCalculoAF3;
        } else if (lh <= 0.2) {
            return resultadoCalculoAF4;
        } else if (lh <= 0.3) {
            return resultadoCalculoAF5;
        } else if (lh <= 0.4) {
            return resultadoCalculoAF6;
        } else {
            return resultadoCalculoAF7;
        }


    };








    // const calculoAE26 = (h1, h,) => {
    //     if (h1 !== "" && h >= h1) {
    //         return resultadoCalculoAF9;
    //     } else {
    //         return " - ";
    //     }
    // };

    // const resultadoCalculoAE26 = calculoAE26(h1, h);

    // /////////////////////////////////////////////////////////////////

    // function resultadokabge() {


    //     setResult1(calcularKABGE(cuoucs, condicaoEnsaio, q, h, h1, d))
    //     console.log("Resultado kabge-->", result1)
    // }



    // function calcularKABGE(cuoucs, abaixoNA, q,                 h, h1, d) {


    //     if (cuoucs === "inconclusivo ") {


    //         return "-";
    //     }



    //     else if (cuoucs === " ") {
    //         return "";
    //     }



    //     else {


    //         if (abaixoNA === "ABAIXO DO NA") {


    //             return (q / h) * (1 / (cuoucs * (d / 2)));
    //         } else {


    //             return (q / h1) * (1 / (cuoucs * (d / 2)));


    //         }
    //     }
    // }







    // function calcularKLEFRANC( ) {


    //     // if (l === " ") {


    //     //     return "-";
    //     // }

    //     // else {


    //     //     const pi = Math.PI;


    //     //     const term1 = 2 * pi * l;


    //     //     const term2 = (2 * l) / d;







    //             const pi = Math.PI;

    //             const result = 0.167 / (2 * pi * 400 * (500 + (400 / 2))) * Math.log ( (2 * 400) / 100);


    //             return result.toString();







    //         // else {


    //         //     const result = (q / (term1 * h1)) * Math.log((2 * l) / d);


    //         //     return result.toString();
    //         // }
    //     // }
    // }















































    // function calcularKLEFRANC(q, h,  l, d ) {


    //     if (l === " ") {


    //         return "-";
    //     }

    //     else {


    //         const pi = Math.PI;


    //         // const term1 = 2 * pi * l;


    //         // const term2 = (2 * l) / d;
    //            const result = q / (2 * pi * l * (h + (l / 2))) * Math.log ( (2 * l) / d);


    //             return result.toString();

    //     }
    // }



    //         else {


    //             const result = (q / (term1 * h1)) * Math.log((2 * l) / d);


    //             return result.toString();
    //         }

    //     }
    // }








    function required() {
        throw new Error('Atributo não foi informado.');
    }



    function sigmatempo() {

        const result = parseFloat(tempo0) + parseFloat(tempo1) + parseFloat(tempo2) + parseFloat(tempo3) + parseFloat(tempo4) + parseFloat(tempo5) + parseFloat(tempo6) + parseFloat(tempo7) + parseFloat(tempo8) + parseFloat(tempo9) + parseFloat(tempo10) + parseFloat(tempo11) + parseFloat(tempo12) + parseFloat(tempo13) + parseFloat(tempo14) + parseFloat(tempo15) + parseFloat(tempo16) + parseFloat(tempo17) + parseFloat(tempo18) + parseFloat(tempo19) + parseFloat(tempo20);
        setSigma1(sigmaleitura)
        return result.toString()
    }

    function sigmaleitura() {

        const result = parseFloat(leitura0) + parseFloat(leitura1) + parseFloat(leitura2) + parseFloat(leitura3) + parseFloat(leitura4) + parseFloat(leitura5) + parseFloat(leitura6) + parseFloat(leitura7)  + parseFloat(leitura8)  + parseFloat(leitura9)  + parseFloat(leitura10)  + parseFloat(leitura11)  + parseFloat(leitura12)  + parseFloat(leitura13)  + parseFloat(leitura14)  + parseFloat(leitura15)  + parseFloat(leitura16)  + parseFloat(leitura17)  + parseFloat(leitura18)  + parseFloat(leitura19)  + parseFloat(leitura20);
        setQ(qcm)
        return result.toString()
    }

    function qcm() {

        const result = parseFloat(sigma1) / parseFloat(sigma)
        return result.toFixed(3)
    }
    function hcm(h) {

        const result = (trecho2 * 100 + 100)
        return result.toString();
    }
    function hlcm(h) {

        const result = (h - (l / 2))
        return result.toString();
    }
    function hldcm(h) {

        const result = (parseFloat(na) + 100)
        return result.toString();

    }
    function hldcm1(h) {

        const result = 100
        return result.toString();
    }
    function Ld() {
        const result = ((trecho2 - trecho) * 100)
        return result.toString();
    }
    function LH() {

        const result = parseFloat(l) / parseFloat(h)
        return result.toFixed(3);
    }
    function HR() {

        const result = parseFloat(h) / (parseFloat(d) / 2)
        return result.toString();
    }
    function LR() {

        const result = parseFloat(l) / (parseFloat(d) / 2)
        return result.toString();
    }
    function calculoPotenciaAF9(lr) {
        const constante1 = -0.00000000000000001;
        const constante2 = 0.0000000000001;
        const constante3 = 0.0000000005;
        const constante4 = 0.0000009;
        const constante5 = 0.0008;
        const constante6 = 1.1594;
        const constante7 = 12.442;

        const resultado = (
            constante1 * Math.pow(lr, 6) + constante2 * Math.pow(lr, 5) - constante3 * Math.pow(lr, 4) + constante4 * Math.pow(lr, 3) - constante5 * Math.pow(lr, 2) + constante6 * lr + constante7
        );

        return resultado.toFixed(0);
    };
    const KABGE = (q, h, cuoucs, d, hd1) => {

        if (acimanade === 'x') {
            const result = (parseFloat(q) / parseFloat(h)) * (1 / (cuoucs * (d / 2)))
            return result.toPrecision(3);
        } else {
            const result = (parseFloat(q) / parseFloat(hd1)) * (1 / (cuoucs * (d / 2)))
            return result.toPrecision(3);
        }

    }


    function KLEFRAN(q, h, l, d) {

        if (l === " ") {


            return "-";
        }

        else {


            const pi = Math.PI;
            const result = q / (2 * pi * l * (parseFloat(h) + (l / 2))) * Math.log((2 * l) / d);


            return result.toPrecision(3);


        }

    }




    function H1KLEFRAN(lefranc, sigma1, ae12, ah12) {


        if (sigma1 === " ") {
            return "-";
        } else {
            const result = lefranc < ae12 ? 'sim' : 0;
            ah12 = result;

            console.log('ah------->', ah12);

            if (result === 'sim') {
                return 'H1';
            } else {
                return '';
            }
        }
    }





    function H1KABGE(kabge, cuoucs, ae12, ag12) {


        if (cuoucs === " ") {
            return "-";
        } else {
            const result = kabge < ae12 ? 'sim' : 0;
            ag12 = result;

            console.log('ag------->', ag12);

            if (result === 'sim') {
                return 'H1';
            } else {
                return '';
            }
        }
    }









    const calculoCuouCS = (h1, h2) => {

        console.log(h1, h2)
        if (h1 >= h2) {
            console.log('1')
            setCuoucs(calculoPotenciaAF9(lr));
        } else {
            console.log('2')
            setCuoucs(calculoAE23(lh).toFixed(0));


        }



    };
    const Calcular = (h1, h2) => {

        setH(hcm)

        setSigma(sigmatempo)
        if (na > 0) {
            setHD1(hldcm)
        } else {
            setHD1(hldcm1)
        }
        setL(Ld)
        setLh(LH)
        setHr(HR)
        setLr(LR)
        calculoCuouCS(h1, h2)
        setKabge(KABGE(q, h, cuoucs, d, hd1))
        setResult2(KLEFRAN(q, h, l, d))


        setResult(H1KLEFRAN(result2, sigma1, ae12, ah12))
        setResult1(H1KABGE(kabge, cuoucs, ae12, ag12))

        console.log(q, h, l, d)
        console.log("Resultado kfranc-->", result2, "Resultado kabge-->", kabge)

    }





    function showDatePicker() {
        setDatePicker(true);
    }



    function onDateSelected(event, value) {
        setData2(value)


        setDatePicker(false);
    };









    const BuscaBancoSQl = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM  infiltracaoSoloSondagem WHERE idFuro =?', [idFuro], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {



                    setTrecho(results.rows.item(0).trecho)
                    setRtCampo(results.rows.item(0).rtCampo)
                    setEnsaio(results.rows.item(0).ensaio)
                    setCondicaoensaio(results.rows.item(0).condicaoEnsaio)
                    setLeitorVazao(results.rows.item(0).leitorVazao)
                    setCuoucs(results.rows.item(0).cuoucs)
                    setQ(results.rows.item(0).q)
                    setH(results.rows.item(0).h)
                    setH1(results.rows.item(0).h1)
                    setL(results.rows.item(0).l)
                    setD(results.rows.item(0).d)
                    setLh(results.rows.item(0).lh)
                    setHr(results.rows.item(0).hr)
                    setLr(results.rows.item(0).lr)
                    setKabge(results.rows.item(0).kabge)
                    setKlefranc(results.rows.item(0).klefranc)
                    setTempo0(results.rows.item(0).tempo)
                    setTempo1(results.rows.item(0).tempo1)
                    setTempo2(results.rows.item(0).tempo2)
                    setTempo3(results.rows.item(0).tempo3)
                    setTempo4(results.rows.item(0).tempo4)
                    setTempo5(results.rows.item(0).tempo5)
                    setTempo6(results.rows.item(0).tempo6)
                    setTempo7(results.rows.item(0).tempo7)
                    setLeitura0(results.rows.item(0).leitura)
                    setLeitura1(results.rows.item(0).leitura1)
                    setLeitura2(results.rows.item(0).leitura2)
                    setLeitura3(results.rows.item(0).leitura3)
                    setLeitura4(results.rows.item(0).leitura4)
                    setLeitura5(results.rows.item(0).leitura5)
                    setLeitura6(results.rows.item(0).leitura6)
                    setLeitura7(results.rows.item(0).leitura7)



                }






                console.log(temp, "ok")


            });


        });
    };












    // Sqlite so salva quando o app esta em offline
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
                    "create table if not exists infiltracaoSoloSondagem ( idFuro text , trecho text , data1 text , rtCampo text , ensaio text , cuoucs text , q text  , h text  , h1 text , l text  , d text , lh text , hr text   , lr text   , tempo text , tempo1 text , tempo2 text , tempo3 text , tempo4 text , tempo5 text , tempo6 text , tempo7 text ,tempo8 text , tempo9 text , tempo10 text , tempo11 text , tempo12 text , tempo13 text , tempo14 text , tempo15 text , tempo16 text , tempo17 text , tempo18 text , tempo19 text , tempo20 text , leitura  text , leitura1 text , leitura2 text , leitura3 text , leitura4 text , leitura5 text , leitura6 text , leitura7 text ,leitura8  text , leitura9  text , leitura10  text , leitura11  text , leitura12  text , leitura13  text , leitura14  text , leitura15  text , leitura16  text , leitura17  text , leitura18  text , leitura19  text , leitura20  text , kabge text , klefranc text , condicaoEnsaio text , leitorVazao text);"
                );
                console.log("Banco de dados criado ")
            });
    };


    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into infiltracaoSoloSondagem ( idFuro, trecho , data1 , rtCampo  , ensaio ,  cuoucs  , q , h , h1 , l , d , lh , hr , lr , tempo, tempo1 ,tempo2  ,tempo3, tempo4 , tempo5, tempo6 , tempo7, tempo8, tempo9, tempo10, tempo11, tempo12, tempo13, tempo14, tempo15, tempo16, tempo17, tempo18, tempo19, tempo20,  leitura ,  leitura1,  leitura2,  leitura3 ,  leitura4 , leitura5,  leitura6,  leitura7 , leitura8 , leitura9 , leitura10 , leitura11 , leitura12 , leitura13 , leitura14 , leitura15 , leitura16 , leitura17 , leitura18 , leitura19 , leitura20 , kabge, klefranc  , condicaoEnsaio , leitorVazao ) values ('${idFuro}','${trecho}','${rtCampo}','${data1}','${ensaio}' ,'${cuoucs}' ,'${q}'  ,'${h}'  ,'${h1}'  ,'${l}'  ,'${d}'  ,'${lh}'  ,'${hr}'  ,'${lr}' ,'${tempo0}','${tempo1}','${tempo2}','${tempo3}','${tempo4}','${tempo5}','${tempo6}','${tempo7}' ,'${tempo8}','${tempo9}','${tempo10}','${tempo11}','${tempo12}','${tempo13}','${tempo14}','${tempo15}','${tempo16}','${tempo17}','${tempo18}','${tempo19}','${tempo20}','${leitura0}' ,'${leitura1}' ,'${leitura2}','${leitura3}','${leitura4}','${leitura5}','${leitura6}','${leitura7}' ,'${leitura8}','${leitura9}','${leitura10}','${leitura11}','${leitura12}','${leitura13}','${leitura14}','${leitura15}','${leitura16}','${leitura17}','${leitura18}','${leitura19}','${leitura20}','${kabge}' ,'${klefranc}','${condicaoEnsaio}','${leitorVazao}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            console.log("ok1"),
            MensagemSalvarOffline(),

        );
    };

    const EnivarParaBancoON = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM infiltracaoSoloSondagem where idFuro = ?', [idFuro], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                add(temp)
                console.log(temp, 'ok okv  ok')
            });

        });

    };

    async function add(lista) {
        const results = []

        lista.forEach((list) => {
            results.push(
                SalvarInfiltracao(list.idFuro, list.trecho, list.rtCampo, list.data1, list.ensaio, list.cuoucs, list.h, list.h1, list.l, list.d, list.lh, list.hr, list.lr, list.tempo, list.tempo1, list.tempo2, list.tempo3, list.tempo4, list.tempo5, list.tempo6, list.tempo7, list.tempo8, list.tempo9, list.tempo10, list.tempo11, list.tempo12, list.tempo13, list.tempo14, list.tempo15, list.tempo16, list.tempo17, list.tempo18, list.tempo19, list.tempo20, list.leitura, list.leitura1, list.leitura2, list.leitura3, list.leitura4, list.leitura5, list.leitura6, list.leitura7)
            )
        })

    }





    async function SalvarInfiltracao() {
        try {
            const obj = { idFuro: idFuro, trecho: trecho, rtCampo: rtCampo, data1: data1, ensaio: ensaio, cuoucs: cuoucs, h: h, h1: h1, l: l, d: d, lh: lh, hr: hr, lr: lr, tempo: tempo0, tempo1: tempo1, tempo2: tempo2, tempo3: tempo3, tempo4: tempo4, tempo5: tempo5, tempo6: tempo6, tempo7: tempo7, leitura: leitura0, leitura1: leitura1, leitura2: leitura2, leitura3: leitura3, leitura4: leitura4, leitura5: leitura5, leitura6: leitura6, leitura7: leitura7 };
            const res = await axios.post(this.api + 'SalvarinfiltracaoSoloSondagem.php', obj);
            if (res.data.success === true) {
                console.log("salvo");
            }
        } catch (error) {
            console.error("Erro :", error);
        }
    }

















    let DeleteBancoSQlite = (furo) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS infiltracaoSoloSondagem'

            );
            console.log("deletado")
        });
    };
    useEffect(() => {
        //getItem()

        // SalvarBancoSQLite()


    }, []);


    useEffect(() => {

        // DeleteBancoSQlite()
        // gerarBancoSQlite()
        setData1(moment(data2).format("DD/MM/YYYY"));

        Calcular(h, hd1)


        // NetInfo.fetch().then(state => {
        //     setConnState(state);
        //     console.log("Tipo de conexão", state.type);
        //     console.log("Está conectado?", state.isConnected);
        //   });

        //   const unsubscribe = NetInfo.addEventListener(state => {
        //     setConnState(state);
        //     console.log("Tipo de conexão", state.type);
        //     console.log("Está conectado?", state.isConnected);
        //   });


    })


    return (












        <ScrollView>

            <View style={styles.container}>
                {datePicker && (
                    <DateTimePicker



                        value={data2}
                        mode={'date'}
                        dateFormat='DD/MM/AAAA'
                        display={'default'}
                        is24Hour={true}
                        onChange={onDateSelected}


                    />
                )}


                <Text > </Text>
                <Text style={styles.text}>FURO</Text>
                <TextInput
                    onChangeText={setIdFuro}
                    value={idFuro}
                    style={styles.inputleft}
                ></TextInput>


                <TouchableOpacity
                    style={styles.button}

                    onPress={SalvarBancoSQLite}

                >
                    <Text style={styles.text}>Salvar  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}

                    onPress={BuscaBancoSQl}

                >
                    <Text style={styles.text}>Buscar </Text>
                </TouchableOpacity>


                <Text style={styles.text}>Trecho ensaiado</Text>
                <View style={styles.container1}>

                    <TextInput
                        onChangeText={setTrecho}
                        value={trecho}
                        style={styles.inputleftRow}
                    ></TextInput>
                    <Text style={styles.textrow}>a</Text>
                    <TextInput
                        onChangeText={setTrecho2}
                        value={trecho2}
                        style={styles.inputleftRow}
                    ></TextInput>
                </View>
                <Text style={styles.text}>Data </Text>
                <TouchableOpacity style={styles.inputleft} onPress={showDatePicker} >
                    <Text
                    >  {`${data2 ? moment(data2).format("DD/MM/YYYY") : "Please select date"}`}</Text>
                </TouchableOpacity>

                <Text style={styles.text}>RT de campo </Text>
                <TextInput
                    onChangeText={setRtCampo}
                    value={rtCampo}
                    style={styles.inputleft}
                ></TextInput>

                <Text style={styles.text}> Ensaio nº</Text>
                <TextInput
                    onChangeText={setEnsaio}
                    value={ensaio}
                    style={styles.inputleft}
                ></TextInput>


                <Text style={styles.text}>Condição do Furo</Text>

                <Dropdown
                    style={styles.inputleft}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    dropdownPosition="bottom"
                    data={dt}
                    search
                    maxHeight={3000}
                    labelField="label"
                    valueField="value"
                    placeholder=""
                    searchPlaceholder="Search..."
                    value={condicaoEnsaio}
                    onChange={item => {
                        setCondicaoensaio(item.value);
                    }}
                    renderItem={item => _renderItem(item)}
                    textError="Error"

                />

                <Text style={styles.text}>Leitor de Vazão </Text>

                <Dropdown
                    style={styles.inputleft}
                    containerStyle={styles.shadow}
                    textItem={styles.textItem}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.textItem}
                    dropdownPosition="bottom"
                    data={dt1}
                    search
                    maxHeight={3000}
                    labelField="label"
                    valueField="value"
                    placeholder=""
                    searchPlaceholder="Search..."
                    value={leitorVazao}
                    onChange={item => {
                        setLeitorVazao(item.value);
                    }}
                    renderItem={item => _renderItem(item)}
                    textError="Error"

                />
                <Text style={styles.text}>Cu ou CS (ábaco da ABGE)
                </Text>
                <TextInput
                    style={styles.inputleft}
                    onChangeText={setCuoucs}
                    value={cuoucs}
                    editable={false}
                ></TextInput>


                <Text style={styles.text}>Tempo(s)                 Leitura(s) </Text>






                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo0}
                        value={tempo0}
                        style={styles.input22}


                    ></TextInput>


                    <TextInput
                        onChangeText={setLeitura0}
                        value={leitura0}
                        style={styles.input22}

                    ></TextInput>



                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo1}
                        value={tempo1}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura1}
                        value={leitura1}
                        style={styles.input22}

                    ></TextInput>



                </View>



                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo2}
                        value={tempo2}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura2}
                        value={leitura2}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo3}
                        value={tempo3}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura3}
                        value={leitura3}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo4}
                        value={tempo4}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura4}
                        value={leitura4}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo5}
                        value={tempo5}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura5}
                        value={leitura5}
                        style={styles.input22}

                    ></TextInput>



                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo6}
                        value={tempo6}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura6}
                        value={leitura6}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo7}
                        value={tempo7}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura7}
                        value={leitura7}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo8}
                        value={tempo8}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura8}
                        value={leitura8}
                        style={styles.input22}

                    ></TextInput>

                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo9}
                        value={tempo9}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura9}
                        value={leitura9}
                        style={styles.input22}

                    ></TextInput>

                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo10}
                        value={tempo10}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura10}
                        value={leitura10}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo11}
                        value={tempo11}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura11}
                        value={leitura11}
                        style={styles.input22}

                    >
                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo12}
                        value={tempo12}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura12}
                        value={leitura12}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo13}
                        value={tempo13}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura13}
                        value={leitura13}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo14}
                        value={tempo14}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura14}
                        value={leitura14}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo15}
                        value={tempo15}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura15}
                        value={leitura15}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo16}
                        value={tempo16}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura16}
                        value={leitura16}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo17}
                        value={tempo17}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura17}
                        value={leitura17}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo18}
                        value={tempo18}
                        style={styles.input22}

                    >

                    </TextInput>

                    <TextInput
                        onChangeText={setLeitura18}
                        value={leitura18}
                        style={styles.input22}

                    >

                    </TextInput>
                </View>
                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo19}
                        value={tempo19}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura19}
                        value={leitura19}
                        style={styles.input22}

                    ></TextInput>

                </View>

                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setTempo20}
                        value={tempo20}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setLeitura20}
                        value={leitura20}
                        style={styles.input22}

                    ></TextInput>

                </View>





                <Text style={styles.text}>Σ                                Σ </Text>


                <View style={styles.container22}>

                    <TextInput
                        onChangeText={setSigma}
                        value={sigma}
                        style={styles.input22}

                    ></TextInput>

                    <TextInput
                        onChangeText={setSigma1}
                        value={sigma1}
                        style={styles.input22}

                    ></TextInput>




                </View>







                <Text style={styles.text}>
                    Q (cm³/s)

                </Text>
                <TextInput
                    onChangeText={setQ}
                    value={q}
                    style={styles.inputleft}
                    editable={false}
                ></TextInput>


                <Text style={styles.text}>h (cm)

                </Text>
                <TextInput
                    onChangeText={setH}
                    value={h}
                    style={styles.inputleft}
                    editable={false}
                ></TextInput>



                <Text style={styles.text}> h' (cm)

                </Text>
                <TextInput
                    onChangeText={setHD1}
                    value={hd1}
                    style={styles.inputleft}
                    editable={false}
                ></TextInput>


                <Text style={styles.text}>L (cm)

                </Text>
                <TextInput
                    onChangeText={setL}
                    value={l}
                    style={styles.inputleft}
                    editable={false}
                ></TextInput>



                <Text style={styles.text}>D (cm)

                </Text>
                <TextInput
                    onChangeText={setD}
                    value={d}
                    style={styles.inputleft}
                    editable={false}
                ></TextInput>


                <Text style={styles.text}>L/h

                </Text>
                <TextInput
                    onChangeText={setLh}
                    value={lh}
                    style={styles.inputleft}
                ></TextInput>


                <Text style={styles.text}>h/r

                </Text>
                <TextInput
                    onChangeText={setHr}
                    value={hr}
                    style={styles.inputleft}
                ></TextInput>



                <Text style={styles.text}>L/r

                </Text>
                <TextInput
                    onChangeText={setLr}
                    value={lr}
                    style={styles.inputleft}
                ></TextInput>







                <Text style={styles.text}>K - ABGE
                    (cm/s)
                </Text>
                <TextInput
                    onChangeText={setKabge}
                    value={kabge}
                    style={styles.inputleft}
                ></TextInput>
                <TextInput
                    onChangeText={setResult1}
                    value={result1}
                    style={styles.inputleft}
                ></TextInput>







                <Text style={styles.text}>K - Lefranc
                    (cm/s)
                </Text>
                <TextInput
                    onChangeText={setKlefranc}
                    value={result2}
                    style={styles.inputleft}
                ></TextInput>
                <TextInput
                    onChangeText={setResult}
                    value={result}
                    style={styles.inputleft}
                ></TextInput>
            </View>











            <View style={styles.container}>

                <Image style={styles.img}
                    source={require('../../../assets/Furo.png')}
                />

                <View style={styles.containerDesenho}>
                    <Text style={styles.textDesenho}>
                        acima do NA
                    </Text>
                    <TextInput
                        onChangeText={setAcimaNADE}
                        value={acimanade}
                        style={styles.inputleftANA}
                    ></TextInput>
                </View>
                <View style={styles.containerDesenho2}>

                    <TextInput
                        onChangeText={setH}
                        value={h}
                        style={styles.inputleftANA}
                        editable={false}
                    ></TextInput>
                    <Text style={styles.textDesenho}>
                        (cm)
                    </Text>
                </View>


                <View style={styles.containerDesenho4}>
                    <Text style={styles.textDesenho}>
                        abaixo do NA
                    </Text>
                    <TextInput
                        onChangeText={setAbaixoNA}
                        value={abaixona}
                        style={styles.inputleftANA}
                    ></TextInput>

                </View>
                <View style={styles.containerDesenho5}>

                    <TextInput
                        onChangeText={setHD1}
                        value={hd1}
                        style={styles.inputleftANA}
                        editable={false}
                    ></TextInput>
                    <Text style={styles.textDesenho}>
                        (cm)
                    </Text>
                </View>
                <View style={styles.containerDesenho6}>
                    <Text style={styles.textDesenho}>
                        N.A
                    </Text>
                    <TextInput
                        onChangeText={setNA}
                        value={na}
                        style={styles.inputleftANA}
                        placeholder="dew"
                    ></TextInput>

                </View>
                <View style={styles.containerDesenho7}>

                    <TextInput
                        onChangeText={setL}
                        value={l}
                        style={styles.inputleftANA}
                        editable={false}
                        
                    ></TextInput>
                    <Text style={styles.textDesenho}>
                        (cm)
                    </Text>
                </View>
                <View style={styles.containerDesenho3}>

                    <TextInput
                        onChangeText={setD}
                        value={d}
                        style={styles.inputleftANA}
                        placeholder="d"
                    ></TextInput>
                    <Text style={styles.textDesenho}>
                        (cm)
                    </Text>
                </View>
                <View style={styles.containerDesenho8}>
                    <TouchableOpacity
                        style={styles.button}

                        onPress={() => Calcular(h, hd1)}

                    >
                        <Text style={styles.text}>Calcular  </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>


    );



};