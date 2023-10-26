import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,Alert } from "react-native";
import Signature from "react-native-signature-canvas";
import * as SQLite from "expo-sqlite";
export const AssinaturaAmostragem = () => {
  const [signature, setSign] = useState(null);
  const [numeroAmostra, setNumeroAmostra] = useState("")
  const handleOK = (signature) => {
    console.log(signature);
    setSign(signature);
   
BuscaBancoSQlite2
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
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
  
    const gerarBancoSQlite2 = () => {
      db.transaction(
          (tx) => {
              tx.executeSql(
                  "create table if not exists AssinaturaAmostragem ( Id medioumblob);"
              );
              console.log("Banco de dados iniciado")
          });
  };


    const BuscaBancoSQlite2 = () => {

      db.transaction((tx) => {

          tx.executeSql('SELECT * FROM AssinaturaAmostragem', null, (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
              
              console.log('Recuperada---->',temp)
          });

      });

  };
  const SalvarBancoSQLite2 = () => {
      console.log('ok')
      db.transaction(
          (tx) => {
              tx.executeSql(`insert into AssinaturaAmostragem ( Id) values (  '${signature}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

          },
          console.log('Assinatura -->', signature),
          MensagemSalvarOffline(),
       
      );
  };




    
    const MensagemSalvarOffline = () =>
    Alert.alert(
        "                          Salvo com sucesso! ",
        ""
        [
        { text: "OK" }
        ]
    );




    let DeleteBancoSQlite = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS  AssinaturaAmostragem ',
                console.log('Tabela  Deletada')

            );

        });
    };

    useEffect(() => {
        //getItem()
        // gerarBancoSQlite2()
         BuscaBancoSQlite2()
        //  DeleteBancoSQlite()   
  
     
    }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText=""
        clearText="Apagar"
        confirmText="Salvar"
        webStyle={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});