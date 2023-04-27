import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { welcomeVievRouterMetaData } from './WelcomView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeVievRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
