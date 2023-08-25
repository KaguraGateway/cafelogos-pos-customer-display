import { ComponentProps } from 'react';

type Props = {
  yen: number;
  textProps?: ComponentProps<'span'>;
};

export function Yen(props: Props) {
  return <span {...props.textProps}>{props.yen.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}</span>;
}
