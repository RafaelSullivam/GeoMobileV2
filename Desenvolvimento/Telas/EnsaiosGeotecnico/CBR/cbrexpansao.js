import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, Switch, SafeAreaView, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./stylecbr";
import axios from 'axios'; // npm i axios
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { TextInputMask } from 'react-native-masked-text'
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";


export default function CBRExpansao({ route, navigation }) {
  api = Conexao.api
  const [amostra, setAmostra] = useState(route.params?.namostra)
  const [processo, setProcesso] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [currentHora, setCurrentHora] = useState('');
  const [loading, setLoading] = useState(false)

  const [altcorpprovaMob, setAltCorpProvaMob] = useState('')

  const [datap1Mob, setDataP1Mob] = useState('')
  const [datap2Mob, setDataP2Mob] = useState('')
  const [datap3Mob, setDataP3Mob] = useState('')
  const [datap4Mob, setDataP4Mob] = useState('')
  const [datap5Mob, setDataP5Mob] = useState('')

  const [horap1Mob, setHoraP1Mob] = useState('')
  const [horap2Mob, setHoraP2Mob] = useState('')
  const [horap3Mob, setHoraP3Mob] = useState('')
  const [horap4Mob, setHoraP4Mob] = useState('')
  const [horap5Mob, setHoraP5Mob] = useState('')


  const [leiturap1Mob, setLeituraP1Mob] = useState('')//AlturaDoMolde1
  const [leiturap2Mob, setLeituraP2Mob] = useState('')
  const [leiturap3Mob, setLeituraP3Mob] = useState('')
  const [leiturap4Mob, setLeituraP4Mob] = useState('')
  const [leiturap5Mob, setLeituraP5Mob] = useState('')
  const [leiturap6Mob, setLeituraP6Mob] = useState('')

  const [expansaop1Mob, setExpansaoP1Mob] = useState('')
  const [expansaop2Mob, setExpansaoP2Mob] = useState('')
  const [expansaop3Mob, setExpansaoP3Mob] = useState('')
  const [expansaop4Mob, setExpansaoP4Mob] = useState('')
  const [expansaop5Mob, setExpansaoP5Mob] = useState('')
  const [expansaop6Mob, setExpansaoP6Mob] = useState('')

  const [altcorpprova1, setAltCorpProva1] = useState('')
  const [altcorpprova2, setAltCorpProva2] = useState('')
  const [altcorpprova3, setAltCorpProva3] = useState('')
  const [altcorpprova4, setAltCorpProva4] = useState('')
  const [altcorpprova5, setAltCorpProva5] = useState('')
  const [altcorpprova6, setAltCorpProva6] = useState('')


  const [leiturap11, setLeituraP11] = useState('')
  const [leiturap12, setLeituraP12] = useState('')
  const [leiturap13, setLeituraP13] = useState('')
  const [leiturap14, setLeituraP14] = useState('')
  const [leiturap15, setLeituraP15] = useState('')

  const [leiturap21, setLeituraP21] = useState('')
  const [leiturap22, setLeituraP22] = useState('')
  const [leiturap23, setLeituraP23] = useState('')
  const [leiturap24, setLeituraP24] = useState('')
  const [leiturap25, setLeituraP25] = useState('')

  const [leiturap31, setLeituraP31] = useState('')
  const [leiturap32, setLeituraP32] = useState('')
  const [leiturap33, setLeituraP33] = useState('')
  const [leiturap34, setLeituraP34] = useState('')
  const [leiturap35, setLeituraP35] = useState('')

  const [leiturap41, setLeituraP41] = useState('')
  const [leiturap42, setLeituraP42] = useState('')
  const [leiturap43, setLeituraP43] = useState('')
  const [leiturap44, setLeituraP44] = useState('')
  const [leiturap45, setLeituraP45] = useState('')

  const [leiturap51, setLeituraP51] = useState('')
  const [leiturap52, setLeituraP52] = useState('')
  const [leiturap53, setLeituraP53] = useState('')
  const [leiturap54, setLeituraP54] = useState('')
  const [leiturap55, setLeituraP55] = useState('')

  const [leiturap61, setLeituraP61] = useState('')
  const [leiturap62, setLeituraP62] = useState('')
  const [leiturap63, setLeituraP63] = useState('')
  const [leiturap64, setLeituraP64] = useState('')
  const [leiturap65, setLeituraP65] = useState('')

  const [expansaop11, setExpansaoP11] = useState('')
  const [expansaop12, setExpansaoP12] = useState('')
  const [expansaop13, setExpansaoP13] = useState('')
  const [expansaop14, setExpansaoP14] = useState('')
  const [expansaop15, setExpansaoP15] = useState('')

  const [expansaop21, setExpansaoP21] = useState('')
  const [expansaop22, setExpansaoP22] = useState('')
  const [expansaop23, setExpansaoP23] = useState('')
  const [expansaop24, setExpansaoP24] = useState('')
  const [expansaop25, setExpansaoP25] = useState('')

  const [expansaop31, setExpansaoP31] = useState('')
  const [expansaop32, setExpansaoP32] = useState('')
  const [expansaop33, setExpansaoP33] = useState('')
  const [expansaop34, setExpansaoP34] = useState('')
  const [expansaop35, setExpansaoP35] = useState('')

  const [expansaop41, setExpansaoP41] = useState('')
  const [expansaop42, setExpansaoP42] = useState('')
  const [expansaop43, setExpansaoP43] = useState('')
  const [expansaop44, setExpansaoP44] = useState('')
  const [expansaop45, setExpansaoP45] = useState('')

  const [expansaop51, setExpansaoP51] = useState('')
  const [expansaop52, setExpansaoP52] = useState('')
  const [expansaop53, setExpansaoP53] = useState('')
  const [expansaop54, setExpansaoP54] = useState('')
  const [expansaop55, setExpansaoP55] = useState('')

  const [expansaop61, setExpansaoP61] = useState('')
  const [expansaop62, setExpansaoP62] = useState('')
  const [expansaop63, setExpansaoP63] = useState('')
  const [expansaop64, setExpansaoP64] = useState('')
  const [expansaop65, setExpansaoP65] = useState('')


  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [connState, setConnState] = useState(0);
  const [status, setStatus] = useState('')
  const [ensaio, setEnsaio] = useState()
  const [energiacomp, setEnergiacomp] = useState('')
  const [aux0, setAux0] = useState('')
  const [aux1, setAux1] = useState(Boolean)

  const dat = [
    { label: 'P1', value: 'P1' },
    { label: 'P2', value: 'P2' },
    { label: 'P3', value: 'P3' },
    { label: 'P4', value: 'P4' },
    { label: 'P5', value: 'P5' },
    { label: 'P6', value: 'P6' },


  ];
  const Eng = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Internormal', value: 'Internormal' },
    { label: 'Intermediária', value: 'Intermediária' },
    { label: 'Intermodificada', value: 'Intermodificada' },
    { label: 'Modificada', value: 'Modificada' },
    { label: 'Superpesado', value: 'Superpesado' },
    { label: 'Outros', value: 'Outros' },

  ];
  const Separator1 = () => (
    <View style={styles.separator1} />
  );

  const mensagemsalvar = () =>
    Alert.alert(
      "                          Deseja Salvar! ",
      "                                     Amostra =" + amostra,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => Confirmasalvar() }
      ]
    );
  const Confirmasalvar = () =>
    Alert.alert(
      "                          Salvo com sucesso! ",
      "                                     Amostra =" + amostra,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => add() }
      ]
    );
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };
  function Salvardados() {
    if (connState.isConnected === true) {
      Save()
    } else {
      SalvarBanco()
    }

  };
  function Buscardados() {
    if (connState.isConnected === true) {
      getItem()
    } else {

      BuscaBanco()
    }

  };
  async function getItem() {
    setLoading(true)
    // const res = await axios.get(this.api + 'BuscarCBRExpansao.php?amostra=' + amostra);
    //setAmostra(res.data.amostra);
    // setStatus(res.data.success);
    // setDataP1Mob(res.data.datap1Mob)
    // setDataP2Mob(res.data.datap2Mob)
    // setDataP3Mob(res.data.datap3Mob)
    // setDataP4Mob(res.data.datap4Mob)
    // setDataP5Mob(res.data.datap5Mob)

    // setHoraP1Mob(res.data.horap1Mob)
    // setHoraP2Mob(res.data.horap2Mob)
    // setHoraP3Mob(res.data.horap3Mob)
    // setHoraP4Mob(res.data.horap4Mob)
    // setHoraP5Mob(res.data.horap5Mob)

    // setAltCorpProva1(res.data.altcorpprova1)
    // setAltCorpProva2(res.data.altcorpprova2)
    // setAltCorpProva3(res.data.altcorpprova3)
    // setAltCorpProva4(res.data.altcorpprova4)
    // setAltCorpProva5(res.data.altcorpprova5)
    // setAltCorpProva6(res.data.altcorpprova6)

    // setLeituraP11(res.data.leiturap11)
    // setLeituraP12(res.data.leiturap12)
    // setLeituraP13(res.data.leiturap13)
    // setLeituraP14(res.data.leiturap14)
    // setLeituraP15(res.data.leiturap15)

    // setLeituraP21(res.data.leiturap21)
    // setLeituraP22(res.data.leiturap22)
    // setLeituraP23(res.data.leiturap23)
    // setLeituraP24(res.data.leiturap24)
    // setLeituraP25(res.data.leiturap25)

    // setLeituraP31(res.data.leiturap31)
    // setLeituraP32(res.data.leiturap32)
    // setLeituraP33(res.data.leiturap33)
    // setLeituraP34(res.data.leiturap34)
    // setLeituraP35(res.data.leiturap35)

    // setLeituraP41(res.data.leiturap41)
    // setLeituraP42(res.data.leiturap42)
    // setLeituraP43(res.data.leiturap43)
    // setLeituraP44(res.data.leiturap44)
    // setLeituraP45(res.data.leiturap45)

    // setLeituraP51(res.data.leiturap51)
    // setLeituraP52(res.data.leiturap52)
    // setLeituraP53(res.data.leiturap53)
    // setLeituraP54(res.data.leiturap54)
    // setLeituraP55(res.data.leiturap55)

    // setLeituraP61(res.data.leiturap61)
    // setLeituraP62(res.data.leiturap62)
    // setLeituraP63(res.data.leiturap63)
    // setLeituraP64(res.data.leiturap64)
    // setLeituraP65(res.data.leiturap65)

    // setExpansaoP11(res.data.expansaop11)
    // setExpansaoP12(res.data.expansaop12)
    // setExpansaoP13(res.data.expansaop13)
    // setExpansaoP14(res.data.expansaop14)
    // setExpansaoP15(res.data.expansaop15)

    // setExpansaoP21(res.data.expansaop21)
    // setExpansaoP22(res.data.expansaop22)
    // setExpansaoP23(res.data.expansaop23)
    // setExpansaoP24(res.data.expansaop24)
    // setExpansaoP25(res.data.expansaop25)

    // setExpansaoP31(res.data.expansaop31)
    // setExpansaoP32(res.data.expansaop32)
    // setExpansaoP33(res.data.expansaop33)
    // setExpansaoP34(res.data.expansaop34)
    // setExpansaoP35(res.data.expansaop35)

    // setExpansaoP41(res.data.expansaop41)
    // setExpansaoP42(res.data.expansaop42)
    // setExpansaoP43(res.data.expansaop43)
    // setExpansaoP44(res.data.expansaop44)
    // setExpansaoP45(res.data.expansaop45)

    // setExpansaoP51(res.data.expansaop51)
    // setExpansaoP52(res.data.expansaop52)
    // setExpansaoP53(res.data.expansaop53)
    // setExpansaoP54(res.data.expansaop54)
    // setExpansaoP55(res.data.expansaop55)

    // setExpansaoP61(res.data.expansaop61)
    // setExpansaoP62(res.data.expansaop62)
    // setExpansaoP63(res.data.expansaop63)
    // setExpansaoP64(res.data.expansaop64)
    // setExpansaoP65(res.data.expansaop65)


    // console.warn(this.api + 'BuscarCBRExpansao.php?amostra=' + amostra, status, res.data)
    // if (res.data.success === false) {
    //   falha();
    // } else {
      setAux1(true)
      setLoading(false)
    // }

  };

  async function add() {


    const obj = { amostra , altcorpprova1, altcorpprova2, altcorpprova3, altcorpprova4, altcorpprova5, altcorpprova6 , datap1Mob , datap2Mob , datap3Mob , datap4Mob , datap5Mob , horap1Mob , horap2Mob , horap3Mob , horap4Mob , horap5Mob ,  leiturap11 , leiturap12 , leiturap13 , leiturap14 , leiturap15 , leiturap21 , leiturap22 , leiturap23 , leiturap24 , leiturap25 , leiturap31 , leiturap32 , leiturap33 , leiturap34 , leiturap35 , leiturap41 , leiturap42 , leiturap43 , leiturap44 , leiturap45 , leiturap51 , leiturap52 , leiturap53 , leiturap54 , leiturap55 , leiturap61 , leiturap62 , leiturap63 , leiturap64 , leiturap65 , expansaop11 , expansaop12 , expansaop13 , expansaop14 , expansaop15 , expansaop21 , expansaop22 , expansaop23 , expansaop24 , expansaop25 , expansaop31 , expansaop32 , expansaop33 , expansaop34 , expansaop35 , expansaop41 , expansaop42 , expansaop43 , expansaop44 , expansaop45 , expansaop51 , expansaop52 , expansaop53 , expansaop54 , expansaop55 , expansaop61 , expansaop62 , expansaop63 , expansaop64 , expansaop65  };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarCBRExpansao.php', obj);
      console.warn(this.api + 'SalvarCBRExpansao.php', obj)
      if (res.data.success === true) {



      }
    }
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
  const gerarBanco = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists CBRExpansao ( amostra text, altcorpprova1 text, altcorpprova2 text, altcorpprova3 text, altcorpprova4 text, altcorpprova5 text, altcorpprova6 text, datap11 text, datap12 text, datap13 text, datap14 text, datap15 text, horap11 text, horap12 text, horap13 text, horap14 text, horap15 text,  leiturap11 text, leiturap12 text, leiturap13 text, leiturap14 text, leiturap15 text, leiturap21 text, leiturap22 text, leiturap23 text, leiturap24 text, leiturap25 text, leiturap31 text, leiturap32 text, leiturap33 text, leiturap34 text, leiturap35 text, leiturap41 text, leiturap42 text, leiturap43 text, leiturap44 text, leiturap45 text, leiturap51 text, leiturap52 text, leiturap53 text, leiturap54 text, leiturap55 text, leiturap61 text, leiturap62 text, leiturap63 text, leiturap64 text, leiturap65 text, expansaop11 text, expansaop12 text, expansaop13 text, expansaop14 text, expansaop15 text, expansaop21 text, expansaop22 text, expansaop23 text, expansaop24 text, expansaop25 text, expansaop31 text, expansaop32 text, expansaop33 text, expansaop34 text, expansaop35 text, expansaop41 text, expansaop42 text, expansaop43 text, expansaop44 text, expansaop45 text, expansaop51 text, expansaop52 text, expansaop53 text, expansaop54 text, expansaop55 text, expansaop61 text, expansaop62 text, expansaop63 text, expansaop64 text, expansaop65 text);"
        );

        console.log("Banco de dados iniciado")
      });
  }
  const SalvarBanco = () => {

    db.transaction(
      (tx) => {
        tx.executeSql(`insert into CBRExpansao ( amostra , altcorpprova1 , altcorpprova2, altcorpprova3, altcorpprova4, altcorpprova5, altcorpprova6 , datap11 , datap12 , datap13 , datap14 , datap15 , horap11 , horap12 , horap13 , horap14 , horap15 , leiturap11 , leiturap12 , leiturap13 , leiturap14 , leiturap15 , leiturap21 , leiturap22 , leiturap23 , leiturap24 , leiturap25 , leiturap31 , leiturap32 , leiturap33 , leiturap34 , leiturap35 , leiturap41 , leiturap42 , leiturap43 , leiturap44 , leiturap45 , leiturap51 , leiturap52 , leiturap53 , leiturap54 , leiturap55, leiturap61 , leiturap62 , leiturap63 , leiturap64 , leiturap65 , expansaop11 , expansaop12 , expansaop13 , expansaop14 , expansaop15 , expansaop21 , expansaop22 , expansaop23 , expansaop24 , expansaop25 , expansaop31 , expansaop32 , expansaop33 , expansaop34 , expansaop35 , expansaop41 , expansaop42 , expansaop43 , expansaop44 , expansaop45 , expansaop51 , expansaop52 , expansaop53 , expansaop54 , expansaop55, expansaop61 , expansaop62 , expansaop63 , expansaop64 , expansaop65  ) values ('${amostra}', '${altcorpprova1}', '${altcorpprova2}', '${altcorpprova3}', '${altcorpprova4}', '${altcorpprova5}', '${datap1Mob}' , '${datap2Mob}' , '${datap3Mob}' , '${datap4Mob}' , '${datap5Mob}' ,  , '${horap1Mob}' , '${horap2Mob}' , '${horap3Mob}' , '${horap4Mob}' , '${horap5Mob}' , '${leiturap11}' , '${leiturap12}' , '${leiturap13}' , '${leiturap14}' , '${leiturap15}' , '${leiturap21}' , '${leiturap22}' , '${leiturap23}' , '${leiturap24}' , '${leiturap25}' , '${leiturap31}' , '${leiturap32}' , '${leiturap33}' , '${leiturap34}' , '${leiturap35}' , '${leiturap41}' , '${leiturap42}' , '${leiturap43}' , '${leiturap44}' , '${leiturap45}' , '${leiturap51}' , '${leiturap52}' , '${leiturap53}' , '${leiturap54}' , '${leiturap55}' , '${expansaop11}' , '${expansaop12}' , '${expansaop13}' , '${expansaop14}' , '${expansaop15}' , '${expansaop21}' , '${expansaop22}' , '${expansaop23}' , '${expansaop24}' , '${expansaop25}' , '${expansaop31}' , '${expansaop32}' , '${expansaop33}' , '${expansaop34}' , '${expansaop35}' , '${expansaop41}' , '${expansaop42}' , '${expansaop43}' , '${expansaop44}' , '${expansaop45}' , '${expansaop51}' , '${expansaop52}' , '${expansaop53}' , '${expansaop54}' , '${expansaop55}', '${expansaop61}' , '${expansaop62}' , '${expansaop63}' , '${expansaop64}' , '${expansaop65}'  )`, () => { }, (error) => { console.log(error) });

      },

      mensagemsalvaroffline()
    );
  };
  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {
    setLoading(true)
    db.transaction((tx) => {
      try {
        tx.executeSql('SELECT * FROM CBRExpansao WHERE amostra = ?', [amostra],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var useraltcorpprova1 = results.rows.item(0).altcorpprova1
              var useraltcorpprova2 = results.rows.item(0).altcorpprova2
              var useraltcorpprova3 = results.rows.item(0).altcorpprova3
              var useraltcorpprova4 = results.rows.item(0).altcorpprova4
              var useraltcorpprova5 = results.rows.item(0).altcorpprova5
              var userdatap11 = results.rows.item(0).datap11
              var userdatap12 = results.rows.item(0).datap12
              var userdatap13 = results.rows.item(0).datap13
              var userdatap14 = results.rows.item(0).datap14
              var userdatap15 = results.rows.item(0).datap15
              var userhorap11 = results.rows.item(0).horap11
              var userhorap12 = results.rows.item(0).horap12
              var userhorap13 = results.rows.item(0).horap13
              var userhorap14 = results.rows.item(0).horap14
              var userhorap15 = results.rows.item(0).horap15
              var userleiturap11 = results.rows.item(0).leiturap11
              var userleiturap12 = results.rows.item(0).leiturap12
              var userleiturap13 = results.rows.item(0).leiturap13
              var userleiturap14 = results.rows.item(0).leiturap14
              var userleiturap15 = results.rows.item(0).leiturap15
              var userleiturap21 = results.rows.item(0).leiturap21
              var userleiturap22 = results.rows.item(0).leiturap22
              var userleiturap23 = results.rows.item(0).leiturap23
              var userleiturap24 = results.rows.item(0).leiturap24
              var userleiturap25 = results.rows.item(0).leiturap25
              var userleiturap31 = results.rows.item(0).leiturap31
              var userleiturap32 = results.rows.item(0).leiturap32
              var userleiturap33 = results.rows.item(0).leiturap33
              var userleiturap34 = results.rows.item(0).leiturap34
              var userleiturap35 = results.rows.item(0).leiturap35
              var userleiturap41 = results.rows.item(0).leiturap41
              var userleiturap42 = results.rows.item(0).leiturap42
              var userleiturap43 = results.rows.item(0).leiturap43
              var userleiturap44 = results.rows.item(0).leiturap44
              var userleiturap45 = results.rows.item(0).leiturap45
              var userleiturap51 = results.rows.item(0).leiturap51
              var userleiturap52 = results.rows.item(0).leiturap52
              var userleiturap53 = results.rows.item(0).leiturap53
              var userleiturap54 = results.rows.item(0).leiturap54
              var userleiturap55 = results.rows.item(0).leiturap55
              var userleiturap61 = results.rows.item(0).leiturap61
              var userleiturap62 = results.rows.item(0).leiturap62
              var userleiturap63 = results.rows.item(0).leiturap63
              var userleiturap64 = results.rows.item(0).leiturap64
              var userleiturap65 = results.rows.item(0).leiturap65
              var userexpansaop11 = results.rows.item(0).expansaop11
              var userexpansaop12 = results.rows.item(0).expansaop12
              var userexpansaop13 = results.rows.item(0).expansaop13
              var userexpansaop14 = results.rows.item(0).expansaop14
              var userexpansaop15 = results.rows.item(0).expansaop15
              var userexpansaop21 = results.rows.item(0).expansaop21
              var userexpansaop22 = results.rows.item(0).expansaop22
              var userexpansaop23 = results.rows.item(0).expansaop23
              var userexpansaop24 = results.rows.item(0).expansaop24
              var userexpansaop25 = results.rows.item(0).expansaop25
              var userexpansaop31 = results.rows.item(0).expansaop31
              var userexpansaop32 = results.rows.item(0).expansaop32
              var userexpansaop33 = results.rows.item(0).expansaop33
              var userexpansaop34 = results.rows.item(0).expansaop34
              var userexpansaop35 = results.rows.item(0).expansaop35
              var userexpansaop41 = results.rows.item(0).expansaop41
              var userexpansaop42 = results.rows.item(0).expansaop42
              var userexpansaop43 = results.rows.item(0).expansaop43
              var userexpansaop44 = results.rows.item(0).expansaop44
              var userexpansaop45 = results.rows.item(0).expansaop45
              var userexpansaop51 = results.rows.item(0).expansaop51
              var userexpansaop52 = results.rows.item(0).expansaop52
              var userexpansaop53 = results.rows.item(0).expansaop53
              var userexpansaop54 = results.rows.item(0).expansaop54
              var userexpansaop55 = results.rows.item(0).expansaop55
              var userexpansaop61 = results.rows.item(0).expansaop61
              var userexpansaop62 = results.rows.item(0).expansaop62
              var userexpansaop63 = results.rows.item(0).expansaop63
              var userexpansaop64 = results.rows.item(0).expansaop64
              var userexpansaop65 = results.rows.item(0).expansaop65

              setAltCorpProva1(useraltcorpprova1);
              setAltCorpProva2(useraltcorpprova2);
              setAltCorpProva3(useraltcorpprova3);
              setAltCorpProva4(useraltcorpprova4);
              setAltCorpProva5(useraltcorpprova5);
              setDataP1Mob(userdatap11);
              setDataP2Mob(userdatap12);
              setDataP3Mob(userdatap13);
              setDataP4Mob(userdatap14);
              setDataP5Mob(userdatap15);
              setHoraP1Mob(userhorap11);
              setHoraP2Mob(userhorap12);
              setHoraP3Mob(userhorap13);
              setHoraP4Mob(userhorap14);
              setHoraP5Mob(userhorap15);
              setLeituraP11(userleiturap11)
              setLeituraP12(userleiturap12)
              setLeituraP13(userleiturap13)
              setLeituraP14(userleiturap14)
              setLeituraP15(userleiturap15)
              setLeituraP21(userleiturap21)
              setLeituraP22(userleiturap22)
              setLeituraP23(userleiturap23)
              setLeituraP24(userleiturap24)
              setLeituraP25(userleiturap25)
              setLeituraP31(userleiturap31)
              setLeituraP32(userleiturap32)
              setLeituraP33(userleiturap33)
              setLeituraP34(userleiturap34)
              setLeituraP35(userleiturap35)
              setLeituraP41(userleiturap41)
              setLeituraP42(userleiturap42)
              setLeituraP43(userleiturap43)
              setLeituraP44(userleiturap44)
              setLeituraP45(userleiturap45)
              setLeituraP51(userleiturap51)
              setLeituraP52(userleiturap52)
              setLeituraP53(userleiturap53)
              setLeituraP54(userleiturap54)
              setLeituraP55(userleiturap55)
              setLeituraP61(userleiturap61)
              setLeituraP62(userleiturap62)
              setLeituraP63(userleiturap63)
              setLeituraP64(userleiturap64)
              setLeituraP65(userleiturap65)
              setExpansaoP11(userexpansaop11)
              setExpansaoP12(userexpansaop12)
              setExpansaoP13(userexpansaop13)
              setExpansaoP14(userexpansaop14)
              setExpansaoP15(userexpansaop15)
              setExpansaoP21(userexpansaop21)
              setExpansaoP22(userexpansaop22)
              setExpansaoP23(userexpansaop23)
              setExpansaoP24(userexpansaop24)
              setExpansaoP25(userexpansaop25)
              setExpansaoP31(userexpansaop31)
              setExpansaoP32(userexpansaop32)
              setExpansaoP33(userexpansaop33)
              setExpansaoP34(userexpansaop34)
              setExpansaoP35(userexpansaop35)
              setExpansaoP41(userexpansaop41)
              setExpansaoP42(userexpansaop42)
              setExpansaoP43(userexpansaop43)
              setExpansaoP44(userexpansaop44)
              setExpansaoP45(userexpansaop45)
              setExpansaoP51(userexpansaop51)
              setExpansaoP52(userexpansaop52)
              setExpansaoP53(userexpansaop53)
              setExpansaoP54(userexpansaop54)
              setExpansaoP55(userexpansaop55)
              setExpansaoP61(userexpansaop61)
              setExpansaoP62(userexpansaop62)
              setExpansaoP63(userexpansaop63)
              setExpansaoP64(userexpansaop64)
              setExpansaoP65(userexpansaop65)

              console.log(results.rows.item(0))
              setLoading(false)

            }
          });
      } catch (error) {
        console.log(error)
      }


    });

  };

  function Save() {
    if (ensaio == "P1") {
      setAltCorpProva1(altcorpprovaMob)
      setLeituraP11(leiturap1Mob)
      setLeituraP12(leiturap2Mob)
      setLeituraP13(leiturap3Mob)
      setLeituraP14(leiturap4Mob)
      setLeituraP15(leiturap5Mob)
      setExpansaoP11(expansaop1Mob)
      setExpansaoP12(expansaop2Mob)
      setExpansaoP13(expansaop3Mob)
      setExpansaoP14(expansaop4Mob)
      setExpansaoP15(expansaop5Mob)

    }
    if (ensaio == "P2") {
      setAltCorpProva2(altcorpprovaMob)

      setLeituraP21(leiturap1Mob)
      setLeituraP22(leiturap2Mob)
      setLeituraP23(leiturap3Mob)
      setLeituraP24(leiturap4Mob)
      setLeituraP25(leiturap5Mob)
      setExpansaoP21(expansaop1Mob)
      setExpansaoP22(expansaop2Mob)
      setExpansaoP23(expansaop3Mob)
      setExpansaoP24(expansaop4Mob)
      setExpansaoP25(expansaop5Mob)
    }
    if (ensaio == "P3") {
      setAltCorpProva3(altcorpprovaMob)

      setLeituraP31(leiturap1Mob)
      setLeituraP32(leiturap2Mob)
      setLeituraP33(leiturap3Mob)
      setLeituraP34(leiturap4Mob)
      setLeituraP35(leiturap5Mob)
      setExpansaoP31(expansaop1Mob)
      setExpansaoP32(expansaop2Mob)
      setExpansaoP33(expansaop3Mob)
      setExpansaoP34(expansaop4Mob)
      setExpansaoP35(expansaop5Mob)
    }
    if (ensaio == "P4") {
      setAltCorpProva4(altcorpprovaMob)

      setLeituraP41(leiturap1Mob)
      setLeituraP42(leiturap2Mob)
      setLeituraP43(leiturap3Mob)
      setLeituraP44(leiturap4Mob)
      setLeituraP45(leiturap5Mob)
      setExpansaoP41(expansaop1Mob)
      setExpansaoP42(expansaop2Mob)
      setExpansaoP43(expansaop3Mob)
      setExpansaoP44(expansaop4Mob)
      setExpansaoP45(expansaop5Mob)

    }
    if (ensaio == "P5") {
      setAltCorpProva5(altcorpprovaMob)

      setLeituraP51(leiturap1Mob)
      setLeituraP52(leiturap2Mob)
      setLeituraP53(leiturap3Mob)
      setLeituraP54(leiturap4Mob)
      setLeituraP55(leiturap5Mob)
      setExpansaoP51(expansaop1Mob)
      setExpansaoP52(expansaop2Mob)
      setExpansaoP53(expansaop3Mob)
      setExpansaoP54(expansaop4Mob)
      setExpansaoP55(expansaop5Mob)
    }
    if (ensaio == "P6") {
      setAltCorpProva6(altcorpprovaMob)

      setLeituraP61(leiturap1Mob)
      setLeituraP62(leiturap2Mob)
      setLeituraP63(leiturap3Mob)
      setLeituraP64(leiturap4Mob)
      setLeituraP65(leiturap5Mob)
      setExpansaoP61(expansaop1Mob)
      setExpansaoP62(expansaop2Mob)
      setExpansaoP63(expansaop3Mob)
      setExpansaoP64(expansaop4Mob)
      setExpansaoP65(expansaop5Mob)
    }
    mensagemsalvar();
  }
  // })
  // useEffect(() => {
  useEffect(() => {
    getItem()
    // gerarBanco()
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
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    setCurrentDate(
      date + '/' + month + '/' + year
    );
    setCurrentHora(
      hours + ':' + min
    );
    return () => {
      unsubscribe();
    };
    
  }, []);

  // function teste() {
  //   setInterval(function () {
  //     mensagemsalvar();
  //   }, 2000);

  //}
  useEffect(() => {
    //teste();
    if (aux0 != ensaio) {


      if (ensaio == "P1") {
        setAltCorpProvaMob(altcorpprova1)

        setLeituraP1Mob(leiturap11)
        setLeituraP2Mob(leiturap12)
        setLeituraP3Mob(leiturap13)
        setLeituraP4Mob(leiturap14)
        setLeituraP5Mob(leiturap15)
        setExpansaoP1Mob(expansaop11)
        setExpansaoP2Mob(expansaop12)
        setExpansaoP3Mob(expansaop13)
        setExpansaoP4Mob(expansaop14)
        setExpansaoP5Mob(expansaop15)

      }
      if (ensaio == "P2") {
        setAltCorpProvaMob(altcorpprova2)

        setLeituraP1Mob(leiturap21)
        setLeituraP2Mob(leiturap22)
        setLeituraP3Mob(leiturap23)
        setLeituraP4Mob(leiturap24)
        setLeituraP5Mob(leiturap25)
        setExpansaoP1Mob(expansaop21)
        setExpansaoP2Mob(expansaop22)
        setExpansaoP3Mob(expansaop23)
        setExpansaoP4Mob(expansaop24)
        setExpansaoP5Mob(expansaop25)
      }
      if (ensaio == "P3") {
        setAltCorpProvaMob(altcorpprova3)

        setLeituraP1Mob(leiturap31)
        setLeituraP2Mob(leiturap32)
        setLeituraP3Mob(leiturap33)
        setLeituraP4Mob(leiturap34)
        setLeituraP5Mob(leiturap35)
        setExpansaoP1Mob(expansaop31)
        setExpansaoP2Mob(expansaop32)
        setExpansaoP3Mob(expansaop33)
        setExpansaoP4Mob(expansaop34)
        setExpansaoP5Mob(expansaop35)
      }
      if (ensaio == "P4") {
        setAltCorpProvaMob(altcorpprova4)

        setLeituraP1Mob(leiturap41)
        setLeituraP2Mob(leiturap42)
        setLeituraP3Mob(leiturap43)
        setLeituraP4Mob(leiturap44)
        setLeituraP5Mob(leiturap45)
        setExpansaoP1Mob(expansaop41)
        setExpansaoP2Mob(expansaop42)
        setExpansaoP3Mob(expansaop43)
        setExpansaoP4Mob(expansaop44)
        setExpansaoP5Mob(expansaop45)

      }
      if (ensaio == "P5") {
        setAltCorpProvaMob(altcorpprova5)

        setLeituraP1Mob(leiturap51)
        setLeituraP2Mob(leiturap52)
        setLeituraP3Mob(leiturap53)
        setLeituraP4Mob(leiturap54)
        setLeituraP5Mob(leiturap55)
        setExpansaoP1Mob(expansaop51)
        setExpansaoP2Mob(expansaop52)
        setExpansaoP3Mob(expansaop53)
        setExpansaoP4Mob(expansaop54)
        setExpansaoP5Mob(expansaop55)
      }
      if (ensaio == "P5") {
        setAltCorpProvaMob(altcorpprova6)

        setLeituraP1Mob(leiturap61)
        setLeituraP2Mob(leiturap62)
        setLeituraP3Mob(leiturap63)
        setLeituraP4Mob(leiturap64)
        setLeituraP5Mob(leiturap65)
        setExpansaoP1Mob(expansaop61)
        setExpansaoP2Mob(expansaop62)
        setExpansaoP3Mob(expansaop63)
        setExpansaoP4Mob(expansaop64)
        setExpansaoP5Mob(expansaop65)
      }
      setAux0(ensaio)
      setAux1(false)
    }







    //add()
  })




  return (

    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>

          {loading == true ? <Modal onRequestClose={() => null} visible={true}>
            <View style={{ flex: 1, backgroundColor: '#2F4F4F', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                <Text style={{ fontSize: 20, fontWeight: '200' }}>Carregando ...</Text>
                <ActivityIndicator size="large" />
              </View>
            </View>
          </Modal>
            : <Text />}

        </View>
        <View style={styles.container}>

          <View style={styles.container}>

            {connState.isConnected == true ? <Image
              source={require('../../../componentes/imagem/applications_internet.png')}
              style={styles.ImageIconStyle}
            /> : <Image
              source={require('../../../componentes/imagem/Networkoff.png')}
              style={styles.ImageIconStyle}
            />}
            <Text style={styles.buttonNewTask}>
              Amostra:
            </Text>
            <TextInput
              style={styles.inputlef2tcbr}
              onChangeText={setAmostra}
              value={amostra}
              keyboardType='numeric'
              placeholder="Amostra"
              editable={true}
              selectTextOnFocus={true}
            />

          </View>


          <View style={styles.containerbtnbuscar}></View>

          <Text style={styles.labelcontanierll}>
            EXPANSÃO:
          </Text>
          <Text style={styles.labelcontanier}>
            Corpo de prova:
          </Text>
          <Separator1></Separator1>
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.shadow}
            textItem={styles.textItem}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.textItem}
            data={dat}
            search
            searchPlaceholder="Buscar"
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Corpo de prova"
            value={ensaio}
            onChange={item => {
              setEnsaio(item.value);
              // console.log('selected', item);
            }}
            renderItem={item => _renderItem(item)}
            textError="Error"
          />

          <Text style={styles.labelcontanier}>
            Altura corpo de prova (mm):
          </Text>
          <Separator1></Separator1>
          <View style={styles.container1cbr}>

            <TextInput
              //1
              style={styles.inputleft}
              onChangeText={setAltCorpProvaMob}
              value={altcorpprovaMob}
              keyboardType='numeric'
              placeholder="Altura corpo de prova (mm):"

            />

          </View>

          <Separator1></Separator1>
          <View style={styles.container1}>
            <Text style={styles.labelcontaniercbr}>
              Data:
            </Text>
            <Text style={styles.labelcontaniercbr}>
              Hora:
            </Text>
            <Text style={styles.labelcontaniercbr}>
              Leitura (mm):
            </Text>
            <Text style={styles.labelcontanier}>
              Expansão (%):
            </Text>
          </View>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              //placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setDataP1Mob}
              value={datap1Mob}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm'
              }}
              onChangeText={setHoraP1Mob}
              value={horap1Mob}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setLeituraP1Mob}
              value={leiturap1Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Leitura 1"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setExpansaoP1Mob}
              value={expansaop1Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Expansão 1 "
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              //placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setDataP2Mob}
              value={datap2Mob}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm'
              }}
              onChangeText={setHoraP2Mob}
              value={horap2Mob}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setLeituraP2Mob}
              value={leiturap2Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Leitura 2"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setExpansaoP2Mob}
              value={expansaop2Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Expansão 2 "
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
            //  placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setDataP3Mob}
              value={datap3Mob}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm'
              }}
              onChangeText={setHoraP3Mob}
              value={horap3Mob}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setLeituraP3Mob}
              value={leiturap3Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Leitura 3"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setExpansaoP3Mob}
              value={expansaop3Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Expansão 3 "
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
             // placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setDataP4Mob}
              value={datap4Mob}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm'
              }}
              onChangeText={setHoraP4Mob}
              value={horap4Mob}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setLeituraP4Mob}
              value={leiturap4Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Leitura 4"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setExpansaoP4Mob}
              value={expansaop4Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Expansão 4 "
            />
          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInputMask
              style={styles.inputleftcbr}
              //placeholder={currentDate}

              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              onChangeText={setDataP5Mob}
              value={datap5Mob}
              keyboardType='numeric'
            />
            <TextInputMask
              style={styles.inputleftcbr}
              placeholder={currentHora}
              type={'datetime'}
              options={{
                format: 'HH:mm'
              }}
              onChangeText={setHoraP5Mob}
              value={horap5Mob}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setLeituraP5Mob}
              value={leiturap5Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Leitura 5"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setExpansaoP5Mob}
              value={expansaop5Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Expansão 5 "
            />
          </View>






          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.containerbtnbuscar}>
            <TouchableOpacity
              style={styles.button}
              onPress={Salvardados}
            >
              <Image
                source={require('../../../componentes/imagem/save.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={{ fontSize: 16 }}>Salvar</Text>
            </TouchableOpacity>
            <Separator1></Separator1>
            <Separator1></Separator1>
          </View>
        </View>

      </ScrollView>
      <FlatList
        data={flatListItems}
        renderItem={({ item }) => listItemView(item)}
      />
    </SafeAreaView>
  );
};

