import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
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
  ${props => props.hasIcon && `margin-left: ${size(25)};`}
`;

const CtaContainer = styled(({
  hasContent,
  ...rest,
}) =>
  <View {...rest} />
)`
  ${props => props.hasContent && `margin-top: ${size(25)};`}
`;

const Icon = withTheme(({
  icon,
  theme,
}) =>
  React.cloneElement(icon, {
    width: size(60),
    height: size(60),
    fill: theme.colors.primary.hslBlue,
  })
);

const ActionListItemTeaser = styled(({
  cta,
  content,
  centered,
  icon,
  onClick,
  onPress,
  onLongPress,
  ...rest,
}) => {
  const iconIsElement = React.isValidElement(icon);
  const contentIsElement = React.isValidElement(content);
  const ctaIsElement = React.isValidElement(cta);

  return (
    <Container {...rest}>
      {iconIsElement && <Icon icon={icon} />}
      <Content hasIcon={!!icon}>
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
