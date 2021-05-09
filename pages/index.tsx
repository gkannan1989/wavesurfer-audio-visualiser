import * as React from "react";
import Container from "../components/container";
import Header from "../components/Header";
import Layout from "../components/layout";
import Head from "next/head";
import Task1 from "../components/Tasks/task1";
import Task0 from "../components/Tasks/task0";
import Task2 from "../components/Tasks/task2";
import Task3 from "../components/Tasks/task3";
import Task4 from "../components/Tasks/task4";
import Task5 from "../components/Tasks/task5";
import Task6 from "../components/Tasks/task6";
import TaskCompleteButton from "../components/Tasks/taskCompleteButton";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Papercup technical assessment</title>
        </Head>
        <Container>
          <Header />
          <Task0 />
          <Task1 />
          <Task2 />
          <Task3 />
          <Task4 />
          <Task5 />
          <Task6 />
          <TaskCompleteButton />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
