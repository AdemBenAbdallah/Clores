'use client'

import Info from './components/Info'
import Intro from './components/Intro';
import Features from './components/features/Features';

export default function Home() {
  return (
      <main>
        <Intro />
        <Info />
        <Features />
      </main>
  );
}
