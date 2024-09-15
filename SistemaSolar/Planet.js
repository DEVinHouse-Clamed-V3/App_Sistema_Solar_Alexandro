import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export function Planet({ nome, img, descricaoBreve, velocidadeOrbitalMediaKmS, quantidadeSatelites, areaSuperficieKm2, periodoRotacaoDias }) {
  return (
    <View style={styles.conteinerCentro}>
      <Text style={styles.tituloTextCard}>{nome}</Text>
      
      <Image source={{ uri: img }} style={styles.imgCard} />
      
      <View style={styles.conteinerCentro}>
        <Text style={styles.descricaoTextCard}>{descricaoBreve}</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textCardLabel}>Average Orbital Speed:</Text>
        <Text style={styles.textCardValue}>{velocidadeOrbitalMediaKmS} km/s</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textCardLabel}>Satellites:</Text>
        <Text style={styles.textCardValue}>{quantidadeSatelites}</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textCardLabel}>Surface Area:</Text>
        <Text style={styles.textCardValue}>{areaSuperficieKm2} km²</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textCardLabel}>Rotation Period:</Text>
        <Text style={styles.textCardValue}>{periodoRotacaoDias}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteinerCentro: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 20,
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
    color: "#FFF", 
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricaoTextCard: {
    color: "#FFF", 
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 10,
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
