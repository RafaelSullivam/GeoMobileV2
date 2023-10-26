import React, { useState, useEffect, Component } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Modal, ScrollView, Alert, Image, FlatList, CheckBox, StyleSheet } from 'react-native';
import styles from "./style";
import axios from 'axios'; // npm i axios
import * as SQLite from "expo-sqlite";
import { Dropdown } from 'react-native-element-dropdown';
import Conexao from "../../Conexao/conexao";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
export default function RDO(props) {
  api = Conexao.api
  const [task, setTask] = useState([]);
  const [iddiametro, setIdDiametro] = useState('')
  const [reload, setReload] = useState(false)
  const [apagar, setApagar] = useState(false)
  const [habilita, setHabilita] = useState(true)
  const [bloquear, setBloquear] = useState(true);
  const [task1, setTask1] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [codativ, setCodAtiv] = useState();
  const [descricaoativ, setDescricaoAtiv] = useState()
  const [matricula, setMatricula] = useState()
  const [nome, setNome] = useState("")
  const [admissao, setAdmissao] = useState("")
  const [funcao, setFuncao] = useState("")
  const [setor, setSetor] = useState("")
  const [munfuncao, setMunFuncao] = useState("")
  const [selectedTimeInit, setSelectedTimeInit] = useState();
  const [selectedTimeEnd, setSelectedTimeEnd] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const[quantidade,setQuantidade]=useState()
  const [id, setID] = useState();
  const[observacao,setObservacao]=useState()
  const[unidade,setUnidade]=useState()
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
      "                          Deseja Apagar Sonda! " + iddiametro,
      ""
      [
      { text: "OK" }
      ]
    );
  const dt = [


    { label: '1- HORA PARADA - (CLIENTE) ACESSO BLOQUEADO / DESTRUÍDO / NÃO LIBERADO ', value: 'HORA PARADA - (CLIENTE) ACESSO BLOQUEADO / DESTRUÍDO / NÃO LIBERADO ', code: '1' },
    { label: '2-HORA PARADA - (CLIENTE) EQUIPE PASSANDO POR TREINAMENTOS', value: 'HORA PARADA - (CLIENTE) EQUIPE PASSANDO POR TREINAMENTOS', code: '2' },
    { label: '3-HORA PARADA - (CLIENTE) AGUARDANDO TOPOGRAFIA', value: 'HORA PARADA - (CLIENTE) AGUARDANDO TOPOGRAFIA', code: '3' },
    { label: '4-HORA PARADA - (CLIENTE) INDEFINIÇÃO DE PROJETO', value: 'HORA PARADA - (CLIENTE) INDEFINIÇÃO DE PROJETO', code: '4' },
    { label: '5-HORA PARADA - (CLIENTE) INSPEÇÃO DE SEGURANÇA', value: 'HORA PARADA - (CLIENTE) INSPEÇÃO DE SEGURANÇA', code: '5' },
    { label: '6-HORA PARADA - (CLIENTE) LIBERAÇÃO DE PRAÇA DE SONDAGEM', value: 'HORA PARADA - (CLIENTE) LIBERAÇÃO DE PRAÇA DE SONDAGEM', code: '6' },
    { label: '7-HORA PARADA - (CLIENTE) PIPA / ÁGUA', value: 'HORA PARADA - (CLIENTE) PIPA / ÁGUA', code: '7' },
    { label: '8-HORA PARADA - (CLIENTE) AGUARDANDO LIBERAÇÃO DE MOBILIZAÇÃO', value: 'HORA PARADA - (CLIENTE) AGUARDANDO LIBERAÇÃO DE MOBILIZAÇÃO', code: '8' },
    { label: '9-HORA PARADA - (CLIENTE) PRESENÇA DE ANIMAIS PEÇONHENTOS', value: 'HORA PARADA - (CLIENTE) PRESENÇA DE ANIMAIS PEÇONHENTOS', code: '9' },
    { label: '10-HORA PARADA - (CLIENTE) NÃO FORNECIMENTO DE RÁDIOS OBRIGATÓRIOS', value: 'HORA PARADA - (CLIENTE) NÃO FORNECIMENTO DE RÁDIOS OBRIGATÓRIOS', code: '10' },
    { label: '11-HORA PARADA - (CLIENTE) AGUARDANDO LIBERAÇÃO PARA INÍCIO DAS ATIVIDADES', value: 'HORA PARADA - (CLIENTE) AGUARDANDO LIBERAÇÃO PARA INÍCIO DAS ATIVIDADES', code: '11' },
    { label: '14-HORA PARADA - (GEOCONTROLE) ATRASO NA MOBILIZAÇÃO', value: 'HORA PARADA - (GEOCONTROLE) ATRASO NA MOBILIZAÇÃO', code: '14' },
    { label: '15-HORA PARADA - (GEOCONTROLE) AGUARDANDO ABASTECIMENTO ', value: 'HORA PARADA - (GEOCONTROLE) AGUARDANDO ABASTECIMENTO ', code: '15' },
    { label: '16-HORA PARADA - (GEOCONTROLE) AGUARDANDO TRANSPORTE / PRANCHA PARA MUDANÇA', value: 'HORA PARADA - (GEOCONTROLE) AGUARDANDO TRANSPORTE / PRANCHA PARA MUDANÇA ', code: '16' },
    { label: '17-HORA PARADA - (GEOCONTROLE) AGUARDANDO DEFINIÇÃO DA SUPERVISÃO', value: 'HORA PARADA - (GEOCONTROLE) AGUARDANDO DEFINIÇÃO DA SUPERVISÃO', code: '17' },
    { label: '18-HORA PARADA - (GEOCONTROLE) INSPEÇÃO / ORGANIZAÇÃO / REUNIÃO SEGURANÇA', value: 'HORA PARADA - (GEOCONTROLE) INSPEÇÃO / ORGANIZAÇÃO / REUNIÃO SEGURANÇA', code: '18' },
    { label: '19-HORA PARADA - (GEOCONTROLE) MAT. / COROA / HASTES / REVEST. / ACESSÓRIOS', value: 'HORA PARADA - (GEOCONTROLE) MAT. / COROA / HASTES / REVEST. / ACESSÓRIOS', code: '19' },
    { label: '20-HORA PARADA - (GEOCONTROLE) PESSOAL / TRAJETO', value: 'HORA PARADA - (GEOCONTROLE) PESSOAL / TRAJETO', code: '20' },
    { label: '21-HORA PARADA - (GEOCONTROLE) PIPA / ÁGUA ', value: 'HORA PARADA - (GEOCONTROLE) PIPA / ÁGUA ', code: '21' },
    { label: '22-HORA PARADA - (GEOCONTROLE) VEÍCULO DE APOIO EM MANUTENÇÃO', value: 'HORA PARADA - (GEOCONTROLE) VEÍCULO DE APOIO EM MANUTENÇÃO', code: '22' },
    { label: '23-HORA PARADA - (GEOCONTROLE) EQUIPE FAZENDO EXAMES INTERNOS', value: 'HORA PARADA - (GEOCONTROLE) EQUIPE FAZENDO EXAMES INTERNOS', code: '23' },
    { label: '24-HORA PARADA - (GEOCONTROLE) EQUIPE AFASTADA POR RAZÕES DE SAÚDE', value: 'HORA PARADA - (GEOCONTROLE) EQUIPE AFASTADA POR RAZÕES DE SAÚDE', code: '24' },
    { label: '25-HORA PARADA - (GEOCONTROLE) EQUIPE INDISPONÍVEL', value: 'HORA PARADA - (GEOCONTROLE) EQUIPE INDISPONÍVEL', code: '25' },
    { label: '27-HORA PARADA - (GEOCONTROLE) DEFEITO EM BOMBA DE LINHA DE ÁGUA', value: 'HORA PARADA - (GEOCONTROLE) DEFEITO EM BOMBA DE LINHA DE ÁGUA', code: '27' },
    { label: '28-HORA PARADA - CHUVA / ALERTA DE RAIOS / CONDIÇÕES CLIMÁTICAS ADVERSAS', value: 'HORA PARADA - CHUVA / ALERTA DE RAIOS / CONDIÇÕES CLIMÁTICAS ADVERSAS', code: '26' },
    { label: '33-DDS', value: 'DDS', code: '33' },
    { label: '34-CHECKLIST', value: 'CHECKLIST', code: '34' },
    { label: '35-REFEIÇÃO - ALMOÇO / JANTA', value: 'REFEIÇÃO - ALMOÇO / JANTA', code: '35' },
    { label: '36-ABASTECENDO A SONDA', value: 'ABASTECENDO A SONDA', code: '36' },
    { label: '37-DESLOCAMENTO DE EQUIPAMENTO / MUDANDO PRAÇA DE LOCAL', value: 'DESLOCAMENTO DE EQUIPAMENTO / MUDANDO PRAÇA DE LOCAL', code: '37' },
    { label: '38-ORGANIZAÇÃO DE PRAÇA DE SONDAGEM', value: 'ORGANIZAÇÃO DE PRAÇA DE SONDAGEM', code: '38' },
    { label: '39-CARREGANDO / DESCARREGANDO SONDA OU EQUIPAMENTO', value: 'CARREGANDO / DESCARREGANDO SONDA OU EQUIPAMENTO', code: '39' },
    { label: '40-ORGANIZANDO MATERIAIS E INSUMOS DIVERSOS - GALPÃO / CAMPO / ESCRITÓRIO', value: 'ORGANIZANDO MATERIAIS E INSUMOS DIVERSOS - GALPÃO / CAMPO / ESCRITÓRIO', code: '40' },
    { label: '41-MONTANDO LINHA DE ÁGUA', value: 'MONTANDO LINHA DE ÁGUA', code: '41' },
    { label: '42-TRANSPORTANDO CAIXAS DE TESTEMUNHO', value: 'TRANSPORTANDO CAIXAS DE TESTEMUNHO', code: '42' },
    { label: '43-ENSAIO DE INFILTRAÇÃO EM SOLOS (LEFRANC)', value: 'ENSAIO DE INFILTRAÇÃO EM SOLOS (LEFRANC)', code: '43' },
    { label: '44-ENSAIO DE PERMEABILIDADE EM ROCHAS (LUGEON)', value: 'ENSAIO DE PERMEABILIDADE EM ROCHAS (LUGEON)', code: '44' },
    { label: '45-ENSAIO DE VANE TEST', value: 'ENSAIO DE VANE TEST', code: '45' },
    { label: '46-ENSAIO PRESSIOMÉTRICO', value: 'ENSAIO PRESSIOMÉTRICO', code: '46' },
    { label: '47-CALIBRAÇÃO DO PRESSIÔMETRO', value: 'CALIBRAÇÃO DO PRESSIÔMETRO', code: '47' },
    { label: '51-INSTRUMENTAÇÃO - INSTALAÇÃO DE INA', value: 'INSTRUMENTAÇÃO - INSTALAÇÃO DE INA', code: '51' },
    { label: '52-INSTRUMENTAÇÃO - INSTALAÇÃO DE PIEZÔMETRO', value: 'INSTRUMENTAÇÃO - INSTALAÇÃO DE PIEZÔMETRO', code: '52' },
    { label: '53-INSTRUMENTAÇÃO - INSTALAÇÃO DE INCLINÔMETRO', value: 'INSTRUMENTAÇÃO - INSTALAÇÃO DE INCLINÔMETRO', code: '53' },
    { label: '54-TESTE DE VIDA EM INSTRUMENTOS - (INA / PZ)', value: 'TESTE DE VIDA EM INSTRUMENTOS - (INA / PZ)', code: '54' },
    { label: '55-PREPARAÇÃO DE TUBOS / TELA / BASE (INA / PZ / INCLINÔMETRO)', value: 'PREPARAÇÃO DE TUBOS / TELA / BASE (INA / PZ / INCLINÔMETRO)', code: '55' },
    { label: '56-OUTRAS ATIVIDADES', value: 'OUTRAS ATIVIDADES', code: '56' },
    { label: '57-OUTRAS ATIVIDADES', value: 'OUTRAS ATIVIDADES', code: '57' },
    { label: '58-OUTRAS ATIVIDADES', value: 'OUTRAS ATIVIDADES', code: '58' },
    { label: '59-AMOSTRAGEM - DEFORMADA', value: 'AMOSTRAGEM - DEFORMADA', code: '59' },
    { label: '60-AMOSTRAGEM - INDEFORMADAS (BLOCO (EQUIPE DA SONDA))', value: 'AMOSTRAGEM - INDEFORMADAS (BLOCO (EQUIPE DA SONDA))', code: '60' },
    { label: '61-AMOSTRAGEM - INDEFORMADAS (DENISON / SHELBY / PROCTOR)', value: 'AMOSTRAGEM - INDEFORMADAS (DENISON / SHELBY / PROCTOR)', code: '61' },
    { label: '62-AMOSTRAGEM - BLOCOS DE ROCHA', value: 'AMOSTRAGEM - BLOCOS DE ROCHA', code: '62' },
    { label: '67-SONDAGEM - CRAVANDO REVESTIMENTO', value: 'SONDAGEM - CRAVANDO REVESTIMENTO', code: '67' },
    { label: '68-SONDAGEM - DESTRANCANDO FURO', value: 'SONDAGEM - DESTRANCANDO FURO', code: '68' },
    { label: '69-SONDAGEM - RECORTANDO FURO', value: 'SONDAGEM - RECORTANDO FURO', code: '69' },
    { label: '70-SONDAGEM - SACANDO FERRAMENTAS', value: 'SONDAGEM - SACANDO FERRAMENTAS', code: '70' },
    { label: '71-SONDAGEM - TROCANDO COROA / SAPATA', value: 'SONDAGEM - TROCANDO COROA / SAPATA', code: '71' },
    { label: '72-SONDAGEM À PERCUSSÃO', value: 'SONDAGEM À PERCUSSÃO', code: '72' },
    { label: '73-SONDAGEM DESTRUTIVA', value: 'SONDAGEM DESTRUTIVA', code: '73' },
    { label: '74-SONDAGEM MISTA', value: 'SONDAGEM MISTA', code: '74' },
    { label: '75-SONDAGEM ROTATIVA', value: 'SONDAGEM ROTATIVA', code: '75' },
    { label: '76-SONDAGEM A TRADO', value: 'SONDAGEM A TRADO', code: '76' },
    { label: '77-TAMPONAMENTO FURO', value: 'TAMPONAMENTO FURO', code: '77' },
    { label: '78-LAVANDO FURO', value: 'LAVANDO FURO', code: '78' },
    { label: '83-CPTU - CRAVANDO HASTES', value: 'CPTU - CRAVANDO HASTES', code: '83' },
    { label: '84-CPTU - ANCORANDO EQUIPAMENTO', value: 'CPTU - ANCORANDO EQUIPAMENTO', code: '84' },
    { label: '85-CPTU - ENSAIO DE DISSIPAÇÃO', value: 'CPTU - ENSAIO DE DISSIPAÇÃO', code: '85' },
    { label: '86-CPTU - ENSAIO SÌSMICO', value: 'CPTU - ENSAIO SÌSMICO', code: '86' },
    { label: '87-CPTU - SATURANDO FURO COM ÁGUA', value: 'CPTU - SATURANDO FURO COM ÁGUA', code: '87' },
    { label: '88-CPTU - EXECUTANDO PRÉ-FURO', value: 'CPTU - EXECUTANDO PRÉ-FURO', code: '88' },
    { label: '96-MOBILIZAÇÃO', value: 'MOBILIZAÇÃO', code: '96' },
    { label: '97-DESMOBILIZAÇÃO', value: 'DESMOBILIZAÇÃO', code: '97' },
    { label: '98-FERIADO', value: 'FERIADO', code: '98' },
    { label: '99-FOLGA COLETIVA', value: 'FOLGA COLETIVA', code: '99' },
    { label: '100-FINAL DE SEMANA - SEM ATIVIDADES', value: 'FINAL DE SEMANA - SEM ATIVIDADES', code: '100' },
    { label: '101-AGUARDANDO MECÂNICO', value: 'AGUARDANDO MECÂNICO', code: '101' },
    { label: '102-AGUARDANDO PEÇAS', value: 'AGUARDANDO PEÇAS', code: '102' },
    { label: '103-DEFEITO ALTERNADOR / BATERIA', value: 'DEFEITO ALTERNADOR / BATERIA', code: '103' },
    { label: '104-DEFEITO BOMBA DE ÁGUA', value: 'DEFEITO BOMBA DE ÁGUA', code: '104' },
    { label: '105-DEFEITO BOMBA HIDRÁULICA', value: 'DEFEITO BOMBA HIDRÁULICA', code: '105' },
    { label: '106-DEFEITO BOMBA INJETORA', value: 'DEFEITO BOMBA INJETORA', code: '106' },
    { label: '107-DEFEITO CABEÇOTE / FUSO', value: 'DEFEITO CABEÇOTE / FUSO', code: '107' },
    { label: '108-DEFEITO CÂMBIO / CARDAN', value: 'DEFEITO CÂMBIO / CARDAN', code: '108' },
    { label: '109-DEFEITO CILINDRO / PISTÃO HIDRÁULICO', value: 'DEFEITO CILINDRO / PISTÃO HIDRÁULICO', code: '109' },
    { label: '110-DEFEITO COMANDO HIDRÁULICO', value: 'DEFEITO COMANDO HIDRÁULICO', code: '110' },
    { label: '111-DEFEITO GUINCHO / FREIOS', value: 'DEFEITO GUINCHO / FREIOS', code: '111' },
    { label: '112-DEFEITO MANDRIL HIDRÁULICO / MECÂNICO', value: 'DEFEITO MANDRIL HIDRÁULICO / MECÂNICO', code: '112' },
    { label: '113-DEFEITO MOTOR BOMBAS', value: 'DEFEITO MOTOR BOMBAS', code: '113' },
    { label: '114-DEFEITO MOTOR DA SONDA / RADIADOR', value: 'DEFEITO MOTOR DA SONDA / RADIADOR', code: '114' },
    { label: '115-DEFEITO MOTOR DE PARTIDA', value: 'DEFEITO MOTOR DE PARTIDA', code: '115' },
    { label: '116-DEFEITO NA CABEÇA D ÁGUA', value: 'DEFEITO NA CABEÇA D ÁGUA', code: '116' },
    { label: '117-DEFEITO NO BYPASS', value: 'DEFEITO NO BYPASS', code: '117' },
    { label: '118-DEFEITO NO CABO PRINCIPAL', value: 'DEFEITO NO CABO PRINCIPAL', code: '118' },
    { label: '119-DEFEITO NO SENSOR DE FIM DE CURSO', value: 'DEFEITO NO SENSOR DE FIM DE CURSO', code: '119' },
    { label: '120-DEFEITO PINHÃO / COROA / TRANSMISSÃO', value: 'DEFEITO PINHÃO / COROA / TRANSMISSÃO', code: '120' },
    { label: '121-DEFEITO SISTEMA WIRELINE', value: 'DEFEITO SISTEMA WIRELINE', code: '121' },
    { label: '122-DEFEITO TORRE / CHASSIS / ROLDANAS', value: 'DEFEITO TORRE / CHASSIS / ROLDANAS', code: '122' },
    { label: '123-LIMPANDO EQUIPAMENTO', value: 'LIMPANDO EQUIPAMENTO', code: '123' },
    { label: '124-LUBRIFICAÇÃO / ABASTECIMENTO', value: 'LUBRIFICAÇÃO / ABASTECIMENTO', code: '124' },
    { label: '125-MANUTENÇÃO PREVENTIVA', value: 'MANUTENÇÃO PREVENTIVA', code: '125' },
    { label: '126-SONDA EM PANE GERAL', value: 'SONDA EM PANE GERAL', code: '126' },
    { label: '127-SUBS. CORREIAIS / MANGUEIRAS / FILTROS', value: 'SUBS. CORREIAIS / MANGUEIRAS / FILTROS', code: '127' },
    { label: '128-SUBS. INSTRUMENTOS / MANÔMETROS', value: 'SUBS. INSTRUMENTOS / MANÔMETROS', code: '128' },
    { label: '129-VAZAMENTOS', value: 'VAZAMENTOS', code: '129' },
    { label: '130-CAMISA TRAVADA NO BARRILETE', value: 'CAMISA TRAVADA NO BARRILETE', code: '130' },
    { label: '131-DEFEITO NO SISTEMA DE ESTEIRAS', value: 'DEFEITO NO SISTEMA DE ESTEIRAS', code: '131' },
    { label: '132-MANGUEIRAS HIDRÁULICAS ESTOURANDO', value: 'MANGUEIRAS HIDRÁULICAS ESTOURANDO', code: '132' },
    { label: '133-DEFEITO NO SISTEMA DE MORSAS', value: 'DEFEITO NO SISTEMA DE MORSAS', code: '133' },
    { label: '134-OUTROS - ', value: 'OUTROS - ', code: '134' },

  ];
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>

      </View>
    );
  };
  const _renderItem2 = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.IdAtividade}</Text>

      </View>
    );
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };
  const handleConfirm = (date) => {
    setSelectedTimeInit(date);
    hideDatePicker();
  };
  const handleConfirm1 = (date) => {
    setSelectedTimeEnd(date);
    hideDatePicker1();
  };
  async function Buscar() {


    const obj = { matricula };

    if (matricula > 0) {
      const res = await axios.post(this.api + 'BuscarFuncionarioEPI.php', obj);

      if (res.data.success === true) {
        setNome(res.data.nome)
        setAdmissao(res.data.admissao)
        setFuncao(res.data.funcao)
        setSetor(res.data.setor)
        setMunFuncao(res.data.mudancaFuncao)
      }
    }

  };

  const SalvarBancoSQLite1 = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ManutecaoPreventivaCorretivaModal ( numeroOs , descricaoModal , manutencaoPC  ) values ('${numeroOs}','${descricaoativ}','${codativ}' )`, (er) => { console.log(er) }, (error) => { console.log(error) });

      },

      setAbrir(false),

      MensagemSalvarOffline(),
      listarDados(),

    );
  };

  useEffect(() => {

  }, []);
  useEffect(() => {
    console.log(apagar)
    if (reload) {
      BuscaBancoSQlite()
      setReload(false)
    }
    if (apagar) {
      BuscaBancoSQlite()
      ApagarText()
      setApagar(false)
    }
  })
  return (
    <ScrollView style={styles.scrollView} >
      <View style={styles.container}>



       

        <View style={styles.containerrow}>
          <TouchableOpacity style={styles.button}
            onPress={() => setAbrir(true)}>
            <Text style={styles.text}>Adicionar Atividades</Text>
            <View style={styles.buttonIconSeparatorStyle} />
            <Image style={styles.buttonImageIconStyle}
              source={require('../../../assets/search.png')} />
          </TouchableOpacity>

        </View>


        <ScrollView horizontal={true} >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={({ item }) => {
              return (
                <View style={styles.Tasks}>


                  <Text style={styles.labelperfuracao}>Data:</Text>
                  <Text
                    style={styles.DescriptionTask}
                    onPress={() =>
                      setIdDiametro(item.IdDiametro) ||
                      setSerie(item.Serie) ||
                      setMM(item.mm)
                    }
                  >
                    {item.IdDiamentro}
                  </Text>

                  <Text style={styles.labelperfuracao}>Série:</Text>
                  <Text
                    style={styles.DescriptionTask}
                  >
                    {item.Serie}
                  </Text>
                  <Text style={styles.labelperfuracao}>mm:</Text>
                  <Text

                    style={styles.DescriptionTask}
                  >
                    {item.mm}
                  </Text>




                </View>
              )
            }}
          />
        </ScrollView  >
        <Modal
          animationType="slide"
          transparent={true}
          visible={abrir}
          style={styles.modal1}
        >

          <View style={styles.containerrow} >
            <ScrollView>
              <View style={styles.container1}>
                <Text style={styles.text}>Início</Text>
              </View>
              <View style={styles.container1}>
                <TouchableOpacity
                  style={styles.dropdown}
                  onPress={showDatePicker} >
                  <Text style={styles.textdate}
                  > {`${selectedTimeInit ? moment(selectedTimeInit).format("HH:mm") : "Por Favor Selecione o Horario"}`} </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="time"
                  is24Hour={true}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Fim</Text>
              </View>
              <View style={styles.container1}>
                <TouchableOpacity
                  style={styles.dropdown}
                  onPress={showDatePicker1} >
                  <Text style={styles.textdate}
                  > {`${selectedTimeEnd ? moment(selectedTimeEnd).format("HH:mm") : "Por Favor Selecione o Horario"}`} </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible1}
                  mode="time"
                  is24Hour={true}
                  onConfirm={handleConfirm1}
                  onCancel={hideDatePicker1}
                />
              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Código da Atividade</Text>
              </View>
              <View style={styles.container1}>

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
                  searchPlaceholder="Buscar..."
                  value={codativ}
                  onChange={item => {
                    setCodAtiv(item.value);
                  }}
                  renderItem={item => _renderItem(item)}
                  textError="Error"

                />
              </View>
              <View style={styles.container1}>
                <Text style={styles.text}> Descrição Atividade: </Text>
              </View>
              <View style={styles.container1}>
                <TextInput

                  onChangeText={setDescricaoAtiv}
                  value={descricaoativ}

                  style={styles.inputleft}
                ></TextInput>
              </View>

              <View style={styles.container1}>
                <Text style={styles.text}>ID</Text>

              </View>
              <View style={styles.container1}>
                <TextInput

                  onChangeText={setID}
                  value={id}

                  style={styles.inputleft}
                ></TextInput>

              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Quatidade</Text>

              </View>
              <View style={styles.container1}>
                <TextInput

                  onChangeText={setQuantidade}
                  value={quantidade}

                  style={styles.inputleft}
                ></TextInput>

              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Unidade</Text>

              </View>
              <View style={styles.container1}>
                <TextInput

                  onChangeText={setUnidade}
                  value={unidade}

                  style={styles.inputleft}
                ></TextInput>

              </View>
              <View style={styles.container1}>
                <Text style={styles.text}>Observação</Text>

              </View>
              <View style={styles.container1}>
                <TextInput

                  onChangeText={setObservacao}
                  value={observacao}

                  style={styles.inputleft}
                ></TextInput>

              </View>
              <View style={styles.containerrow}>
                <TouchableOpacity style={styles.button1}


                  onPress={() => setAbrir(false)}


                >
                  <Text style={styles.text}> Adicionar </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}
                  onPress={() => setAbrir(false)}


                >
                  <Text style={styles.text}> Fechar </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

        </Modal>

      </View>

    </ScrollView>

  );

};

const estilo = StyleSheet.create({

  modal1: {

    backgroundColor: '#2F4F4F',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 10


  },
})