import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#2F4F4F',
    alignItems: 'center',
    justifyContent: 'center'
  
},
  container1: {
    flexDirection: 'colunm',
    flex: 1,
    backgroundColor: '#ffff'
  },
  containerbtnbuscar: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 5,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor:"#F8F8FF",
    marginLeft:10,
    backgroundColor:'#2F4F4F',
   // marginRight:"auto",
    color: "#000000"
  },
  label: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 25,
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
    color: "#000000"
  },
  labelcontanier: {
    
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor:"#2F4F4F",
    marginLeft:"auto",
    marginRight:'auto',
   // marginRight:"auto",
    color: "#FFFFFF",
    
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
    width: "90%",
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  inputleft3: {
    textAlign: 'center',
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  textModal: {
    
    color: '#FFF',

    marginLeft: 15,
    fontSize: 15,
  },
  botaoModal: {
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',

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
    marginVertical: 8,
    borderBottomColor: '#F8F8FF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    width: 100,
    marginLeft: 700,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#52BE80",
    marginLeft: 'auto',
    borderRadius: 50,
    padding: 10
  },
  buttonImageIconStyle: {
    padding: 20,
    margin: 0,
    height: 5,
    width: 5,
    resizeMode: 'stretch',
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
  buttonApropriacao2: {
    width: 5,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#C0C0C0",
    padding: 15,
    marginTop: -50,
    marginLeft: 470,
    height: 50,
    width: 200
  },
  buttonApropriacao3: {
    width: 5,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#C0C0C0",
    padding: 15,
    marginTop: -50,
    marginLeft: 700,
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
  },
  buttonNewTask2: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 200,
    left: 20,
    backgroundColor: "#32CD32",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
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
placeholderStyle:{
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    alignItems: 'center',
}

});

export default styles