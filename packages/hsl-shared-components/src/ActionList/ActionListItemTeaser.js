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
`;

const Content = styled(({
  hasImage,
  ...rest,
}) =>
  <View {...rest} />
)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  ${props => props.hasImage && `margin-left: ${size(25)};`}
`;

const CtaContainer = styled(({
  hasContent,
  ...rest,
}) =>
  <View {...rest} />
)`
  ${props => props.hasContent && `margin-top: ${size(25)};`}
`;

const ActionListItemTeaser = styled(({
  cta,
  content,
  centered,
  image,
  onClick,
  onPress,
  onLongPress,
  ...rest,
}) => {
  const imageIsElement = React.isValidElement(image);
  const contentIsElement = React.isValidElement(content);
  const ctaIsElement = React.isValidElement(cta);

  return (
    <Container {...rest}>
      {imageIsElement && image}
      <Content hasImage={!!image}>
        {contentIsElement && content}
        {!contentIsElement && <P>{content}</P>}
        {cta &&
          <CtaContainer hasContent={!!content}>
            {ctaIsElement && cta}
            {!ctaIsElement &&
              <Button
                primary
                onClick={onClick}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                {cta}
              </Button>
            }
          </CtaContainer>
        }
      </Content>
    </Container>
  );
})``;

ActionListItemTeaser.displayName = 'ActionListItemTeaser';

ActionListItemTeaser.propTypes = {
  cta: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  image: PropTypes.element,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

export default ActionListItemTeaser;
