import React from 'react';
import { Layer } from '../../../ignitus-Organisms/ignitus-SideNavigation/Common/styles';
import * as S from '../styles';
import { Props } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export const DashboardNavigationDropdown = ({ Options, Name }: Props) => {
  const [content, setContent] = React.useState(false);
  return (
    <S.Container>
      <S.NavigationHeading onClick={() => setContent(!content)}>
        <S.Icon name={AppIcon.StudentIcon} />
        {Name}
        <S.Icon name={AppIcon.FilledArrowDownIcon} />
      </S.NavigationHeading>
      {content && (
        <S.Column>
          {Options.map(({ title }, x) => (
            <div key={title}>
              <Layer
                border={Options.length - 1 !== x}
                style={{ height: '1rem' }}
                semiBold
                marginTop={false}
                marginBottom={false}
              >
                <S.Text> {title} </S.Text>
              </Layer>
            </div>
          ))}
        </S.Column>
      )}
    </S.Container>
  );
};
