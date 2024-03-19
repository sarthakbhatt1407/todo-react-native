import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
const DeletedTask = (props) => {
  let c = 0;

  return (
    <View style={styles.container}>
      <FlatList
        data={props.tasks}
        renderItem={(itemData) => {
          if (itemData.item.status == "pending") {
            return;
          }
          c++;
          return (
            <Animatable.View
              animation={"fadeInRightBig"}
              delay={c == 1 ? c * 0 : c * 50}
              style={styles.task}
            >
              <Text style={styles.sNo}>{c}</Text>
              <Text style={styles.taskTxt}>{itemData.item.task}</Text>
              <Pressable
                onPress={props.compToPending.bind(this, itemData.item.id)}
              >
                <Text style={styles.btn}>
                  <Icon name="hourglass-start" size={18} color="black" />
                </Text>
              </Pressable>
            </Animatable.View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    height: "89%",
    padding: 10,

    width: vw(100),
    flexDirection: "column",
  },
  task: {
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  sNo: {},
  taskTxt: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "left",
    width: "70%",
  },
  btn: { borderWidth: 1, padding: 10, borderColor: "#efefef", elevation: 0.5 },
});

export default DeletedTask;
