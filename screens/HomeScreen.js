import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}   showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home Fitness</Text>

          <View style={styles.statsContainer}>
            <StatItem value={workout} label="WORKOUTS" />
            <StatItem value={calories} label="KCAL" />
            <StatItem value={minutes} label="MINS" />
          </View>

          
        </View>
        <View style={styles.card}>
        <FitnessCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const StatItem = ({ value, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  scrollView: {
    marginTop: 45,
  

  },
  header: {
    height: 200,
    width: "100%",
  },
  headerText: {
    color: "#3DB3F3",
    fontWeight: "bold",
    fontSize: 18,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ACAFB0",
    fontSize: 18,
  },
  statLabel: {
    color: "#00A5FF",
    fontSize: 17,
    marginTop: 6,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 7,
  },
  card:{
    marginTop:"-15%"
  }
});

export default HomeScreen;
