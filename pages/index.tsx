import type { NextPage } from "next";
import Head from "next/head";
import NossosServicos from "../components/NossosServicos";
import { Inter } from "@next/font/google";
import Estatisticas from "../components/Estatisticas";
import NossoTime from "../components/NossoTime";
import ProvaSocial from "../components/ProvaSocial";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Home: NextPage = () => {
  return (
    <div className={`${inter.variable} flex flex-col items-center font-inter`}>
      <Head>
        <title>Instituto Cactus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen">
        <NossosServicos />
        <Estatisticas />
        <ProvaSocial />
        <NossoTime />
      </main>
    </div>
  );
};

export default Home;
