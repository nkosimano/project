import type { ReactThreeFiber } from '@react-three/fiber';
import type { JSX as JSXInternal } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements extends JSXInternal.IntrinsicElements, ReactThreeFiber.ThreeElements {}
  }
}

export {};


