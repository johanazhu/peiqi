/**
 * Created by Johan on 2018/6/25.
 */

import createHistory from 'history/createBrowserHistory'
import qs from 'query-string'

function init(h){
    const {pathname, search} = h.location;
    // console.log(pathname, search);
}

const history = createHistory();

history.listen(()=>{
    init(history)
})

init(history);

export default history;

