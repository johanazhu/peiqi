
import add from './add';
import $ from 'jquery';

let app = 'hello ,world';

console.log(app);

console.log(add(1,2))

$("#btn1").on('click', function(){
    console.log(add(3, 10));
})