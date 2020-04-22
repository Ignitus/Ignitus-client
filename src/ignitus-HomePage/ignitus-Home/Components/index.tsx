import React from 'react';
import {withErrorBoundary} from '../../../ignitus-Shared';
import {Introduction} from '../../ignitus-Introduction/Components';
import {WhatWeDo} from '../../ignitus-WhatWeDo/Components';
import {SupportedBy} from '../../ignitus-SupportedBy/Components';
import {GetStarted} from '../../ignitus-GetStarted/Components';
import {default as Testimonial} from '../../ignitus-Testimonial';
import {HomeContainer, Section} from '../styles';

export const Home: React.FunctionComponent = withErrorBoundary(() => (
  <HomeContainer>
    <Introduction />
    <Section>
      <WhatWeDo />
    </Section>
    <Section>
      <SupportedBy />
    </Section>
    <Testimonial.containers.TestimonialContainer />
    <GetStarted />
  </HomeContainer>
));
