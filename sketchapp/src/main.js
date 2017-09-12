import React from 'react';
import { render, Artboard } from 'react-sketchapp';
import { ThemeProvider } from 'styled-components';
import { Section, Title, SubTitle } from './presentation';
import Typography from './artboards/Typography';
import PrimaryButtons from './artboards/PrimaryButtons';
import Theme from '../themes/themes.hsl';

const Document = () =>
  (
    <ThemeProvider theme={Theme}>
      <Artboard
        style={{
          flexDirection: 'column',
        }}
      >
        <Section separator>
          <Title>
            Typography
          </Title>
          <Typography />
        </Section>
        <Section>
          <Title>
            Buttons
          </Title>
          <SubTitle>
            Primary buttons - example CTA
          </SubTitle>
          <PrimaryButtons />
        </Section>
      </Artboard>
    </ThemeProvider>
  );

export default (context) => {
  render(<Document />, context.document.currentPage());
};
