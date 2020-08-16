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
import { JobProps } from '../types';

export const interfaceSavedJobs: React.FC = () => {
  return (
    <Interface>
      <Heading2>Saved Jobs</Heading2>
      <hr />
      <Jobs isDraft={false} JobData={OpenJobData} JobOptions={OpenJobOptions} />
      <Separator />
      <Jobs isDraft JobData={DraftJobData} JobOptions={DraftJobOptions} />
    </Interface>
  );
};

export const Separator: React.FC = () => {
  return <div style={{ height: '4.8rem' }} />;
};

export const Jobs: React.FC<JobProps> = ({ isDraft, JobData, JobOptions }) => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Heading2>
          {isDraft
            ? `${DraftJobData.length} Saved Draft`
            : `${OpenJobData.length} Open Jobs`}
        </Heading2>
        {!isDraft ? (
          <Button size="large" category="primary">
            Post Job
          </Button>
        ) : null}
      </HeaderContainer>
      {JobData.map(({ id, ...rest }) => {
        return (
          <React.Fragment key={id}>
            <SavedJobsCard
              isDraft={isDraft}
              {...rest}
              jobOptions={JobOptions}
            />
          </React.Fragment>
        );
      })}
      {JobData.length === 0 ? (
        <Heading4 color={C.GreySecondaryText}>
          {isDraft
            ? 'You currently have nothing in drafts.'
            : 'You currently have no openings.'}
        </Heading4>
      ) : null}
    </React.Fragment>
  );
};
