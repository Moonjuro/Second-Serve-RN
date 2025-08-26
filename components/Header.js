import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../app/styles";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView style={styles.headerView}>
      {/* Left side */}
      <View style={styles.leftSection}>
        <Image
          source={require("../assets/images/iconServe.png")}
          style={styles.logoHeader}
          resizeMode="contain"
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleLine1}>Second</Text>
          <Text style={styles.titleLine2}>Serve</Text>
        </View>
      </View>

      {/* Right side stacked */}
      <View style={styles.rightSection}>
        <View style={styles.loggedInStateView}>
          <Text style={styles.loggedInState}>Not Logged In</Text>
        </View>

        <LinearGradient
          colors={["rgba(55,194,0,0.95)", "rgba(51,255,0,0.95)"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradient}
        >
          <View style={styles.partnerWithUsView}>
            <Text style={styles.partnerWithUs}>Partner With Us</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
