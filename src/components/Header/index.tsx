import * as S from "./styles"
export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <section>
          <nav>
            <a href="" className="active">
              Quem sou
            </a>
            <a href="">Projetos</a>
          </nav>
          <a href="">Posts</a>
        </section>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
