import React, { useState, useEffect, State } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Modal, Image, Button, FlatList, Platform, NavigationContainer, ActivityIndicator } from "react-native";
import styles from "./style1";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // npm i axios
import * as Animatable from 'react-native-animatable';
import Conexao from "../../Conexao/conexao";

export default function NewTaskApropriacao({ route, navigation }) {
  api = Conexao.api
  const [task, setTask] = useState([]);
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');
  const [buscar, setBuscar] = useState('');
  const [profinic, setProfinic] = useState('');
  const [proffin, setProffin] = useState('');
  const [recupm, setRecupm] = useState('');
  const [avan, setAvan] = useState('');
  const [recupp, setRecupp] = useState('');
  const [caixan, setCaixan] = useState('');
  const [matatrav, setMatAtrav] = useState('');
  const [coroan, setCoroan] = useState('');
  const [coroad, setCoroad] = useState('');
  const [de, setDe] = useState('');
  const [ate, setAte] = useState('');
  const [cod, setCod] = useState('');
  const [abrir, setAbrir] = useState(false);
  const [loading, setLoading] = useState(false)
  function irpefuracao() {
    navigation.navigate("PERFURAÇÃO", { nfuro: furo });
  };
  useEffect(() => {
    setLoading(true)
    listarDados()
    console.warn(processo)
  }, []);
  const [processo, setProcesso] = useState(
    route.params?.nprocesso
  )
  const [furo, setFuro] = useState(
    route.params?.nfuro
  );
  const Separator1 = () => (
    <View style={styles.separator1} />
  );
  async function listarDados() {
    const res = await axios.get(this.api + 'ListarApropriacaoSondagemPsquisaMineral.php?Processo=' + processo);
    setTask(res.data.result);
    console.warn('processo ' + processo)
    console.log(res.data.result);
    setLoading(false)

  }
  async function add() {
    const obj = { processo, de, ate, cod, profinic, proffin, avan, recupm, recupp, caixan, matatrav, coroan, coroad };


    const res = await axios.post(this.api + 'InserteListaApropriacaoSondagemPesquisaMineral.php', obj);
    console.warn(res.data.success, de, this.api + 'InserteListaApropriacaoSondagemPesquisaMineral.php', obj)
    if (res.data.success === true) {

    }


    //}

    listarDados();
    setAbrir(false);

  }
  function limparCampos() {
    setNome('');
    setEmail('');
    setSenha('');
    setId('0');
  }
  const divValue = (recupm, avan) => {
    //Alert.alert("Processamento: 5 segundos");
    return (recupm / avan);
  }
  useEffect(() => {
    divValue()
    setRecupp(divValue(recupm, avan))
    console.warn(divValue(recupm, avan), recupp)
  })

  return (

    <View style={styles.container}>
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

      <View style={styles.navbar}>

        <Text style={styles.textonavbar}>Adicionar</Text>



        <TouchableOpacity

          style={styles.botao}
          onPress={() => setAbrir(true)}
        >
          <Ionicons name="ios-add" size={30} color="#FFF"></Ionicons>

        </TouchableOpacity>

      </View>
      {/* <Separator1></Separator1>
      <TouchableOpacity
        style={styles.buttonNewTask2}

        onPress={irpefuracao}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity> */}






      <ScrollView>
        <ScrollView horizontal={true} >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={({ item }) => {
              return (
                <View style={styles.Tasks}>
                  <TouchableOpacity
                    style={styles.deleteTask}
                    onPress={() => {
                      deleteTask(item.id)
                    }}
                  >
                    <FontAwesome
                      name="trash"
                      size={23}
                      color="#F92e6A"
                    >
                    </FontAwesome>

                  </TouchableOpacity>
                  <Text style={styles.labelperfuracao}>HORÁRIO (DE):</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        profde: item.de,
                      })
                    }
                  >
                    {item.de}
                  </Text>

                  <Text style={styles.labelperfuracao}>HORÁRIO (ATÉ):</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        ate: item.ate,
                      })
                    }
                  >
                    {item.ate}
                  </Text>

                  <Text style={styles.labelperfuracao}>CÓDIGO:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        cod: item.cod,
                      })
                    }
                  >
                    {item.cod}
                  </Text>
                  <Text style={styles.labelperfuracao}>PROFUNDIDADE (DE):</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        profinic: item.profinic,
                      })
                    }
                  >
                    {item.profinic}
                  </Text>

                  <Text style={styles.labelperfuracao}>PROFUNDIDADE (ATÉ):</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        proffin: item.proffin,
                      })
                    }
                  >
                    {item.proffin}
                  </Text>

                  <Text style={styles.labelperfuracao}>AVANÇO(m):</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        avan: item.avan,
                      })
                    }
                  >
                    {item.avan}
                  </Text>

                  <Text style={styles.labelperfuracao}>RECUPERAÇÃO(m):</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        recupm: item.recupm,
                      })
                    }
                  >
                    {item.recupm}
                  </Text>

                  <Text style={styles.labelperfuracao}>RECUPERAÇÃO(%):</Text>
                  <Text

                    style={styles.DescriptionTask}

                  >
                    {item.recupp}
                  </Text>

                  <Text style={styles.labelperfuracao}>CAIXA:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        caixan: item.caixan,
                      })
                    }
                  >
                    {item.caixan}
                  </Text>

                  <Text style={styles.labelperfuracao}>MATERIAL ATRAVERSADO:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        matatrav: item.matatrav,
                      })
                    }
                  >
                    {item.matatrav}
                  </Text>
                  <Text style={styles.labelperfuracao}>COROA N°:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        coroan: item.coroan,
                      })
                    }
                  >
                    {item.coroan}
                  </Text>
                  <Text style={styles.labelperfuracao}>COROA Ø:</Text>
                  <Text

                    style={styles.DescriptionTask}
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        coroad: item.coroad,
                      })
                    }
                  >
                    {item.coroad}
                  </Text>
                </View>
              )
            }}
          />
        </ScrollView  >
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={abrir}
      >
        <SafeAreaView style={styles.modal}>



          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setAbrir(false)}
            >
              <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={35} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.textoModal}>Apropriacao</Text>
          </View>
          <ScrollView>
            <Animatable.View
              animation="bounceInUp"
              useNativeDriver  >

              <Text style={styles.textModal}>HORÁRIO (DE):</Text>
              <TextInput
                type="text"
                style={styles.inputmodal}
                placeholder="HORÁRIO (DE)"
                value={de}
                onChangeText={(de) => setDe(de)}
              />
              <Text style={styles.textModal}>HORÁRIO (ATÉ):</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="HORÁRIO (ATÉ)"
                value={ate}
                onChangeText={(ate) => setAte(ate)}
              />
              <Text style={styles.textModal}>CÓDIGO:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="CÓDIGO:"
                value={cod}
                onChangeText={(cod) => setCod(cod)}
              />
              <Text style={styles.textModal}>PROFUNDIDADE (DE):</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="PROFUNDIDADE (DE):"
                value={profinic}
                onChangeText={(profinic) => setProfinic(profinic)}
              />
              <Text style={styles.textModal}>PROFUNDIDADE (ATÉ):</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="PROFUNDIDADE (ATÉ):"
                value={proffin}
                onChangeText={(proffin) => setProffin(proffin)}
              />
              <Text style={styles.textModal}>AVANÇO(m):</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="AVANÇO(m):"
                value={avan}
                onChangeText={(avan) => setAvan(avan)}
              />
              <Text style={styles.textModal}>RECUPERAÇÃO(m):</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="RECUPERAÇÃO(m):"
                value={recupm}
                onChangeText={(recupm) => setRecupm(recupm)}
              />
              {/* <Text style={styles.textModal}>RECUPERAÇÃO(%):</Text>
              <TextInput
                editable={false} selectTextOnFocus={false}
                style={styles.inputmodal}
                placeholder="RECUPERAÇÃO(%):"
                onChangeText={setRecupp}
                value={recupp}
               
              /> */}
              <Text style={styles.textModal}>CAIXA:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="CAIXA:"
                value={caixan}
                onChangeText={(caixan) => setCaixan(caixan)}
              />
              <Text style={styles.textModal}>MATERIAL ATRAVERSADO:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="MATERIAL ATRAVERSADO:"
                value={matatrav}
                onChangeText={(matatrav) => setMatAtrav(matatrav)}
              />
              <Text style={styles.textModal}>COROA N°:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="COROA N°:"
                value={coroan}
                onChangeText={(coroan) => setCoroan(coroan)}
              />
              <Text style={styles.textModal}>COROA DIAMETRO:</Text>
              <TextInput
                style={styles.inputmodal}
                placeholder="COROA DIAMETRO:"
                value={coroad}
                onChangeText={(coroad) => setCoroad(coroad)}
              />


              <Text style={styles.textModal}></Text>
              <TouchableOpacity
                style={styles.botaoModal}
                onPress={add}
              >

                <Text style={styles.textoBotaoModal}>Salvar</Text>
              </TouchableOpacity>
              <Text style={styles.textModal}></Text>

            </Animatable.View>
          </ScrollView>
        </SafeAreaView>

      </Modal>

    </View>


  );
}







