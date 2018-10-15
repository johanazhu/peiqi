/**
 * Created by Johnny Joestar on 2018/10/14.
 */

import {LoadingComponent} from 'components';
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import(/* webpackChunkName: "movie" */ './'),
    loading: LoadingComponent
});