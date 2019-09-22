import * as React from 'react';

export const Arrow: React.FC<{}> = props => (
  <svg width={17} height={16} fill="none" {...props}>
    <path
      d="M10.733 2.767l5.031 5.211-5.03 5.032M14.686 7.967H2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="square"
    />
  </svg>
);
