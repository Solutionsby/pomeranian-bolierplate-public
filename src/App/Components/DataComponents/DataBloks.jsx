import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { EditIcon } from '../Icons/EditIcon';
import { ElementIcon } from '../Icons/ElementIcon';
import { FaqIcon } from '../Icons/FaqIcon';

export const DataBlocksTable = [
  {
    title: 'Moje cv',
    icon: <PersonalCardIcon />,
    textContent: 'podgląd cv wraz z doświadczeniem',
    link: 'zobacz więcej >',
  },
  {
    title: ' Ćwiczenia',
    icon: <EditIcon />,
    textContent: 'wszystkie wykonane ćwiczenia',
    link: 'zobacz więcej >',
  },
  {
    title: 'Blog',
    icon: <ElementIcon />,
    textContent: 'wpisy blogowe o technologii front-end',
    link: 'zobacz więcej >',
  },
  {
    title: ' Tech stack',
    icon: <FaqIcon />,
    textContent: 'stack technologiczny realizowany na kursie',
    link: 'zobacz więcej >',
  },
  {
    title: 'FAQ',
    icon: <FaqIcon />,
    textContent: 'odpowiedzi na najczęstsze pytania',
    link: 'zobacz więcej >',
  },
];
