import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import * as Animatable from "react-native-animatable";
const Home = (props) => {
  const [show, setShow] = useState(false);
  const [txt, setTxt] = useState("");
  const [txtErr, setTxtErr] = useState(false);

  return (
    <View style={styles.container}>
      {show && (
        <Modal animationType="slide">
          <View style={styles.modal}>
            <Text style={styles.modalHeading}>Add New Task</Text>
            <View style={styles.modalInner}>
              <TextInput
                style={styles.input}
                placeholder="Enter task"
                onChangeText={(t) => {
                  setTxtErr(false);
                  setTxt(t);
                }}
              />
              {txtErr && (
                <Text
                  style={{
                    textAlign: "left",
                    width: "80%",
                    color: "red",
                    opacity: 0.5,
                    marginTop: -10,
                  }}
                >
                  Invalid Input
                </Text>
              )}
              <View style={styles.btnBox}>
                <Pressable
                  onPress={() => {
                    if (txt.length < 1) {
                      setTxtErr(true);
                      return;
                    }
                    props.taskAdder(txt);
                    setShow(!show);
                  }}
                >
                  <Text style={styles.btn}>Add</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setTxt("");
                    setShow(!show);
                  }}
                >
                  <Text style={styles.cancel}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      )}
      <Animatable.View animation="zoomIn" style={styles.outerBox}>
        <Text style={styles.welcome}>Welcome Back!</Text>
        <Text style={styles.add}>Add New Task</Text>
        <Pressable
          onPress={() => {
            setShow(!show);
          }}
        >
          <Text style={styles.btn}>+</Text>
        </Pressable>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaeaea",
    height: "89%",
    width: vw(100),
  },
  outerBox: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 7,
  },
  welcome: {
    fontSize: 18,
  },
  add: {
    fontSize: 25,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#1a88ef",
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 22,
    color: "white",
    borderRadius: 10,
    fontWeight: "bold",
  },
  cancel: {
    backgroundColor: "#cccccc",
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 22,
    color: "black",
    borderRadius: 10,
  },
  btnBox: {
    flexDirection: "row",
    gap: 10,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaeaea",
    height: vh(97),
  },
  modalHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  modalInner: {
    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    gap: 20,
    width: "80%",
    elevation: 10,
    borderRadius: 10,
  },
  input: {
    width: "80%",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
});

export default Home;
