import * as React from 'react';

import { Icon } from '../../../icons';

import {
  InputText,
  Wrapper,
} from './Input.styled';

interface IProps {
  placeholder?: string;
  onChange?(value: string): void;
}

export const InputView: React.FC<IProps> = ({ placeholder: propsPlaceholder, onChange }) => {
  const [queryText, setQueryText] = React.useState<string>('');
  const [inputFocused, setInputFocus] = React.useState(false);
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    setQueryText(text);
    if (onChange) {
      onChange(text);
    }
  };
  const placeholder: string = propsPlaceholder ? propsPlaceholder : 'Search by assembly name';
  const showPlaceholder: boolean = !inputFocused && !queryText;

  const inputValue = showPlaceholder ? placeholder : queryText;

  return (
    <Wrapper>
      <Icon.Search />
      <InputText
        onChange={onTextChange}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        value={inputValue}
      />
    </Wrapper>
  );
};
