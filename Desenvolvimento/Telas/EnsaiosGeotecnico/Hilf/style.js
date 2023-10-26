
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
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 	'#2F4F4F',

  },
 
  ImageIconStyle: {
    padding: 20,
    margin: 10,
    height: 20,
    width: 20,
    marginLeft: 'auto',
    resizeMode: 'stretch',
  },
  ImageIconStyle2: {
    padding: 20,
    margin: 10,
    height: 60,
    width: 60,
    marginLeft: "1%",
    resizeMode: 'stretch',
    backgroundColor: '#2F4F4F'
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
  labelcontanier1: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: -20,
    fontSize: 15,
    marginLeft: 150,
    color: "#FFFFFF"
  },
  labelcontanier2: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    fontSize: 15,
    marginTop: 20,
    marginRight: '30%',
    textAlign:'center',
    color: "#FFFFFF"
  },
  labelcontanier3: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: -20,
    fontSize: 15,
    textAlign:'center',
    marginLeft: '20%',
    color: "#FFFFFF"
  },
  labelcontanier4: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: -10,
    fontSize: 15,
    marginRight: 0,
    color: "#ffffff"
  },
  labelcontanier5: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 0,
    fontSize: 15,
    marginLeft: 110,
    color: "#ffffff"
  },
  labelsubtitle: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    fontSize: 20,
    marginLeft: 300,
    color: "#000000"
  },

  labelsubtitle2: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    fontSize: 20,
    marginLeft: -15,
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


  inputleft: {
    textAlign: 'center',
    height: 40,
    width: "90%",
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    padding: 10,
  },
  
  inputleftDesable: {
    textAlign: 'center',
    height: 40,
    width: "90%",
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#808080",
    borderWidth: 1,
    padding: 10,
    color: '#ffffff'
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
   
  },
  
button: {
  flexDirection: 'row',
  width: '40%',
  height: '65%',
  marginLeft: 'auto',
  marginTop: '1%',
  alignItems: "center",
  backgroundColor: "#52BE80",

  borderRadius: 10,
  padding: 15,
  borderRadius: 2


},
text: {
  color: "#ffffff",
  fontSize: 20,
  marginLeft: "auto",
  marginRight: "auto",
},

