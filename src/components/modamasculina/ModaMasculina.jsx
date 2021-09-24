import React, {Component} from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import CarrosselMasculino from './CarrosselMasculino';
import CarrosselMasculino1 from './CarrosselMasculino1';
import CarrosselMasculino2 from './CarrosselMasculino2';
import CarrosselMasculino3 from './CarrosselMasculino3';
import CarrosselMasculino4 from './CarrosselMasculino4';
import CarrosselMasculino5 from './CarrosselMasculino5';
import CarrosselMasculino6 from './CarrosselMasculino6';
import CarrosselMasculino7 from './CarrosselMasculino7';
import CarrosselMasculino8 from './CarrosselMasculino8';

import {Title, StyledContainer, Section, StyledTitulo, Span, IconeLike} from './StyledMasculino';
class ModaMasculina extends Component {
  render() {
      return(
        <>
          <StyledTitulo>"Existe estilo em tudo, encontre o que te inspira a ser você mesmo"</StyledTitulo>
          <StyledContainer>
              <Section>
                <CarrosselMasculino />
                  <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Camisetas Polo cores Branca, Verde e Amarela</Title>
                  <Title>Tamanhos disponivéis P, M, G, GG</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselMasculino1 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Sungas lisa</Title>
                  <Title>Tamanhos disponivéis P, M, G</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselMasculino2 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title> Camisetas Estampadas</Title>
                  <Title>Tamanhos disponivéis P, M </Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselMasculino3 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title> Camiseta lisa nas cores Azul, Azul escuro e Roxa</Title>
                  <Title>Tamanhos disponíveis M, G, GG</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselMasculino4 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title> Camiseta manga longa cores Cinza, Vinho e Preta</Title>
                  <Title>Tamanhos disponíveis  P, M, G, GG</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselMasculino5 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title> Jaquetas cores Rosa, Marron e Militar</Title>
                  <Title>Tamanhos disponíveis P, M </Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselMasculino6 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Blusa Moletom</Title>
                  <Title>Tamanhos disponíveis P, M, G, GG</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselMasculino7 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title> Bonés Cores Rosa, Vermelho e Branco</Title>
                  <Title>Tamanhos Unicos</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselMasculino8 />
                <Span> 
                  <input type="checkbox" name="name" value=""></input>
                  <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Calça Jeans</Title>
                  <Title>Tamanhos disponíveis 36, 38, 40, 42</Title>
                  <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>

        </>
      );
  }
}

export default ModaMasculina ;