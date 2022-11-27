import styled from 'styled-components'

const Wrapper = styled.nav`
*{
	padding: 0;
	margin: 0;
	font-family: 'Josefin Sans', sans-serif;
	box-sizing: border-box;
}
.home{
    height: fit-content;
    color: white;
}

.button-for-action{
    display: flex;
}

.hero{
	width: 100%;
}
nav{
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 45px;
	padding-right: 8%;
}
nav ul li a:hover{
	color: #f9004d;
	transition: .4s;
}
.logo{
	color: white;
	font-size: 35px;
	letter-spacing: 1px;
	cursor: pointer;
}
span{
	color: #f9004d;
}

.main{
    background-color: #f9004d;
}

.content{
	margin-left:15%;
	margin-top: 60px;
}
h1{
	color: white;
	margin: 20px 0px 20px;
	font-size: 75px;
}
h3{
	color: white;
	font-size: 25px;
	margin-bottom: 50px;
}
h4{
	color: #fcfc;
	letter-spacing: 2px;
	font-size: 20px;
}

.hire-me-button{
    background-color:#f9004d;
    text-align: center;
    width: 180px;
    padding: 10px;
    border-radius: 90px;
    cursor: pointer;
    margin-bottom: 50px;
    //border: 2px solid white;
    font-size: 17px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.hire-me-button:hover{
    background-color: white;
    width: 250px;
    color: black;
    transition-duration: 1s;
}

@keyframes rotation {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }   
}

@media (min-width: 1500px) {
	nav ul li{
	list-style-type: none;
	display: inline-block;
	padding: 10px  25px;
}
nav ul li a{
	color: white;
	text-decoration: none;
	font-weight: bold;
	text-transform: capitalize;
}

.port{
	text-align: left;
}
.logo{
	//text-align: left;
	//margin-left: -4%;
	//margin-right: 200px;
	margin-right: 12%;
}

}

@media (max-width:1500px) {
    .general{
    //margin-top:0px;
    } 
	nav{
		display: grid;
		grid-template-columns: 1fr;
		padding-left: 8%;
	}
	nav ul li{
	list-style-type:none;
	margin-bottom: 20px;
	//display: inline-block;
	//padding: 10px  25px;
	}
	nav ul li a{
	color: white;
	//text-decoration: none;
	font-weight: bold;
	text-transform: capitalize;
}

.hsize1{
	font-size: 20px;
}
.header{
	font-size: 30px;
}
.logo{
	margin-bottom: 20px;
	text-align: center;
}

}
`
export default Wrapper