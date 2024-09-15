import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { planetas } from "./planetas";
import { Planet } from './Planet';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.textoHeader}>Vamos Explorar o Sistema Solar</Text>
      </View>

      <View style={styles.container}>
        <ScrollView>
          {planetas.map((planeta) => (
            <Planet 
              key={planeta.nome}
              nome={planeta.nome}
              img={planeta.img}
              descricaoBreve={planeta.descricaoBreve}
              velocidadeOrbitalMediaKmS={planeta.velocidadeOrbitalMediaKmS}
              quantidadeSatelites={planeta.quantidadeSatelites}
              areaSuperficieKm2={planeta.areaSuperficieKm2}
              periodoRotacaoDias={planeta.periodoRotacaoDias}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B0C1E",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  header: {
    backgroundColor: "#1F1F43", 
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 30,
    
  },
  textoHeader: {
    color: "#FFF", 
    fontSize: 25,
    fontWeight: "bold"
  }
});
