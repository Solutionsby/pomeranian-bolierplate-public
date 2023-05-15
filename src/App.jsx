import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Components/Calendar/Calendar';
import { Setings } from './App/Components/Setings/Setings';
import { MyCv } from './App/MyCv/MyCv';
import { Blog } from './App/Blog';
import { Faq } from './App/Faq/faq';
import { CookiBaner } from './App/Components/CookiBaner/CookiBaner';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="myCv/*" element={<MyCv />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faq/*" element={<Faq />} />

          <Route path="setings/*" element={<Setings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CookiBaner />
    </BrowserRouter>
  );
}
