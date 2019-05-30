import jpg from './user.jpg';
import './style.css';
import './index.scss'; 

var app = document.getElementById('app');
var img = new Image();
img.src = jpg;
img.classList.add('avatar');
app.append(img);

/* var img2 = new Image();
img2.src = jpg;
img2.classList.add(style.avatar);//注意这里的写法
app.append(img2); */

var span = document.createElement('span');
span.classList.add('iconfont');
span.classList.add('iconguanli-');
app.append(span);

var span2 = document.createElement('span');
span2.classList.add('iconfont');
span2.classList.add('iconhuatong-');
app.append(span2);

