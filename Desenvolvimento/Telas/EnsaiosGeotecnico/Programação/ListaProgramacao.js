import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios'; // npm i axios
import * as Animatable from 'react-native-animatable';
import Conexao from '../../../Conexao/conexao';
import * as SQLite from "expo-sqlite";

function Programacao1() {
  api = Conexao.api
  const mensagemDadosIncorretos = () =>
    Alert.alert(
      "Erro ao Burcar",
      "Processo não cadastrado",
      [

        { text: "OK", onPress: () => setAbrirLogin(true) }
      ],
      { cancelable: true }
    );

  const [lista, setLista] = useState([]);
  const [processo, setProcesso] = useState('')
  const [teoragua, setTeorAgua] = useState()
  const [massavolumica, setMassaVolumica] = useState()
  const [cortedirecto, setCorteDirecto] = useState()
  const [materiaorganica, setMateriaOrganica] = useState()
  const [ph, setPH] = useState()
  const [densidadeparticulas, setDensidadeParticulas] = useState()
  const [limitesliquidezmcp, setLimitesLiquidezMCP] = useState()
  const [limitesplasticidade, setLimitesPlasticidade] = useState()
  const [limitesretraccao, setLimitesRetraccao] = useState()
  const [teorsulfatos, setTeorSulfatos] = useState()
  const [teorcloretos, setTeorCloretos] = useState()
  const [teorcarbonatos, setTeorCarbonatos] = useState()
  const [acidezbgully, setAcidezBGully] = useState()
  const [peneiracao, setPeneiracao] = useState()
  const [azulmetileno, setAzulMetileno] = useState()
  const [frascoareia, setFrascoAreia] = useState()
  const [peneiracaosedimentacao, setPeneiracaoSedimentacao] = useState()
  const [metodohilf, setMetodoHilf] = useState()
  const [coeficientefriabilidade, setCoeficienteFriabilidade] = useState()
  const [resistividadeeletricaproveteSolo, setResistividadeEletricaProveteSolo] = useState()
  const [compactacaonormal, setCompactacaoNormal] = useState()
  const [compactacaointermediaria, setCompactacaoIntermediaria] = useState()
  const [compactacaomodificada, setCompactacaoModificada] = useState()
  const [baridadesmaximaminima, setBaridadesMaximaMinima] = useState()
  const [compactacaovibrocompactacao, setCompactacaoVibrocompactacao] = useState()
  const [cbrsemmoldagem, setCBRSemMoldagem] = useState()
  const [cbrcommoldagem, setCBRComMoldagem] = useState()
  const [ensaiocbr, setEnsaioCBR] = useState()
  const [cbrimediato, setCBRImediato] = useState()
  const [potenciacolapso, setPotenciaColapso] = useState()
  const [indiceexpansibilidade, setIndiceExpansibilidade] = useState()
  const [expansibilidadepotenciaexpansao, setExpansibilidadePotenciaExpansao] = useState()
  const [ensaioexpansibilidade, setEnsaioExpansibilidade] = useState()
  const [ensaioexpansibilidadelambe, setEnsaioExpansibilidadeLambe] = useState()
  const [expansibilidadeedometro, setExpansibilidadeEdometro] = useState()
  const [potenciaexpansao, setPotenciaExpansao] = useState()
  const [indicecolapso, setIndiceColapso] = useState()
  const [ensaiodispersabilidade, setEnsaioDispersabilidade] = useState()
  const [resilientetriaxiala, setResilienteTriaxialA] = useState()
  const [resilientetriaxialb, setResilienteTriaxialB] = useState()
  const [permanentestriaxiala, setPermanentesTriaxialA] = useState()
  const [permanentestriaxialb, setPermanentesTriaxialB] = useState()
  const [compressaosimples, setCompressaoSimples] = useState()
  const [ensaiomolhagemsecagem, setEnsaioMolhagemSecagem] = useState()
  const [endometro, setEdometro] = useState()
  const [ensaioedometrodccs, setEnsaioEdometroDCCS] = useState()
  const [consolidacaohidraulica, setConsolidacaoHidraulica] = useState()
  const [consolidacaotriaxial, setConsolidacaoTriaxial] = useState()
  const [resistenciacompressaounixial, setResistenciaCompressaoUnixial] = useState()
  const [triaxialnaoconsolidadouu, setTriaxialNaoConsolidadoUU] = useState()
  const [triaxialnaoconsolidadocu, setTriaxialNaoConsolidadoCU] = useState()
  const [triaxialnaoconsolidadocd, setTriaxialNaoConsolidadoCD] = useState()
  const [triaxialsigmaconstante, setTriaxialSigmaConstante] = useState()
  const [patamarconsolidacaoanisotropica, setPatamarConsolidacaoAnisotropica] = useState()
  const [ensaiotriaxialmultifasicocu, setEnsaioTriaxialMultifasicoCU] = useState()
  const [ensaiotriaxialmultifasicocd, setEnsaioTriaxialMultifasicoCD] = useState()
  const [ensaiocortenaoconsolidadonaodrenadouu, setEnsaioCorteNaoConsolidadoNaoDrenadoUU] = useState()
  const [ensaiocorteconsolidadonaodrenadocu, setEnsaioCorteConsolidadoNaoDrenadoCU] = useState()
  const [ensaiocorteconsolidadonaodrenadocd, setEnsaioCorteConsolidadoNaoDrenadoCD] = useState()
  const [testearray, setTesteArray] = useState()
  const [abrirLogin, setAbrirLogin] = useState(true);
  const [ok, setOK] = useState('S');
  const animals = ['pigs', 'goats', 'sheep'];
  const [counter, setCounter] = useState()
  const [loading, setLoading] = useState(false)
  const Separator1 = () => (
    <View style={estilos.separator1} />
  );
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

  const gerarBanco = () => {
    try {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists Programacao ( Processo text, Amostra text,teoragua text, MassaVolumica text, CorteDirecto text, materiaorganica text,ph text,densidadeparticulas text,limitesliquidezmcp text,limitesplasticidade text,limitesretraccao text,teorsulfatos text,teorcloretos text,teorcarbonatos text,acidezbgully text,peneiracao text,azulmetileno text,frascoareia text,peneiracaosedimentacao text,metodohilf text,coeficientefriabilidade text,resistividadeeletricaproveteSolo text,compactacaonormal text,compactacaointermediaria text,compactacaomodificada text,baridadesmaximaminima text,compactacaovibrocompactacao text,cbrsemmoldagem text,cbrcommoldagem text,ensaiocbr text,cbrimediato text,potenciacolapso text,indiceexpansibilidade text,expansibilidadepotenciaexpansao text,ensaioexpansibilidade text,ensaioexpansibilidadelambe text,expansibilidadeedometro text,potenciaexpansao text,indicecolapso text,ensaiodispersabilidade text,resilientetriaxiala conversor text,resilientetriaxialb text,permanentestriaxiala text,permanentestriaxialb text,compressaosimples text,ensaiomolhagemsecagem text,endometro text,ensaioedometrodccs text,consolidacaohidraulica text,consolidacaotriaxial text,resistenciacompressaounixial text,triaxialnaoconsolidadouu text,triaxialnaoconsolidadocu text,triaxialnaoconsolidadocd text,triaxialsigmaconstante text,patamarconsolidacaoanisotropica text,ensaiotriaxialmultifasicocu text,ensaiotriaxialmultifasicocd text,ensaiocortenaoconsolidadonaodrenadouu text,ensaiocorteconsolidadonaodrenadocu text,ensaiocorteconsolidadonaodrenadocd text);"
          );
          (tx, results) => {
            console.log('Results', results.rowsAffected);
          }
          console.log("Banco de dados iniciado")
        });
    } catch (error) {
      console.error(error);
    }
  }
  async function
    DowloandProgramacao() {
    // console.log(processo)
    db.transaction((tx) => {

      DeleteProcesso()

    });
    mensagemsalvaroffline()
  }
  const SalvarBanco = (amostra) => {

    db.transaction(
      (tx) => {
        tx.executeSql(`insert into Programacao (Processo, Amostra ) values (?,?)`, [processo, amostra], (tx, results) => {
          console.log('Results', results.rows);
          if (results.rowsAffected > 0) {
            console.log(results.rows)
            list()
          } else alert('Registration Failed');
        }, (error) => { console.log(error) });

      },

      // mensagemsalvaroffline()
    );

  };
  const SalvarBanco2 = (teoragua, massavolumica, cortedirecto, materiaorganica, ph, densidadeparticulas, limitesliquidezmcp, limitesplasticidade, limitesretraccao, teorsulfatos, teorcloretos, teorcarbonatos, acidezbgully, peneiracao, azulmetileno, frascoareia, peneiracaosedimentacao, metodohilf, coeficientefriabilidade, resistividadeeletricaproveteSolo, compactacaonormal, compactacaointermediaria, compactacaomodificada, baridadesmaximaminima, compactacaovibrocompactacao, cbrsemmoldagem, cbrcommoldagem, ensaiocbr, cbrimediato, potenciacolapso, indiceexpansibilidade, expansibilidadepotenciaexpansao, ensaioexpansibilidade, ensaioexpansibilidadelambe, expansibilidadeedometro, potenciaexpansao, indicecolapso, ensaiodispersabilidade, resilientetriaxiala, resilientetriaxialb, permanentestriaxiala, permanentestriaxialb, compressaosimples, ensaiomolhagemsecagem, endometro, ensaioedometrodccs, consolidacaohidraulica, consolidacaotriaxial, resistenciacompressaounixial, triaxialnaoconsolidadouu, triaxialnaoconsolidadocu, triaxialnaoconsolidadocd, triaxialsigmaconstante, patamarconsolidacaoanisotropica, Amostra) => {

    db.transaction(
      (tx) => {

        tx.executeSql("UPDATE Programacao SET teoragua =?, massavolumica =?, cortedirecto =?, materiaorganica =?, ph =?, densidadeparticulas =?, limitesliquidezmcp =?, limitesplasticidade =?, limitesretraccao =?, teorsulfatos =?, teorcloretos =?, teorcarbonatos =?, acidezbgully =?, peneiracao =?, azulmetileno =?, frascoareia =?, peneiracaosedimentacao =?, metodohilf =?, coeficientefriabilidade =?, resistividadeeletricaproveteSolo =?, compactacaonormal =?, compactacaointermediaria =?, compactacaomodificada =?, baridadesmaximaminima =?, compactacaovibrocompactacao =?, cbrsemmoldagem =?, cbrcommoldagem =?, ensaiocbr =?, cbrimediato =?, potenciacolapso =?, indiceexpansibilidade =?, expansibilidadepotenciaexpansao =?, ensaioexpansibilidade =?, ensaioexpansibilidadelambe =?, expansibilidadeedometro =?, potenciaexpansao =?, indicecolapso =?, ensaiodispersabilidade =?, resilientetriaxiala =?, resilientetriaxialb =?, permanentestriaxiala =?, permanentestriaxialb =?, compressaosimples =?, ensaiomolhagemsecagem =?, endometro =?, ensaioedometrodccs =?, consolidacaohidraulica =?, consolidacaotriaxial =?, resistenciacompressaounixial =?, triaxialnaoconsolidadouu =?, triaxialnaoconsolidadocu =?, triaxialnaoconsolidadocd =?, triaxialsigmaconstante =?, patamarconsolidacaoanisotropica =? WHERE Amostra =?", [teoragua, massavolumica, cortedirecto, materiaorganica, ph, densidadeparticulas, limitesliquidezmcp, limitesplasticidade, limitesretraccao, teorsulfatos, teorcloretos, teorcarbonatos, acidezbgully, peneiracao, azulmetileno, frascoareia, peneiracaosedimentacao, metodohilf, coeficientefriabilidade, resistividadeeletricaproveteSolo, compactacaonormal, compactacaointermediaria, compactacaomodificada, baridadesmaximaminima, compactacaovibrocompactacao, cbrsemmoldagem, cbrcommoldagem, ensaiocbr, cbrimediato, potenciacolapso, indiceexpansibilidade, expansibilidadepotenciaexpansao, ensaioexpansibilidade, ensaioexpansibilidadelambe, expansibilidadeedometro, potenciaexpansao, indicecolapso, ensaiodispersabilidade, resilientetriaxiala, resilientetriaxialb, permanentestriaxiala, permanentestriaxialb, compressaosimples, ensaiomolhagemsecagem, endometro, ensaioedometrodccs, consolidacaohidraulica, consolidacaotriaxial, resistenciacompressaounixial, triaxialnaoconsolidadouu, triaxialnaoconsolidadocu, triaxialnaoconsolidadocd, triaxialsigmaconstante, patamarconsolidacaoanisotropica, Amostra])


      },

    );
    // Alert.alert(
    //   'Success',
    //   'You are Registered Successfully',
    //   [
    //     {

    //       text: 'Ok', onPress: () => console.log('OK Pressed')
    //     },
    //   ],
    //   { cancelable: true }

    // );
  };

  const BuscaBanco = () => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Programacao where Processo = ?', [processo], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));

          console.log(temp)
        } else {
          Alert.alert(
            'Falha',
            'Amostra não cadastrada',
            [
              {
                text: 'Ok', onPress: () => console.log('OK Pressed')

              },
            ],
            { cancelable: false }
          );

        }

      });
    });
  }

  const DeleteProcesso = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM Programacao where Processo = ?', [processo]);
      })
    listAmostra()
  }
  let DeleteBancoSQlite = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS Programacao',
          (tx, results) => {
            console.log('Results', results.rowsAffected);
          }
        );
        console.log(tx)
      });
    } catch (error) {
      console.error(error);
    }

  };

  async function listarDados() {

    const res = await axios.get(this.api + 'ListarProgramacao.php?Processo=' + processo);
    setLista(res.data.result);
    setCounter(res.data.contador)
    console.log(res.data.result);


    listarDados2()
  }
  async function listarDados2() {

    const res = await axios.get(this.api + 'ListarProgramacaoFilterRelatorio.php?Processo=' + processo);

    console.log(res.data.result);
    setTeorAgua(res.data.result[0].TeorAgua1)
    setMassaVolumica(res.data.result[0].MassaVolumica1)
    setCorteDirecto(res.data.result[0].Cortedireto1)
    setMateriaOrganica(res.data.result[0].MateriaOrganica1)
    setPH(res.data.result[0].PH1)
    setDensidadeParticulas(res.data.result[0].DensidadeParticulas1)
    setLimitesLiquidezMCP(res.data.result[0].LimitesLiquidezMCP1)
    setLimitesPlasticidade(res.data.result[0].LimitesPlasticidade1)
    setLimitesRetraccao(res.data.result[0].LimitesRetraccao1)
    setTeorSulfatos(res.data.result[0].TeorSulfatos1)
    setTeorCloretos(res.data.result[0].TeorCloretos1)
    setTeorCarbonatos(res.data.result[0].TeorCarbonatos1)
    setAcidezBGully(res.data.result[0].AcidezBGully1)
    setPeneiracao(res.data.result[0].Peneiracao1)
    setAzulMetileno(res.data.result[0].AzulMetileno1)
    setFrascoAreia(res.data.result[0].FrascoAreia1)
    setPeneiracaoSedimentacao(res.data.result[0].PeneiracaoSedimentacao1)
    setMetodoHilf(res.data.result[0].MetodoHilf1)
    setCoeficienteFriabilidade(res.data.result[0].CoeficienteFriabilidade1)
    setResistividadeEletricaProveteSolo(res.data.result[0].ResistividadeEletricaProveteSolo1)
    setCompactacaoNormal(res.data.result[0].CompactacaoNormal1)
    setCompactacaoIntermediaria(res.data.result[0].CompactacaoIntermediaria1)
    setCompactacaoModificada(res.data.result[0].CompactacaoModificada1)
    setBaridadesMaximaMinima(res.data.result[0].BaridadesMaximaMinima1)
    setCompactacaoVibrocompactacao(res.data.result[0].CompactacaoVibrocompactacao1)
    setCBRSemMoldagem(res.data.result[0].CBRSemMoldagem1)
    setCBRComMoldagem(res.data.result[0].CBRComMoldagem1)
    setEnsaioCBR(res.data.result[0].EnsaioCBR1)
    setCBRImediato(res.data.result[0].CBRImediato1)
    setPotenciaColapso(res.data.result[0].PotenciaColapso1)
    setIndiceExpansibilidade(res.data.result[0].IndiceExpansibilidade1)
    setExpansibilidadePotenciaExpansao(res.data.result[0].ExpansibilidadePotenciaExpansao1)
    setEnsaioExpansibilidade(res.data.result[0].EnsaioExpansibilidade1)
    setEnsaioExpansibilidadeLambe(res.data.result[0].EnsaioExpansibilidadeLambe1)
    setEdometro(res.data.result[0].ExpansibilidadeEdometro1)
    setPotenciaExpansao(res.data.result[0].PotenciaExpansao1)
    setIndiceColapso(res.data.result[0].IndiceColapso1)
    setEnsaioDispersabilidade(res.data.result[0].EnsaioDispersabilidade1)
    setResilienteTriaxialA(res.data.result[0].ResilienteTriaxialA1)
    setResilienteTriaxialB(res.data.result[0].ResilienteTriaxialB1)
    setPermanentesTriaxialA(res.data.result[0].PermanentesTriaxialA1)
    setPermanentesTriaxialB(res.data.result[0].PermanentesTriaxialB1)
    setCompressaoSimples(res.data.result[0].CompressaoSimples1)
    setEnsaioMolhagemSecagem(res.data.result[0].EnsaioMolhagemSecagem1)
    setEdometro(res.data.result[0].Edometro1)
    setEnsaioEdometroDCCS(res.data.result[0].Ensaio_Edometro_DCCS1)
    setConsolidacaoHidraulica(res.data.result[0].Consolidacao_Hidraulica1)
    setConsolidacaoTriaxial(res.data.result[0].Consolidacao_Triaxial1)
    setResistenciaCompressaoUnixial(res.data.result[0].Resistencia_Por_Compressao_Unixial1)
    setTriaxialNaoConsolidadoUU(res.data.result[0].Triaxial_Nao_Consolidado_UU)
    setTriaxialNaoConsolidadoCU(res.data.result[0].Triaxial_Nao_Consolidado_CU)
    setTriaxialNaoConsolidadoCD(res.data.result[0].Triaxial_Nao_Consolidado_CD)
    setTriaxialSigmaConstante(res.data.result[0].Triaxial_Sigma_1_Constante)
    setPatamarConsolidacaoAnisotropica(res.data.result[0].Patamar_de_Consolidacao_Anisotropica)



    setLoading(false)

  }
  function list() {
    const results = []
    // for (let i = 0; i < counter; i++) {
    lista.forEach((list, index) => {
      results.push(
        console.log(list.Processo, "listupdate")
      )
      SalvarBanco2(list.TeorAgua,
        list.MassaVolumica,
        list.CorteDirecto,
        list.MateriaOrganica,
        list.PH,
        list.DensidadeParticulas,
        list.LimitesLiquidezMCP,
        list.LimitesPlasticidade,
        list.LimitesRetraccao,
        list.TeorSulfatos,
        list.TeorCloretos,
        list.TeorCarbonatos,
        list.AcidezBGully,
        list.Peneiracao,
        list.AzulMetileno,
        list.FrascoAreia,
        list.PeneiracaoSedimentacao,
        list.MetodoHilf,
        list.CoeficienteFriabilidade,
        list.ResistividadeEletricaProveteSolo,
        list.CompactacaoNormal,
        list.CompactacaoIntermediaria,
        list.CompactacaoModificada,
        list.BaridadesMaximaMinima,
        list.CompactacaoVibrocompactacao,
        list.CBRSemMoldagem,
        list.CBRComMoldagem,
        list.EnsaioCBR,
        list.CBRImediato,
        list.PotenciaColapso,
        list.IndiceExpansibilidade,
        list.ExpansibilidadePotenciaExpansao,
        list.EnsaioExpansibilidade,
        list.EnsaioExpansibilidadeLambe,
        list.ExpansibilidadeEdometro,
        list.PotenciaExpansao,
        list.IndiceColapso,
        list.EnsaioDispersabilidade,
        list.ResilienteTriaxialA,
        list.ResilienteTriaxialB,
        list.PermanentesTriaxialA,
        list.PermanentesTriaxialB,
        list.CompressaoSimples,
        list.EnsaioMolhagemSecagem,
        list.Edometro,
        list.Ensaio_Edometro_DCCS,
        list.Consolidacao_Hidraulica,
        list.Consolidacao_Triaxial,
        list.Resistencia_Por_Compressao_Unixial,
        list.Triaxial_Nao_Consolidado_UU,
        list.Triaxial_Nao_Consolidado_CU,
        list.Triaxial_Nao_Consolidado_CD,
        list.Triaxial_Sigma_1_Constante,
        list.Patamar_de_Consolidacao_Anisotropica,
        list.Amostra
      )
    })

  }
  function listAmostra() {
    const results = []

    // for (let i = 0; i < counter; i++) {
    lista.forEach((list, index) => {
      results.push(
        console.log(list.Processo),
        SalvarBanco(list.Amostra)
      )

    })

  }

  async function buscaprocesso() {
    setLoading(true)
    const obj = { processo };
    const res = await axios.post(this.api + 'BuscarProcesso.php', obj);
    if (res.data.success === 'Dados Incorretos!') {
      mensagemDadosIncorretos();
      setLoading(false)
    } else {
      setAbrirLogin(false);
      buscarDados()
    }
  }
  function buscarDados() {
    listarDados();
  }

  useEffect(() => {
    //DeleteBancoSQlite()
    gerarBanco()

  }, []);
  return (


    <ScrollView style={estilos.scrollView} horizontal >
      <View style={estilos.grid}>
        <Text style={estilos.inputBuscar} >Processo: {processo} </Text>



        {loading == true ? <Modal onRequestClose={() => null} visible={true}>
          <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
              <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
              <ActivityIndicator size="large" />
            </View>
          </View>
        </Modal>
          : <Text />}


        {/* <ScrollView> */}
        <View style={estilos.griditem} >


          <Text style={estilos.cell}>  Amostra  </Text>
          <Text style={estilos.cell}>  Tipo de Amostra  </Text>
          {teoragua === true ? <Text style={estilos.cell}> TEOR EM ÁGUA  </Text> : null}
          {massavolumica === true ? <Text style={estilos.cell}>  MASSA ESPECÍFICA REAL EM GRÃOS  </Text> : null}
          {cortedirecto === true ? <Text style={estilos.cell}>  CORTE DIRETO   </Text> : null}
          {materiaorganica === true ? <Text style={estilos.cell}>  MASSA ESPECIFICA APARENTE  </Text> : null}
          {ph === true ? <Text style={estilos.cell}>  PH   </Text> : null}
          {densidadeparticulas === true ? <Text style={estilos.cell}>  DENSIDADE DAS PARTÍCULAS   </Text> : null}
          {limitesliquidezmcp === true ? <Text style={estilos.cell}>  ENSAIO MASSA APARENTE IN_SITU MEMBRANA PLASTICA   </Text> : null}
          {limitesplasticidade === true ? <Text style={estilos.cell}>  LIMITE DE LIQUIDEZ E PLASTICIDADE  </Text> : null}
          {limitesretraccao === true ? <Text style={estilos.cell}>  LIMITE DE RETRACÇÃO   </Text> : null}
          {teorsulfatos === true ? <Text style={estilos.cell}>  TEOR EM SULFATOS   </Text> : null}
          {teorcloretos === true ? <Text style={estilos.cell}>  TEOR EM CLORETOS   </Text> : null}
          {teorcarbonatos === true ? <Text style={estilos.cell}>  TEOR EM CARBONATOS   </Text> : null}
          {acidezbgully === true ? <Text style={estilos.cell}>  ACIDEZ BAUMANN-GULLY   </Text> : null}
          {peneiracao === true ? <Text style={estilos.cell}>  ANÁLISE GRANULOMÉTRICA POR PENEIRAÇÃO   </Text> : null}
          {azulmetileno === true ? <Text style={estilos.cell}>  ENSAIO DO AZUL DE METILENO = (TESTE DA MANCHA)   </Text> : null}
          {frascoareia === true ? <Text style={estilos.cell}>  FRASCO DE AREIA   </Text> : null}
          {peneiracaosedimentacao === true ? <Text style={estilos.cell}>  ANÁLISE GRANULOMÉTRICA POR SEDIMENTAÇÃO   </Text> : null}
          {metodohilf === true ? <Text style={estilos.cell}>  CONTROLE DE COMPACTAÇÃO MÉTODO DE HILF   </Text> : null}
          {coeficientefriabilidade === true ? <Text style={estilos.cell}>DETERMINAÇÃO DO COEFICIENTE DE FRIABILIDADE DAS AREIAS  </Text> : null}
          {resistividadeeletricaproveteSolo === true ? <Text style={estilos.cell}>DETERMINAÇÃO DA RESISITIVIDADE ELÉTRICA DE UM PROVETE DE SOLO  </Text> : null}
          {compactacaonormal === true ? <Text style={estilos.cell}>ENSAIO DE COMPACTAÇÃO NORMAL </Text> : null}
          {compactacaointermediaria === true ? <Text style={estilos.cell}>ENSAIO DE COMPACTAÇÃO INTERMEDIÁRIA  </Text> : null}
          {compactacaomodificada === true ? <Text style={estilos.cell}>ENSAIO DE COMPACTAÇÃO MODIFICADA  </Text> : null}
          {baridadesmaximaminima === true ? <Text style={estilos.cell}>MASSA ESPECIFICA MÁXIMA E MINÍMA DAS AREIAS  </Text> : null}
          {compactacaovibrocompactacao === true ? <Text style={estilos.cell}>ENSAIO DE COMPACTAÇÃO DA MASSA ESPECÍFICA APARENTE CILINDRO DE CRAVAÇÃO  </Text> : null}
          {cbrsemmoldagem === true ? <Text style={estilos.cell}>CBR (SEM MOLDAGEM)  </Text> : null}
          {cbrcommoldagem === true ? <Text style={estilos.cell}>CBR (COM MOLDAGEM)  </Text> : null}
          {ensaiocbr === true ? <Text style={estilos.cell}>CBR  </Text> : null}
          {cbrimediato === true ? <Text style={estilos.cell}>CBR IMEDIATO  </Text> : null}
          {potenciacolapso === true ? <Text style={estilos.cell}>DETERMINAÇÃO DO POTENCIAL DE COLAPSO  </Text> : null}
          {indiceexpansibilidade === true ? <Text style={estilos.cell}>DETERMINAÇÃO DO INDICE DE EXPANSIBILIDADE  </Text> : null}
          {expansibilidadepotenciaexpansao === true ? <Text style={estilos.cell}>DETERMINAÇÃO DA EXPANSIBILIDADE E POTENCIAL DE EXPANSÃO  </Text> : null}
          {ensaioexpansibilidade === true ? <Text style={estilos.cell}>ENSAIO DE EXPANSIBILIDADE  </Text> : null}
          {ensaioexpansibilidadelambe === true ? <Text style={estilos.cell}>ENSAIO DE EXPANSIBILIDADE LAMBE  </Text> : null}
          {expansibilidadeedometro === true ? <Text style={estilos.cell}>EXPANSIBILIDADE EM EDÓMETRO LIVRE  </Text> : null}
          {potenciaexpansao === true ? <Text style={estilos.cell}>POTENCIAL DE EXPANSÃO  </Text> : null}
          {indicecolapso === true ? <Text style={estilos.cell}>ÍNDICE DE COLAPSO  </Text> : null}
          {ensaiodispersabilidade === true ? <Text style={estilos.cell}>ENSAIO DE DISPERSIBILIDADE PIN-HOLE  </Text> : null}
          {resilientetriaxiala === true ? <Text style={estilos.cell}>ENSAIO TRIAXIAL CÍCLICO (MÉTODO A)  </Text> : null}
          {resilientetriaxialb === true ? <Text style={estilos.cell}>ENSAIO TRIAXIAL CÍCLICO (MÉTODO B)  </Text> : null}
          {permanentestriaxiala === true ? <Text style={estilos.cell}>ENSAIO TRIAXIAL CÍCLICO (MÉTODO A)  </Text> : null}
          {permanentestriaxialb === true ? <Text style={estilos.cell}>ENSAIO TRIAXIAL CÍCLICO (MÉTODO B)  </Text> : null}
          {compressaosimples === true ? <Text style={estilos.cell}>COMPRESSÃO SIMPLES  </Text> : null}
          {ensaiomolhagemsecagem === true ? <Text style={estilos.cell}>ENSAIO MOLHAGEM SECAGEM  </Text> : null}
          {endometro === true ? <Text style={estilos.cell}>ENDOMETRO  </Text> : null}
          {ensaioedometrodccs === true ? <Text style={estilos.cell}>ENDOMETRO DCCS  </Text> : null}
          {consolidacaohidraulica === true ? <Text style={estilos.cell}>CONSOLIDAÇÃO HIDRAULICA  </Text> : null}
          {consolidacaotriaxial === true ? <Text style={estilos.cell}>CONSOLIDAÇÃO TRIAXIAL  </Text> : null}
          {resistenciacompressaounixial === true ? <Text style={estilos.cell}>RESISTENCIA COMPRESSAO UNIXIAL  </Text> : null}
          {triaxialnaoconsolidadouu === true ? <Text style={estilos.cell}>TRIAXIAL NÃO CONSOLIDADO UU  </Text> : null}
          {triaxialnaoconsolidadocu === true ? <Text style={estilos.cell}>TRIAXIAL NÃO CONSOLIDADO CU  </Text> : null}
          {triaxialnaoconsolidadocd === true ? <Text style={estilos.cell}>TRIAXIAL NÃO CONSOLIDADO CD  </Text> : null}
          {triaxialsigmaconstante === true ? <Text style={estilos.cell}>TRIAXIAL SIGMA 1 CONSTANTE  </Text> : null}
          {patamarconsolidacaoanisotropica === true ? <Text style={estilos.cell}>PATAMAR CONSOLIDAÇÃO  </Text> : null}
          {ensaiotriaxialmultifasicocu === true ? <Text style={estilos.cell}>ENSAIO TRIAXIAL MULTIFASICO CU  </Text> : null}
          {ensaiotriaxialmultifasicocd === true ? <Text style={estilos.cell}>ENSAIO TRIAXIAL MULTIFASICO CD  </Text> : null}
          {ensaiocortenaoconsolidadonaodrenadouu === true ? <Text style={estilos.cell}>ENSAIO DE CORTE NÃO CONSOLIDADO NÃO DRENADO UU  </Text> : null}
          {ensaiocorteconsolidadonaodrenadocu === true ? <Text style={estilos.cell}>ENSAIO DE CORTE NÃO CONSOLIDADO NÃO DRENADO CU  </Text> : null}
          {ensaiocorteconsolidadonaodrenadocd === true ? <Text style={estilos.cell}>ENSAIO DE CORTE NÃO CONSOLIDADO NÃO DRENADO CD  </Text> : null}

        </View>


        <ScrollView>
          {lista.map(item => (

            <View style={estilos.griditem} key={item.processo}>
              <Text style={estilos.cell}>{item.Amostra}  </Text>
              <Text style={estilos.cell}>{item.TipoAmostra}  </Text>
              {teoragua === true ? <Text style={estilos.cell}>{item.TeorAgua}  </Text> : null}
              {massavolumica === true ? <Text style={estilos.cell}>{item.MassaVolumica}</Text> : null}
              {cortedirecto === true ? <Text style={estilos.cell}>{item.CorteDirecto}</Text> : null}
              {materiaorganica === true ? <Text style={estilos.cell}> {item.MateriaOrganica}  </Text> : null}
              {ph === true ? <Text style={estilos.cell}>{item.PH}  </Text> : null}
              {densidadeparticulas === true ? <Text style={estilos.cell}>{item.DensidadeParticulas}  </Text> : null}
              {limitesliquidezmcp === true ? <Text style={estilos.cell}>{item.LimitesLiquidezMCP}  </Text> : null}
              {limitesplasticidade === true ? <Text style={estilos.cell}>{item.LimitesPlasticidade}  </Text> : null}
              {limitesretraccao === true ? <Text style={estilos.cell}>{item.LimitesRetraccao}  </Text> : null}
              {teorsulfatos === true ? <Text style={estilos.cell}>{item.TeorSulfatos}  </Text> : null}
              {teorcloretos === true ? <Text style={estilos.cell}>{item.TeorCloretos}  </Text> : null}
              {teorcarbonatos === true ? <Text style={estilos.cell}>{item.TeorCarbonatos}  </Text> : null}
              {acidezbgully === true ? <Text style={estilos.cell}>{item.AcidezBGully}  </Text> : null}
              {peneiracao === true ? <Text style={estilos.cell}>{item.Peneiracao}  </Text> : null}
              {azulmetileno === true ? <Text style={estilos.cell}>{item.AzulMetileno}  </Text> : null}
              {frascoareia === true ? <Text style={estilos.cell}>{item.FrascoAreia}  </Text> : null}
              {peneiracaosedimentacao === true ? <Text style={estilos.cell}>{item.PeneiracaoSedimentacao}  </Text> : null}
              {metodohilf === true ? <Text style={estilos.cell}>{item.MetodoHilf}</Text> : null}
              {coeficientefriabilidade === true ? <Text style={estilos.cell}>{item.CoeficienteFriabilidade}  </Text> : null}
              {resistividadeeletricaproveteSolo === true ? <Text style={estilos.cell}> {item.ResistividadeEletricaProveteSolo}  </Text> : null}
              {compactacaonormal === true ? <Text style={estilos.cell}> {item.CompactacaoNormal}  </Text> : null}
              {compactacaointermediaria === true ? <Text style={estilos.cell}> {item.CompactacaoIntermediaria}  </Text> : null}
              {compactacaomodificada === true ? <Text style={estilos.cell}> {item.CompactacaoModificada}  </Text> : null}
              {baridadesmaximaminima === true ? <Text style={estilos.cell}> {item.BaridadesMaximaMinima}  </Text> : null}
              {compactacaovibrocompactacao === true ? <Text style={estilos.cell}> {item.CompactacaoVibrocompactacao}  </Text> : null}
              {cbrsemmoldagem === true ? <Text style={estilos.cell}> {item.CBRSemMoldagem}  </Text> : null}
              {cbrcommoldagem === true ? <Text style={estilos.cell}> {item.CBRComMoldagem}  </Text> : null}
              {ensaiocbr === true ? <Text style={estilos.cell}> {item.EnsaioCBR}  </Text> : null}
              {cbrimediato === true ? <Text style={estilos.cell}> {item.CBRImediato}  </Text> : null}
              {potenciacolapso === true ? <Text style={estilos.cell}> {item.PotenciaColapso}  </Text> : null}
              {indiceexpansibilidade === true ? <Text style={estilos.cell}> {item.IndiceExpansibilidade}  </Text> : null}
              {expansibilidadepotenciaexpansao === true ? <Text style={estilos.cell}>{item.ExpansibilidadePotenciaExpansao}  </Text> : null}
              {ensaioexpansibilidade === true ? <Text style={estilos.cell}>{item.EnsaioExpansibilidade}  </Text> : null}
              {ensaioexpansibilidadelambe === true ? <Text style={estilos.cell}>{item.EnsaioExpansibilidadeLambe}  </Text> : null}
              {expansibilidadeedometro === true ? <Text style={estilos.cell}>{item.ExpansibilidadeEdometro}  </Text> : null}
              {potenciaexpansao === true ? <Text style={estilos.cell}>{item.PotenciaExpansao}  </Text> : null}
              {indicecolapso === true ? <Text style={estilos.cell}> {item.IndiceColapso}  </Text> : null}
              {ensaiodispersabilidade === true ? <Text style={estilos.cell}> {item.EnsaioDispersabilidade}  </Text> : null}
              {resilientetriaxiala === true ? <Text style={estilos.cell}> {item.ResilienteTriaxialA}  </Text> : null}
              {resilientetriaxialb === true ? <Text style={estilos.cell}> {item.ResilienteTriaxialB}  </Text> : null}
              {permanentestriaxiala === true ? <Text style={estilos.cell}> {item.PermanentesTriaxialA}  </Text> : null}
              {permanentestriaxialb === true ? <Text style={estilos.cell}> {item.PermanentesTriaxialB}  </Text> : null}
              {compressaosimples === true ? <Text style={estilos.cell}> {item.CompressaoSimples}  </Text> : null}
              {ensaiomolhagemsecagem === true ? <Text style={estilos.cell}> {item.EnsaioMolhagemSecagem}  </Text> : null}
              {endometro === true ? <Text style={estilos.cell}> {item.Edometro}  </Text> : null}
              {ensaioedometrodccs === true ? <Text style={estilos.cell}>{item.Ensaio_Edometro_DCCS}  </Text> : null}
              {consolidacaohidraulica === true ? <Text style={estilos.cell}> {item.Consolidacao_Hidraulica}  </Text> : null}
              {consolidacaotriaxial === true ? <Text style={estilos.cell}> {item.Consolidacao_Triaxial}  </Text> : null}
              {resistenciacompressaounixial === true ? <Text style={estilos.cell}> {item.Resistencia_Por_Compressao_Unixial}  </Text> : null}
              {triaxialnaoconsolidadouu === true ? <Text style={estilos.cell}> {item.Triaxial_Nao_Consolidado_UU}  </Text> : null}
              {triaxialnaoconsolidadocu === true ? <Text style={estilos.cell}> {item.Triaxial_Nao_Consolidado_CU}  </Text> : null}
              {triaxialnaoconsolidadocd === true ? <Text style={estilos.cell}> {item.Triaxial_Nao_Consolidado_CD}  </Text> : null}
              {triaxialsigmaconstante === true ? <Text style={estilos.cell}> {item.Triaxial_Sigma_1_Constante}  </Text> : null}
              {patamarconsolidacaoanisotropica === true ? <Text style={estilos.cell}> {item.Patamar_de_Consolidacao_Anisotropica}  </Text> : null}
              {ensaiotriaxialmultifasicocu === true ? <Text style={estilos.cell}> {item.Ensaio_Triaxial_Multifasico_CU}  </Text> : null}
              {ensaiotriaxialmultifasicocd === true ? <Text style={estilos.cell}> {item.Ensaio_Triaxial_Multifasico_CD}  </Text> : null}
              {ensaiocortenaoconsolidadonaodrenadouu === true ? <Text style={estilos.cell}> {item.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_UU}  </Text> : null}
              {ensaiocorteconsolidadonaodrenadocu === true ? <Text style={estilos.cell}>{item.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_CU}  </Text> : null}
              {ensaiocorteconsolidadonaodrenadocd === true ? <Text style={estilos.cell}> {item.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_CD}  </Text> : null}

            </View>

          ))}

        </ScrollView>



        <TouchableOpacity
          style={estilos.botaoModal}
          onPress={DowloandProgramacao}
        >
          <Text style={estilos.textoBotaoModal}>Salvar Programação  -  {processo}</Text>
        </TouchableOpacity>








        <Modal
          animationType="slide"
          transparent={false}
          visible={abrirLogin}
        >
          <SafeAreaView style={estilos.modal}>



            <View style={estilos.modalHeader}>

              <Text style={estilos.textoModal}>Buscar Processo</Text>
            </View>

            <Animatable.View
              animation="bounceInUp"
              useNativeDriver  >


              <TextInput
                type="email"
                style={estilos.input}
                placeholder="Insira Processo"
                value={processo}
                onChangeText={(processo) => setProcesso(processo)}
              />



              <TouchableOpacity
                style={estilos.botaoModal1}
                onPress={buscaprocesso}
              >
                <Text style={estilos.textoBotaoModal}>Buscar</Text>
              </TouchableOpacity>

            </Animatable.View>
          </SafeAreaView>
        </Modal>
      </View>
    </ScrollView>

  );

}

