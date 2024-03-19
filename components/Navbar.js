import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import { useNavigate } from "react-router-native";
import * as Animatable from "react-native-animatable";
const Navbar = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");

  const onClickHandler = (txt) => {
    setCurrent(txt);
  };

  return (
    <View style={styles.outerBox}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={require("../assets/906334.png")} />
        <Text style={styles.header}>ToDo</Text>
      </View>
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#2579c6" }}
          onPress={() => {
            setCurrent("home");
            navigate("/");
          }}
        >
          <Text style={current === "home" ? styles.activeLink : styles.link}>
            Home
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: "#2579c6" }}
          onPress={() => {
            setCurrent("pending");
            navigate("/pending-task");
          }}
        >
          <Text style={current === "pending" ? styles.activeLink : styles.link}>
            pending
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: "#2579c6" }}
          onPress={() => {
            setCurrent("deleted");
            navigate("/deleted-task");
          }}
        >
          <Text style={current === "deleted" ? styles.activeLink : styles.link}>
            Completed
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    flexDirection: "column",
    elevation: 10,
  },
  logoBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  header: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  container: {
    height: vh(7),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  activeLink: {
    backgroundColor: "#1a88ef",
    paddingVertical: 10,
    paddingHorizontal: 30,
    textTransform: "capitalize",
    color: "white",
    borderRadius: 7,
    elevation: 100,
    fontWeight: "bold",
  },
  link: {
    fontWeight: "bold",
    color: "black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    textTransform: "capitalize",
  },
});
export default Navbar;
