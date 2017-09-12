import React from 'react';
import { H1, H2, H3, H4, H5, P, Quote, Ingress, Caption, InfoText, ErrorText, ListText } from 'hsl-shared-components';
import { View } from 'react-sketchapp';
import { WithDescription } from '../presentation';

const heading = 'HSL Liikuttaa';

const sentence = 'Aenean lacinia bibendum nulla sed consectur.';

const paragraph = 'Omia joukkoliikennelinjoja koskevat linjatiedotteet voi tilata myös sähköpostiin luomalla HSL-tunnuksen. Sitä kautta saa tietoa ajankohtaisista liikennemuutoksista, suunnitelmista ja poikkeustilanteista niiltä linjoilta, joita itse käyttää. Palvelu on maksuton.';

const sectionPresentationStyles = {
  marginTop: 20,
  marginBottom: 20,
};

const paragraphPresentationStyles = {
  width: 768,
};

const Buttons = () =>
  (
    <View
      name="Typography"
      style={{ flexDirection: 'column' }}
    >
      <WithDescription
        text={'Header 1\r\n48px'}
        style={sectionPresentationStyles}
      >
        <H1>
          {heading}
        </H1>
      </WithDescription>
      <WithDescription
        text={'Header 2\r\n36px'}
        style={sectionPresentationStyles}
      >
        <H2>
          {heading}
        </H2>
      </WithDescription>
      <WithDescription
        text={'Header 3\r\n24px'}
        style={sectionPresentationStyles}
      >
        <H3>
          {heading}
        </H3>
      </WithDescription>
      <WithDescription
        text={'Header 4\r\n21px'}
        style={sectionPresentationStyles}
      >
        <H4>
          {heading}
        </H4>
      </WithDescription>
      <WithDescription
        text={'Header 5\r\n16px'}
        style={sectionPresentationStyles}
      >
        <H5>
          {heading}
        </H5>
      </WithDescription>
      <WithDescription
        text={'Paragraph\r\nMobile 14px'}
        style={sectionPresentationStyles}
      >
        <P style={paragraphPresentationStyles}>
          {paragraph}
        </P>
      </WithDescription>
      <WithDescription
        text={'Paragraph\r\nDesktop 16px'}
        style={sectionPresentationStyles}
      >
        <P style={paragraphPresentationStyles}>
          {paragraph}
        </P>
      </WithDescription>
      <WithDescription
        text={'Quote\r\n18px'}
        style={sectionPresentationStyles}
      >
        <Quote style={paragraphPresentationStyles}>
          {paragraph}
        </Quote>
      </WithDescription>
      <WithDescription
        text={'Ingress\r\n18px'}
        style={sectionPresentationStyles}
      >
        <Ingress style={paragraphPresentationStyles}>
          {paragraph}
        </Ingress>
      </WithDescription>
      <WithDescription
        text={'Caption\r\n13px'}
        style={sectionPresentationStyles}
      >
        <Caption>
          {sentence}
        </Caption>
      </WithDescription>
      <WithDescription
        text={'Info text\r\nMobile 14px\r\nDesktop 16px'}
        style={sectionPresentationStyles}
      >
        <InfoText>
          {sentence}
        </InfoText>
      </WithDescription>
      <WithDescription
        text={'Error text\r\nMobile 14px\r\nDesktop 16px'}
        style={sectionPresentationStyles}
      >
        <ErrorText>
          {sentence}
        </ErrorText>
      </WithDescription>
      <WithDescription
        text={'List text\r\nMobile 14px\r\nDesktop 16px'}
        style={sectionPresentationStyles}
      >
        <ListText>
          {sentence}
        </ListText>
      </WithDescription>
    </View>
  );

export default Buttons;
