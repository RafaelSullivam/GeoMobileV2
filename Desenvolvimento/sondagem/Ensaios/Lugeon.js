import React, { useEffect, useState } from "react";
import { Image, Text, View, Alert, ScrollView, TouchableOpacity, TextInput, StyleSheet } from "react-native";

import styles from "./style";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import * as SQLite from "expo-sqlite";
import axios from 'axios'; // npm i axios
import Conexao from "../../Conexao/conexao";




export default function Lugeon(props) {


    api = Conexao.api



    const [idFuro, setIdFuro] = useState("")
    const [trecho, setTrecho] = useState("")
    const [trecho2, setTrecho2] = useState("")
    const [ensaio, setEnsaio] = useState()


    //Lugeon
    const [profundidadeInicial, setProfundidadeInicial] = useState('');
    const [profundidadeFinal, setProfundidadeFinal] = useState('');
    const [inclinacao, setInclinacao] = useState('');
    const [profundidadeHidroestatica, setProfundidadeHidroestatica] = useState('');
    const [alturaManometro, setAlturaManometro] = useState('');
    const [diametroFuro, setDiametroFuro] = useState('');
    const [acimaNA, setAcimaNA] = useState(false);
    const [abaixoNA, setAbaixoNA] = useState(false);
    const [observacao, setObservacao] = useState('');
    const [observacao1, setObservacao1] = useState('');
    const [CoeficienteForma, setCoeficienteForma] = useState('');
    const [factorF, setFactorF] = useState('');
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [p3, setP3] = useState('');
    const [p4, setP4] = useState('');
    const [p5, setP5] = useState('');
    const [p6, setP6] = useState('');
    const [p7, setP7] = useState('');
    const [p8, setP8] = useState('');
    const [p9, setP9] = useState('');
    const [p10, setP10] = useState('');
    const [p11, setP11] = useState('');
    const [p12, setP12] = useState('');
    const [p13, setP13] = useState('');
    const [p14, setP14] = useState('');
    const [p15, setP15] = useState('');
    const [p16, setP16] = useState('');
    const [p17, setP17] = useState('');
    const [p18, setP18] = useState('');
    const [p19, setP19] = useState('');
    const [p20, setP20] = useState('');
    const [p21, setP21] = useState('');
    const [p22, setP22] = useState('');
    const [p23, setP23] = useState('');
    const [p24, setP24] = useState('');
    const [p25, setP25] = useState('');
    const [p26, setP26] = useState('');
    const [p27, setP27] = useState('');
    const [p28, setP28] = useState('');
    const [p29, setP29] = useState('');
    const [p30, setP30] = useState('');
    const [p31, setP31] = useState('');
    const [p32, setP32] = useState('');
    const [p33, setP33] = useState('');
    const [p34, setP34] = useState('');
    const [p35, setP35] = useState('');
    const [p36, setP36] = useState('');
    const [p37, setP37] = useState('');
    const [p38, setP38] = useState('');
    const [p39, setP39] = useState('');
    const [p40, setP40] = useState('');
    const [p41, setP41] = useState('');
    const [p42, setP42] = useState('');
    const [p43, setP43] = useState('');
    const [p44, setP44] = useState('');
    const [p45, setP45] = useState('');
    const [p46, setP46] = useState('');
    const [p47, setP47] = useState('');
    const [p48, setP48] = useState('');
    const [p49, setP49] = useState('');
    const [p50, setP50] = useState('');

    const [precao1, setPrecao1] = useState('');
    const [precao2, setPrecao2] = useState('');
    const [precao3, setPrecao3] = useState('');
    const [precao4, setPrecao4] = useState('');
    const [precao5, setPrecao5] = useState('');

    const [t01, setT01] = useState('');
    const [t02, setT02] = useState('');
    const [t03, setT03] = useState('');
    const [t04, setT04] = useState('');
    const [t05, setT05] = useState('');

    const [qe1, setQe1] = useState('');
    const [qe2, setQe2] = useState('');
    const [qe3, setQe3] = useState('');
    const [qe4, setQe4] = useState('');
    const [qe5, setQe5] = useState('');

    const [pe1, setPe1] = useState('');
    const [pe2, setPe2] = useState('');
    const [pe3, setPe3] = useState('');
    const [pe4, setPe4] = useState('');
    const [pe5, setPe5] = useState('');
    const [pe6, setPe6] = useState('');

    const [k1, setK1] = useState('');
    const [k2, setK2] = useState('');
    const [k3, setK3] = useState('');
    const [k4, setK4] = useState('');
    const [k5, setK5] = useState('');
    const [k6, setK6] = useState('');







    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');
    const [result3, setResult3] = useState('');
    const [result4, setResult4] = useState('');
    const [result5, setResult5] = useState('');








    const [s44, setS44] = useState('');
    const [s47, setS47] = useState('');
    const [r50, setR50] = useState('');












    ////////////////////////////////////////////////////////////////////////////////////////






    const [datePicker, setDatePicker] = useState(false);
    const [data1, setData1] = useState(new Date());
    const [data2, setData2] = useState(new Date());




    const [condicaoEnsaio, setCondicaoensaio] = useState();
    const dt = [


        { label: 'ACIMA DO NA ', value: 'ACIMA DO NA ' },
        { label: 'ABAIXO DO NA', value: 'ABAIXO DO NA' },


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





    function showDatePicker() {
        setDatePicker(true);
    }



    function onDateSelected(event, value) {
        setData2(value)


        setDatePicker(false);
    };










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
                    "create table if not exists lugeon ( idFuro text , ensaio text , data2 text , observacao text , observacao1 text , profundidadeInicial text , profundidadeFinal text , inclinacao text , profundidadeHidroestatica text , ensaio text , alturaManometro text , diametroFuro text , ensaio text);"
                );
                console.log("Banco de dados criado ")
            });
    };








    const SalvarBancoSQLite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into lugeon ( idFuro, ensaio , data2 , observacao  , observacao1  ) values ('${idFuro}','${trecho}','${ensaio}','${data2}','${observacao}' ,'${observacao1}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },

            console.log("ok1"),
            MensagemSalvarOffline(),

        );
    };







    const BuscaBancoSQl2 = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM  infiltracaoSoloSondagem WHERE idFuro =?', [idFuro], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {



                    setTrecho(results.rows.item(0).trecho)
                    setTrecho2(results.rows.item(0).trecho2)
                        (results.rows.item(0).rtCampo)
                    setEnsaio(results.rows.item(0).ensaio)
                    setCondicaoensaio(results.rows.item(0).condicaoEnsaio)






                }


                console.log(temp, "ok")


            });


        });
    };
























    function calcularCF(profundidadeInicial, profundidadeFinal, diametroFuro) {

        if (diametroFuro === 0) {
            return "diametroFuro não pode ser zero";
        }


        const resultadoCF = Math.log((0.66 * (profundidadeFinal - profundidadeInicial)) / (diametroFuro / 2));

        return resultadoCF;
    }


    const resultadoCF = calcularCF(profundidadeInicial, profundidadeFinal, diametroFuro);






    function calcularFator(cf) {
        const pi = Math.PI;


        const resultadof = (1.66 / (2 * pi)) * Math.pow(10, -4) * parseFloat(cf);
        return resultadof;

    }
    const resultadoFator = calcularFator(resultadoCF);















    const calcularMin1 = () => {
        if (!t01) {
            setResult1('');
        } else {
            setResult1((parseInt(p1) - parseInt(t01)).toString());
        }
    };

    const calcularMin2 = () => {
        if (!t02) {
            setResult2('');
        } else {
            setResult2((parseInt(p2) - parseInt(t02)).toString());
        }
    };

    const calcularMin3 = () => {
        if (!t03) {
            setResult3('');
        } else {
            setResult3((parseInt(p3) - parseInt(t03)).toString());
        }
    };

    const calcularMin4 = () => {
        if (!t04) {
            setResult4('');
        } else {
            setResult4((parseInt(p4) - parseInt(t04)).toString());
        }
    };




    const calcularMin5 = () => {
        if (!t05) {
            setResult5('');
        } else {
            setResult5((parseInt(p5) - parseInt(t05)).toString());
        }
    };


    const [result6, setResult6] = useState('');
    const calcularMin6 = () => {
        if (!p1) {
            setResult6('');
        } else {
            setResult6((parseInt(p6) - parseInt(p1)).toString());
        }
    };


    const [result7, setResult7] = useState('');
    const calcularMin7 = () => {
        if (!p2) {
            setResult7('');
        } else {
            setResult7((parseInt(p7) - parseInt(p2)).toString());
        }
    };


    const [result8, setResult8] = useState('');
    const calcularMin8 = () => {
        if (!p3) {
            setResult8('');
        } else {
            setResult8((parseInt(p8) - parseInt(p3)).toString());
        }
    };


    const [result9, setResult9] = useState('');
    const calcularMin9 = () => {
        if (!p4) {
            setResult9('');
        } else {
            setResult9((parseInt(p9) - parseInt(p4)).toString());
        }
    };


    const [result10, setResult10] = useState('');
    const calcularMin10 = () => {
        if (!p5) {
            setResult10('');
        } else {
            setResult10((parseInt(p10) - parseInt(p5)).toString());
        }
    };


    const [result11, setResult11] = useState('');
    const calcularMin11 = () => {
        if (!p6) {
            setResult11('');
        } else {
            setResult11((parseInt(p11) - parseInt(p6)).toString());
        }
    };


    const [result12, setResult12] = useState('');
    const calcularMin12 = () => {
        if (!p7) {
            setResult12('');
        } else {
            setResult12((parseInt(p12) - parseInt(p7)).toString());
        }
    };


    const [result13, setResult13] = useState('');
    const calcularMin13 = () => {
        if (!p8) {
            setResult13('');
        } else {
            setResult13((parseInt(p13) - parseInt(p8)).toString());
        }
    };


    const [result14, setResult14] = useState('');
    const calcularMin14 = () => {
        if (!p9) {
            setResult14('');
        } else {
            setResult14((parseInt(p14) - parseInt(p9)).toString());
        }
    };

    const [result15, setResult15] = useState('');
    const calcularMin15 = () => {
        if (!p10) {
            setResult15('');
        } else {
            setResult15((parseInt(p15) - parseInt(p10)).toString());
        }
    };


    const [result16, setResult16] = useState('');
    const calcularMin16 = () => {
        if (!p11) {
            setResult16('');
        } else {
            setResult16((parseInt(p16) - parseInt(p11)).toString());
        }
    };


    const [result17, setResult17] = useState('');
    const calcularMin17 = () => {
        if (!p12) {
            setResult17('');
        } else {
            setResult17((parseInt(p17) - parseInt(p12)).toString());
        }
    };

    const [result18, setResult18] = useState('');
    const calcularMin18 = () => {
        if (!p13) {
            setResult18('');
        } else {
            setResult18((parseInt(p18) - parseInt(p13)).toString());
        }
    };

    const [result19, setResult19] = useState('');
    const calcularMin19 = () => {
        if (!p14) {
            setResult19('');
        } else {
            setResult19((parseInt(p19) - parseInt(p14)).toString());
        }
    };



    const [result20, setResult20] = useState('');
    const calcularMin20 = () => {
        if (!p15) {
            setResult20('');
        } else {
            setResult20((parseInt(p20) - parseInt(p15)).toString());
        }
    };


    const [result21, setResult21] = useState('');
    const calcularMin21 = () => {
        if (!p16) {
            setResult21('');
        } else {
            setResult21((parseInt(p21) - parseInt(p16)).toString());
        }
    };

    const [result22, setResult22] = useState('');
    const calcularMin22 = () => {
        if (!p17) {
            setResult22('');
        } else {
            setResult22((parseInt(p22) - parseInt(p17)).toString());
        }
    };

    const [result23, setResult23] = useState('');
    const calcularMin23 = () => {
        if (!p18) {
            setResult23('');
        } else {
            setResult23((parseInt(p23) - parseInt(p18)).toString());
        }
    };

    const [result24, setResult24] = useState('');
    const calcularMin24 = () => {
        if (!p19) {
            setResult24('');
        } else {
            setResult24((parseInt(p24) - parseInt(p19)).toString());
        }
    };

    const [result25, setResult25] = useState('');
    const calcularMin25 = () => {
        if (!p20) {
            setResult25('');
        } else {
            setResult25((parseInt(p25) - parseInt(p20)).toString());
        }
    };


    const [result26, setResult26] = useState('');
    const calcularMin26 = () => {
        if (!p21) {
            setResult26('');
        } else {
            setResult26((parseInt(p26) - parseInt(p21)).toString());
        }
    };

    const [result27, setResult27] = useState('');
    const calcularMin27 = () => {
        if (!p22) {
            setResult27('');
        } else {
            setResult27((parseInt(p27) - parseInt(p22)).toString());
        }
    };

    const [result28, setResult28] = useState('');
    const calcularMin28 = () => {
        if (!p23) {
            setResult28('');
        } else {
            setResult28((parseInt(p28) - parseInt(p23)).toString());
        }
    };

    const [result29, setResult29] = useState('');
    const calcularMin29 = () => {
        if (!p24) {
            setResult29('');
        } else {
            setResult29((parseInt(p29) - parseInt(p24)).toString());
        }
    };

    const [result30, setResult30] = useState('');
    const calcularMin30 = () => {
        if (!p25) {
            setResult30('');
        } else {
            setResult30((parseInt(p30) - parseInt(p25)).toString());
        }
    };

    const [result31, setResult31] = useState('');
    const calcularMin31 = () => {
        if (!p26) {
            setResult31('');
        } else {
            setResult31((parseInt(p31) - parseInt(p26)).toString());
        }
    };

    const [result32, setResult32] = useState('');
    const calcularMin32 = () => {
        if (!p27) {
            setResult32('');
        } else {
            setResult32((parseInt(p32) - parseInt(p27)).toString());
        }
    };


    const [result33, setResult33] = useState('');
    const calcularMin33 = () => {
        if (!p28) {
            setResult33('');
        } else {
            setResult33((parseInt(p33) - parseInt(p28)).toString());
        }
    };

    const [result34, setResult34] = useState('');
    const calcularMin34 = () => {
        if (!p29) {
            setResult34('');
        } else {
            setResult34((parseInt(p34) - parseInt(p29)).toString());
        }
    };

    const [result35, setResult35] = useState('');
    const calcularMin35 = () => {
        if (!p30) {
            setResult35('');
        } else {
            setResult35((parseInt(p35) - parseInt(p30)).toString());
        }
    };

    const [result36, setResult36] = useState('');
    const calcularMin36 = () => {
        if (!p31) {
            setResult36('');
        } else {
            setResult36((parseInt(p36) - parseInt(p31)).toString());
        }
    };

    const [result37, setResult37] = useState('');
    const calcularMin37 = () => {
        if (!p32) {
            setResult37('');
        } else {
            setResult37((parseInt(p37) - parseInt(p32)).toString());
        }
    };

    const [result38, setResult38] = useState('');
    const calcularMin38 = () => {
        if (!p33) {
            setResult38('');
        } else {
            setResult38((parseInt(p38) - parseInt(p33)).toString());
        }
    };

    const [result39, setResult39] = useState('');
    const calcularMin39 = () => {
        if (!p34) {
            setResult39('');
        } else {
            setResult39((parseInt(p39) - parseInt(p34)).toString());
        }
    };

    const [result40, setResult40] = useState('');
    const calcularMin40 = () => {
        if (!p35) {
            setResult40('');
        } else {
            setResult40((parseInt(p40) - parseInt(p35)).toString());
        }
    };

    const [result41, setResult41] = useState('');
    const calcularMin41 = () => {
        if (!p36) {
            setResult41('');
        } else {
            setResult41((parseInt(p41) - parseInt(p36)).toString());
        }
    };


    const [result42, setResult42] = useState('');
    const calcularMin42 = () => {
        if (!p37) {
            setResult42('');
        } else {
            setResult42((parseInt(p42) - parseInt(p37)).toString());
        }
    };

    const [result43, setResult43] = useState('');
    const calcularMin43 = () => {
        if (!p38) {
            setResult43('');
        } else {
            setResult43((parseInt(p43) - parseInt(p38)).toString());
        }
    };

    const [result44, setResult44] = useState('');
    const calcularMin44 = () => {
        if (!p39) {
            setResult44('');
        } else {
            setResult44((parseInt(p44) - parseInt(p39)).toString());
        }
    };

    const [result45, setResult45] = useState('');
    const calcularMin45 = () => {
        if (!p40) {
            setResult45('');
        } else {
            setResult45((parseInt(p45) - parseInt(p40)).toString());
        }
    };



    const [result46, setResult46] = useState('');
    const calcularMin46 = () => {
        if (!p41) {
            setResult46('');
        } else {
            setResult46((parseInt(p46) - parseInt(p41)).toString());
        }
    };

    const [result47, setResult47] = useState('');
    const calcularMin47 = () => {
        if (!p42) {
            setResult47('');
        } else {
            setResult47((parseInt(p47) - parseInt(p42)).toString());
        }
    };

    const [result48, setResult48] = useState('');
    const calcularMin48 = () => {
        if (!p43) {
            setResult48('');
        } else {
            setResult48((parseInt(p48) - parseInt(p43)).toString());
        }
    };

    const [result49, setResult49] = useState('');
    const calcularMin49 = () => {
        if (!p44) {
            setResult49('');
        } else {
            setResult49((parseInt(p49) - parseInt(p44)).toString());
        }
    };

    const [result50, setResult50] = useState('');
    const calcularMin50 = () => {
        if (!p45) {
            setResult50('');
        } else {
            setResult50((parseInt(p50) - parseInt(p45)).toString());
        }
    };









    const [resultadoK, setResultadoK] = useState('');

    const calcularK = () => {
        const resultado = (resultadoPE * resultadoFator).toExponential(2);
        setResultadoK(resultado);
    };






    const [resultadoK2, setResultadoK2] = useState('');

    const calcularK2 = () => {
        const resultado = (resultadoPE2 * resultadoFator).toExponential(2);
        setResultadoK2(resultado);
    };





    const [resultadoK3, setResultadoK3] = useState('');

    const calcularK3 = () => {
        const resultado = (resultadoPE3 * resultadoFator).toExponential(2);
        setResultadoK3(resultado);
    };




    const [resultadoK4, setResultadoK4] = useState('');

    const calcularK4 = () => {
        const resultado = (resultadoPE4 * resultadoFator).toExponential(2);
        setResultadoK4(resultado);
    };




    const [resultadoK5, setResultadoK5] = useState('');

    const calcularK5 = () => {
        const resultado = (resultadoPE5 * resultadoFator).toExponential(2);
        setResultadoK5(resultado);
    };








    // function calcularSoma(valores) {
    //     if (!valores || valores.length === 0) {
    //       return 0; // Retorna 0 se o array estiver vazio ou nulo
    //     }

    //     const soma = valores.reduce((acc, valor) => {
    //       // Verifica se o valor é um número ou uma string que pode ser convertida em nro
    //       const numero = parseFloat(valor);
    //       if (!isNaN(numero)) {
    //         return acc + numero;
    //       } else {
    //         return acc; // Se não for um nro, não afeta a soma
    //       }
    //     }, 0);

    //     return soma;
    //   }


    //   const valores = [precao1, result1, result6, result11, result16, result21, result26, result31, result36, result41, result46];

    //   const resultado = calcularSoma(valores) / (profundidadeFinal - profundidadeInicial);

    //   console.log("Soma ----->:", resultado.toFixed(2));













    function calcularQe1(valores) {
        if (!valores || valores.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio ou nulo
        }

        const soma = valores.reduce((acc, valor) => {
            // Verifica se o valor é um número ou uma string que pode ser convertida em nro
            const numero = parseFloat(valor);
            if (!isNaN(numero)) {
                return acc + numero;
            } else {
                return acc; // Se não for um nro, não afeta a soma
            }
        }, 0);

        return soma;
    }


    const valores1 = [precao1, result1, result6, result11, result16, result21, result26, result31, result36, result41, result46];

    const resultado1 = calcularQe1(valores1) / 10 / (profundidadeFinal - profundidadeInicial);











    function calcularQe2(valores) {
        if (!valores || valores.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio ou nulo
        }

        const soma = valores.reduce((acc, valor) => {
            // Verifica se o valor é um número ou uma string que pode ser convertida em nro
            const numero = parseFloat(valor);
            if (!isNaN(numero)) {
                return acc + numero;
            } else {
                return acc; // Se não for um nro, não afeta a soma
            }
        }, 0);

        return soma;
    }


    const valores2 = [precao2, result2, result7, result12, result17, result22, result27, result32, result37, result42, result47];

    const resultado2 = calcularQe2(valores2) / 10 / (profundidadeFinal - profundidadeInicial);









    function calcularQe3(valores) {
        if (!valores || valores.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio ou nulo
        }

        const soma = valores.reduce((acc, valor) => {
            // Verifica se o valor é um número ou uma string que pode ser convertida em nro
            const numero = parseFloat(valor);
            if (!isNaN(numero)) {
                return acc + numero;
            } else {
                return acc; // Se não for um nro, não afeta a soma
            }
        }, 0);

        return soma;
    }


    const valores3 = [precao3, result3, result8, result13, result18, result23, result28, result33, result38, result43, result48];

    const resultado3 = calcularQe3(valores3) / 10 / (profundidadeFinal - profundidadeInicial);








    function calcularQe4(valores) {
        if (!valores || valores.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio ou nulo
        }

        const soma = valores.reduce((acc, valor) => {
            // Verifica se o valor é um número ou uma string que pode ser convertida em nro
            const numero = parseFloat(valor);
            if (!isNaN(numero)) {
                return acc + numero;
            } else {
                return acc; // Se não for um nro, não afeta a soma
            }
        }, 0);

        return soma;
    }


    const valores4 = [precao4, result4, result9, result14, result19, result24, result29, result34, result39, result44, result49];

    const resultado4 = calcularQe4(valores4) / 10 / (profundidadeFinal - profundidadeInicial);




    function calcularQe5(valores) {
        if (!valores || valores.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio ou nulo
        }

        const soma = valores.reduce((acc, valor) => {
            // Verifica se o valor é um número ou uma string que pode ser convertida em nro
            const numero = parseFloat(valor);
            if (!isNaN(numero)) {
                return acc + numero;
            } else {
                return acc; // Se não for um nro, não afeta a soma
            }
        }, 0);

        return soma;
    }


    const valores5 = [precao5, result5, result10, result15, result20, result25, result30, result35, result40, result45, result50];

    const resultado5 = calcularQe5(valores5) / 10 / (profundidadeFinal - profundidadeInicial);



























    // //Calculo do PE (l/min/m/Kg/cm2)	//////////////////////////////////////////////////////////////////////////////////////



    function cellr50(alturaManometro, profundidadeInicial, profundidadeFinal) {
        const resultado = parseFloat(alturaManometro) + parseFloat(profundidadeInicial) + (parseFloat(profundidadeFinal) - parseFloat(profundidadeInicial)) / 2;

        return resultado;
    }
    const resultadoCelr50 = cellr50(alturaManometro, profundidadeInicial, profundidadeFinal)



    function cells47(resultadoCelr50, precao1) {
        const resultado = (parseFloat(resultadoCelr50) / 10) + parseFloat(precao1);

        return resultado;
    }
    const resultadoCelS47 = cells47(resultadoCelr50, precao1)



    function cells44(resultadoCelS47, resultado1) {
        const resultado = parseFloat(resultado1) / parseFloat(resultadoCelS47);

        return resultado;
    }
    const resultadoCelS44 = cells44(resultadoCelS47, resultado1)



    function cellr53(alturaManometro, profundidadeHidroestatica) {
        const resultado = parseFloat(alturaManometro) + parseFloat(profundidadeHidroestatica);

        return resultado;
    }
    const resultadoCelr53 = cellr53(alturaManometro, profundidadeHidroestatica)



    function cells48(resultadoCelr53, precao1) {
        const resultado = (parseFloat(resultadoCelr53) / 10) + parseFloat(precao1);

        return resultado;
    }
    const resultadoCelS48 = cells48(resultadoCelr53, precao1)



    function cells45(resultadoCelS48, resultado1) {
        const resultado = parseFloat(resultado1) / parseFloat(resultadoCelS48);

        return resultado;
    }
    const resultadoCelS45 = cells45(resultadoCelS48, resultado1)




    function calcularPE(acimaNA, abaixoNA) {
        if (acimaNA === true) {

            return resultadoCelS44.toFixed(5);


        } else if (abaixoNA === true) {
            return resultadoCelS45.toFixed(6);


        } else {
            return "";
        }
    }


    const resultadoPE = calcularPE(acimaNA, abaixoNA);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function cellT47(resultadoCelr50, precao2) {
        const resultado = (parseFloat(resultadoCelr50) / 10) + parseFloat(precao2);

        return resultado;
    }
    const resultadoCelT47 = cellT47(resultadoCelr50, precao2)



    function cellT44(resultadoCelT47, resultado2) {
        const resultado = parseFloat(resultado2) / parseFloat(resultadoCelT47);

        return resultado;
    }
    const resultadoCelT44 = cellT44(resultadoCelT47, resultado2)






    function cellT48(resultadoCelr53, precao2) {
        const resultado = (parseFloat(resultadoCelr53) / 10) + parseFloat(precao2);

        return resultado;
    }
    const resultadoCelT48 = cellT48(resultadoCelr53, precao2)



    function cellT45(resultadoCelT48, resultado2) {
        const resultado = parseFloat(resultado2) / parseFloat(resultadoCelT48);

        return resultado;
    }
    const resultadoCelT45 = cellT45(resultadoCelS48, resultado2)





    function calcularPE2(acimaNA, abaixoNA) {
        if (acimaNA === true) {

            return resultadoCelT44.toFixed(5);


        } else if (abaixoNA === true) {
            return resultadoCelT45.toFixed(6);


        } else {
            return "";
        }
    }


    const resultadoPE2 = calcularPE2(acimaNA, abaixoNA);




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    function cellU47(resultadoCelr50, precao3) {
        const resultado = (parseFloat(resultadoCelr50) / 10) + parseFloat(precao3);

        return resultado;
    }
    const resultadoCelU47 = cellU47(resultadoCelr50, precao3)



    function cellU44(resultadoCelU47, resultado3) {
        const resultado = parseFloat(resultado3) / parseFloat(resultadoCelU47);

        return resultado;
    }
    const resultadoCelU44 = cellU44(resultadoCelU47, resultado3)






    function cellU48(resultadoCelr53, precao3) {
        const resultado = (parseFloat(resultadoCelr53) / 10) + parseFloat(precao3);

        return resultado;
    }
    const resultadoCelU48 = cellU48(resultadoCelr53, precao3)



    function cellU45(resultadoCelU48, resultado3) {
        const resultado = parseFloat(resultado3) / parseFloat(resultadoCelU48);

        return resultado;
    }
    const resultadoCelU45 = cellU45(resultadoCelU48, resultado3)





    function calcularPE3(acimaNA, abaixoNA) {
        if (acimaNA === true) {

            return resultadoCelU44.toFixed(5);


        } else if (abaixoNA === true) {
            return resultadoCelU45.toFixed(6);


        } else {
            return "";
        }
    }


    const resultadoPE3 = calcularPE3(acimaNA, abaixoNA);






    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    function cellV47(resultadoCelr50, precao4) {
        const resultado = (parseFloat(resultadoCelr50) / 10) + parseFloat(precao4);

        return resultado;
    }
    const resultadoCelV47 = cellV47(resultadoCelr50, precao4)



    function cellV44(resultadoCelV47, resultado4) {
        const resultado = parseFloat(resultado4) / parseFloat(resultadoCelV47);

        return resultado;
    }
    const resultadoCelV44 = cellV44(resultadoCelV47, resultado4)






    function cellV48(resultadoCelr53, precao4) {
        const resultado = (parseFloat(resultadoCelr53) / 10) + parseFloat(precao4);

        return resultado;
    }
    const resultadoCelV48 = cellV48(resultadoCelr53, precao4)



    function cellV45(resultadoCelV48, resultado4) {
        const resultado = parseFloat(resultado4) / parseFloat(resultadoCelV48);

        return resultado;
    }
    const resultadoCelV45 = cellV45(resultadoCelV48, resultado4)





    function calcularPE4(acimaNA, abaixoNA) {
        if (acimaNA === true) {

            return resultadoCelV44.toFixed(5);


        } else if (abaixoNA === true) {
            return resultadoCelV45.toFixed(6);


        } else {
            return "";
        }
    }


    const resultadoPE4 = calcularPE4(acimaNA, abaixoNA);






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////





    function cellW47(resultadoCelr50, precao5) {
        const resultado = (parseFloat(resultadoCelr50) / 10) + parseFloat(precao5);

        return resultado;
    }
    const resultadoCelW47 = cellW47(resultadoCelr50, precao5)



    function cellW44(resultadoCelV47, resultado5) {
        const resultado = parseFloat(resultado5) / parseFloat(resultadoCelW47);

        return resultado;
    }
    const resultadoCelW44 = cellW44(resultadoCelW47, resultado5)






    function cellW48(resultadoCelr53, precao5) {
        const resultado = (parseFloat(resultadoCelr53) / 10) + parseFloat(precao5);

        return resultado;
    }
    const resultadoCelW48 = cellW48(resultadoCelr53, precao5)



    function cellW45(resultadoCelW48, resultado5) {
        const resultado = parseFloat(resultado5) / parseFloat(resultadoCelW48);

        return resultado;
    }
    const resultadoCelW45 = cellW45(resultadoCelW48, resultado5)





    function calcularPE5(acimaNA, abaixoNA) {
        if (acimaNA === true) {

            return resultadoCelW44.toFixed(5);


        } else if (abaixoNA === true) {
            return resultadoCelW45.toFixed(6);


        } else {
            return "";
        }
    }


    const resultadoPE5 = calcularPE5(acimaNA, abaixoNA);










    // function maximodePE(arr) {
    //   let maximo = null; // Inicializa a variável maximo como null
    //   let encontrouValorValido = false; // Flag para indicar se encontrou pelo menos um valor válido

    //   for (let i = 0; i < arr.length; i++) {
    //     const valorAtual = arr[i];

    //     if (typeof valorAtual === 'number' && (maximo === null || valorAtual > maximo)) {
    //       maximo = valorAtual; // Atualiza o valor máximo se encontrar um número válido e maior
    //       encontrouValorValido = true; // Marca que pelo menos um valor válido foi encontrado
    //     }
    //   }

    //   if (encontrouValorValido) {
    //     return maximo; // Retorna o valor máximo encontrado no array
    //   } else {
    //     return null; // Retorna null se nenhum valor válido for encontrado
    //   }
    // }

    // const valores = [resultadoPE, resultadoPE2, resultadoPE3, resultadoPE4, resultadoPE5];
    // const maximo = maximodePE(valores);
    // console.log(`O valor máximo é: ${maximo}`);





    function maximodePE(arr) {
        if (arr.length === 0) {
            return null; // Retorna null se o array estiver vazio
        }

        let maximo = arr[0]; // Inicializa a variável maximo com o primeiro elemento do array

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maximo) {
                maximo = arr[i]; // Atualiza o valor máximo se encontrar um número maior
            }
        }

        return maximo; // Retorna o valor máximo encontrado no array
    }

    const valores = [resultadoPE, resultadoPE2, resultadoPE3, resultadoPE4, resultadoPE5];
    const maximo = maximodePE(valores);
    console.log(`O valor máximo é: ${maximo}`);










    function maximodeK(arr) {
        if (arr.length === 0) {
            return null;
        }

        let maximo = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maximo) {
                maximo = arr[i];
            }
        }

        return maximo;
    }

    const valoresK = [resultadoK, resultadoK2, resultadoK3, resultadoK4, resultadoK5];
    const maximoK = maximodeK(valoresK);
    console.log(`O valor máximo é: ${maximoK}`);















    const BuscaBancoSQl = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM  lugeon WHERE idFuro =?', [idFuro], (tx, results) => {
                var temp = results.rows.length;
                if (temp > 0) {



                    setTrecho(results.rows.item(0).trecho)



                }






                console.log(temp, "ok")


            });


        });
    };






    const Calcular = () => {
        calcularMin1()
        calcularMin2()
        calcularMin3()
        calcularMin4()
        calcularMin5()
        calcularMin6()
        calcularMin7()
        calcularMin8()
        calcularMin9()
        calcularMin10()
        calcularMin11()
        calcularMin12()
        calcularMin13()
        calcularMin14()
        calcularMin15()
        calcularMin16()
        calcularMin17()
        calcularMin18()
        calcularMin19()
        calcularMin20()

        calcularMin21()
        calcularMin22()
        calcularMin23()
        calcularMin24()
        calcularMin25()

        calcularMin26()
        calcularMin27()
        calcularMin28()
        calcularMin29()
        calcularMin30()

        calcularMin31()
        calcularMin32()
        calcularMin33()
        calcularMin34()
        calcularMin35()

        calcularMin36()
        calcularMin37()
        calcularMin38()
        calcularMin39()
        calcularMin40()


        calcularMin41()
        calcularMin42()
        calcularMin43()
        calcularMin44()
        calcularMin45()

        calcularMin46()
        calcularMin47()
        calcularMin48()
        calcularMin49()
        calcularMin50()

        calcularK()
        calcularK2()
        calcularK3()
        calcularK4()
        calcularK5()






    }

    const
        AbaixoNA1 = () => {

            setAbaixoNA(true);
        };




    const AcimaNA = () => {

        setAcimaNA(true);
    };




    let DeleteBancoSQlite = (furo) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS '

            );
            console.log("deletado")
        });
    };
    useEffect(() => {
        //getItem()




    }, []);


    useEffect(() => {

        Calcular()
        setData1(moment(data2).format("DD/MM/YYYY"));


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
                {/* <Text style={styles.text}>FURO</Text>
                <TextInput
                    onChangeText={setIdFuro}
                    value={idFuro}
                    style={styles.inputleft}
                ></TextInput> */}





                <View style={styles.containerrow}>

                    <Text style={styles.buttonNewTask}>
                        Furo:
                    </Text>


                    <TextInput
                        style={styles.inputlef2t}
                        onChangeText={setIdFuro}
                        value={idFuro}
                        keyboardType='numeric'
                        placeholder="Furo"
                    />

                </View>



                <TouchableOpacity
                    style={styles.button}

                    onPress={BuscaBancoSQl2}

                >
                    <Text style={styles.label1}> Buscar  </Text>
                </TouchableOpacity>




                <View style={styles.containerrow}>
                    <Text style={styles.buttonNewTask}>
                        Ensaio:
                    </Text>
                    <TextInput
                        style={styles.inputlef2t}
                        onChangeText={''}
                        value={''}
                        keyboardType='numeric'
                        placeholder="Número do Ensaio"
                    />


                </View>

                {/*
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
                </TouchableOpacity> */}

                <View>

                    <Text style={styles.text1}>Data: </Text>
                    <TouchableOpacity style={styles.inputlef2t} onPress={showDatePicker} >
                        <Text
                        >  {`${data2 ? moment(data2).format("DD/MM/YYYY") : "Please select date"}`}</Text>
                    </TouchableOpacity>

                </View>








                <View style={styles.container6}>
                    <Text style={styles.heading}>A. DADOS DO ENSAIO</Text>

                    <View style={styles.row}>
                        <Text style={styles.label1}>1. Profundidade inicial do trecho ensaiado (m)</Text>
                        <TextInput
                            style={styles.input11}
                            value={profundidadeInicial}
                            onChangeText={setProfundidadeInicial}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label1}>2. Profundidade final do trecho ensaiado (m)</Text>
                        <TextInput
                            style={styles.input11}
                            value={profundidadeFinal}
                            onChangeText={setProfundidadeFinal}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label1}>3. Inclinação do furo (º)</Text>
                        <TextInput
                            style={styles.input11}
                            value={inclinacao}
                            onChangeText={setInclinacao}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label1}>4. Profundidade do nível hidroestático (m)</Text>
                        <TextInput
                            style={styles.input11}
                            value={profundidadeHidroestatica}
                            onChangeText={setProfundidadeHidroestatica}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label1}>5. Altura do manômetro (m)</Text>
                        <TextInput
                            style={styles.input11}
                            value={alturaManometro}
                            onChangeText={setAlturaManometro}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label1}>6. Diâmetro do furo (m)</Text>
                        <TextInput
                            style={styles.input11}
                            value={diametroFuro}
                            onChangeText={setDiametroFuro}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label1}>7. Condição do furo</Text>
                        <View style={styles.conditionInputs}>
                            <TouchableOpacity
                                style={styles.buttonCn}

                                onPress={AcimaNA}

                            >
                                <Text style={styles.label1}> Acima do NA  </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonCn}

                                onPress={AbaixoNA1}

                            >
                                <Text style={styles.label1}>Abaixo do NA   </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <Text style={styles.text}> Observação: </Text>
                <TextInput

                    onChangeText={setObservacao}

                    value={observacao}
                    style={styles.inputlefttt}
                ></TextInput>


                <View style={styles.container6}>
                    <View style={styles.row1}>


                        <Text style={styles.label1}>P1</Text>
                        <Text style={styles.label1}>P2</Text>
                        <Text style={styles.label1}>P3</Text>
                        <Text style={styles.label1}>P4</Text>
                        <Text style={styles.label1}>P5</Text>
                    </View>




                    <View style={styles.row}>
                        <Text style={styles.label1}>Preção
                        </Text>

                        <TextInput
                            style={styles.input10}
                            value={precao1}
                            onChangeText={setPrecao1}

                        />
                        <TextInput
                            style={styles.input10}
                            value={precao2}
                            onChangeText={setPrecao2}
                            placeholder=" "
                        />
                        <TextInput
                            style={styles.input10}
                            value={precao3}
                            onChangeText={setPrecao3}

                        />
                        <TextInput
                            style={styles.input10}
                            value={precao4}
                            onChangeText={setPrecao4}

                        />
                        <TextInput
                            style={styles.input10}
                            value={precao5}
                            onChangeText={setPrecao5}

                        />
                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>T 0     :
                        </Text>

                        <TextInput
                            style={styles.input10}
                            value={t01}
                            onChangeText={setT01}

                        />
                        <TextInput
                            style={styles.input10}
                            value={t02}
                            onChangeText={setT02}

                        />
                        <TextInput
                            style={styles.input10}
                            value={t03}
                            onChangeText={setT03}

                        />
                        <TextInput
                            style={styles.input10}
                            value={t04}
                            onChangeText={setT04}

                        />
                        <TextInput
                            style={styles.input10}
                            value={t05}
                            onChangeText={setT05}

                        />
                    </View>








                    <View style={styles.row}>
                        <Text style={styles.label1}>1º min
                        </Text>

                        <TextInput
                            style={styles.input10}
                            value={p1}
                            onChangeText={setP1}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p2}
                            onChangeText={setP2}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p3}
                            onChangeText={setP3}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p4}
                            onChangeText={setP4}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p5}
                            onChangeText={setP5}

                        />
                    </View>






                    <View style={styles.row}>
                        <Text style={styles.label1}>2º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p6}
                            onChangeText={setP6}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p7}
                            onChangeText={setP7}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p8}
                            onChangeText={setP8}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p9}
                            onChangeText={setP9}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p10}
                            onChangeText={setP10}

                        />

                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>3º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p11}
                            onChangeText={setP11}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p12}
                            onChangeText={setP12}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p13}
                            onChangeText={setP13}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p14}
                            onChangeText={setP14}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p15}
                            onChangeText={setP15}

                        />
                    </View>













                    <View style={styles.row}>
                        <Text style={styles.label1}>4º min
                        </Text>
                        <TextInput
                            style={styles.input10}

                            value={p16}
                            onChangeText={setP16}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p17}
                            onChangeText={setP17}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p18}
                            onChangeText={setP18}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p19}
                            onChangeText={setP19}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p20}
                            onChangeText={setP20}

                        />
                    </View>












                    <View style={styles.row}>
                        <Text style={styles.label1}>5º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p21}
                            onChangeText={setP21}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p22}
                            onChangeText={setP22}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p23}
                            onChangeText={setP23}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p24}
                            onChangeText={setP24}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p25}
                            onChangeText={setP25}

                        />
                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>6º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p26}
                            onChangeText={setP26}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p27}
                            onChangeText={setP27}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p28}
                            onChangeText={setP28}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p29}
                            onChangeText={setP29}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p30}
                            onChangeText={setP30}

                        />
                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>7º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p31}
                            onChangeText={setP31}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p32}
                            onChangeText={setP32}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p33}
                            onChangeText={setP33}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p34}
                            onChangeText={setP34}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p35}
                            onChangeText={setP35}

                        />

                    </View>








                    <View style={styles.row}>
                        <Text style={styles.label1}>8º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p36}
                            onChangeText={setP36}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p37}
                            onChangeText={setP37}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p38}
                            onChangeText={setP38}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p39}
                            onChangeText={setP39}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p40}
                            onChangeText={setP40}

                        />
                    </View>














                    <View style={styles.row}>
                        <Text style={styles.label1}>9º min
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p41}
                            onChangeText={setP41}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p42}
                            onChangeText={setP42}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p43}
                            onChangeText={setP43}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p44}
                            onChangeText={setP44}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p45}
                            onChangeText={setP45}

                        />
                    </View>







                    <View style={styles.row}>
                        <Text style={styles.label1}>10ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={p46}
                            onChangeText={setP46}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p47}
                            onChangeText={setP47}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p48}
                            onChangeText={setP48}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p49}
                            onChangeText={setP49}

                        />
                        <TextInput
                            style={styles.input10}
                            value={p50}
                            onChangeText={setP50}

                        />

                    </View>

                </View>



                <Text style={styles.text}> Coeficiente de forma (Cf)</Text>
                <TextInput
                    onChangeText={setCoeficienteForma}
                    value={resultadoCF.toFixed(2)}
                    style={styles.inputlef21t}
                ></TextInput>



                <Text style={styles.text}> Factor F </Text>
                <TextInput
                    onChangeText={setFactorF}
                    value={resultadoFator.toExponential(2)}
                    style={styles.inputlef21t}
                ></TextInput>


                {/* <Text style={styles.text}>Condição do Furo</Text>

                <Dropdown
                    style={styles.inputlef21t}
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

 */}

                <View style={styles.container6}>



                    <Text style={styles.heading}>B. REGISTRO DAS PRESSÕES UTILIZADAS E RESPECTIVAS ABSORÇÕES
                    </Text>


                    <View style={styles.row1}>

                        <Text style={styles.label1}>P1</Text>
                        <Text style={styles.label1}>P2</Text>
                        <Text style={styles.label1}>P3</Text>
                        <Text style={styles.label1}>P4</Text>
                        <Text style={styles.label1}>P5</Text>
                    </View>


                    <View style={styles.row}>
                        <Text style={styles.label1}>1ºmin
                        </Text>

                        <TextInput
                            style={styles.input10}
                            value={result1}
                            onChangeText={setResult1}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result2}
                            onChangeText={setResult2}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result3}
                            onChangeText={setResult3}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result4}
                            onChangeText={setResult4}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result5}
                            onChangeText={setResult5}

                        />
                    </View>






                    <View style={styles.row}>
                        <Text style={styles.label1}>2ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result6}
                            onChangeText={setResult6}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result7}
                            onChangeText={setResult7}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result8}
                            onChangeText={setResult8}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result9}
                            onChangeText={setResult9}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result10}
                            onChangeText={setResult10}

                        />

                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>3ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result11}
                            onChangeText={setResult11}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result12}
                            onChangeText={setResult12}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result13}
                            onChangeText={setResult13}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result14}
                            onChangeText={setResult14}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result15}
                            onChangeText={setResult15}

                        />
                    </View>













                    <View style={styles.row}>
                        <Text style={styles.label1}>4ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}

                            value={result16}
                            onChangeText={setResult16}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result17}
                            onChangeText={setResult17}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result18}
                            onChangeText={setResult18}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result19}
                            onChangeText={setResult19}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result20}
                            onChangeText={setResult20}

                        />
                    </View>












                    <View style={styles.row}>
                        <Text style={styles.label1}>5ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result21}
                            onChangeText={setResult21}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result22}
                            onChangeText={setResult22}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result23}
                            onChangeText={setResult23}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result24}
                            onChangeText={setResult24}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result25}
                            onChangeText={setResult25}

                        />
                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>6ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result26}
                            onChangeText={setResult26}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result27}
                            onChangeText={setResult27}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result28}
                            onChangeText={setResult28}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result29}
                            onChangeText={setResult29}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result30}
                            onChangeText={setResult30}

                        />
                    </View>









                    <View style={styles.row}>
                        <Text style={styles.label1}>7ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result31}
                            onChangeText={setResult31}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result32}
                            onChangeText={setResult32}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result33}
                            onChangeText={setResult33}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result34}
                            onChangeText={setResult34}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result35}
                            onChangeText={setResult35}

                        />

                    </View>








                    <View style={styles.row}>
                        <Text style={styles.label1}>8ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result36}
                            onChangeText={setResult36}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result37}
                            onChangeText={setResult37}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result38}
                            onChangeText={setResult38}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result39}
                            onChangeText={setResult39}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result40}
                            onChangeText={setResult40}

                        />
                    </View>














                    <View style={styles.row}>
                        <Text style={styles.label1}>9ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result41}
                            onChangeText={setResult41}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result42}
                            onChangeText={setResult42}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result43}
                            onChangeText={setResult43}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result44}
                            onChangeText={setResult44}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result45}
                            onChangeText={setResult45}

                        />
                    </View>







                    <View style={styles.row}>
                        <Text style={styles.label1}>1ºmin
                        </Text>
                        <TextInput
                            style={styles.input10}
                            value={result46}
                            onChangeText={setResult46}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result47}
                            onChangeText={setResult47}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result48}
                            onChangeText={setResult48}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result49}
                            onChangeText={setResult49}

                        />
                        <TextInput
                            style={styles.input10}
                            value={result50}
                            onChangeText={setResult50}

                        />
                    </View>





                </View>

                <View style={styles.row2}>

                    <Text style={styles.label1}>
                        <Text style={styles.label1}>Qe
                        </Text>
                    </Text>
                    <TextInput
                        style={styles.input10}
                        value={resultado1.toFixed(2)}
                        onChangeText={setQe1}

                    />
                    <TextInput
                        style={styles.input10}
                        value={resultado2.toFixed(2)}
                        onChangeText={setQe2}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultado3.toFixed(2)}
                        onChangeText={setQe3}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultado4.toFixed(2)}
                        onChangeText={setQe4}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultado5.toFixed(2)}
                        onChangeText={setQe5}
                    />



                </View>



                <View style={styles.row2}>

                    <Text style={styles.label1}>
                        <Text style={styles.label1}>PE

                        </Text>
                    </Text>
                    <TextInput
                        style={styles.input10}
                        value={resultadoPE}
                        onChangeText={setPe1}

                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoPE2}
                        onChangeText={setPe2}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoPE3}
                        onChangeText={setPe3}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoPE4}
                        onChangeText={setPe4}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoPE5}
                        onChangeText={setPe5}
                    />


                </View>




                <View style={styles.row2}>

                    <Text style={styles.label1}>
                        <Text style={styles.label1}>K ,


                        </Text>
                    </Text>
                    <TextInput
                        style={styles.input10}
                        value={resultadoK}
                        onChangeText={setResultadoK}

                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoK2}
                        onChangeText={setK2}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoK3}
                        onChangeText={setK3}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoK4}
                        onChangeText={setK4}
                    />
                    <TextInput
                        style={styles.input10}
                        value={resultadoK5}
                        onChangeText={setK5}
                    />


                </View>
                <Text >


                </Text>

                <View style={styles.row}>
                    <Text style={styles.label1}>Maximo de PE  :


                    </Text>
                    <TextInput
                        style={styles.input10}
                        value={maximo}


                    />
                    <Text style={styles.label1}>Maximo de K  :


                    </Text>
                    <TextInput
                        style={styles.input10}
                        value={maximoK}

                    />
                    <Text style={styles.label1}>   .


                    </Text>
                    <TextInput
                        style={styles.input10}
                        value={''}

                    />
                </View>
                <Text >
                </Text>




                <Text style={styles.heading}>C. VARIAÇÃO DAS ABSORÇÕES COM AS PRESSÕES APLICADAS
                </Text>

                {/*
                <View style={styles.container}>

                    <Image style={styles.img}
                        source={require('../../../assets/Grafic.png')}
                    /></View> */}



                <Text style={styles.label1}>


                </Text>



                <Text style={styles.text}> Observação: </Text>
                <TextInput

                    onChangeText={setObservacao1}

                    value={observacao1}
                    style={styles.inputlefttt}
                ></TextInput>
            </View>











            <View style={styles.container}>

                {/* <View style={styles.containerDesenho8}>
                    <TouchableOpacity
                        style={styles.button}

                        onPress={Calcular}

                    >
                        <Text style={styles.text}>---  </Text>
                    </TouchableOpacity>
                </View> */}
            </View>

        </ScrollView>


    );



};