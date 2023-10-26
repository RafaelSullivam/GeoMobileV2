import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#2F4F4F',
    },
    container1: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#2F4F4F'
    },
    navbar: {
        backgroundColor: '#00335c',
        padding: 12,
        color: '#FFF',
        flexDirection: 'row',
        marginTop: 35,
    
      },
      botao: {
        position: 'absolute',
        right: 13,
        marginTop: 11,
        borderBottomWidth: 1,
        borderBottomColor: "#00335c",
        width: "100%",
        alignItems: 'flex-end',

      },
      textonavbar: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 4,
        marginBottom: 2,
      },
    label: {
        //width: "90%",
        flex: 1,
        justifyContent: "center",
        marginTop: 60,
        fontSize: 15,
        marginLeft: 50,
        color: "#000000"
    },
    labelperfuracao: {
        width: "90%",
        flex: 1,
        justifyContent: "center",
        marginTop: 20,
        fontSize: 15,
        marginLeft: 10,
        color: "#FFFFFF"
    },
    labelcontanier: {

        width: "90%",
        flex: 1,
        justifyContent: "center",
        marginTop: 0,
        fontSize: 15,
        marginLeft: 250,
        // marginRight:"auto",
        color: "#000000"
    },


    labelsubtitle2: {
        width: "90%",
        flex: 1,
        justifyContent: "center",
        marginTop: 20,
        fontSize: 20,
        marginLeft: 15,
        color: "#000000"
    },
    labelsubtitle3: {
        width: "90%",
        flex: 1,
        justifyContent: "center",
        marginTop: 20,
        fontSize: 20,
        marginLeft: 70,
        color: "#000000"
    },
    input: {
        fontSize: 18,
        textAlign: 'center',
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginLeft: "auto",
        marginRight: "auto"
    },

    inputleft: {
        textAlign: 'center',
        height: 40,
        marginTop: 0,
        width: "20%",
        fontSize: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        padding: 10,
    },
    inputleft22: {
        textAlign: 'center',
        height: 30,
        marginTop: 0,
        width: "100%",
        fontSize: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        padding: 1,
        color: '#ffffff'
    },
   scroolview:{
horizontal:"true"
},
    inputleft3: {
        textAlign: 'center',
        fontSize: 15,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10,
    },
    inputlef2t: {
        textAlign: 'center',
        height: 40,
        width: 300,
        fontSize: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 1,
        padding: 10,
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        top: 2000,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: 2,
    },
    separator1: {
        marginVertical: 50,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        width: 5,
        //resizeMode: 'contain',
        alignItems: "center",
        backgroundColor: "#ffff",
        padding: 15,
        marginTop: 140,
        marginLeft: 20
    },
    buttonApropriacao: {
        width: 5,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#C0C0C0",
        padding: 15,
        marginTop: 10,
        marginLeft: 12,
        height: 50,
        width: 200
    },
    buttonApropriacao1: {
        width: 5,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#C0C0C0",
        padding: 15,
        marginTop: -50,
        marginLeft: 240,
        height: 50,
        width: 200
    },
    deleteTask: {
        justifyContent: "center",
        paddingLeft: 15,
    },
    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    DescriptionTask: {
        textAlign: "center",
        height: 40,
        width: 100,
        fontSize: 15,
        marginLeft: 10,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        color:"#ffffff"
    },
    modal: {
        flex: 1,
        backgroundColor: '#2F4F4F'
    
      },
    
      textoModal: {
    
        color: '#FFF',
    
        marginLeft: 15,
        fontSize: 25,
    
    
      },
      textModal: {
    
        color: '#FFF',
    
        marginLeft: 15,
        fontSize: 15,
      },
      modalHeader: {
    
        marginLeft: 10,
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    
      },
      inputmodal: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 8,
        padding: 8,
        color: '#000',
        fontSize: 16,
        textAlign: "center",
      },
      botaoModal: {
        backgroundColor: '#00335c',
        borderRadius: 5,
        margin: 5,
        padding: 12,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      textoBotaoModal: {
        fontSize: 16,
        color: '#FFF',
    
      },
    buttonNewTask2: {
        width: 60,
        height: 60,
        position: "absolute",
        top: 20,
        left: 560,
        backgroundColor: "#32CD32",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    grid: {
        marginTop: 8,
    
      },
      griditem: {
        padding: 11,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      gridbotaoEditar: {
        position: 'absolute',
        right: 40,
        color: '#5c7ef6',
      },
    
      gridbotaoExcluir: {
        position: 'absolute',
        right: 15,
        color: '#cc1414',
      },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 1,
        height: 40,
        borderWidth: 1,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",

    },

    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: "center",
        fontSize: 50,

    },
    textItem: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",

    },
    placeholderStyle: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        alignItems: 'center',
    }

});

export default styles