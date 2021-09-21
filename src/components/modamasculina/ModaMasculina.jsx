import React, {Component} from 'react';
import CarrosselMasculino from './CarrosselMasculino';
import CarrosselMasculino1 from './CarrosselMasculino1';
import CarrosselMasculino2 from './CarrosselMasculino2';
import CarrosselMasculino3 from './CarrosselMasculino3';
import CarrosselMasculino4 from './CarrosselMasculino4';
import CarrosselMasculino5 from './CarrosselMasculino5';
import CarrosselMasculino6 from './CarrosselMasculino6';
import CarrosselMasculino7 from './CarrosselMasculino7';
import CarrosselMasculino8 from './CarrosselMasculino8';

import {Title, StyledContainer, Section} from './StyledMasculino';


class ModaMasculina extends Component {
  render() {
      return(
        <>
          <StyledContainer>
              <Section>
                <CarrosselMasculino />
                  <Title>Camisetas Polo cores Branca, Verde e Amarela</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselMasculino1 />
                  <Title>Camisetas polos Listradas</Title>
                  <Title>Tamanho P, M, G</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselMasculino2 />
                  <Title> Camisetas Estampadas</Title>
                  <Title>Tamanho P, M </Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselMasculino3 />
                  <Title> Camiseta lisa nas cores Azul, Azul escuro e Roxa</Title>
                  <Title>Tamanho M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselMasculino4 />
                  <Title> Camiseta manga longa cores Cinza, Vinho e Preta</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselMasculino5 />
                  <Title> Jaquetas cores Rosa, Marron e Militar</Title>
                  <Title>Tamanho P, M </Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselMasculino6 />
                  <Title>Blusa Moletom</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselMasculino7 />
                  <Title> Bonés Cores Rosa, Vermelho e Branco</Title>
                  <Title>Tamanhos Unicos</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselMasculino8 />
                  <Title>Calça Jeans</Title>
                  <Title>Tamanho 36, 38, 40, 42</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

        </>
      );
  }
}

export default ModaMasculina ;