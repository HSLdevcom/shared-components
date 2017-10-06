import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import Button from '../Button';
import { P } from '../Typography';
import { size } from '../utils';

const Container = View.extend`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-horizontal: ${size(25)};
  padding-vertical: ${size(25)};
  ${props => props.separator && `
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${props.theme.colors.primary.hslGreyLight};
  `}
`;

const Content = View.extend`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  ${props => props.image && `margin-left: ${size(25)};`}
`;

const StyledButton = Button.extend`
  margin-top: ${size(25)};
`;

const Teaser = styled(({
  buttonLabel,
  content,
  image,
  onClick,
  onPress,
  onLongPress,
  ...rest,
}) => {
  const contentIsElement = React.isValidElement(content);
  const imageIsElement = React.isValidElement(image);

  return (
    <Container {...rest}>
      {imageIsElement && image}
      <Content image={!!image}>
        {contentIsElement && content}
        {!contentIsElement && <P>{content}</P>}
        <StyledButton
          primary
          onClick={onClick}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {buttonLabel}
        </StyledButton>
      </Content>
    </Container>
  );
})``;

Teaser.displayName = 'Teaser';

Teaser.propTypes = {
  buttonLabel: PropTypes.string,
  content: PropTypes.element,
  image: PropTypes.element,
  separator: PropTypes.bool,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

export default Teaser;
