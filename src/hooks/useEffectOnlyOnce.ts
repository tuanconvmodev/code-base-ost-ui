import { EffectCallback, useEffect } from 'react';
// eslint-disable-next-line
export const useEffectOnlyOnce = (func: EffectCallback) => useEffect(func, []);
