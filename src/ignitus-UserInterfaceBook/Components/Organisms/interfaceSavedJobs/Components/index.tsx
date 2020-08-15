import React from 'react';
import { Interface } from '../../../../styles';
import {
  SavedJobsCard,
  Heading2,
  Heading4,
  Button,
} from '../../../../../ignitus-Shared';
import { HeaderContainer } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SavedJobsCard/styles';
import * as C from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {
  OpenJobData,
  DraftJobData,
  DraftJobOptions,
  OpenJobOptions,
} from '../constants';

export const interfaceSavedJobs: React.FC = () => {
  return (
    <Interface>
      <OpenJobs />
      <Separator />
      <DraftJobs />
    </Interface>
  );
};

export const OpenJobs: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Heading2>{OpenJobData.length} Open Jobs</Heading2>
        <Button size="large" category="primary">
          Post Job
        </Button>
      </HeaderContainer>
      {OpenJobData.map(({ id, ...rest }) => {
        return (
          <React.Fragment key={id}>
            <SavedJobsCard {...rest} jobOptions={OpenJobOptions} />
          </React.Fragment>
        );
      })}
      {OpenJobData.length === 0 ? (
        <Heading4 color={C.GreySecondaryText}>
          You currently have no openings.
        </Heading4>
      ) : null}
    </React.Fragment>
  );
};

export const Separator: React.FC = () => {
  return <div style={{ height: '4.8rem' }} />;
};

export const DraftJobs: React.FC = () => {
  return (
    <React.Fragment>
      <Heading2 style={{ marginBottom: '1.875rem' }}>
        {DraftJobData.length} Saved Draft
      </Heading2>
      {DraftJobData.map(({ id, ...rest }) => {
        return (
          <React.Fragment key={id}>
            <SavedJobsCard isDraft {...rest} jobOptions={DraftJobOptions} />
          </React.Fragment>
        );
      })}
      {DraftJobData.length === 0 ? (
        <Heading4 color={C.GreySecondaryText}>
          You currently have nothing in drafts.
        </Heading4>
      ) : null}
    </React.Fragment>
  );
};
