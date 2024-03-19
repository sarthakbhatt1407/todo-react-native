import React, { useEffect, useState } from "react";
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import PendingTasks from "./screens/PendingTasks";
import Home from "./screens/Home";
import DeletedTask from "./screens/DeletedTask";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  const taskAdder = (txt) => {
    setTasks((tasks) => {
      return [
        {
          id: Number.parseInt(Math.random() * 999999),
          task: txt,
          status: "pending",
        },
        ...tasks,
      ];
    });
  };

  const pendingToComp = (id) => {
    let task = tasks.find((task) => {
      return task.id == id;
    });
    const ind = tasks.findIndex((task) => {
      return id == task.id;
    });
    let arr = tasks;
    task.status = "completed";
    arr[ind] = task;
    setTasks((task) => {
      return [...arr];
    });
  };

  const compToPending = (id) => {
    let task = tasks.find((task) => {
      return task.id == id;
    });
    const ind = tasks.findIndex((task) => {
      return id == task.id;
    });
    let arr = tasks;
    task.status = "pending";
    arr[ind] = task;
    setTasks((task) => {
      return [...arr];
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NativeRouter>
          <StatusBar style="dark" />
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home taskAdder={taskAdder} />} />
            <Route
              path="/pending-task"
              exact
              element={
                <PendingTasks tasks={tasks} pendingToComp={pendingToComp} />
              }
            />
            <Route
              path="/deleted-task"
              exact
              element={
                <DeletedTask tasks={tasks} compToPending={compToPending} />
              }
            />
          </Routes>
        </NativeRouter>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default App;
