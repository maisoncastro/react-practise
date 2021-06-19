import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Practise Portfolio
      </SectionTitle>
      <SectionText>
        This is a practise portfolio that I created in order to better my training in the latest technologies used in webtech companies across the globe.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More!</Button>
    </LeftSection>
  </Section>
);

export default Hero;