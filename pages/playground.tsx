import * as React from "react";
import Container from "../components/container";
import Header from "../components/Header";
import Layout from "../components/layout";
import Head from "next/head";
import TaskPlayground from "../components/TaskPlaygroud/TaskPlayground";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://papercup-fake-server.vercel.app/api/demo",
  cache: new InMemoryCache()
});

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Papercup technical assessment</title>
        </Head>
        <Container>
          <Header />
          <ApolloProvider client={client}>
            <TaskPlayground />
          </ApolloProvider>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
