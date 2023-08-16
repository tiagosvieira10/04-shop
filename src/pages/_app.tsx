import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logImg from '../assets/logo.png';
import { Container, FooterContainer, Header } from "../styles/pages/app";

import Image from "next/image";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }:AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logImg} alt="" width={220} height={220} />
      </Header>

      <Component {...pageProps} />

      <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Nalibeads. Todos os direitos reservados.</p>
      </FooterContainer>
      
    </Container>    
  )
}
