import type { NextPage } from "next";
import Head from "next/head";
import NossosServicos from "../components/NossosServicos";
import { Inter } from "@next/font/google";

const roboto = Inter({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const Home: NextPage = () => {
  return (
    <div
      className={`${roboto.variable} flex min-h-screen flex-col items-center justify-center py-2 font-roboto`}
    >
      <Head>
        <title>Instituto Cactus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col text-center h-screen">
        <NossosServicos />
      </main>
    </div>
  );
};

export default Home;
