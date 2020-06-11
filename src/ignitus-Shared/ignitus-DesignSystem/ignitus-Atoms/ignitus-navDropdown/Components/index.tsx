import React from 'react';
import { Layer } from '../../../ignitus-Organisms/ignitus-SideNavigation/Common/styles';
import * as S from '../styles';
import { Props } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export const NavDropdown = ({ options, name }: Props) => {
  const [content, setContent] = React.useState(false);
  return (
    <React.Fragment>
      <S.NavItem onClick={() => setContent(!content)}>
        <S.StyledIcon name={AppIcon.StudentIcon} marginRight />
        {name}
        <S.StyledIcon name={AppIcon.FilledArrowDownIcon} marginLeft />
      </S.NavItem>
      {content ? (
        <S.Container>
          {options.map(({ details, isLast }: any) => (
            <div key={details}>
              {isLast === true ? (
                <Layer
                  border={false}
                  style={{ height: '1rem' }}
                  semiBold
                  marginTop={false}
                  marginBottom={false}
                >
                  {' '}
                  <div className="NavDropdown"> {details} </div>
                </Layer>
              ) : (
                <Layer
                  border
                  className="NavDropdown"
                  style={{ height: '1rem' }}
                  semiBold
                  marginTop={false}
                  marginBottom={false}
                >
                  {' '}
                  <div className="NavDropdown"> {details} </div>{' '}
                </Layer>
              )}
            </div>
          ))}
        </S.Container>
      ) : null}
    </React.Fragment>
  );
};
