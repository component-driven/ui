import React from 'react'

type RenderProps = (props: {
  focused: boolean;
  getRef: React.MutableRefObject<HTMLElement>;
}) => React.ReactNode

export interface Props {
  children: React.ReactNode | RenderProps;
  onBlur?: (event: React.MouseEvent<HTMLElement>) => void;
  onFocus?: (event: React.MouseEvent<HTMLElement>) => void;
}

declare class FocusWithin extends React.Component<Props, any> {}

export default FocusWithin
