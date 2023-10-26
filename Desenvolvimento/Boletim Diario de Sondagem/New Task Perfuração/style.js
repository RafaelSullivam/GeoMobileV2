import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
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
    label: {
        width: "90%",
        fontSize: 20,
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#000000"
    },
    input: {
        fontSize: 18,
        textAlign: 'center',
        width: "100%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 50,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonNewTask2: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 560,
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
    inputleft: {
        textAlign: 'center',
        height: 40,
        width: 150,
        fontSize: 15,
        marginLeft: 20,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})
export default styles