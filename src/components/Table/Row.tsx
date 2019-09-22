import * as React from 'react';

import { Icon } from '../../icons';

import { InfoBlock } from './InfoBlock';
import { ProcessBlock } from './ProcessBlock';

import {
  LeftBlock,
  ReviewStatus,
  Wrapper,
} from './Row.styled';

interface IProps {
  id: string;
  status: {
    caption: string;
    meta: object;
  };
  info: {
    header: string;
    items: {
      label: string;
      value: string;
      meta?: object;
    }[];
  };
}

export const Row: React.FC<IProps> = ({ id, status, info }) => {
  const [hover, setHover] = React.useState(false);
  const onMouseEvent = (value: boolean) => () => setHover(value);

  return (
    <Wrapper
      onMouseEnter={onMouseEvent(true)}
      onMouseLeave={onMouseEvent(false)}
    >
      <LeftBlock>
        <ReviewStatus meta={status.meta}>{status.caption}</ReviewStatus>
        <Icon.ImgPlaceholder />
        <InfoBlock
          header={info.header}
          items={info.items}
        />
      </LeftBlock>
      {hover && <ProcessBlock id={id} />}
    </Wrapper>
  );

}
