/* eslint-disable @next/next/no-img-element */

import { Button } from "components/Atoms/Button"
import Image from "next/image"

import * as S from "./styles"

export function Hero() {
  return (
    <S.Hero>
      <section>
        <span>
          <Image src="/img/hand.svg" alt="" width={25} height={25} />
          Bem vindo(a) ao meu portfólio!
        </span>
        <h1>Prazer, eu sou Luiz Henrique</h1>
        <p>
          e desenvolvo projetos incríveis com tecnologias focadas em front-end,
          como <span>ReactJS</span> e <span>NextJS</span>.
        </p>
        <Button>Continue explorando</Button>
      </section>
    </S.Hero>
  )
}
