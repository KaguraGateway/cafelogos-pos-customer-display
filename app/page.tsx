'use client';

import { useState } from 'react';
import { Ads } from './_components/Ads';
import { AddItem } from './_components/AddItem';
import { Payment } from './_components/Payment';
import { Thanks } from './_components/Thanks';
import { Logo } from './_components/Logo';
import { ThanksUse } from './_components/ThanksUse';

const StateType = {
  ads: 0,
  addItem: 1,
  payment: 2,
  thanks: 3,
  logo: 4,
  thanksUse: 5,
} as const;
type StateType = (typeof StateType)[keyof typeof StateType];

export default function Home() {
  const [state, setState] = useState<StateType>(StateType.thanksUse);

  if (state == StateType.addItem) {
    return <AddItem />;
  } else if (state == StateType.payment) {
    return <Payment />;
  } else if (state == StateType.thanks) {
    return <Thanks />;
  } else if (state == StateType.logo) {
    return <Logo />;
  } else if (state == StateType.thanksUse) {
    return <ThanksUse />;
  }

  return <Ads />;
}
