import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Paragraph, TopSection, BottomSection} from '../styles';
import {Button} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

export const GetStarted: React.FunctionComponent = withErrorBoundary(() => (
  <Container>
    <TopSection>
      <Paragraph>
        Get started for free - join thousands of students and researchers
        already using Ignitus to share their knowledge, work together, and get
        amazing opportunites.
      </Paragraph>
    </TopSection>
    <BottomSection>
      <Button size="large" category="orange">
        <Link to="/Signup">Sign-Up</Link>
      </Button>
    </BottomSection>
  </Container>
));
