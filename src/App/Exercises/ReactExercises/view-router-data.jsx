import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ButtonCheckInputVievRouterMetaData } from './ButtonCheckInput/router-data';
import { ButtonCountVievRouterMetaData } from './ButtonCount/router-data';
import { ButtonTextWanishVievRouterMetaData } from './ButtonTextWanish/router-data';
import { RandomNumberVievRouterMetaData } from './RandomNumber/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { TwoInputVievRouterMetaData } from './TwoInput/router-data';
import { welcomeVievRouterMetaData } from './WelcomView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeVievRouterMetaData,
  ButtonCountVievRouterMetaData,
  ButtonTextWanishVievRouterMetaData,
  ButtonCheckInputVievRouterMetaData,
  TwoInputVievRouterMetaData,
  RandomNumberVievRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
