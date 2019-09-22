import * as React from 'react';

import {
  Slider,
  Text,
  Wrapper,
} from './Switcher.styled';

interface IProps {
  onMoveLeft?(): void;
  onMoveRight?(): void;
}

export const SwitcherView: React.FC<IProps> = ({
  onMoveLeft,
  onMoveRight,
}) => {
  const textOnLeft = 'Latest first';
  const textOnRight = 'Oldest first';

  const [position, setPosition] = React.useState<'LEFT' | 'RIGHT'>('LEFT');

  const onSliderClick = (event: React.SyntheticEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  };

  const onSwitcherClick = (): void => {
    if (position === 'LEFT') {
      setPosition('RIGHT');
      if (onMoveRight) {
        onMoveRight();
      }
    } else {
      setPosition('LEFT');
      if (onMoveLeft) {
        onMoveLeft();
      }
    }
  };

  const sliderText = position === 'LEFT' ? textOnLeft : textOnRight;

  return (
    <Wrapper onClick={onSwitcherClick}>
      <Text>{textOnLeft}</Text>
      <Text>{textOnRight}</Text>
      <Slider position={position} onClick={onSliderClick}>
        <Text onSlider={true}>{sliderText}</Text>
      </Slider>
    </Wrapper>
  );
};
