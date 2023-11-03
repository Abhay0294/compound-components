import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ParentApp } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <ParentApp />
  </StrictMode>
);
