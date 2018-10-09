/**
 * Created by Johnny Joestar on 2018/9/2.
 */

import {LoadingComponent} from 'components';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "home" */ './'),
    loading: LoadingComponent
});