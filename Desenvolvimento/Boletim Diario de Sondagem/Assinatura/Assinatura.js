import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,Alert } from "react-native";
import Signature from "react-native-signature-canvas";
import * as SQLite from "expo-sqlite";
export const SignatureScreen = () => {
  const [signature, setSign] = useState(null);

  const handleOK = (signature) => {
    console.log(signature);
    setSign(signature);
    SalvarBancoSQLite()
   
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
    const gerarBancoSQlite = () => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "create table if not exists Assinatura (Id blob);"
                );
                console.log("Banco de dados iniciado")
            });
    };
    const BuscaBancoSQlite = () => {

        db.transaction((tx) => {

            tx.executeSql('SELECT * FROM Assinatura', null, (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                
                console.log(temp)
            });

        });

    };


    




    const SalvarBancoSQLite = () => {
        console.log('ok')
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into Assinatura (Id) values ( '${signature}')`, (er) => { console.log(er) }, (error) => { console.log(error) });

            },
            console.log('ok2'),
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
    useEffect(() => {
        //getItem()
         gerarBancoSQlite()
         BuscaBancoSQlite()
        
  
     
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