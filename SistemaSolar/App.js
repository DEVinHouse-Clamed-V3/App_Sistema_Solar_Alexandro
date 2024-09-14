import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { planetas } from './planetas'

export default function App() {
  return (
    
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style ={styles. textoHeader}>Vamos Explorar</Text>
        </View>
     
     
        <View style={styles.footer}>
          <Text style ={styles. textoHeader}>Nome do Planeta</Text>
        </View>

          
    </View>


     


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#0A0A29',
   
  },
  header:{
    backgroundColor: '#FFA500',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: 20,
  },
  textoHeader:{

    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    
  },
  footer:{
    backgroundColor: '#FFA500',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    marginTop: 20,
  }
});
