import styled from 'styled-components'

const Wrapper = styled.nav`
.about-section{
 box-shadow: 15px 9px 9px -2px rgba(230, 224, 224, 0.86);
 -webkit-box-shadow: 15px 9px 9px -2px rgba(230, 224, 224, 0.86);
 -moz-box-shadow: 15px 9px 9px -2px rgba(230, 224, 224, 0.86);
 margin-left: 0px;
 height: fit-content;
}

.about{
	width: 100%;
	padding: 100px 0px;
	background-color: #191919;
}
button{
	background-color:#f9004d;
	color: white;
	text-decoration: none;
	border: 2px solid transparent;
	font-weight: bold;
	padding: 13px 30px;
	border-radius: 30px;
	transition: .4s; 
}
button:hover{
	background-color: transparent;
	border: 2px solid #f9004d;
	cursor: pointer;
}


.about-title h5{ text-align: center;}


#dark .about-section{
 background-color: #38004C;
 box-shadow: -6px 11px 5px -4px rgba(0, 0, 0, 0.42);
 -webkit-box-shadow: -6px 11px 5px -4px rgba(0, 0, 0, 0.42);
 -moz-box-shadow: -6px 11px 5px -4px rgba(0, 0, 0, 0.42);
}

.about-image img{
 height: 300px;
 width: 300px;
 border-radius: 190px;
 margin-top: 50px;
 border: 5px solid green;
 object-fit: cover;
}

.about-details {
 margin-top: 50px;
}

.about-title h5{
 text-align: center;
 
}

.line{
 display: block;
 width: 70px;
 height: 3px;
 margin: 1px auto;
 background-color: yellowgreen;
 margin-bottom: 20px;
}

@media (min-width: 1500px) {
	.about img{
	height: auto;
	width: 430px;
    border-radius: 50px;
    border: 5px solid #f9004d;
}
.about-text{
	width: 550px;
}
.main{
	width: 1130px;
	max-width: 95%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.about-text h2{
	color: white;
	font-size: 75px;
	text-transform: capitalize;
	margin-bottom: -20px;
    margin-top: -20px;
}
.about-text h5{
	color: white;
	letter-spacing: 2px;
	font-size: 22px;
	margin-bottom: 25px;
	text-transform: capitalize;
}
.about-text p{
	color: #fcfc;
	letter-spacing: 1px;
	line-height: 28px;
	font-size: 18px;
	margin-bottom: 45px;
}

}
@media (max-width:1500px) {
	.header{
	font-size: 30px;
	color: white;
	text-transform: capitalize;
	text-align: center;
	} 
    .image{
		//width: 80%;
		//height: auto;
	}
	.about img{
	height: auto;
	display: block;
	margin-left: auto;
  	margin-right: auto;
	width: 70%;
    border-radius: 50px;
    border: 5px solid #f9004d;
	}
	.about-text h5{
	color: white;
	letter-spacing: 2px;
	margin-top: -20px;
	text-transform: capitalize;
	text-align: center;
	}
	.about-text p{
	color: #fcfc;
	letter-spacing: 1px;
	line-height: 28px;
	text-align: center;
	//font-size: 18px;
	//margin-bottom: 45px;
	}
	.center-button{
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
	}
}
`
export default Wrapper