export default Programacao1;




const estilos = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#FFF'

  },
  scrollView: {

    marginHorizontal: 20,

  },
  textoModal: {

    color: '#FFF',

    marginLeft: 15,
    fontSize: 25,


  },
  cell: {
    color: '#585858',
    borderColor: "#767676",
    borderWidth: StyleSheet.hairlineWidth,
    height: '100%',
    width: '23%',
    textAlign: 'center',
    alignItems: 'center',
  },
  modalHeader: {

    marginLeft: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,


  },


  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 13,
    borderColor: "#000000",
    borderWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
  },
  botaoModal: {
    backgroundColor: '#006400',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',

    width: '23%',
  },
  botaoModal1: {
    backgroundColor: '#006400',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%',
  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',
    alignItems: 'center',
  },

  navbar: {
    backgroundColor: '#00335c',
    padding: 12,
    color: '#FFF',
    flexDirection: 'row',
    marginTop: 35,

  },

  textonavbar: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao: {
    position: 'absolute',
    right: 13,
    marginTop: 11,
  },


  grid: {
    marginTop: '4%',
    // borderWidth: StyleSheet.hairlineWidth,
    width: 2500
  },

  griditem: {
    flexDirection: 'row',
    width: '30.5%'


  },

  gridbotaoEditar: {
    position: 'absolute',
    right: 40,
    color: '#5c7ef6',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  gridbotaoExcluir: {
    position: 'absolute',
    right: 15,
    color: '#cc1414',
  },

  inputBuscar: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 18,
    borderColor: "#000000",
    borderWidth: StyleSheet.hairlineWidth,
    width: '15%',
    position: 'relative',
    top: '-2%',
    left: '1 %',
    textAlign:
      "center",
  },

  ViewinputBuscar: {
    flexDirection: 'row',
    top: '1%',

  },

  iconeBuscar: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  separator1: {
    marginVertical: 8,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});