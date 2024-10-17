// app/home.tsx
"use client";

import { useState, useEffect } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import HomeLanding from './home';

export default function Home() {
  return(
    <div>
      <HomeLanding></HomeLanding>
    </div>
  )
};
