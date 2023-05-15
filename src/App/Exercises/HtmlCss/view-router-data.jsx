import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData5052023 } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaData8052023 } from './StandardTaqs/router-data';
import { blockRouterMetaData as blockRouterMetaData9052023 } from './ColorsCss/router-data';
import { blockRouterMetaData as blockRouterMetaData10052023 } from './CssExercise/router-data';
import { blockRouterMetaData as blockRouterMetaData210052023 } from './Array/router-data';
import { blockRouterMetaData as blockRouterMetaData11052023 } from './HtmlTebles/router-data';
import { blockRouterMetaData as blockRouterMetaData15052023 } from '../../Components/CookiBaner/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData5052023,
  blockRouterMetaData8052023,
  ...blockRouterMetaData9052023,
  blockRouterMetaData10052023,
  ...blockRouterMetaData11052023,
  ...blockRouterMetaData210052023,
  ...blockRouterMetaData11052023,
  blockRouterMetaData15052023,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
