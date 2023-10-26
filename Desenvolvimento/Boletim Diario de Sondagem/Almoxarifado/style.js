
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
marginTop: '10%'
  },
  containerrow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#2F4F4F'

  },

containerrow1: {
  flexDirection: 'row',
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 1,
  alignItems: 'center',
  backgroundColor: '#2F4F4F'

},
  button: {
    flexDirection: 'row',
    width: '100%',
    height: '80%',
    marginLeft: 'auto',
    marginTop: '1%',
    alignItems: "center",
    backgroundColor: "#52BE80",
 
    borderRadius: 10,
    padding: 15,
    borderRadius: 2


  },
  buttonRow: {
    flexDirection: 'row',
    width: '50%',
    height: '80%',
    marginLeft: 'auto',
    marginTop: '1%',
    alignItems: "center",
    backgroundColor: "#52BE80",
    marginLeft: '6%',
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
  textdate: {
    color: "#000000",
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:12
  },
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: "#2F4F4F"
  },
  input: {
    textAlign: 'center',
    color: '#000000',
    height: 'auto',
    width: '100%',
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: '1%',
    borderWidth: 1,
    padding: 1,
    backgroundColor: '#FFFFFF',
    padding: 15
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: '10%',
    marginLeft: "auto",
    marginRight: "auto",
    width: '10%',
    resizeMode: 'stretch',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#52BE80',
    width: 10,
    height: 40,
  },
  Tasks: {
    backgroundColor: '#2F4F4F',
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25, 
    marginLeft: 10
},
scrollView: {
  backgroundColor: '#2F4F4F',
  marginHorizontal: 0,
  
},
FlatList: {
  backgroundColor: '#ffff',
  width: "100%",
  flexDirection: "row",
 
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
  color:"#ffffff",
  borderColor:"#ffff"
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
textItem: {
  flex: 1,
  fontSize: 18,
  textAlign: "center",
  
},

dropdown: {
  backgroundColor: 'white',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  marginTop: 1,
  height: '14%',
    width: '100%',
  borderWidth: 1,
  
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
 
},
dropdown1: {
  backgroundColor: 'white',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  marginTop: 1,
  height: '25%',
    width: '100%',
  borderWidth: 1,
  
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
 
},
dropdown2: {
  backgroundColor: 'white',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  marginTop: 1,
  height: '6%',
    width: '100%',
  borderWidth: 1,
  
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
 
},
dropdown3: {
  backgroundColor: 'white',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  marginTop: 1,
  height: '12%',
    width: '100%',
  borderWidth: 1,
  
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
 
},
dateComponente:{
width: 350
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