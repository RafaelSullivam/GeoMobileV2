import React, { useState, useEffect, Component } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, Switch, SafeAreaView, FlatList, Modal, ActivityIndicator } from 'react-native';
import styles from "./stylecbr";
import axios from 'axios'; // npm i axios
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import NetInfo from "@react-native-community/netinfo"
import * as SQLite from "expo-sqlite";
import Conexao from "../../../Conexao/conexao";


export default function CBRPenetracao({ route, navigation }) {
  api = Conexao.api
  const [amostra, setAmostra] = useState(route.params?.namostra)
  const [processo, setProcesso] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [currentHora, setCurrentHora] = useState('');
  const [loading, setLoading] = useState(false)



  const [penetracao1Mob, setPenetracaoP1Mob] = useState('')
  const [penetracao2Mob, setPenetracaoP2Mob] = useState('')
  const [penetracao3Mob, setPenetracaoP3Mob] = useState('')
  const [penetracao4Mob, setPenetracaoP4Mob] = useState('')
  const [penetracao5Mob, setPenetracaoP5Mob] = useState('')
  const [penetracao6Mob, setPenetracaoP6Mob] = useState('')
  const [penetracao7Mob, setPenetracaoP7Mob] = useState('')
  const [penetracao8Mob, setPenetracaoP8Mob] = useState('')
  const [penetracao9Mob, setPenetracaoP9Mob] = useState('')
  const [penetracao10Mob, setPenetracaoP10Mob] = useState('')
  const [penetracao11Mob, setPenetracaoP11Mob] = useState('')
  const [penetracao12Mob, setPenetracaoP12Mob] = useState('')
  const [penetracao13Mob, setPenetracaoP13Mob] = useState('')
  const [penetracao14Mob, setPenetracaoP14Mob] = useState('')
  const [penetracao15Mob, setPenetracaoP15Mob] = useState('')

  const [carga1Mob, setCargaP1Mob] = useState('')
  const [carga2Mob, setCargaP2Mob] = useState('')
  const [carga3Mob, setCargaP3Mob] = useState('')
  const [carga4Mob, setCargaP4Mob] = useState('')
  const [carga5Mob, setCargaP5Mob] = useState('')
  const [carga6Mob, setCargaP6Mob] = useState('')
  const [carga7Mob, setCargaP7Mob] = useState('')
  const [carga8Mob, setCargaP8Mob] = useState('')
  const [carga9Mob, setCargaP9Mob] = useState('')
  const [carga10Mob, setCargaP10Mob] = useState('')
  const [carga11Mob, setCargaP11Mob] = useState('')
  const [carga12Mob, setCargaP12Mob] = useState('')
  const [carga13Mob, setCargaP13Mob] = useState('')
  const [carga14Mob, setCargaP14Mob] = useState('')
  const [carga15Mob, setCargaP15Mob] = useState('')

  const [pressao1Mob, setPressaoP1Mob] = useState('')
  const [pressao2Mob, setPressaoP2Mob] = useState('')
  const [pressao3Mob, setPressaoP3Mob] = useState('')
  const [pressao4Mob, setPressaoP4Mob] = useState('')
  const [pressao5Mob, setPressaoP5Mob] = useState('')
  const [pressao6Mob, setPressaoP6Mob] = useState('')
  const [pressao7Mob, setPressaoP7Mob] = useState('')
  const [pressao8Mob, setPressaoP8Mob] = useState('')
  const [pressao9Mob, setPressaoP9Mob] = useState('')
  const [pressao10Mob, setPressaoP10Mob] = useState('')
  const [pressao11Mob, setPressaoP11Mob] = useState('')
  const [pressao12Mob, setPressaoP12Mob] = useState('')
  const [pressao13Mob, setPressaoP13Mob] = useState('')
  const [pressao14Mob, setPressaoP14Mob] = useState('')
  const [pressao15Mob, setPressaoP15Mob] = useState('')

  //P1


  const [carga11, setCargaP11] = useState('')
  const [carga12, setCargaP12] = useState('')
  const [carga13, setCargaP13] = useState('')
  const [carga14, setCargaP14] = useState('')
  const [carga15, setCargaP15] = useState('')
  const [carga16, setCargaP16] = useState('')
  const [carga17, setCargaP17] = useState('')
  const [carga18, setCargaP18] = useState('')
  const [carga19, setCargaP19] = useState('')
  const [carga110, setCargaP110] = useState('')
  const [carga111, setCargaP111] = useState('')
  const [carga112, setCargaP112] = useState('')
  const [carga113, setCargaP113] = useState('')
  const [carga114, setCargaP114] = useState('')
  const [carga115, setCargaP115] = useState('')

  const [pressao11, setPressaoP11] = useState('')
  const [pressao12, setPressaoP12] = useState('')
  const [pressao13, setPressaoP13] = useState('')
  const [pressao14, setPressaoP14] = useState('')
  const [pressao15, setPressaoP15] = useState('')
  const [pressao16, setPressaoP16] = useState('')
  const [pressao17, setPressaoP17] = useState('')
  const [pressao18, setPressaoP18] = useState('')
  const [pressao19, setPressaoP19] = useState('')
  const [pressao110, setPressaoP110] = useState('')
  const [pressao111, setPressaoP111] = useState('')
  const [pressao112, setPressaoP112] = useState('')
  const [pressao113, setPressaoP113] = useState('')
  const [pressao114, setPressaoP114] = useState('')
  const [pressao115, setPressaoP115] = useState('')

  //P2

  const [carga21, setCargaP21] = useState('')
  const [carga22, setCargaP22] = useState('')
  const [carga23, setCargaP23] = useState('')
  const [carga24, setCargaP24] = useState('')
  const [carga25, setCargaP25] = useState('')
  const [carga26, setCargaP26] = useState('')
  const [carga27, setCargaP27] = useState('')
  const [carga28, setCargaP28] = useState('')
  const [carga29, setCargaP29] = useState('')
  const [carga210, setCargaP210] = useState('')
  const [carga211, setCargaP211] = useState('')
  const [carga212, setCargaP212] = useState('')
  const [carga213, setCargaP213] = useState('')
  const [carga214, setCargaP214] = useState('')
  const [carga215, setCargaP215] = useState('')

  const [pressao21, setPressaoP21] = useState('')
  const [pressao22, setPressaoP22] = useState('')
  const [pressao23, setPressaoP23] = useState('')
  const [pressao24, setPressaoP24] = useState('')
  const [pressao25, setPressaoP25] = useState('')
  const [pressao26, setPressaoP26] = useState('')
  const [pressao27, setPressaoP27] = useState('')
  const [pressao28, setPressaoP28] = useState('')
  const [pressao29, setPressaoP29] = useState('')
  const [pressao210, setPressaoP210] = useState('')
  const [pressao211, setPressaoP211] = useState('')
  const [pressao212, setPressaoP212] = useState('')
  const [pressao213, setPressaoP213] = useState('')
  const [pressao214, setPressaoP214] = useState('')
  const [pressao215, setPressaoP215] = useState('')

  //P3


  const [carga31, setCargaP31] = useState('')
  const [carga32, setCargaP32] = useState('')
  const [carga33, setCargaP33] = useState('')
  const [carga34, setCargaP34] = useState('')
  const [carga35, setCargaP35] = useState('')
  const [carga36, setCargaP36] = useState('')
  const [carga37, setCargaP37] = useState('')
  const [carga38, setCargaP38] = useState('')
  const [carga39, setCargaP39] = useState('')
  const [carga310, setCargaP310] = useState('')
  const [carga311, setCargaP311] = useState('')
  const [carga312, setCargaP312] = useState('')
  const [carga313, setCargaP313] = useState('')
  const [carga314, setCargaP314] = useState('')
  const [carga315, setCargaP315] = useState('')

  const [pressao31, setPressaoP31] = useState('')
  const [pressao32, setPressaoP32] = useState('')
  const [pressao33, setPressaoP33] = useState('')
  const [pressao34, setPressaoP34] = useState('')
  const [pressao35, setPressaoP35] = useState('')
  const [pressao36, setPressaoP36] = useState('')
  const [pressao37, setPressaoP37] = useState('')
  const [pressao38, setPressaoP38] = useState('')
  const [pressao39, setPressaoP39] = useState('')
  const [pressao310, setPressaoP310] = useState('')
  const [pressao311, setPressaoP311] = useState('')
  const [pressao312, setPressaoP312] = useState('')
  const [pressao313, setPressaoP313] = useState('')
  const [pressao314, setPressaoP314] = useState('')
  const [pressao315, setPressaoP315] = useState('')

  // P4


  const [carga41, setCargaP41] = useState('')
  const [carga42, setCargaP42] = useState('')
  const [carga43, setCargaP43] = useState('')
  const [carga44, setCargaP44] = useState('')
  const [carga45, setCargaP45] = useState('')
  const [carga46, setCargaP46] = useState('')
  const [carga47, setCargaP47] = useState('')
  const [carga48, setCargaP48] = useState('')
  const [carga49, setCargaP49] = useState('')
  const [carga410, setCargaP410] = useState('')
  const [carga411, setCargaP411] = useState('')
  const [carga412, setCargaP412] = useState('')
  const [carga413, setCargaP413] = useState('')
  const [carga414, setCargaP414] = useState('')
  const [carga415, setCargaP415] = useState('')

  const [pressao41, setPressaoP41] = useState('')
  const [pressao42, setPressaoP42] = useState('')
  const [pressao43, setPressaoP43] = useState('')
  const [pressao44, setPressaoP44] = useState('')
  const [pressao45, setPressaoP45] = useState('')
  const [pressao46, setPressaoP46] = useState('')
  const [pressao47, setPressaoP47] = useState('')
  const [pressao48, setPressaoP48] = useState('')
  const [pressao49, setPressaoP49] = useState('')
  const [pressao410, setPressaoP410] = useState('')
  const [pressao411, setPressaoP411] = useState('')
  const [pressao412, setPressaoP412] = useState('')
  const [pressao413, setPressaoP413] = useState('')
  const [pressao414, setPressaoP414] = useState('')
  const [pressao415, setPressaoP415] = useState('')

  // P5


  const [carga51, setCargaP51] = useState('')
  const [carga52, setCargaP52] = useState('')
  const [carga53, setCargaP53] = useState('')
  const [carga54, setCargaP54] = useState('')
  const [carga55, setCargaP55] = useState('')
  const [carga56, setCargaP56] = useState('')
  const [carga57, setCargaP57] = useState('')
  const [carga58, setCargaP58] = useState('')
  const [carga59, setCargaP59] = useState('')
  const [carga510, setCargaP510] = useState('')
  const [carga511, setCargaP511] = useState('')
  const [carga512, setCargaP512] = useState('')
  const [carga513, setCargaP513] = useState('')
  const [carga514, setCargaP514] = useState('')
  const [carga515, setCargaP515] = useState('')

  const [pressao51, setPressaoP51] = useState('')
  const [pressao52, setPressaoP52] = useState('')
  const [pressao53, setPressaoP53] = useState('')
  const [pressao54, setPressaoP54] = useState('')
  const [pressao55, setPressaoP55] = useState('')
  const [pressao56, setPressaoP56] = useState('')
  const [pressao57, setPressaoP57] = useState('')
  const [pressao58, setPressaoP58] = useState('')
  const [pressao59, setPressaoP59] = useState('')
  const [pressao510, setPressaoP510] = useState('')
  const [pressao511, setPressaoP511] = useState('')
  const [pressao512, setPressaoP512] = useState('')
  const [pressao513, setPressaoP513] = useState('')
  const [pressao514, setPressaoP514] = useState('')
  const [pressao515, setPressaoP515] = useState('')

  // P6


  const [carga61, setCargaP61] = useState('')
  const [carga62, setCargaP62] = useState('')
  const [carga63, setCargaP63] = useState('')
  const [carga64, setCargaP64] = useState('')
  const [carga65, setCargaP65] = useState('')
  const [carga66, setCargaP66] = useState('')
  const [carga67, setCargaP67] = useState('')
  const [carga68, setCargaP68] = useState('')
  const [carga69, setCargaP69] = useState('')
  const [carga610, setCargaP610] = useState('')
  const [carga611, setCargaP611] = useState('')
  const [carga612, setCargaP612] = useState('')
  const [carga613, setCargaP613] = useState('')
  const [carga614, setCargaP614] = useState('')
  const [carga615, setCargaP615] = useState('')

  const [pressao61, setPressaoP61] = useState('')
  const [pressao62, setPressaoP62] = useState('')
  const [pressao63, setPressaoP63] = useState('')
  const [pressao64, setPressaoP64] = useState('')
  const [pressao65, setPressaoP65] = useState('')
  const [pressao66, setPressaoP66] = useState('')
  const [pressao67, setPressaoP67] = useState('')
  const [pressao68, setPressaoP68] = useState('')
  const [pressao69, setPressaoP69] = useState('')
  const [pressao610, setPressaoP610] = useState('')
  const [pressao611, setPressaoP611] = useState('')
  const [pressao612, setPressaoP612] = useState('')
  const [pressao613, setPressaoP613] = useState('')
  const [pressao614, setPressaoP614] = useState('')
  const [pressao615, setPressaoP615] = useState('')


  const [isEnabled, setIsEnabled] = useState(false);
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
    { label: 'P6', value: 'P6' }


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
    // const res = await axios.get(this.api + 'BuscarCBRPenetracao.php?amostra=' + amostra);
    // //setAmostra(res.data.amostra);
    // setStatus(res.data.success);


    // setPenetracaoP1Mob(res.data.penetracao1)
    // setPenetracaoP2Mob(res.data.penetracao2)
    // setPenetracaoP3Mob(res.data.penetracao3)
    // setPenetracaoP4Mob(res.data.penetracao4)
    // setPenetracaoP5Mob(res.data.penetracao5)
    // setPenetracaoP6Mob(res.data.penetracao6)
    // setPenetracaoP7Mob(res.data.penetracao7)
    // setPenetracaoP8Mob(res.data.penetracao8)
    // setPenetracaoP9Mob(res.data.penetracao9)
    // setPenetracaoP10Mob(res.data.penetracao10)
    // setPenetracaoP11Mob(res.data.penetracao11)
    // setPenetracaoP12Mob(res.data.penetracao12)
    // setPenetracaoP13Mob(res.data.penetracao13)
    // setPenetracaoP14Mob(res.data.penetracao14)
    // setPenetracaoP15Mob(res.data.penetracao15)
    // setCargaP11(res.data.carga11)
    // setCargaP12(res.data.carga12)
    // setCargaP13(res.data.carga13)
    // setCargaP14(res.data.carga14)
    // setCargaP15(res.data.carga15)
    // setCargaP16(res.data.carga16)
    // setCargaP17(res.data.carga17)
    // setCargaP18(res.data.carga18)
    // setCargaP19(res.data.carga19)
    // setCargaP110(res.data.carga110)
    // setCargaP111(res.data.carga111)
    // setCargaP112(res.data.carga112)
    // setCargaP113(res.data.carga113)
    // setCargaP114(res.data.carga114)
    // setCargaP115(res.data.carga115)
    // setCargaP21(res.data.carga21)
    // setCargaP22(res.data.carga22)
    // setCargaP23(res.data.carga23)
    // setCargaP24(res.data.carga24)
    // setCargaP25(res.data.carga25)
    // setCargaP26(res.data.carga26)
    // setCargaP27(res.data.carga27)
    // setCargaP28(res.data.carga28)
    // setCargaP29(res.data.carga29)
    // setCargaP210(res.data.carga210)
    // setCargaP211(res.data.carga211)
    // setCargaP212(res.data.carga212)
    // setCargaP213(res.data.carga213)
    // setCargaP214(res.data.carga214)
    // setCargaP215(res.data.carga215)
    // setCargaP31(res.data.carga31)
    // setCargaP32(res.data.carga32)
    // setCargaP33(res.data.carga33)
    // setCargaP34(res.data.carga34)
    // setCargaP35(res.data.carga35)
    // setCargaP36(res.data.carga36)
    // setCargaP37(res.data.carga37)
    // setCargaP38(res.data.carga38)
    // setCargaP39(res.data.carga39)
    // setCargaP310(res.data.carga310)
    // setCargaP311(res.data.carga311)
    // setCargaP312(res.data.carga312)
    // setCargaP313(res.data.carga313)
    // setCargaP314(res.data.carga314)
    // setCargaP315(res.data.carga315)
    // setCargaP41(res.data.carga41)
    // setCargaP42(res.data.carga42)
    // setCargaP43(res.data.carga43)
    // setCargaP44(res.data.carga44)
    // setCargaP45(res.data.carga45)
    // setCargaP46(res.data.carga46)
    // setCargaP47(res.data.carga47)
    // setCargaP48(res.data.carga48)
    // setCargaP49(res.data.carga49)
    // setCargaP410(res.data.carga410)
    // setCargaP411(res.data.carga411)
    // setCargaP412(res.data.carga412)
    // setCargaP413(res.data.carga413)
    // setCargaP414(res.data.carga414)
    // setCargaP415(res.data.carga415)
    // setCargaP51(res.data.carga51)
    // setCargaP52(res.data.carga52)
    // setCargaP53(res.data.carga53)
    // setCargaP54(res.data.carga54)
    // setCargaP55(res.data.carga55)
    // setCargaP56(res.data.carga56)
    // setCargaP57(res.data.carga57)
    // setCargaP58(res.data.carga58)
    // setCargaP59(res.data.carga59)
    // setCargaP510(res.data.carga510)
    // setCargaP511(res.data.carga511)
    // setCargaP512(res.data.carga512)
    // setCargaP513(res.data.carga513)
    // setCargaP514(res.data.carga514)
    // setCargaP515(res.data.carga515)
    // setCargaP61(res.data.carga61)
    // setCargaP62(res.data.carga62)
    // setCargaP63(res.data.carga63)
    // setCargaP64(res.data.carga64)
    // setCargaP65(res.data.carga65)
    // setCargaP66(res.data.carga66)
    // setCargaP67(res.data.carga67)
    // setCargaP68(res.data.carga68)
    // setCargaP69(res.data.carga69)
    // setCargaP610(res.data.carga610)
    // setCargaP611(res.data.carga611)
    // setCargaP612(res.data.carga612)
    // setCargaP613(res.data.carga613)
    // setCargaP614(res.data.carga614)
    // setCargaP615(res.data.carga615)
    // setPressaoP11(res.data.pressao11)
    // setPressaoP12(res.data.pressao12)
    // setPressaoP13(res.data.pressao13)
    // setPressaoP14(res.data.pressao14)
    // setPressaoP15(res.data.pressao15)
    // setPressaoP16(res.data.pressao16)
    // setPressaoP17(res.data.pressao17)
    // setPressaoP18(res.data.pressao18)
    // setPressaoP19(res.data.pressao19)
    // setPressaoP110(res.data.pressao110)
    // setPressaoP111(res.data.pressao111)
    // setPressaoP112(res.data.pressao112)
    // setPressaoP113(res.data.pressao113)
    // setPressaoP114(res.data.pressao114)
    // setPressaoP115(res.data.pressao115)
    // setPressaoP21(res.data.pressao21)
    // setPressaoP22(res.data.pressao22)
    // setPressaoP23(res.data.pressao23)
    // setPressaoP24(res.data.pressao24)
    // setPressaoP25(res.data.pressao25)
    // setPressaoP26(res.data.pressao26)
    // setPressaoP27(res.data.pressao27)
    // setPressaoP28(res.data.pressao28)
    // setPressaoP29(res.data.pressao29)
    // setPressaoP210(res.data.pressao210)
    // setPressaoP211(res.data.pressao211)
    // setPressaoP212(res.data.pressao212)
    // setPressaoP213(res.data.pressao213)
    // setPressaoP214(res.data.pressao214)
    // setPressaoP215(res.data.pressao215)
    // setPressaoP31(res.data.pressao31)
    // setPressaoP32(res.data.pressao32)
    // setPressaoP33(res.data.pressao33)
    // setPressaoP34(res.data.pressao34)
    // setPressaoP35(res.data.pressao35)
    // setPressaoP36(res.data.pressao36)
    // setPressaoP37(res.data.pressao37)
    // setPressaoP38(res.data.pressao38)
    // setPressaoP39(res.data.pressao39)
    // setPressaoP310(res.data.pressao310)
    // setPressaoP311(res.data.pressao311)
    // setPressaoP312(res.data.pressao312)
    // setPressaoP313(res.data.pressao313)
    // setPressaoP314(res.data.pressao314)
    // setPressaoP315(res.data.pressao315)
    // setPressaoP41(res.data.pressao41)
    // setPressaoP42(res.data.pressao42)
    // setPressaoP43(res.data.pressao43)
    // setPressaoP44(res.data.pressao44)
    // setPressaoP45(res.data.pressao45)
    // setPressaoP46(res.data.pressao46)
    // setPressaoP47(res.data.pressao47)
    // setPressaoP48(res.data.pressao48)
    // setPressaoP49(res.data.pressao49)
    // setPressaoP410(res.data.pressao410)
    // setPressaoP411(res.data.pressao411)
    // setPressaoP412(res.data.pressao412)
    // setPressaoP413(res.data.pressao413)
    // setPressaoP414(res.data.pressao414)
    // setPressaoP415(res.data.pressao415)
    // setPressaoP51(res.data.pressao51)
    // setPressaoP52(res.data.pressao52)
    // setPressaoP53(res.data.pressao53)
    // setPressaoP54(res.data.pressao54)
    // setPressaoP55(res.data.pressao55)
    // setPressaoP56(res.data.pressao56)
    // setPressaoP57(res.data.pressao57)
    // setPressaoP58(res.data.pressao58)
    // setPressaoP59(res.data.pressao59)
    // setPressaoP510(res.data.pressao510)
    // setPressaoP511(res.data.pressao511)
    // setPressaoP512(res.data.pressao512)
    // setPressaoP513(res.data.pressao513)
    // setPressaoP514(res.data.pressao514)
    // setPressaoP515(res.data.pressao515)
    // setPressaoP61(res.data.pressao61)
    // setPressaoP62(res.data.pressao62)
    // setPressaoP63(res.data.pressao63)
    // setPressaoP64(res.data.pressao64)
    // setPressaoP65(res.data.pressao65)
    // setPressaoP66(res.data.pressao66)
    // setPressaoP67(res.data.pressao67)
    // setPressaoP68(res.data.pressao68)
    // setPressaoP69(res.data.pressao69)
    // setPressaoP610(res.data.pressao610)
    // setPressaoP611(res.data.pressao611)
    // setPressaoP612(res.data.pressao612)
    // setPressaoP613(res.data.pressao613)
    // setPressaoP614(res.data.pressao614)
    // setPressaoP615(res.data.pressao615)



    // if (res.data.success === false) {
    //   falha();
    // } else {
      setAux1(true)
      setLoading(false)
    // }

  };

  async function add() {


    const obj = { amostra, penetracao1Mob, penetracao2Mob, penetracao3Mob, penetracao4Mob, penetracao5Mob, penetracao6Mob, penetracao7Mob, penetracao8Mob, penetracao9Mob, penetracao10Mob, penetracao11Mob, penetracao12Mob, penetracao13Mob, penetracao14Mob, penetracao15Mob, carga11, carga12, carga13, carga14, carga15, carga16, carga17, carga18, carga19, carga110, carga111, carga112, carga113, carga114, carga115, pressao11, pressao12, pressao13, pressao14, pressao15, pressao16, pressao17, pressao18, pressao19, pressao110, pressao111, pressao112, pressao113, pressao114, pressao115, carga21, carga22, carga23, carga24, carga25, carga26, carga27, carga28, carga29, carga210, carga211, carga212, carga213, carga214, carga215, pressao21, pressao22, pressao23, pressao24, pressao25, pressao26, pressao27, pressao28, pressao29, pressao210, pressao211, pressao212, pressao213, pressao214, pressao215, carga31, carga32, carga33, carga34, carga35, carga36, carga37, carga38, carga39, carga310, carga311, carga312, carga313, carga314, carga315, pressao31, pressao32, pressao33, pressao34, pressao35, pressao36, pressao37, pressao38, pressao39, pressao310, pressao311, pressao312, pressao313, pressao314, pressao315, carga41, carga42, carga43, carga44, carga45, carga46, carga47, carga48, carga49, carga410, carga411, carga412, carga413, carga414, carga415, pressao41, pressao42, pressao43, pressao44, pressao45, pressao46, pressao47, pressao48, pressao49, pressao410, pressao411, pressao412, pressao413, pressao414, pressao415, carga51, carga52, carga53, carga54, carga55, carga56, carga57, carga58, carga59, carga510, carga511, carga512, carga513, carga514, carga515, pressao51, pressao52, pressao53, pressao54, pressao55, pressao56, pressao57, pressao58, pressao59, pressao510, pressao511, pressao512, pressao513, pressao514, pressao515, carga61, carga62, carga63, carga64, carga65, carga66, carga67, carga68, carga69, carga610, carga611, carga612, carga613, carga614, carga615, pressao61, pressao62, pressao63, pressao64, pressao65, pressao66, pressao67, pressao68, pressao69, pressao610, pressao611, pressao612, pressao613, pressao614, pressao615 };

    if (amostra > 0) {
      const res = await axios.post(this.api + 'SalvarCBRPenetracao.php', obj);
      console.warn(this.api + 'SalvarCBRPenetracao.php', obj)
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
          "create table if not exists CBRPenetracao ( amostra text, penetracao11 text, penetracao12 text, penetracao13 text, penetracao14 text, penetracao15 text, penetracao16 text, penetracao17 text, penetracao18 text, penetracao19 text, penetracao110 text, penetracao111 text, penetracao112 text, penetracao113 text, penetracao114 text, penetracao115 text, carga11 text, carga12 text, carga13 text, carga14 text, carga15 text, carga16 text, carga17 text, carga18 text, carga19 text, carga110 text, carga111 text, carga112 text, carga113 text, carga114 text, carga115 text, pressao11 text, pressao12 text, pressao13 text, pressao14 text, pressao15 text, pressao16 text, pressao17 text, pressao18 text, pressao19 text, pressao110 text, pressao111 text, pressao112 text, pressao113 text, pressao114 text, pressao115 text,  carga21 text, carga22 text, carga23 text, carga24 text, carga25 text, carga26 text, carga27 text, carga28 text, carga29 text, carga210 text, carga211 text, carga212 text, carga213 text, carga214 text, carga215 text, pressao21 text, pressao22 text, pressao23 text, pressao24 text, pressao25 text, pressao26 text, pressao27 text, pressao28 text, pressao29 text, pressao210 text, pressao211 text, pressao212 text, pressao213 text, pressao214 text, pressao215 text, carga31 text, carga32 text, carga33 text, carga34 text, carga35 text, carga36 text, carga37 text, carga38 text, carga39 text, carga310 text, carga311 text, carga312 text, carga313 text, carga314 text, carga315 text, pressao31 text, pressao32 text, pressao33 text, pressao34 text, pressao35 text, pressao36 text, pressao37 text, pressao38 text, pressao39 text, pressao310 text, pressao311 text, pressao312 text, pressao313 text, pressao314 text, pressao315 text,  carga41 text, carga42 text, carga43 text, carga44 text, carga45 text, carga46 text, carga47 text, carga48 text, carga49 text, carga410 text, carga411 text, carga412 text, carga413 text, carga414 text, carga415 text, pressao41 text, pressao42 text, pressao43 text, pressao44 text, pressao45 text, pressao46 text, pressao47 text, pressao48 text, pressao49 text, pressao410 text, pressao411 text, pressao412 text, pressao413 text, pressao414 text, pressao415 text, carga51 text, carga52 text, carga53 text, carga54 text, carga55 text, carga56 text, carga57 text, carga58 text, carga59 text, carga510 text, carga511 text, carga512 text, carga513 text, carga514 text, carga515 text, pressao51 text, pressao52 text, pressao53 text, pressao54 text, pressao55 text, pressao56 text, pressao57 text, pressao58 text, pressao59 text, pressao510 text, pressao511 text, pressao512 text, pressao513 text, pressao514 text, pressao515 text, carga61 text, carga62 text, carga63 text, carga64 text, carga65 text, carga66 text, carga67 text, carga68 text, carga69 text, carga610 text, carga611 text, carga612 text, carga613 text, carga614 text, carga615 text, pressao61 text, pressao62 text, pressao63 text, pressao64 text, pressao65 text, pressao66 text, pressao67 text, pressao68 text, pressao69 text, pressao610 text, pressao611 text, pressao612 text, pressao613 text, pressao614 text, pressao615 text);"
        );

        console.log("Banco de dados iniciado")
      });
  }
  const SalvarBanco = () => {

    db.transaction(
      (tx) => {
        tx.executeSql(`insert into CBRPenetracao ( amostra , penetracao11 text, penetracao12 text, penetracao13 text, penetracao14 text, penetracao15 text, penetracao16 text, penetracao17 text, penetracao18 text, penetracao19 text, penetracao110 text, penetracao111 text, penetracao112 text, penetracao113 text, penetracao114 text, penetracao115 text, carga11 text, carga12 text, carga13 text, carga14 text, carga15 text, carga16 text, carga17 text, carga18 text, carga19 text, carga110 text, carga111 text, carga112 text, carga113 text, carga114 text, carga115 text, pressao11 text, pressao12 text, pressao13 text, pressao14 text, pressao15 text, pressao16 text, pressao17 text, pressao18 text, pressao19 text, pressao110 text, pressao111 text, pressao112 text, pressao113 text, pressao114 text, pressao115 text,  carga21 text, carga22 text, carga23 text, carga24 text, carga25 text, carga26 text, carga27 text, carga28 text, carga29 text, carga210 text, carga211 text, carga212 text, carga213 text, carga214 text, carga215 text, pressao21 text, pressao22 text, pressao23 text, pressao24 text, pressao25 text, pressao26 text, pressao27 text, pressao28 text, pressao29 text, pressao210 text, pressao211 text, pressao212 text, pressao213 text, pressao214 text, pressao215 text,  carga31 text, carga32 text, carga33 text, carga34 text, carga35 text, carga36 text, carga37 text, carga38 text, carga39 text, carga310 text, carga311 text, carga312 text, carga313 text, carga314 text, carga315 text, pressao31 text, pressao32 text, pressao33 text, pressao34 text, pressao35 text, pressao36 text, pressao37 text, pressao38 text, pressao39 text, pressao310 text, pressao311 text, pressao312 text, pressao313 text, pressao314 text, pressao315 text,  carga41 text, carga42 text, carga43 text, carga44 text, carga45 text, carga46 text, carga47 text, carga48 text, carga49 text, carga410 text, carga411 text, carga412 text, carga413 text, carga414 text, carga415 text, pressao41 text, pressao42 text, pressao43 text, pressao44 text, pressao45 text, pressao46 text, pressao47 text, pressao48 text, pressao49 text, pressao410 text, pressao411 text, pressao412 text, pressao413 text, pressao414 text, pressao415 text, carga51 text, carga52 text, carga53 text, carga54 text, carga55 text, carga56 text, carga57 text, carga58 text, carga59 text, carga510 text, carga511 text, carga512 text, carga513 text, carga514 text, carga515 text, pressao51 text, pressao52 text, pressao53 text, pressao54 text, pressao55 text, pressao56 text, pressao57 text, pressao58 text, pressao59 text, pressao510 text, pressao511 text, pressao512 text, pressao513 text, pressao514 text, pressao515 text, carga61 text, carga62 text, carga63 text, carga64 text, carga65 text, carga66 text, carga67 text, carga68 text, carga69 text, carga610 text, carga611 text, carga612 text, carga613 text, carga614 text, carga615 text, pressao61 text, pressao62 text, pressao63 text, pressao64 text, pressao65 text, pressao66 text, pressao67 text, pressao68 text, pressao69 text, pressao610 text, pressao611 text, pressao612 text, pressao613 text, pressao614 text, pressao615 text ) values ('${amostra}', '${penetracao1Mob}', '${penetracao2Mob}', '${penetracao3Mob}', '${penetracao4Mob}', '${penetracao5Mob}', '${penetracao6Mob}', '${penetracao7Mob}', '${penetracao8Mob}', '${penetracao9Mob}', '${penetracao10Mob}', '${penetracao11Mob}', '${penetracao12Mob}', '${penetracao13Mob}', '${penetracao14Mob}', '${penetracao15Mob}', '${carga11}', '${carga12}', '${carga13}', '${carga14}', '${carga15}', '${carga16}', '${carga17}', '${carga18}', '${carga19}', '${carga110}', '${carga111}', '${carga112}', '${carga113}', '${carga114}', '${carga115}', '${pressao11}', '${pressao12}', '${pressao13}', '${pressao14}', '${pressao15}', '${pressao16}', '${pressao17}', '${pressao18}', '${pressao19}', '${pressao110}', '${pressao111}', '${pressao112}', '${pressao113}', '${pressao114}', '${pressao115}', '${carga21}', '${carga22}', '${carga23}', '${carga24}', '${carga25}', '${carga26}', '${carga27}', '${carga28}', '${carga29}', '${carga210}', '${carga211}', '${carga212}', '${carga213}', '${carga214}', '${carga215}', '${pressao21}', '${pressao22}', '${pressao23}', '${pressao24}', '${pressao25}', '${pressao26}', '${pressao27}', '${pressao28}', '${pressao29}', '${pressao210}', '${pressao211}', '${pressao212}', '${pressao213}', '${pressao214}', '${pressao215}', '${carga31}', '${carga32}', '${carga33}', '${carga34}', '${carga35}', '${carga36}', '${carga37}', '${carga38}', '${carga39}', '${carga310}', '${carga311}', '${carga312}', '${carga313}', '${carga314}', '${carga315}', '${pressao31}', '${pressao32}', '${pressao33}', '${pressao34}', '${pressao35}', '${pressao36}', '${pressao37}', '${pressao38}', '${pressao39}', '${pressao310}', '${pressao311}', '${pressao312}', '${pressao313}', '${pressao314}', '${pressao315}',  '${carga41}', '${carga42}', '${carga43}', '${carga44}', '${carga45}', '${carga46}', '${carga47}', '${carga48}', '${carga49}', '${carga410}', '${carga411}', '${carga412}', '${carga413}', '${carga414}', '${carga415}', '${pressao41}', '${pressao42}', '${pressao43}', '${pressao44}', '${pressao45}', '${pressao46}', '${pressao47}', '${pressao48}', '${pressao49}', '${pressao410}', '${pressao411}', '${pressao412}', '${pressao413}', '${pressao414}', '${pressao415}',  '${carga51}', '${carga52}', '${carga53}', '${carga54}', '${carga55}', '${carga56}', '${carga57}', '${carga58}', '${carga59}', '${carga510}', '${carga511}', '${carga512}', '${carga513}', '${carga514}', '${carga515}', '${pressao51}', '${pressao52}', '${pressao53}', '${pressao54}', '${pressao55}', '${pressao56}', '${pressao57}', '${pressao58}', '${pressao59}', '${pressao510}', '${pressao511}', '${pressao512}', '${pressao513}', '${pressao514}', '${pressao515}',  '${carga61}', '${carga62}', '${carga63}', '${carga64}', '${carga65}', '${carga66}', '${carga67}', '${carga68}', '${carga69}', '${carga610}', '${carga611}', '${carga612}', '${carga613}', '${carga614}', '${carga615}', '${pressao61}', '${pressao62}', '${pressao63}', '${pressao64}', '${pressao65}', '${pressao66}', '${pressao67}', '${pressao68}', '${pressao69}', '${pressao610}', '${pressao611}', '${pressao612}', '${pressao613}', '${pressao614}', '${pressao615}'  )`, () => { }, (error) => { console.log(error) });

      },

      mensagemsalvaroffline()
    );
  };
  const [flatListItems, setFlatListItems] = useState([]);
  const BuscaBanco = () => {
    setLoading(true)
    db.transaction((tx) => {
      try {
        tx.executeSql('SELECT * FROM CBRPenetracao WHERE amostra = ?', [amostra],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var userpenetracao11 = results.rows.item(0).penetracao11
              var userpenetracao12 = results.rows.item(0).penetracao12
              var userpenetracao13 = results.rows.item(0).penetracao13
              var userpenetracao14 = results.rows.item(0).penetracao14
              var userpenetracao15 = results.rows.item(0).penetracao15
              var userpenetracao16 = results.rows.item(0).penetracao16
              var userpenetracao17 = results.rows.item(0).penetracao17
              var userpenetracao18 = results.rows.item(0).penetracao18
              var userpenetracao19 = results.rows.item(0).penetracao19
              var userpenetracao110 = results.rows.item(0).penetracao110
              var userpenetracao111 = results.rows.item(0).penetracao111
              var userpenetracao112 = results.rows.item(0).penetracao112
              var userpenetracao113 = results.rows.item(0).penetracao113
              var userpenetracao114 = results.rows.item(0).penetracao114
              var userpenetracao115 = results.rows.item(0).penetracao115
              var usercarga11 = results.rows.item(0).carga11
              var usercarga12 = results.rows.item(0).carga12
              var usercarga13 = results.rows.item(0).carga13
              var usercarga14 = results.rows.item(0).carga14
              var usercarga15 = results.rows.item(0).carga15
              var usercarga16 = results.rows.item(0).carga16
              var usercarga17 = results.rows.item(0).carga17
              var usercarga18 = results.rows.item(0).carga18
              var usercarga19 = results.rows.item(0).carga19
              var usercarga110 = results.rows.item(0).carga110
              var usercarga111 = results.rows.item(0).carga111
              var usercarga112 = results.rows.item(0).carga112
              var usercarga113 = results.rows.item(0).carga113
              var usercarga114 = results.rows.item(0).carga114
              var usercarga115 = results.rows.item(0).carga115
              var usercarga21 = results.rows.item(0).carga21
              var usercarga22 = results.rows.item(0).carga22
              var usercarga23 = results.rows.item(0).carga23
              var usercarga24 = results.rows.item(0).carga24
              var usercarga25 = results.rows.item(0).carga25
              var usercarga26 = results.rows.item(0).carga26
              var usercarga27 = results.rows.item(0).carga27
              var usercarga28 = results.rows.item(0).carga28
              var usercarga29 = results.rows.item(0).carga29
              var usercarga210 = results.rows.item(0).carga210
              var usercarga211 = results.rows.item(0).carga211
              var usercarga212 = results.rows.item(0).carga212
              var usercarga213 = results.rows.item(0).carga213
              var usercarga214 = results.rows.item(0).carga214
              var usercarga215 = results.rows.item(0).carga215
              var usercarga31 = results.rows.item(0).carga31
              var usercarga32 = results.rows.item(0).carga32
              var usercarga33 = results.rows.item(0).carga33
              var usercarga34 = results.rows.item(0).carga34
              var usercarga35 = results.rows.item(0).carga35
              var usercarga36 = results.rows.item(0).carga36
              var usercarga37 = results.rows.item(0).carga37
              var usercarga38 = results.rows.item(0).carga38
              var usercarga39 = results.rows.item(0).carga39
              var usercarga310 = results.rows.item(0).carga310
              var usercarga311 = results.rows.item(0).carga311
              var usercarga312 = results.rows.item(0).carga312
              var usercarga313 = results.rows.item(0).carga313
              var usercarga314 = results.rows.item(0).carga314
              var usercarga315 = results.rows.item(0).carga315
              var usercarga41 = results.rows.item(0).carga41
              var usercarga42 = results.rows.item(0).carga42
              var usercarga43 = results.rows.item(0).carga43
              var usercarga44 = results.rows.item(0).carga44
              var usercarga45 = results.rows.item(0).carga45
              var usercarga46 = results.rows.item(0).carga46
              var usercarga47 = results.rows.item(0).carga47
              var usercarga48 = results.rows.item(0).carga48
              var usercarga49 = results.rows.item(0).carga49
              var usercarga410 = results.rows.item(0).carga410
              var usercarga411 = results.rows.item(0).carga411
              var usercarga412 = results.rows.item(0).carga412
              var usercarga413 = results.rows.item(0).carga413
              var usercarga414 = results.rows.item(0).carga414
              var usercarga415 = results.rows.item(0).carga415
              var usercarga51 = results.rows.item(0).carga51
              var usercarga52 = results.rows.item(0).carga52
              var usercarga53 = results.rows.item(0).carga53
              var usercarga54 = results.rows.item(0).carga54
              var usercarga55 = results.rows.item(0).carga55
              var usercarga56 = results.rows.item(0).carga56
              var usercarga57 = results.rows.item(0).carga57
              var usercarga58 = results.rows.item(0).carga58
              var usercarga59 = results.rows.item(0).carga59
              var usercarga510 = results.rows.item(0).carga510
              var usercarga511 = results.rows.item(0).carga511
              var usercarga512 = results.rows.item(0).carga512
              var usercarga513 = results.rows.item(0).carga513
              var usercarga514 = results.rows.item(0).carga514
              var usercarga515 = results.rows.item(0).carga515
              var usercarga61 = results.rows.item(0).carga61
              var usercarga62 = results.rows.item(0).carga62
              var usercarga63 = results.rows.item(0).carga63
              var usercarga64 = results.rows.item(0).carga64
              var usercarga65 = results.rows.item(0).carga65
              var usercarga66 = results.rows.item(0).carga66
              var usercarga67 = results.rows.item(0).carga67
              var usercarga68 = results.rows.item(0).carga68
              var usercarga69 = results.rows.item(0).carga69
              var usercarga610 = results.rows.item(0).carga610
              var usercarga611 = results.rows.item(0).carga611
              var usercarga612 = results.rows.item(0).carga612
              var usercarga613 = results.rows.item(0).carga613
              var usercarga614 = results.rows.item(0).carga614
              var usercarga615 = results.rows.item(0).carga615
              var userpressao11 = results.rows.item(0).pressao11
              var userpressao12 = results.rows.item(0).pressao12
              var userpressao13 = results.rows.item(0).pressao13
              var userpressao14 = results.rows.item(0).pressao14
              var userpressao15 = results.rows.item(0).pressao15
              var userpressao16 = results.rows.item(0).pressao16
              var userpressao17 = results.rows.item(0).pressao17
              var userpressao18 = results.rows.item(0).pressao18
              var userpressao19 = results.rows.item(0).pressao19
              var userpressao110 = results.rows.item(0).pressao110
              var userpressao111 = results.rows.item(0).pressao111
              var userpressao112 = results.rows.item(0).pressao112
              var userpressao113 = results.rows.item(0).pressao113
              var userpressao114 = results.rows.item(0).pressao114
              var userpressao115 = results.rows.item(0).pressao115
              var userpressao21 = results.rows.item(0).pressao21
              var userpressao22 = results.rows.item(0).pressao22
              var userpressao23 = results.rows.item(0).pressao23
              var userpressao24 = results.rows.item(0).pressao24
              var userpressao25 = results.rows.item(0).pressao25
              var userpressao26 = results.rows.item(0).pressao26
              var userpressao27 = results.rows.item(0).pressao27
              var userpressao28 = results.rows.item(0).pressao28
              var userpressao29 = results.rows.item(0).pressao29
              var userpressao210 = results.rows.item(0).pressao210
              var userpressao211 = results.rows.item(0).pressao211
              var userpressao212 = results.rows.item(0).pressao212
              var userpressao213 = results.rows.item(0).pressao213
              var userpressao214 = results.rows.item(0).pressao214
              var userpressao215 = results.rows.item(0).pressao215
              var userpressao31 = results.rows.item(0).pressao31
              var userpressao32 = results.rows.item(0).pressao32
              var userpressao33 = results.rows.item(0).pressao33
              var userpressao34 = results.rows.item(0).pressao34
              var userpressao35 = results.rows.item(0).pressao35
              var userpressao36 = results.rows.item(0).pressao36
              var userpressao37 = results.rows.item(0).pressao37
              var userpressao38 = results.rows.item(0).pressao38
              var userpressao39 = results.rows.item(0).pressao39
              var userpressao310 = results.rows.item(0).pressao310
              var userpressao311 = results.rows.item(0).pressao311
              var userpressao312 = results.rows.item(0).pressao312
              var userpressao313 = results.rows.item(0).pressao313
              var userpressao314 = results.rows.item(0).pressao314
              var userpressao315 = results.rows.item(0).pressao315
              var userpressao41 = results.rows.item(0).pressao41
              var userpressao42 = results.rows.item(0).pressao42
              var userpressao43 = results.rows.item(0).pressao43
              var userpressao44 = results.rows.item(0).pressao44
              var userpressao45 = results.rows.item(0).pressao45
              var userpressao46 = results.rows.item(0).pressao46
              var userpressao47 = results.rows.item(0).pressao47
              var userpressao48 = results.rows.item(0).pressao48
              var userpressao49 = results.rows.item(0).pressao49
              var userpressao410 = results.rows.item(0).pressao410
              var userpressao411 = results.rows.item(0).pressao411
              var userpressao412 = results.rows.item(0).pressao412
              var userpressao413 = results.rows.item(0).pressao413
              var userpressao414 = results.rows.item(0).pressao414
              var userpressao415 = results.rows.item(0).pressao415
              var userpressao51 = results.rows.item(0).pressao51
              var userpressao52 = results.rows.item(0).pressao52
              var userpressao53 = results.rows.item(0).pressao53
              var userpressao54 = results.rows.item(0).pressao54
              var userpressao55 = results.rows.item(0).pressao55
              var userpressao56 = results.rows.item(0).pressao56
              var userpressao57 = results.rows.item(0).pressao57
              var userpressao58 = results.rows.item(0).pressao58
              var userpressao59 = results.rows.item(0).pressao59
              var userpressao510 = results.rows.item(0).pressao510
              var userpressao511 = results.rows.item(0).pressao511
              var userpressao512 = results.rows.item(0).pressao512
              var userpressao513 = results.rows.item(0).pressao513
              var userpressao514 = results.rows.item(0).pressao514
              var userpressao515 = results.rows.item(0).pressao515
              var userpressao61 = results.rows.item(0).pressao61
              var userpressao62 = results.rows.item(0).pressao62
              var userpressao63 = results.rows.item(0).pressao63
              var userpressao64 = results.rows.item(0).pressao64
              var userpressao65 = results.rows.item(0).pressao65
              var userpressao66 = results.rows.item(0).pressao66
              var userpressao67 = results.rows.item(0).pressao67
              var userpressao68 = results.rows.item(0).pressao68
              var userpressao69 = results.rows.item(0).pressao69
              var userpressao610 = results.rows.item(0).pressao610
              var userpressao611 = results.rows.item(0).pressao611
              var userpressao612 = results.rows.item(0).pressao612
              var userpressao613 = results.rows.item(0).pressao613
              var userpressao614 = results.rows.item(0).pressao614
              var userpressao615 = results.rows.item(0).pressao615

              setPenetracaoP1Mob(userpenetracao11)
              setPenetracaoP2Mob(userpenetracao12)
              setPenetracaoP3Mob(userpenetracao13)
              setPenetracaoP4Mob(userpenetracao14)
              setPenetracaoP5Mob(userpenetracao15)
              setPenetracaoP6Mob(userpenetracao16)
              setPenetracaoP7Mob(userpenetracao17)
              setPenetracaoP8Mob(userpenetracao18)
              setPenetracaoP9Mob(userpenetracao19)
              setPenetracaoP10Mob(userpenetracao110)
              setPenetracaoP11Mob(userpenetracao111)
              setPenetracaoP12Mob(userpenetracao112)
              setPenetracaoP13Mob(userpenetracao113)
              setPenetracaoP14Mob(userpenetracao114)
              setPenetracaoP15Mob(userpenetracao115)
              setCargaP11(usercarga11)
              setCargaP12(usercarga12)
              setCargaP13(usercarga13)
              setCargaP14(usercarga14)
              setCargaP15(usercarga15)
              setCargaP16(usercarga16)
              setCargaP17(usercarga17)
              setCargaP18(usercarga18)
              setCargaP19(usercarga19)
              setCargaP110(usercarga110)
              setCargaP111(usercarga111)
              setCargaP112(usercarga112)
              setCargaP113(usercarga113)
              setCargaP114(usercarga114)
              setCargaP115(usercarga115)
              setCargaP21(usercarga21)
              setCargaP22(usercarga22)
              setCargaP23(usercarga23)
              setCargaP24(usercarga24)
              setCargaP25(usercarga25)
              setCargaP26(usercarga26)
              setCargaP27(usercarga27)
              setCargaP28(usercarga28)
              setCargaP29(usercarga29)
              setCargaP210(usercarga210)
              setCargaP211(usercarga211)
              setCargaP212(usercarga212)
              setCargaP213(usercarga213)
              setCargaP214(usercarga214)
              setCargaP215(usercarga215)
              setCargaP31(usercarga31)
              setCargaP32(usercarga32)
              setCargaP33(usercarga33)
              setCargaP34(usercarga34)
              setCargaP35(usercarga35)
              setCargaP36(usercarga36)
              setCargaP37(usercarga37)
              setCargaP38(usercarga38)
              setCargaP39(usercarga39)
              setCargaP310(usercarga310)
              setCargaP311(usercarga311)
              setCargaP312(usercarga312)
              setCargaP313(usercarga313)
              setCargaP314(usercarga314)
              setCargaP315(usercarga315)
              setCargaP41(usercarga41)
              setCargaP42(usercarga42)
              setCargaP43(usercarga43)
              setCargaP44(usercarga44)
              setCargaP45(usercarga45)
              setCargaP46(usercarga46)
              setCargaP47(usercarga47)
              setCargaP48(usercarga48)
              setCargaP49(usercarga49)
              setCargaP410(usercarga410)
              setCargaP411(usercarga411)
              setCargaP412(usercarga412)
              setCargaP413(usercarga413)
              setCargaP414(usercarga414)
              setCargaP415(usercarga415)
              setCargaP51(usercarga51)
              setCargaP52(usercarga52)
              setCargaP53(usercarga53)
              setCargaP54(usercarga54)
              setCargaP55(usercarga55)
              setCargaP56(usercarga56)
              setCargaP57(usercarga57)
              setCargaP58(usercarga58)
              setCargaP59(usercarga59)
              setCargaP510(usercarga510)
              setCargaP511(usercarga511)
              setCargaP512(usercarga512)
              setCargaP513(usercarga513)
              setCargaP514(usercarga514)
              setCargaP515(usercarga515)
              setCargaP61(usercarga61)
              setCargaP62(usercarga62)
              setCargaP63(usercarga63)
              setCargaP64(usercarga64)
              setCargaP65(usercarga65)
              setCargaP66(usercarga66)
              setCargaP67(usercarga67)
              setCargaP68(usercarga68)
              setCargaP69(usercarga69)
              setCargaP610(usercarga610)
              setCargaP611(usercarga611)
              setCargaP612(usercarga612)
              setCargaP613(usercarga613)
              setCargaP614(usercarga614)
              setCargaP615(usercarga615)
              setPressaoP11(userpressao11)
              setPressaoP12(userpressao12)
              setPressaoP13(userpressao13)
              setPressaoP14(userpressao14)
              setPressaoP15(userpressao15)
              setPressaoP16(userpressao16)
              setPressaoP17(userpressao17)
              setPressaoP18(userpressao18)
              setPressaoP19(userpressao19)
              setPressaoP110(userpressao110)
              setPressaoP111(userpressao111)
              setPressaoP112(userpressao112)
              setPressaoP113(userpressao113)
              setPressaoP114(userpressao114)
              setPressaoP115(userpressao115)
              setPressaoP21(userpressao21)
              setPressaoP22(userpressao22)
              setPressaoP23(userpressao23)
              setPressaoP24(userpressao24)
              setPressaoP25(userpressao25)
              setPressaoP26(userpressao26)
              setPressaoP27(userpressao27)
              setPressaoP28(userpressao28)
              setPressaoP29(userpressao29)
              setPressaoP210(userpressao210)
              setPressaoP211(userpressao211)
              setPressaoP212(userpressao212)
              setPressaoP213(userpressao213)
              setPressaoP214(userpressao214)
              setPressaoP215(userpressao215)
              setPressaoP31(userpressao31)
              setPressaoP32(userpressao32)
              setPressaoP33(userpressao33)
              setPressaoP34(userpressao34)
              setPressaoP35(userpressao35)
              setPressaoP36(userpressao36)
              setPressaoP37(userpressao37)
              setPressaoP38(userpressao38)
              setPressaoP39(userpressao39)
              setPressaoP310(userpressao310)
              setPressaoP311(userpressao311)
              setPressaoP312(userpressao312)
              setPressaoP313(userpressao313)
              setPressaoP314(userpressao314)
              setPressaoP315(userpressao315)
              setPressaoP41(userpressao41)
              setPressaoP42(userpressao42)
              setPressaoP43(userpressao43)
              setPressaoP44(userpressao44)
              setPressaoP45(userpressao45)
              setPressaoP46(userpressao46)
              setPressaoP47(userpressao47)
              setPressaoP48(userpressao48)
              setPressaoP49(userpressao49)
              setPressaoP410(userpressao410)
              setPressaoP411(userpressao411)
              setPressaoP412(userpressao412)
              setPressaoP413(userpressao413)
              setPressaoP414(userpressao414)
              setPressaoP415(userpressao415)
              setPressaoP51(userpressao51)
              setPressaoP52(userpressao52)
              setPressaoP53(userpressao53)
              setPressaoP54(userpressao54)
              setPressaoP55(userpressao55)
              setPressaoP56(userpressao56)
              setPressaoP57(userpressao57)
              setPressaoP58(userpressao58)
              setPressaoP59(userpressao59)
              setPressaoP510(userpressao510)
              setPressaoP511(userpressao511)
              setPressaoP512(userpressao512)
              setPressaoP513(userpressao513)
              setPressaoP514(userpressao514)
              setPressaoP515(userpressao515)
              setPressaoP61(userpressao61)
              setPressaoP62(userpressao62)
              setPressaoP63(userpressao63)
              setPressaoP64(userpressao64)
              setPressaoP65(userpressao65)
              setPressaoP66(userpressao66)
              setPressaoP67(userpressao67)
              setPressaoP68(userpressao68)
              setPressaoP69(userpressao69)
              setPressaoP610(userpressao610)
              setPressaoP611(userpressao611)
              setPressaoP612(userpressao612)
              setPressaoP613(userpressao613)
              setPressaoP614(userpressao614)
              setPressaoP615(userpressao615)











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


      setCargaP11(carga1Mob)
      setCargaP12(carga2Mob)
      setCargaP13(carga3Mob)
      setCargaP14(carga4Mob)
      setCargaP15(carga5Mob)
      setCargaP16(carga6Mob)
      setCargaP17(carga7Mob)
      setCargaP18(carga8Mob)
      setCargaP19(carga9Mob)
      setCargaP110(carga10Mob)
      setCargaP111(carga11Mob)
      setCargaP112(carga12Mob)
      setCargaP113(carga13Mob)
      setCargaP114(carga14Mob)
      setCargaP115(carga15Mob)
      setPressaoP11(pressao1Mob)
      setPressaoP12(pressao2Mob)
      setPressaoP13(pressao3Mob)
      setPressaoP14(pressao4Mob)
      setPressaoP15(pressao5Mob)
      setPressaoP16(pressao6Mob)
      setPressaoP17(pressao7Mob)
      setPressaoP18(pressao8Mob)
      setPressaoP19(pressao9Mob)
      setPressaoP110(pressao10Mob)
      setPressaoP111(pressao11Mob)
      setPressaoP112(pressao12Mob)
      setPressaoP113(pressao13Mob)
      setPressaoP114(pressao14Mob)
      setPressaoP115(pressao15Mob)

    }
    if (ensaio == "P2") {

      setCargaP21(carga1Mob)
      setCargaP22(carga2Mob)
      setCargaP23(carga3Mob)
      setCargaP24(carga4Mob)
      setCargaP25(carga5Mob)
      setCargaP26(carga6Mob)
      setCargaP27(carga7Mob)
      setCargaP28(carga8Mob)
      setCargaP29(carga9Mob)
      setCargaP210(carga10Mob)
      setCargaP211(carga11Mob)
      setCargaP212(carga12Mob)
      setCargaP213(carga13Mob)
      setCargaP214(carga14Mob)
      setCargaP215(carga15Mob)
      setPressaoP21(pressao1Mob)
      setPressaoP22(pressao2Mob)
      setPressaoP23(pressao3Mob)
      setPressaoP24(pressao4Mob)
      setPressaoP25(pressao5Mob)
      setPressaoP26(pressao6Mob)
      setPressaoP27(pressao7Mob)
      setPressaoP28(pressao8Mob)
      setPressaoP29(pressao9Mob)
      setPressaoP210(pressao10Mob)
      setPressaoP211(pressao11Mob)
      setPressaoP212(pressao12Mob)
      setPressaoP213(pressao13Mob)
      setPressaoP214(pressao14Mob)
      setPressaoP215(pressao15Mob)
    }
    if (ensaio == "P3") {

      setCargaP31(carga1Mob)
      setCargaP32(carga2Mob)
      setCargaP33(carga3Mob)
      setCargaP34(carga4Mob)
      setCargaP35(carga5Mob)
      setCargaP36(carga6Mob)
      setCargaP37(carga7Mob)
      setCargaP38(carga8Mob)
      setCargaP39(carga9Mob)
      setCargaP310(carga10Mob)
      setCargaP311(carga11Mob)
      setCargaP312(carga12Mob)
      setCargaP313(carga13Mob)
      setCargaP314(carga14Mob)
      setCargaP315(carga15Mob)
      setPressaoP31(pressao1Mob)
      setPressaoP32(pressao2Mob)
      setPressaoP33(pressao3Mob)
      setPressaoP34(pressao4Mob)
      setPressaoP35(pressao5Mob)
      setPressaoP36(pressao6Mob)
      setPressaoP37(pressao7Mob)
      setPressaoP38(pressao8Mob)
      setPressaoP39(pressao9Mob)
      setPressaoP310(pressao10Mob)
      setPressaoP311(pressao11Mob)
      setPressaoP312(pressao12Mob)
      setPressaoP313(pressao13Mob)
      setPressaoP314(pressao14Mob)
      setPressaoP315(pressao15Mob)
    }
    if (ensaio == "P4") {

      setCargaP41(carga1Mob)
      setCargaP42(carga2Mob)
      setCargaP43(carga3Mob)
      setCargaP44(carga4Mob)
      setCargaP45(carga5Mob)
      setCargaP46(carga6Mob)
      setCargaP47(carga7Mob)
      setCargaP48(carga8Mob)
      setCargaP49(carga9Mob)
      setCargaP410(carga10Mob)
      setCargaP411(carga11Mob)
      setCargaP412(carga12Mob)
      setCargaP413(carga13Mob)
      setCargaP414(carga14Mob)
      setCargaP415(carga15Mob)
      setPressaoP41(pressao1Mob)
      setPressaoP42(pressao2Mob)
      setPressaoP43(pressao3Mob)
      setPressaoP44(pressao4Mob)
      setPressaoP45(pressao5Mob)
      setPressaoP46(pressao6Mob)
      setPressaoP47(pressao7Mob)
      setPressaoP48(pressao8Mob)
      setPressaoP49(pressao9Mob)
      setPressaoP410(pressao10Mob)
      setPressaoP411(pressao11Mob)
      setPressaoP412(pressao12Mob)
      setPressaoP413(pressao13Mob)
      setPressaoP414(pressao14Mob)
      setPressaoP415(pressao15Mob)

    }
    if (ensaio == "P5") {


      setCargaP51(carga1Mob)
      setCargaP52(carga2Mob)
      setCargaP53(carga3Mob)
      setCargaP54(carga4Mob)
      setCargaP55(carga5Mob)
      setCargaP56(carga6Mob)
      setCargaP57(carga7Mob)
      setCargaP58(carga8Mob)
      setCargaP59(carga9Mob)
      setCargaP510(carga10Mob)
      setCargaP511(carga11Mob)
      setCargaP512(carga12Mob)
      setCargaP513(carga13Mob)
      setCargaP514(carga14Mob)
      setCargaP515(carga15Mob)
      setPressaoP51(pressao1Mob)
      setPressaoP52(pressao2Mob)
      setPressaoP53(pressao3Mob)
      setPressaoP54(pressao4Mob)
      setPressaoP55(pressao5Mob)
      setPressaoP56(pressao6Mob)
      setPressaoP57(pressao7Mob)
      setPressaoP58(pressao8Mob)
      setPressaoP59(pressao9Mob)
      setPressaoP510(pressao10Mob)
      setPressaoP511(pressao11Mob)
      setPressaoP512(pressao12Mob)
      setPressaoP513(pressao13Mob)
      setPressaoP514(pressao14Mob)
      setPressaoP515(pressao15Mob)
    }
    if (ensaio == "P6") {

      setCargaP61(carga1Mob)
      setCargaP62(carga2Mob)
      setCargaP63(carga3Mob)
      setCargaP64(carga4Mob)
      setCargaP65(carga5Mob)
      setCargaP66(carga6Mob)
      setCargaP67(carga7Mob)
      setCargaP68(carga8Mob)
      setCargaP69(carga9Mob)
      setCargaP610(carga10Mob)
      setCargaP611(carga11Mob)
      setCargaP612(carga12Mob)
      setCargaP613(carga13Mob)
      setCargaP614(carga14Mob)
      setCargaP615(carga15Mob)
      setPressaoP61(pressao1Mob)
      setPressaoP62(pressao2Mob)
      setPressaoP63(pressao3Mob)
      setPressaoP64(pressao4Mob)
      setPressaoP65(pressao5Mob)
      setPressaoP66(pressao6Mob)
      setPressaoP67(pressao7Mob)
      setPressaoP68(pressao8Mob)
      setPressaoP69(pressao9Mob)
      setPressaoP610(pressao10Mob)
      setPressaoP611(pressao11Mob)
      setPressaoP612(pressao12Mob)
      setPressaoP613(pressao13Mob)
      setPressaoP614(pressao14Mob)
      setPressaoP615(pressao15Mob)

    }
    mensagemsalvar();
  }
  function Save1() {
    if (ensaio == "P1") {


      setCargaP11(carga1Mob)
      setCargaP12(carga2Mob)
      setCargaP13(carga3Mob)
      setCargaP14(carga4Mob)
      setCargaP15(carga5Mob)
      setCargaP16(carga6Mob)
      setCargaP17(carga7Mob)
      setCargaP18(carga8Mob)
      setCargaP19(carga9Mob)
      setCargaP110(carga10Mob)
      setCargaP111(carga11Mob)
      setCargaP112(carga12Mob)
      setCargaP113(carga13Mob)
      setCargaP114(carga14Mob)
      setCargaP115(carga15Mob)
      setPressaoP11(pressao1Mob)
      setPressaoP12(pressao2Mob)
      setPressaoP13(pressao3Mob)
      setPressaoP14(pressao4Mob)
      setPressaoP15(pressao5Mob)
      setPressaoP16(pressao6Mob)
      setPressaoP17(pressao7Mob)
      setPressaoP18(pressao8Mob)
      setPressaoP19(pressao9Mob)
      setPressaoP110(pressao10Mob)
      setPressaoP111(pressao11Mob)
      setPressaoP112(pressao12Mob)
      setPressaoP113(pressao13Mob)
      setPressaoP114(pressao14Mob)
      setPressaoP115(pressao15Mob)

    }
    if (ensaio == "P2") {

      setCargaP21(carga1Mob)
      setCargaP22(carga2Mob)
      setCargaP23(carga3Mob)
      setCargaP24(carga4Mob)
      setCargaP25(carga5Mob)
      setCargaP26(carga6Mob)
      setCargaP27(carga7Mob)
      setCargaP28(carga8Mob)
      setCargaP29(carga9Mob)
      setCargaP210(carga10Mob)
      setCargaP211(carga11Mob)
      setCargaP212(carga12Mob)
      setCargaP213(carga13Mob)
      setCargaP214(carga14Mob)
      setCargaP215(carga15Mob)
      setPressaoP21(pressao1Mob)
      setPressaoP22(pressao2Mob)
      setPressaoP23(pressao3Mob)
      setPressaoP24(pressao4Mob)
      setPressaoP25(pressao5Mob)
      setPressaoP26(pressao6Mob)
      setPressaoP27(pressao7Mob)
      setPressaoP28(pressao8Mob)
      setPressaoP29(pressao9Mob)
      setPressaoP210(pressao10Mob)
      setPressaoP211(pressao11Mob)
      setPressaoP212(pressao12Mob)
      setPressaoP213(pressao13Mob)
      setPressaoP214(pressao14Mob)
      setPressaoP215(pressao15Mob)
    }
    if (ensaio == "P3") {

      setCargaP31(carga1Mob)
      setCargaP32(carga2Mob)
      setCargaP33(carga3Mob)
      setCargaP34(carga4Mob)
      setCargaP35(carga5Mob)
      setCargaP36(carga6Mob)
      setCargaP37(carga7Mob)
      setCargaP38(carga8Mob)
      setCargaP39(carga9Mob)
      setCargaP310(carga10Mob)
      setCargaP311(carga11Mob)
      setCargaP312(carga12Mob)
      setCargaP313(carga13Mob)
      setCargaP314(carga14Mob)
      setCargaP315(carga15Mob)
      setPressaoP31(pressao1Mob)
      setPressaoP32(pressao2Mob)
      setPressaoP33(pressao3Mob)
      setPressaoP34(pressao4Mob)
      setPressaoP35(pressao5Mob)
      setPressaoP36(pressao6Mob)
      setPressaoP37(pressao7Mob)
      setPressaoP38(pressao8Mob)
      setPressaoP39(pressao9Mob)
      setPressaoP310(pressao10Mob)
      setPressaoP311(pressao11Mob)
      setPressaoP312(pressao12Mob)
      setPressaoP313(pressao13Mob)
      setPressaoP314(pressao14Mob)
      setPressaoP315(pressao15Mob)
    }
    if (ensaio == "P4") {

      setCargaP41(carga1Mob)
      setCargaP42(carga2Mob)
      setCargaP43(carga3Mob)
      setCargaP44(carga4Mob)
      setCargaP45(carga5Mob)
      setCargaP46(carga6Mob)
      setCargaP47(carga7Mob)
      setCargaP48(carga8Mob)
      setCargaP49(carga9Mob)
      setCargaP410(carga10Mob)
      setCargaP411(carga11Mob)
      setCargaP412(carga12Mob)
      setCargaP413(carga13Mob)
      setCargaP414(carga14Mob)
      setCargaP415(carga15Mob)
      setPressaoP41(pressao1Mob)
      setPressaoP42(pressao2Mob)
      setPressaoP43(pressao3Mob)
      setPressaoP44(pressao4Mob)
      setPressaoP45(pressao5Mob)
      setPressaoP46(pressao6Mob)
      setPressaoP47(pressao7Mob)
      setPressaoP48(pressao8Mob)
      setPressaoP49(pressao9Mob)
      setPressaoP410(pressao10Mob)
      setPressaoP411(pressao11Mob)
      setPressaoP412(pressao12Mob)
      setPressaoP413(pressao13Mob)
      setPressaoP414(pressao14Mob)
      setPressaoP415(pressao15Mob)

    }
    if (ensaio == "P5") {


      setCargaP51(carga1Mob)
      setCargaP52(carga2Mob)
      setCargaP53(carga3Mob)
      setCargaP54(carga4Mob)
      setCargaP55(carga5Mob)
      setCargaP56(carga6Mob)
      setCargaP57(carga7Mob)
      setCargaP58(carga8Mob)
      setCargaP59(carga9Mob)
      setCargaP510(carga10Mob)
      setCargaP511(carga11Mob)
      setCargaP512(carga12Mob)
      setCargaP513(carga13Mob)
      setCargaP514(carga14Mob)
      setCargaP515(carga15Mob)
      setPressaoP51(pressao1Mob)
      setPressaoP52(pressao2Mob)
      setPressaoP53(pressao3Mob)
      setPressaoP54(pressao4Mob)
      setPressaoP55(pressao5Mob)
      setPressaoP56(pressao6Mob)
      setPressaoP57(pressao7Mob)
      setPressaoP58(pressao8Mob)
      setPressaoP59(pressao9Mob)
      setPressaoP510(pressao10Mob)
      setPressaoP511(pressao11Mob)
      setPressaoP512(pressao12Mob)
      setPressaoP513(pressao13Mob)
      setPressaoP514(pressao14Mob)
      setPressaoP515(pressao15Mob)
    }
    if (ensaio == "P6") {

      setCargaP61(carga1Mob)
      setCargaP62(carga2Mob)
      setCargaP63(carga3Mob)
      setCargaP64(carga4Mob)
      setCargaP65(carga5Mob)
      setCargaP66(carga6Mob)
      setCargaP67(carga7Mob)
      setCargaP68(carga8Mob)
      setCargaP69(carga9Mob)
      setCargaP610(carga10Mob)
      setCargaP611(carga11Mob)
      setCargaP612(carga12Mob)
      setCargaP613(carga13Mob)
      setCargaP614(carga14Mob)
      setCargaP615(carga15Mob)
      setPressaoP61(pressao1Mob)
      setPressaoP62(pressao2Mob)
      setPressaoP63(pressao3Mob)
      setPressaoP64(pressao4Mob)
      setPressaoP65(pressao5Mob)
      setPressaoP66(pressao6Mob)
      setPressaoP67(pressao7Mob)
      setPressaoP68(pressao8Mob)
      setPressaoP69(pressao9Mob)
      setPressaoP610(pressao10Mob)
      setPressaoP611(pressao11Mob)
      setPressaoP612(pressao12Mob)
      setPressaoP613(pressao13Mob)
      setPressaoP614(pressao14Mob)
      setPressaoP615(pressao15Mob)

    }

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


  useEffect(() => {
    Save1()
    if (aux0 != ensaio) {


      if (ensaio == "P1") {

        setCargaP1Mob(carga11)
        setCargaP2Mob(carga12)
        setCargaP3Mob(carga13)
        setCargaP4Mob(carga14)
        setCargaP5Mob(carga15)
        setCargaP6Mob(carga16)
        setCargaP7Mob(carga17)
        setCargaP8Mob(carga18)
        setCargaP9Mob(carga19)
        setCargaP10Mob(carga110)
        setCargaP11Mob(carga111)
        setCargaP12Mob(carga112)
        setCargaP13Mob(carga113)
        setCargaP14Mob(carga114)
        setCargaP15Mob(carga115)
        setPressaoP1Mob(pressao11)
        setPressaoP2Mob(pressao12)
        setPressaoP3Mob(pressao13)
        setPressaoP4Mob(pressao14)
        setPressaoP5Mob(pressao15)
        setPressaoP6Mob(pressao16)
        setPressaoP7Mob(pressao17)
        setPressaoP8Mob(pressao18)
        setPressaoP9Mob(pressao19)
        setPressaoP10Mob(pressao110)
        setPressaoP11Mob(pressao111)
        setPressaoP12Mob(pressao112)
        setPressaoP13Mob(pressao113)
        setPressaoP14Mob(pressao114)
        setPressaoP15Mob(pressao115)
      }
      if (ensaio == "P2") {

        setCargaP1Mob(carga21)
        setCargaP2Mob(carga22)
        setCargaP3Mob(carga23)
        setCargaP4Mob(carga24)
        setCargaP5Mob(carga25)
        setCargaP6Mob(carga26)
        setCargaP7Mob(carga27)
        setCargaP8Mob(carga28)
        setCargaP9Mob(carga29)
        setCargaP10Mob(carga210)
        setCargaP11Mob(carga211)
        setCargaP12Mob(carga212)
        setCargaP13Mob(carga213)
        setCargaP14Mob(carga214)
        setCargaP15Mob(carga215)
        setPressaoP1Mob(pressao21)
        setPressaoP2Mob(pressao22)
        setPressaoP3Mob(pressao23)
        setPressaoP4Mob(pressao24)
        setPressaoP5Mob(pressao25)
        setPressaoP6Mob(pressao26)
        setPressaoP7Mob(pressao27)
        setPressaoP8Mob(pressao28)
        setPressaoP9Mob(pressao29)
        setPressaoP10Mob(pressao210)
        setPressaoP11Mob(pressao211)
        setPressaoP12Mob(pressao212)
        setPressaoP13Mob(pressao213)
        setPressaoP14Mob(pressao214)
        setPressaoP15Mob(pressao215)
      }
      if (ensaio == "P3") {

        setCargaP1Mob(carga31)
        setCargaP2Mob(carga32)
        setCargaP3Mob(carga33)
        setCargaP4Mob(carga34)
        setCargaP5Mob(carga35)
        setCargaP6Mob(carga36)
        setCargaP7Mob(carga37)
        setCargaP8Mob(carga38)
        setCargaP9Mob(carga39)
        setCargaP10Mob(carga310)
        setCargaP11Mob(carga311)
        setCargaP12Mob(carga312)
        setCargaP13Mob(carga313)
        setCargaP14Mob(carga314)
        setCargaP15Mob(carga315)
        setPressaoP1Mob(pressao31)
        setPressaoP2Mob(pressao32)
        setPressaoP3Mob(pressao33)
        setPressaoP4Mob(pressao34)
        setPressaoP5Mob(pressao35)
        setPressaoP6Mob(pressao36)
        setPressaoP7Mob(pressao37)
        setPressaoP8Mob(pressao38)
        setPressaoP9Mob(pressao39)
        setPressaoP10Mob(pressao310)
        setPressaoP11Mob(pressao311)
        setPressaoP12Mob(pressao312)
        setPressaoP13Mob(pressao313)
        setPressaoP14Mob(pressao314)
        setPressaoP15Mob(pressao315)

      }
      if (ensaio == "P4") {

        setCargaP1Mob(carga41)
        setCargaP2Mob(carga42)
        setCargaP3Mob(carga43)
        setCargaP4Mob(carga44)
        setCargaP5Mob(carga45)
        setCargaP6Mob(carga46)
        setCargaP7Mob(carga47)
        setCargaP8Mob(carga48)
        setCargaP9Mob(carga49)
        setCargaP10Mob(carga410)
        setCargaP11Mob(carga411)
        setCargaP12Mob(carga412)
        setCargaP13Mob(carga413)
        setCargaP14Mob(carga414)
        setCargaP15Mob(carga415)
        setPressaoP1Mob(pressao41)
        setPressaoP2Mob(pressao42)
        setPressaoP3Mob(pressao43)
        setPressaoP4Mob(pressao44)
        setPressaoP5Mob(pressao45)
        setPressaoP6Mob(pressao46)
        setPressaoP7Mob(pressao47)
        setPressaoP8Mob(pressao48)
        setPressaoP9Mob(pressao49)
        setPressaoP10Mob(pressao410)
        setPressaoP11Mob(pressao411)
        setPressaoP12Mob(pressao412)
        setPressaoP13Mob(pressao413)
        setPressaoP14Mob(pressao414)
        setPressaoP15Mob(pressao415)

      }
      if (ensaio == "P5") {

        setCargaP1Mob(carga51)
        setCargaP2Mob(carga52)
        setCargaP3Mob(carga53)
        setCargaP4Mob(carga54)
        setCargaP5Mob(carga55)
        setCargaP6Mob(carga56)
        setCargaP7Mob(carga57)
        setCargaP8Mob(carga58)
        setCargaP9Mob(carga59)
        setCargaP10Mob(carga510)
        setCargaP11Mob(carga511)
        setCargaP12Mob(carga512)
        setCargaP13Mob(carga513)
        setCargaP14Mob(carga514)
        setCargaP15Mob(carga515)
        setPressaoP1Mob(pressao51)
        setPressaoP2Mob(pressao52)
        setPressaoP3Mob(pressao53)
        setPressaoP4Mob(pressao54)
        setPressaoP5Mob(pressao55)
        setPressaoP6Mob(pressao56)
        setPressaoP7Mob(pressao57)
        setPressaoP8Mob(pressao58)
        setPressaoP9Mob(pressao59)
        setPressaoP10Mob(pressao510)
        setPressaoP11Mob(pressao511)
        setPressaoP12Mob(pressao512)
        setPressaoP13Mob(pressao513)
        setPressaoP14Mob(pressao514)
        setPressaoP15Mob(pressao515)

      }
      if (ensaio === "P6") {

        setCargaP1Mob(carga61)
        setCargaP2Mob(carga62)
        setCargaP3Mob(carga63)
        setCargaP4Mob(carga64)
        setCargaP5Mob(carga65)
        setCargaP6Mob(carga66)
        setCargaP7Mob(carga67)
        setCargaP8Mob(carga68)
        setCargaP9Mob(carga69)
        setCargaP10Mob(carga610)
        setCargaP11Mob(carga611)
        setCargaP12Mob(carga612)
        setCargaP13Mob(carga613)
        setCargaP14Mob(carga614)
        setCargaP15Mob(carga615)
        setPressaoP1Mob(pressao61)
        setPressaoP2Mob(pressao62)
        setPressaoP3Mob(pressao63)
        setPressaoP4Mob(pressao64)
        setPressaoP5Mob(pressao65)
        setPressaoP6Mob(pressao66)
        setPressaoP7Mob(pressao67)
        setPressaoP8Mob(pressao68)
        setPressaoP9Mob(pressao69)
        setPressaoP10Mob(pressao610)
        setPressaoP11Mob(pressao611)
        setPressaoP12Mob(pressao612)
        setPressaoP13Mob(pressao613)
        setPressaoP14Mob(pressao614)
        setPressaoP15Mob(pressao615)

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
              editable={false}
              selectTextOnFocus={false}
            />

          </View>


          <View style={styles.containerbtnbuscar}></View>
          <View style={styles.container1}>
            <Text style={styles.labelcontanier}>
              Corpo de prova:
            </Text>
          </View>
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





          <Separator1></Separator1>
          <View style={styles.container1}>
            <Text style={styles.labelcontaniercbr}>
              Tempo (min):
            </Text>
            <Text style={styles.labelcontaniercbr1}>
              Penetração(mm):
            </Text>
            <Text style={styles.labelcontaniercbr2}>
              Carga(Div):
            </Text>
            <Text style={styles.labelcontaniercbr3}>
              Pressão (MPa):
            </Text>
          </View>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP1Mob}
              value={penetracao1Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP1Mob}
              value={carga1Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP1Mob}
              value={pressao1Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>

          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="0,5"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP2Mob}
              value={penetracao2Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP2Mob}
              value={carga2Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP2Mob}
              value={pressao2Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="1,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP3Mob}
              value={penetracao3Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP3Mob}
              value={carga3Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP3Mob}
              value={pressao3Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="1,5"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP4Mob}
              value={penetracao4Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP4Mob}
              value={carga4Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP4Mob}
              value={pressao4Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="2,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP5Mob}
              value={penetracao5Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP5Mob}
              value={carga5Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP5Mob}
              value={pressao5Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="2,5"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP6Mob}
              value={penetracao6Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP6Mob}
              value={carga6Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP6Mob}
              value={pressao6Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>

          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="3,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP7Mob}
              value={penetracao7Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP7Mob}
              value={carga7Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP7Mob}
              value={pressao7Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="3,5"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP8Mob}
              value={penetracao8Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP8Mob}
              value={carga8Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP8Mob}
              value={pressao8Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="4,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP9Mob}
              value={penetracao9Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP9Mob}
              value={carga9Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP9Mob}
              value={carga9Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="5,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP10Mob}
              value={penetracao10Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP10Mob}
              value={carga10Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP10Mob}
              value={pressao10Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="6,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP11Mob}
              value={penetracao11Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP11Mob}
              value={carga11Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP11Mob}
              value={pressao11Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="7,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP12Mob}
              value={penetracao12Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP12Mob}
              value={carga12Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP12Mob}
              value={pressao12Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="8,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP13Mob}
              value={penetracao13Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP13Mob}
              value={carga13Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP13Mob}
              value={pressao13Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Pressão (MPa)"
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="9,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP14Mob}
              value={penetracao14Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP14Mob}
              value={carga14Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP14Mob}
              value={pressao14Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              placeholder="Pressão (MPa)"
              selectTextOnFocus={isEnabled}
            />

          </View>
          <Separator1></Separator1>
          <Separator1></Separator1>
          <View style={styles.container1}>

            <TextInput
              style={styles.inputleftcbr}
              value="10,0"
              keyboardType='numeric'
              editable={isEnabled}
              selectTextOnFocus={isEnabled}

            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPenetracaoP15Mob}
              value={penetracao15Mob.toString().replace(".", ",")}
              keyboardType='numeric'

              placeholder="Penetração (mm)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setCargaP15Mob}
              value={carga15Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              selectTextOnFocus={isEnabled}
              placeholder="Carga (Div)"
            />
            <TextInput
              style={styles.inputleftcbr}
              onChangeText={setPressaoP15Mob}
              value={pressao15Mob.toString().replace(".", ",")}
              keyboardType='numeric'
              selectTextOnFocus={isEnabled}
              placeholder="Pressão (MPa)"
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

