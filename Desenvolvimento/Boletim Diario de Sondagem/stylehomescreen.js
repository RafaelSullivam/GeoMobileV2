import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#2F4F4F',
    alignItems: 'center',
    justifyContent: 'center'
  
},

  label: {
    width: 90,
    height: 60,
    marginTop: '1%',
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    color: '#ffffff',
    backgroundColor:'#2F4F4F'
  },
  buttonImageIconStyle: {
    padding: 20,
    margin: 0,
    height: 10,
    width: 10,
    
    resizeMode: 'stretch'
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: 300,
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: '1%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },

  ImageIconStyle: {
    padding: 20,
    margin: 10,
    height: 20,
    width: 20,
    marginLeft: 'auto',
    resizeMode: 'stretch',
  },
  button: {
    width: 130,
    marginLeft: 'auto',
    marginRight: "auto",
    marginTop: 60,
    alignItems: "center",
    backgroundColor: "#52BE80",
    borderRadius: 50,
    padding: 10
  
  },


});

export default styles