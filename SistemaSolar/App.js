import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { planetas } from "./planetas";
import { Planet } from './Planet';

export default function App() {
  const [planetaSelecionado, setPlanetaSelecionado] = useState(null);

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar style="light" />

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Explore o Sistema Solar</Text>
      </View>

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.conteudoScroll}>
          {planetaSelecionado ? (
            <Planet
              nome={planetaSelecionado.nome}
              img={planetaSelecionado.img}
              descricaoBreve={planetaSelecionado.descricaoBreve}
              descricao={planetaSelecionado.descricao}
              velocidadeOrbitalMediaKmS={planetaSelecionado.velocidadeOrbitalMediaKmS}
              quantidadeSatelites={planetaSelecionado.quantidadeSatelites}
              areaSuperficieKm2={planetaSelecionado.areaSuperficieKm2}
              periodoRotacaoDias={planetaSelecionado.periodoRotacaoDias}
            />
          ) : (
            <Text style={styles.textoInstrucao}>Selecione um planeta abaixo para ver os detalhes.</Text>
          )}
        </ScrollView>

        <View style={styles.containerScrollHorizontal}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {planetas.map((planeta) => (
              <TouchableOpacity key={planeta.nome} onPress={() => setPlanetaSelecionado(planeta)} style={styles.containerPlaneta}>
                <Image source={{ uri: planeta.img }} style={styles.imagemPlaneta} />
                <Text style={styles.nomePlaneta}>{planeta.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#0B0C1E",
    
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 40,
  },
  cabecalho: {
    backgroundColor: "#1F1F43",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textoCabecalho: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  conteudoScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoInstrucao: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  containerScrollHorizontal: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#1F1F43',
  },
  containerPlaneta: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imagemPlaneta: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  nomePlaneta: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 5,
  },
});
