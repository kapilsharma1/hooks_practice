// import axios from 'axios';
//document.getElementById("box").innerText="";

fetch("https://jsonplaceholder.typicode.com/todos/1").then((y)=>(y.json())).then((x)=>document.getElementById("box").innerText=x.title);


//axios.get("https://jsonplaceholder.typicode.com/todos/1").then((x)=>console.log(x.data));