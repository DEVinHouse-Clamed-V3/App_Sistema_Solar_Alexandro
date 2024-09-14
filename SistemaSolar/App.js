import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { planetas } from "./planetas";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.textoHeader}>Vamos Explorar</Text>
      </View>

      <View style={styles.container}>
        <ScrollView>
          {planetas.map((card) => (
            <View key={card.nome} style={styles.conteinerCentro}>
              <Text style={styles.tituloTextCard}>{card.nome}</Text>
              
              <Image source={{ uri: card.img }} style={styles.imgCard} />

              <View style={styles.espacoCard}>
                <Text style={styles.textCardLabel}>Average Orbital Speed:</Text>
                <Text style={styles.textCardValue}>{card.velocidadeOrbitalMediaKmS} km/s</Text>
              </View>

              <View style={styles.espacoCard}>
                <Text style={styles.textCardLabel}>Satellites:</Text>
                <Text style={styles.textCardValue}>{card.quantidadeSatelites}</Text>
              </View>

              <View style={styles.espacoCard}>
                <Text style={styles.textCardLabel}>Surface Area:</Text>
                <Text style={styles.textCardValue}>{card.areaSuperficieKm2} km²</Text>
              </View>

              <View style={styles.espacoCard}>
                <Text style={styles.textCardLabel}>Rotation Period:</Text>
                <Text style={styles.textCardValue}>{card.periodoRotacaoDias}</Text>
              </View>
            </View>
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
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 30,
  },
  textoHeader: {
    color: "#FFD700", 
    fontSize: 40,
    fontWeight: "bold"
  },
  conteinerCentro: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#111", 
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  tituloTextCard: {
    color: "#FFD700", 
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  espacoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
  },
  imgCard: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  textCardLabel: {
    color: "#A9A9A9", 
    fontSize: 16,
    fontWeight: "normal",
  },
  textCardValue: {
    color: "#FFD700", 
    fontSize: 16,
    fontWeight: "bold",
  },

});
