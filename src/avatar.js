import jpg from './user.jpg';
import './style.css';
var app = document.getElementById('app');
var img = new Image();
img.src = jpg;
img.classList.add('avatar');
app.append(img);