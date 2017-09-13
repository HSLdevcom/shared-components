import React from 'react';
import { render, Artboard } from 'react-sketchapp';
import { ThemeProvider } from 'styled-components';
import { Main, Title } from './presentation';
import Typography from './artboards/Typography';
import PrimaryButtons from './artboards/PrimaryButtons';
import SecondaryButtons from './artboards/SecondaryButtons';
import Theme from '../themes/themes.hsl';

const Document = () =>
  (
    <ThemeProvider theme={Theme}>
      <Artboard
        style={{
          flexDirection: 'column',
        }}
      >
        <Main separator>
          <Title>
            Colors
          </Title>
        </Main>
        <Main separator>
          <Title>
            Typography
          </Title>
          <Typography />
        </Main>
        <Main separator>
          <Title>
            Buttons
          </Title>
          <PrimaryButtons />
          <SecondaryButtons />
        </Main>
        <Main separator>
          <Title>
            Links
          </Title>
        </Main>
        <Main separator>
          <Title>
            Inputs
          </Title>
        </Main>
        <Main separator>
          <Title>
            Checkboxes, Radiobuttons, Toggle buttons
          </Title>
        </Main>
        <Main separator>
          <Title>
            Sliders
          </Title>
        </Main>
        <Main separator>
          <Title>
            Dropdown
          </Title>
        </Main>
        <Main separator>
          <Title>
            Tabs
          </Title>
        </Main>
        <Main separator>
          <Title>
            Progress Bars
          </Title>
        </Main>
        <Main separator>
          <Title>
            Notifications
          </Title>
        </Main>
        <Main separator>
          <Title>
            Header
          </Title>
          <Title>
            Mobile Header / menu
          </Title>
        </Main>
        <Main separator>
          <Title>
            Icons
          </Title>
        </Main>
        <Main separator>
          <Title>
            Cards
          </Title>
        </Main>
        <Main separator>
          <Title>
            Modal
          </Title>
        </Main>
        <Main separator>
          <Title>
            Images
          </Title>
        </Main>
        <Main separator>
          <Title>
            Tables
          </Title>
        </Main>
        <Main separator>
          <Title>
            Enter origin / locale, Destination search
          </Title>
        </Main>
        <Main separator>
          <Title>
            Nearby
          </Title>
        </Main>
        <Main separator>
          <Title>
            Accordion
          </Title>
        </Main>
        <Main separator>
          <Title>
            Q&A Accordion
          </Title>
        </Main>
        <Main separator>
          <Title>
            Divider
          </Title>
        </Main>
        <Main separator>
          <Title>
            Spinner
          </Title>
        </Main>
        <Main separator>
          <Title>
            Favourite links
          </Title>
        </Main>
        <Main separator>
          <Title>
            Breadcrumbs
          </Title>
        </Main>
        <Main separator>
          <Title>
            Tags
          </Title>
        </Main>
        <Main separator>
          <Title>
            Leaflet popup
          </Title>
        </Main>
        <Main>
          <Title>
            Footer
          </Title>
        </Main>
      </Artboard>
    </ThemeProvider>
  );

export default (context) => {
  render(<Document />, context.document.currentPage());
};
