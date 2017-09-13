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
            Colors
          </Title>
        </Section>
        <Section separator>
          <Title>
            Typography
          </Title>
          <Typography />
        </Section>
        <Section separator>
          <Title>
            Buttons
          </Title>
          <SubTitle>
            Primary buttons - example CTA
          </SubTitle>
          <PrimaryButtons />
        </Section>
        <Section separator>
          <Title>
            Links
          </Title>
        </Section>
        <Section separator>
          <Title>
            Inputs
          </Title>
        </Section>
        <Section separator>
          <Title>
            Checkboxes, Radiobuttons, Toggle buttons
          </Title>
        </Section>
        <Section separator>
          <Title>
            Sliders
          </Title>
        </Section>
        <Section separator>
          <Title>
            Dropdown
          </Title>
        </Section>
        <Section separator>
          <Title>
            Tabs
          </Title>
        </Section>
        <Section separator>
          <Title>
            Progress Bars
          </Title>
        </Section>
        <Section separator>
          <Title>
            Notifications
          </Title>
        </Section>
        <Section separator>
          <Title>
            Header
          </Title>
          <Title>
            Mobile Header / menu
          </Title>
        </Section>
        <Section separator>
          <Title>
            Icons
          </Title>
        </Section>
        <Section separator>
          <Title>
            Cards
          </Title>
        </Section>
        <Section separator>
          <Title>
            Modal
          </Title>
        </Section>
        <Section separator>
          <Title>
            Images
          </Title>
        </Section>
        <Section separator>
          <Title>
            Tables
          </Title>
        </Section>
        <Section separator>
          <Title>
            Enter origin / locale, Destination search
          </Title>
        </Section>
        <Section separator>
          <Title>
            Nearby
          </Title>
        </Section>
        <Section separator>
          <Title>
            Accordion
          </Title>
        </Section>
        <Section separator>
          <Title>
            Q&A Accordion
          </Title>
        </Section>
        <Section separator>
          <Title>
            Divider
          </Title>
        </Section>
        <Section separator>
          <Title>
            Spinner
          </Title>
        </Section>
        <Section separator>
          <Title>
            Favourite links
          </Title>
        </Section>
        <Section separator>
          <Title>
            Breadcrumbs
          </Title>
        </Section>
        <Section separator>
          <Title>
            Tags
          </Title>
        </Section>
        <Section separator>
          <Title>
            Leaflet popup
          </Title>
        </Section>
        <Section>
          <Title>
            Footer
          </Title>
        </Section>
      </Artboard>
    </ThemeProvider>
  );

export default (context) => {
  render(<Document />, context.document.currentPage());
};
