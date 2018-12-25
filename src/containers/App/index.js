/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. header)
 *
 */

import React from 'react';

import BrandLogo from '@assets/images/brand-logo.svg';


export default function App() {
  return (
    <div className="center d-flex justify-content-center align-items-center">
      <BrandLogo width="200" height="200" />
    </div>
  );
}
