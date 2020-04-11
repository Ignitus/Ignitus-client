import React, {Fragment} from 'react';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { Introduction } from '../../ignitus-Introduction/Components';
import { WhatWeDo } from '../../ignitus-WhatWeDo/Components';
import { SupportedBy } from '../../ignitus-SupportedBy/Components';
import { GetStarted } from '../../ignitus-GetStarted/Components';
import { default as Testimonial } from '../../ignitus-Testimonial';
import { HomeContainer } from '../styles';


export const Home: React.FunctionComponent = withErrorBoundary(() => (
  <HomeContainer>
    <Introduction />
    <WhatWeDo />
    <SupportedBy />
    <Testimonial.containers.TestimonialContainer />
    <GetStarted />
  </HomeContainer>
));