containerrow: {
  flexDirection: 'row',
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 13,
  alignItems: 'center',
  backgroundColor: '#2F4F4F'

},
  buttonRow: {
    flexDirection: 'row',
    width: '40%',
    height: '70%',
    marginLeft: 'auto',
    marginTop: '1%',
    alignItems: "center",
    backgroundColor: "#52BE80",
    marginLeft: '6%',
    borderRadius: 0,
    padding: 15,
    borderRadius: 2

  },
  loading: {
    width: 90,
    height: 90,
    marginLeft: 700,
    marginTop: -60,
    alignItems: "center",
    backgroundColor: "#52BE80",
    marginLeft: 'auto',
    borderRadius: 5,
    padding: 10
  },
  buttonpeneira: {
    width: 100,
    marginLeft: 700,
    marginTop: -30,
    alignItems: "center",
    backgroundColor: "#52BE80",
    marginLeft: 'auto',
    borderRadius: 80,
    padding: 10
  },
  containerbtnbuscar: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 5,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor:"#F8F8FF",
    marginLeft:1,
   // marginRight:"auto",
    color: "#000000"
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
    bottom: 80,
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
 
  

 
  label: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    marginTop: 25,
    fontSize: 15,
    marginRight: '5%',
    color: "#ffffff",
    textAlign:"center"
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
  buttonImageIconStyle: {
    padding: 20,
    margin: 0,
    height: 5,
    width: 5,
    resizeMode: 'stretch',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#52BE80',
    width: 10,
    height: 40,
  },
  buttonImageIconStyleSerie: {
    padding: 20,
    margin: 0,
    height: 10,
    width: 10,
    resizeMode: 'stretch',
  },
  labelcontanier: {
    width: "90%",
    flex: 1,
    marginTop: "5%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    color: "#FFFFFF",
    flexWrap: 'wrap',
   justifyContent: 'center',
   marginRight: '6%',
   textAlign:"center"
  },
  labelcontanierleft: {
    width: "90%",
    flex: 1,
    marginLeft: "31%",
    justifyContent: "center",
    marginTop: "5%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    // marginRight:"auto",
    color: "#ffffffff"
  },
  labelcontanierright: {
    width: "90%",
    flex: 1,
    marginRight: "17%",
    justifyContent: "center",
    marginTop: "5%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    // marginRight:"auto",
    color: "#ffffffff"
  },
  labelleft: {
    width: "90%",
    flex: 1,
    marginLeft: "33%",
    justifyContent: "center",
    marginTop: "5%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    // marginRight:"auto",
    color: "#ffffff"
  },
  LabelTituloLeft: {
    width: "90%",
    flex: 1,
    marginLeft: "8%",
    justifyContent: "center",
    marginTop: "2%",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    // marginRight:"auto",
    color: "#ffffff"
  },
  labelright: {
    width: "90%",
    flex: 1,
    marginRight: "8%",
    justifyContent: "center",
    marginTop: "5%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    color: "#ffffff"
  },
  LabelTituloRight: {
    width: "90%",
    flex: 1,
    marginLeft: "25%",
    justifyContent: "center",
    marginTop: "2%",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    color: "#ffffff"
  },
  LabelTituloCenter: {

    marginRight: "1%",
    justifyContent: "center",
    marginTop: "1%",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    color: "#ffffff"
  },
  labelspace: {
    width: "90%",
    flex: 1,
    marginTop: "5%",
    marginLeft: "70%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    color: "#FFFFFF",
    flexWrap: 'wrap',
   justifyContent: 'center',
   marginStart: 10
  },
  labelspaceprog: {
    width: "50%",
    flex: 1,
    justifyContent: "center",
    marginTop: 0,
    fontSize: 0,
    // marginRight:"auto",
    color: "#000000"
  },
  labelsubtitle: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    fontSize: 20,
    marginLeft: 300,
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
 

  //  inputleft : {
  //     textAlign: 'center',
  //     height: 40,
  //     width: 200,
  //     fontSize: 12,
  //     marginLeft: "auto",
  //     marginRight: "auto",
  //     borderWidth: 1,
  //     padding: 1,

  //   },
  scrollView: {
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
    horizontal: 'true'
  },
  inputleft2: {
    textAlign: 'center',
    height: 40,
    width: "30%",
    fontSize: 12,
   
    marginRight: "5%",
    borderWidth: 1,
    padding: 1,
backgroundColor: '#FFFFFF'
  },
  inputleft3: {
    textAlign: 'center',
    height: 40,
    width: '200%',
    fontSize: 12,
   
    marginLeft: "5%",
    borderWidth: 1,
    padding: 1,
backgroundColor: '#FFFFFF'
  },
  inputleft1: {
    textAlign: 'center',
    height: 40,
    width: 160,
    fontSize: 12,

    marginRight: "20%",
    borderWidth: 1,
    padding: 0,

  },
  inputlef2t: {
    textAlign: 'center',
    height: 40,
    width: 300,
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 	'#ffffff'
  },
 
  labelright: {
    width: "90%",
    flex: 1,
    marginRight: "8%",
    justifyContent: "center",
    marginTop: "5%",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2F4F4F",
    color: "#ffffff"
  },
  inputlef3t: {
    textAlign: 'center',
    height: 40,
    width: "30%",
    fontSize: 15,
    marginRight: "1%",
    marginLeft: "5%",
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 	'#ffffff',
    color:'#000000'
  },
  inputlef4t: {
    textAlign: 'center',
    height: 40,
    width: '30%',
    fontSize: 15,
    marginRight: "5%",
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 	'#ffffff',
    color: '#000000'
  },
  inputleftop: {
    textAlign: 'center',
    height: 40,
    width: 300,
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 	'#ffffff'
  },
  inputleftespace: {
    textAlign: 'center',
    height: 40,
    width: 100,
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    borderWidth: 0,
    padding: 10,
  },
  inputleftespace2: {
    textAlign: 'center',
    height: 40,
    width: 20,
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    borderWidth: 0,
    padding: 10,
  },
  inputleftProg: {
    textAlign: 'center',
    height: 40,
    width: 220,
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    borderWidth: 0,
    padding: 10,
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: '12%',
    fontSize: 12,
 
    marginRight: "2%",
    marginTop: 1,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 	'#ffffff'
  },

  inputMassa1: {
    textAlign: 'center',
    height: 40,
    width: 160,
    fontSize: 15,
    marginLeft: 15,
    marginRight: "auto",
    marginTop: 1,
    borderWidth: 1,
    padding: 10,
  },
  inputMassa2: {
    textAlign: 'center',
    height: 40,
    width: 160,
    fontSize: 15,
    marginLeft: -150,
    marginRight: "auto",
    marginTop: 1,
    borderWidth: 1,
    padding: 10,
  },
  inputMassa3: {
    textAlign: 'center',
    height: 40,
    width: 160,
    fontSize: 15,
    marginLeft: -150,
    marginRight: "auto",
    marginTop: 1,
    borderWidth: 1,
    padding: 10,
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
 
 
  buttonNewTask: {
    width: 80,
    height: 60,
    position: "absolute",
    top: 30,
    left: 468,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    color: '#ffffff'
  },
  textStyle: {
    width: 150,
    height: 100,
    position: "absolute",
    top: 30,
    left: 435,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  separator1: {
    marginVertical: 8,
    color: '#2F4F4F',
    
    borderBottomColor: '#2F4F4F',
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    bottom: 40,
    left: 20,
    backgroundColor: "#32CD32",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
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
  shadow:{
  marginLeft:'0%'
  },
  placeholderStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    alignItems: 'center',
  },
  dropdown1: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 1,
    height: 40,
    borderWidth: 1,
    width: "30%",
    marginLeft: 50,
    marginRight: "auto",
    textAlign: "center",

  },

  item1: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: "center",
    fontSize: 50,

  },
  textItem1: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",

  },
  placeholderStyle1: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    alignItems: 'center',
  }

});



export default styles