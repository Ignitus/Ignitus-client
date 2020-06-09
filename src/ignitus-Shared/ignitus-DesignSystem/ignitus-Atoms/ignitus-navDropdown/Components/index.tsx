import React from 'react';
import * as S from '../styles';
import { Props } from '../types';
import { Heading5 } from '../../typography';

export const NavDropdown = ({ options }: Props) => {
  return (
    <React.Fragment>
      <S.Container>
        {options.map(details => (
          <Heading5>
            <S.Option> {details} </S.Option>
          </Heading5>
        ))}
      </S.Container>
    </React.Fragment>
  );
};
