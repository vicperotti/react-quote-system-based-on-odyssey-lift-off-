import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Quotes from './quotes';
import { AddAuthor } from './addAuthor';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Quotes />} path="/" />
        <Route element={<AddAuthor />} path="addAuthor" />
      </Routes>
    </BrowserRouter>
  );
}
