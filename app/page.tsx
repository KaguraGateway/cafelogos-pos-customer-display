'use client';

import { useState } from 'react';
import { Ads } from './_components/Ads';
import { AddItem } from './_components/AddItem';
import { Payment } from './_components/Payment';
import { Thanks } from './_components/Thanks';
import { Logo } from './_components/Logo';
import { ThanksUse } from './_components/ThanksUse';
import { EntryList } from './_components/EntryList';
import { Ads2 } from './_components/Ads2';

const StateType = {
  logo: 0,
  thanksUse: 1,
  entryList: 2,
  payment: 3,
  thanks: 4,
  ads: 5,
  ads2: 6,
} as const;
type StateType = (typeof StateType)[keyof typeof StateType];

export default function Home() {
  const [state, setState] = useState<StateType>(StateType.logo);

  if (state == StateType.entryList) {
    return <EntryList />;
  } else if (state == StateType.payment) {
    return <Payment />;
  } else if (state == StateType.thanks) {
    return <Thanks />;
  } else if (state == StateType.logo) {
    return <Logo />;
  } else if (state == StateType.thanksUse) {
    return <ThanksUse />;
  } else if (state == StateType.ads2) {
    return <Ads2 />;
  }

  return <Ads />;
}
