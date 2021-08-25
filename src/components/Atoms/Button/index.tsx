import { ReactNode } from "react"

import * as S from "./styles"

type IButtonProps = {
  children: ReactNode
}
export function Button({ children }: IButtonProps) {
  return <S.Button>{children}</S.Button>
}
