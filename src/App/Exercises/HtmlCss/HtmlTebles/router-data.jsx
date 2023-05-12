import React from 'react';

import { Tables } from './tables';
import { TableFigma } from './tabel-figma';

export const blockRouterMetaData = [
  {
    path: 'tables',
    date: '11-05-2023',
    linkLabel: 'HTML & CSS - Tabele',
    blockNo: 1,
    element: <Tables />,
    tags: ['flex', 'grid', 'video'],
  },

  {
    path: 'tableFigma',
    date: '11-05-2023',
    linkLabel: 'HTML & CSS - Tabele z Projektu',
    blockNo: 1,
    element: <TableFigma />,
    tags: ['flex', 'grid', 'video'],
  },
];
