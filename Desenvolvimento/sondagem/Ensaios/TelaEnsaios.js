
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";




const TelaEnsaios = (props) => {




  return (


      <View style={styles.container33}>
      <TouchableOpacity style={styles.button33}

        onPress={() => props.navigation.navigate('InfiltracaoSoloSondagem')}
      >
        <Text style={styles.text}> Lefran </Text>
      </TouchableOpacity>





      <Text> </Text>
      <TouchableOpacity style={styles.button33}
      
        onPress={() => props.navigation.navigate('Lugeon')}
      >


        <Text style={styles.text}>  Lugeon  </Text>
      </TouchableOpacity>


   



      <Text> </Text>
      <TouchableOpacity style={styles.button33}

        onPress={() => props.navigation.navigate('')}
      >


        <Text style={styles.text}>    </Text>
      </TouchableOpacity>


    </View>



  );
};


export default TelaEnsaios;