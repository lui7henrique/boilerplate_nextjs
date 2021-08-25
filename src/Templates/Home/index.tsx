import { Header } from "components/Header"
import { Hero } from "components/Hero"
import Head from "next/head"

import * as S from "./styles"

export function HomeTemplate() {
  return (
    <>
      <Head>
        <title>Home | Luiz Henrique</title>
      </Head>

      <Header />
      <S.Container>
        <Hero />
      </S.Container>
    </>
  )
}
