import '@babel/polyfill';
import './index.css';

var app = document.getElementById('app');

var h1 = document.createElement('h1');
h1.textContent = 'Webpack App'

app.append(h1)

const arr = [
	'a',
	'b',
	'c'
];

arr.map(item => {
	console.log(item)
});

/* var img2 = new Image();
img2.src = jpg;
img2.classList.add(style.avatar);//注意这里的写法
app.append(img2); */
/* 
var span = document.createElement('span');
span.classList.add('iconfont');
span.classList.add('iconguanli-');
app.append(span);

var span2 = document.createElement('span');
span2.classList.add('iconfont');
span2.classList.add('iconhuatong-');
app.append(span2);
 */
