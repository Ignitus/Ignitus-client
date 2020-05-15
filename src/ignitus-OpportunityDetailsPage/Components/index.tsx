import React from 'react';
import OpportunityDetailsCard from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ingitus-OpportunityDetailsCard/Components/index';
import { Container } from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import UniversityOfMelbourne from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/UniversityOfMelbourne.png';
import { Heading1, Paragraph } from '../../ignitus-Shared';
import * as C from '../styles';

export const OpportunityDetailsPage = () => (
  <Container>
    <OpportunityDetailsCard
      title="PhD Project"
      subtitle="By The University of Melbourne"
      description="Church and civil courts in late medieval and early modern Scotland"
      fund=""
      src={UniversityOfMelbourne}
    />
    <C.Container>
      <C.Content>
        <Heading1>Project Description</Heading1>
      </C.Content>
      <C.Content>
        <Paragraph>
          Project Description This project will advance our understanding of the
          operation of the law, and of legal specialists, in Scotland from the
          late fifteenth to the early seventeenth century. Aberdeen and the
          North-East present a rich source-base with which to pursue this theme.
          Manuscript sources held in the University’s Special Collections Centre
          and in the Aberdeen City & Aberdeenshire Archives are ripe for the
          investigation of the range of law courts which functioned in the
          region, at franchise, burgh, sheriffdom, and church levels. The era of
          the Reformation brought significant change to the nature of church
          courts, and the dynamism of the Scottish legal system in this period
          promoted the emergence and development of a recognisable legal
          profession. Aberdeen and its region allow for an examination of how
          the law courts, and lawyers, inter-related and interacted, and from a
          ‘provincial’ perspective rather than that of the governmental and
          legal hub of Edinburgh.
        </Paragraph>
      </C.Content>
      <C.Content>
        <Paragraph>
          This legal history project builds on research recently completed and
          underway by Dr Armstrong and Dr Wilson. This includes “Spalding’s
          Practicks and the Aberdeen Commissary Court in the Seventeenth
          Century“ ( see
          <a href="https://www.abdn.ac.uk/giving/hunter-caldwell-awards-2013-440.php">
            https://www.abdn.ac.uk/giving/hunter-caldwell-awards-2013-440.php
          </a>
          ), and as such this project is part of a group of topics building on
          research funded by the Aberdeen Humanities Fund. It also connects with
          the wider Aberdeen Burgh Records Project in RIISS(
          <a href="https://www.abdn.ac.uk/riiss/about/aberdeen-burgh-records-project-97.php">
            https://www.abdn.ac.uk/riiss/about/aberdeen-burgh-records-project-97.php
          </a>
          ) and on-going work on Aberdeenshire’s barony courts.
        </Paragraph>
      </C.Content>
      <C.Content>
        <Paragraph>
          Candidates should apply for a PhD place in the normal way, stating:
        </Paragraph>
        <ul>
          <li>
            <Paragraph>
              &#9675; ‘Elphinstone PhD Scholarship’ in the Intended Source of
              section
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              &#9675; The name of the lead supervisor in the Name of Proposed
              section
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              &#9675;The title of the specific research project (subject to any
              agreed modifications in discussion with the lead supervisor) in
              Outline Summary section
            </Paragraph>
          </li>
        </ul>
      </C.Content>
      <C.Content>
        <Heading1>Funding Notes</Heading1>
      </C.Content>
      <C.Content>
        <Paragraph>
          This project is funded by a University of Aberdeen Elphinstone
          Scholarship. An Elphinstone Scholarship covers the cost of tuition
          fees,
        </Paragraph>
      </C.Content>
      <C.Content>
        <Paragraph>
          Selection will be made on the basis of academic merit.
        </Paragraph>
      </C.Content>
    </C.Container>
  </Container>
);

export default OpportunityDetailsPage;
