import React from 'react';
import {TypographyContainer} from '../styles';
import {
  Heading1,
  Paragraph,
  TextLink,
} from   '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import * as Button from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import confetti from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/logo-Svg/confetti.svg';

const interfaceOverlay = () => (

  <TypographyContainer>
    <div  style ={ { backgroundImage: `url(${confetti})`,backgroundColor:'white',border:"solid 2px black",  backgroundSize: 'cover', width: '100%',
  height: '500px','borderRadius':'45px', left: '%', top:'10%'} }>
    <div style={{   position: 'absolute', left: '47%', top: '35%'
         }}>
           <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Heading1 style={{fontSize:'48px',fontWeight:900}}>Hooray!</Heading1>
    </div>
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Paragraph style={{fontSize:'18px',fontWeight:900}}>Your application has been sent successfully.</Paragraph>
    </div>
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
    <TextLink style={{fontSize:'14px'}}>Make sure to keep an eye on your email.</TextLink>
    </div>
    </div>
    <Button.RoundedPrimaryButton  style={{ zIndex:1, left: '80%', top: '80%',position:'relative',backgroundColor:'#E9A447'}} >
      {' '}
      Go Back{' '}
    </Button.RoundedPrimaryButton>
    </div>
  </TypographyContainer>
);

export default interfaceOverlay;
