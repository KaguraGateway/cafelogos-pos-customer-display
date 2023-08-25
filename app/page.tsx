'use client';

import { useState } from 'react';
import { Ads } from './_components/Ads';
import { AddItem } from './_components/AddItem';

const StateType = {
  ads: 0,
  addItem: 1,
} as const;
type StateType = (typeof StateType)[keyof typeof StateType];

export default function Home() {
  const [state, setState] = useState<StateType>(StateType.addItem);

  if (state == StateType.ads) {
    return <Ads />;
  } else if (state == StateType.addItem) {
    return <AddItem />;
  }

  return <main></main>;
}
