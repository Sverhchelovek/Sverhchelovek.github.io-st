
body {
	color: #fff;
}

*{
	box-sizing: border-box;
	}

a{
	text-decoration: none;
	color: inherit;
}

ul{
	list-style: none;
	margin: 0;
	padding: 0;
}

.page{
	background-image: url(../img/iron_man_bg_n.jpg);
	background-size: cover;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

p{
	color:black;
	font-size: 14px;
}
.wrapper {
	width: 82%;
	background: linear-gradient(to right, rgba(25,25,30,1) 0%, rgba(55,55,67,1) 100%);
	padding-bottom: 70px;
}

.container{
	width: 88%;
	margin: 0 auto;
}

.header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2vh 0;
}

.logo{
	width: 6%;
}

.logo-img{
	width: 100%;
}

.header-link{
	color: #64636a;
}

.content{
	display: flex;
	justify-content: space-between;
}

.hero_page{
	width: 88%;
	padding: 6vh;
	position: relative;
}

.hero_page:before{
	display: block;
	position: absolute;
	content: "";
	z-index: 2;
	width: 55px;
	height: 4px;
	background-color: #e5462e;

}

.hero_page:after{
	display: block;
	position: absolute;
	content: "1";
	z-index: 3;
	width: 9px;
	height: 9px;
	top: 43px;
	right: 55px;
	color: white;
	background-color: #e5462e;
}

.hero_names{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 6%;
	padding: 7vh 0;
	
	writing-mode: tb-rl;
    transform: rotate(180deg);
	height: 50vh;

}

.hero_dots{
	width: 6%;
}


.hero_name{
	color: #63636b;
	position: relative;
	font-size: 12px;
}

.hero_name:not(:first-child):before {
	display: block;
	position: absolute;
	content: "";
	width: 5px;
	height: 5px;
	background-color: #999;
	border-radius: 50%;
	top: -4vh;
    left: -0.4vh; 
}




.hero_page_left{
	display: flex;
	width: 37%;
	background-color: #fff;
    position: absolute;
    align-items: flex-end;

    left:0;
    right:0;
    top:0;
    bottom:0;
    padding: 7vh;

}

.hero_page_right{
	display: flex;
  	align-items: flex-end;
	justify-content: flex-end;
	flex-direction: column;
	width: 63%;
	background-image: url(../img/ironman_hp_right.jpg);
    background-size: cover;
    position: absolute;

    right:0;
    top:0;
    bottom:0;
    padding: 7vh;
}


.hero_title{
	text-transform: uppercase;
	font-size: 100px;
	z-index: 2;
	position: absolute;
	top: 0;
	margin-top: 90px;
}

.red{
	color: #e03d24;
}

hr{

}

.hero_info{
	margin: -6px auto;
}

.active_number{
	font-size: 26px;
	color: #d6d5db;
}

.number {
	font-size: 12px;
	color: #d6d5db;
}

.hero_info{
	width: 100%;
}

.marvel_heroes{
	margin-top: -2px;
	font-size: 10px;
}

.ref_join{
	margin-bottom: -5px;
}
.btn{
	background-color: #e03d24;
	color: #fff;
	border-radius: 7px;
	max-width: 180px;
	padding : 10px 15px;
	margin-bottom: -1px;

}

.btn:hover{
	cursor: pointer;
}


.hero_contacts{
	display: ; 
}

.hero_link{
	color: #fff;
	font-size: 8px;
	position: relative;
}