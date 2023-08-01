import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }:AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>    
  )
}
