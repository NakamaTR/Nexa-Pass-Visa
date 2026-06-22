*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}


body{

background:
linear-gradient(135deg,#09090f,#151021);

color:white;

min-height:100vh;

}



header{

height:70px;

display:flex;

align-items:center;

justify-content:space-between;

padding:0 7%;

background:#0b0b12cc;

backdrop-filter:blur(10px);

position:sticky;

top:0;

z-index:10;

}



.logo{

font-size:28px;

font-weight:bold;

color:#d9a441;

letter-spacing:1px;

}



.search input{

width:320px;

padding:13px 20px;

border-radius:30px;

border:1px solid #333;

background:#181820;

color:white;

}



nav{

display:flex;

gap:15px;

align-items:center;

}


nav a{

color:#bbb;

text-decoration:none;

}



button{

border:none;

padding:12px 22px;

border-radius:25px;

cursor:pointer;

background:#252531;

color:white;

transition:.3s;

}



button:hover{

transform:translateY(-3px);

}



.premium{

background:#d9a441;

color:black;

}


.register{

background:#ff4f8b;

}





.hero{

width:75%;

height:360px;

margin:55px auto;

border-radius:30px;

background:

linear-gradient(90deg,#0009,#0002),

url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200");

background-size:cover;

background-position:center;

display:flex;

align-items:center;

padding:50px;

box-shadow:0 0 40px #000;

}



.hero-content{

max-width:550px;

}


.hero span{

background:#c33b86;

padding:8px 18px;

border-radius:20px;

font-size:13px;

}


.hero h1{

font-size:45px;

margin:20px 0;

}


.hero p{

color:#ddd;

font-size:18px;

margin-bottom:25px;

}



.main-btn{

background:#d9a441;

color:black;

font-weight:bold;

}





.cards{

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}



.card{

width:220px;

padding:30px;

background:#ffffff10;

border:1px solid #ffffff15;

border-radius:25px;

text-align:center;

transition:.3s;

}


.card:hover{

transform:translateY(-10px);

box-shadow:0 0 30px #d9a44155;

}



.icon{

font-size:50px;

}



.card p{

color:#aaa;

margin-top:10px;

}





.popular{

width:80%;

margin:80px auto;

}



.title{

display:flex;

justify-content:space-between;

align-items:center;

}



.title span{

background:#d9a441;

color:black;

padding:10px 20px;

border-radius:20px;

}



.grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

margin-top:35px;

}



.visa-box{

background:#ffffff08;

padding:35px;

border-radius:25px;

border:1px solid #ffffff12;

}



.visa-box p{

color:#aaa;

margin:15px 0;

}



footer{

text-align:center;

padding:30px;

color:#777;

}





@media(max-width:900px){


header{

flex-direction:column;

height:auto;

gap:20px;

padding:20px;

}


.search input{

width:250px;

}


.hero{

width:90%;

}


.grid{

grid-template-columns:1fr;

}


.hero h1{

font-size:30px;

}


}
