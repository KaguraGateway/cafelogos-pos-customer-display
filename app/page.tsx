'use client';

import { useState } from 'react';
import { Ads } from './_components/Ads';
import { AddItem } from './_components/AddItem';
import { Payment } from './_components/Payment';

const StateType = {
  ads: 0,
  addItem: 1,
  payment: 2,
} as const;
type StateType = (typeof StateType)[keyof typeof StateType];

export default function Home() {
  const [state, setState] = useState<StateType>(StateType.payment);

  if (state == StateType.ads) {
    return <Ads />;
  } else if (state == StateType.addItem) {
    return <AddItem />;
  } else if (state == StateType.payment) {
    return <Payment />;
  }

  return <main></main>;
}
