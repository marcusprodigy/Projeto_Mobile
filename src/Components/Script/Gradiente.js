import { View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


function Gradiente() {


    return(

      <View>
        <LinearGradient colors={['#FAD961', '#F76B1C']} style={styles.gradient} />
      </View>

      
      )
  
  }

  export default Gradiente;