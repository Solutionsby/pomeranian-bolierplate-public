import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsEmpty } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsDateTime } from './DateTime/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArray } from './Array/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction } from './JsFunction/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsWarmUp } from './WarmUP/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatchFiniyli } from './TryCatchFinnyl/router-data';
import { blockRouterMetaData as blockRouterMetaDataUsersList } from './UsersList/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBoolean,
  blockRouterMetaDataJsEmpty,
  blockRouterMetaDataJsDateTime,
  blockRouterMetaDataJsArray,
  blockRouterMetaDataJsFunction,
  blockRouterMetaDataJsWarmUp,
  blockRouterMetaDataTryCatchFiniyli,
  blockRouterMetaDataUsersList,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
