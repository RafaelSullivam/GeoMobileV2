import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#2F4F4F'

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
  button: {
    width: '100%',
    marginLeft: 'auto',
    marginTop: '1%',
    alignItems: "center",
    backgroundColor: "#52BE80",
    marginLeft: 'auto',
    borderRadius: 0,
    padding: 15,

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
    borderRadius: 0,
    padding: 15,
    borderRadius: 2

  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
},
DescriptionTask: {
  textAlign: "center",
  height: 40,
  width: 250,
  fontSize: 15,
  marginLeft: 10,
  margin: 10,
  borderWidth: 1,
  padding: 10,
  color:"#ffffff",

},
labelperfuracao: {
  width: "90%",
  flex: 1,
  justifyContent: "center",
  marginTop: 20,
  fontSize: 15,
  marginLeft: 10,
  color: "#FFFFFF",
  
},
});

export default styles