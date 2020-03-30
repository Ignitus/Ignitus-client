import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {TypographyContainer} from '../styles';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  TextLink,
} from   '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/typography';
import * as Button from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/buttons';
import confetti from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/logo-Svg/confetti.svg';
import { Backdrop } from '@material-ui/core';
// const [open, setOpen] = React.useState(false);

const interfaceOverlay = () => (
  // <Backdrop  open={true} >
  <TypographyContainer>
    <Backdrop open={true}  style ={ { backgroundImage: `url(${confetti})`,backgroundColor:'white',border:"solid 2px black",  backgroundSize: 'cover', width: '77%',
  height: '500px','borderRadius':'45px', left: '22%', top:'10%'} }>
    <div style={{   position: 'absolute', //left: '45%', top: '35%'
         }}>
           <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Heading5>Hooray!</Heading5>
    </div>
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
    <Paragraph>Your application has been sent successfully.</Paragraph>
    </div>
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
    <TextLink>Make sure to keep an eye on your email.</TextLink>
    </div>
    </div>
    {/* <div style={{ position: 'absolute', left: '83%', top: '80%',zIndex: 10}} > */}
    <Button.RoundedPrimaryButton  style={{ zIndex:1, left: '83%', top: '80%',position:'absolute'}} >
      {' '}
      Go Back{' '}
    </Button.RoundedPrimaryButton>
    {/* </div> */}
    </Backdrop>
    
  </TypographyContainer>
  // </Backdrop>
);

export default interfaceOverlay;
