import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ButtonCheckInputVievRouterMetaData } from './ButtonCheckInput/router-data';
import { ButtonCountVievRouterMetaData } from './ButtonCount/router-data';
import { ButtonTextWanishVievRouterMetaData } from './ButtonTextWanish/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { welcomeVievRouterMetaData } from './WelcomView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeVievRouterMetaData,
  ButtonCountVievRouterMetaData,
  ButtonTextWanishVievRouterMetaData,
  ButtonCheckInputVievRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
