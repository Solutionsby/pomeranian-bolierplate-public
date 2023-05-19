import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsEmpty } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsDateTime } from './DateTime/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArray } from './Array/router-data';



export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBoolean,
  blockRouterMetaDataJsEmpty,
  blockRouterMetaDataJsDateTime,
  blockRouterMetaDataJsArray,

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
