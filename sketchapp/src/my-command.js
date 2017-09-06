import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, View, Text, Image } from 'react-sketchapp';
import { Button, RoundButton } from 'hsl-shared-components';
import { ThemeProvider } from 'styled-components';
import Theme from './themes/themes.hsl';

const Document = () => {

  const icon = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>'; //ReactDOMServer.renderToStaticMarkup(<Facebook />);

  const iconBase64 = `data:image/svg+xml;base64,${new Buffer(icon).toString('base64')}`;

  // const foo = await svg2DataURI();

  // const iconBase64 = `data:image/svg+xml;utf8,${icon}`;

  return (
    <ThemeProvider theme={Theme}>
      <Artboard
        name="Buttons"
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 2000,
          padding: 20,
        }}
      >
        <View name="Default Button">
          <Button
            disabled={false}
            rounded={false}
            small={false}
            large={false}
            onPress={() => false}
            onLongPress={() => false}
          >
            Default Button
          </Button>
        </View>
        <View name="Primary Button">
          <Button
            disabled={false}
            small={false}
            large={false}
            primary
            onPress={() => false}
            onLongPress={() => false}
          >
            Primary Button
          </Button>
        </View>
        <View name="Secondary Button">
          <Button
            disabled={false}
            small={false}
            large={false}
            secondary
            onPress={() => false}
            onLongPress={() => false}
          >
            Secondary Button
          </Button>
        </View>
        <View name="Round Button">
          <Text>{icon}</Text>
          <Text>{iconBase64}</Text>

          <RoundButton
            small={false}
            large={false}
          >
            <Image
              source="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSJncmVlbiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJ5ZWxsb3ciIC8+PC9zdmc+"
              resizeMode="contain"
              style={{
                height: 50,
                width: 50,
              }}
            />
          </RoundButton>
        </View>
      </Artboard>
    </ThemeProvider>
  );
};

export default (context) => {
  render(<Document />, context.document.currentPage());
};
