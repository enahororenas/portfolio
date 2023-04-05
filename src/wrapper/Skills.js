import styled from 'styled-components'
const Wrapper = styled.nav`

*{
	padding: 0;
	margin: 0;
	font-family: 'Josefin Sans', sans-serif;
	box-sizing: border-box;
}
.header{font-size: 30px;}
.techstack-section{
    height: auto;
    background-color: #191919;
}

.section-title{
display: flex;
text-align: center;
justify-content: center;
}

.row{
    padding-bottom: 50px;
}

.grid-container-element { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    //grid-gap: 20px; 
    //gap: 20px;
    //border: 5px solid black; 
    width: 100%; 
    justify-items: center;
} 

.cover{
    margin-left: 150px;
    color: white;
    margin-bottom: 20px;
}

.topelement{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}


.tech-content{
    margin-top: 50px;
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
	//cursor: pointer;
}

.loadmore{
    display: flex;
    align-items: center;
    justify-content: center;
}

.load-more-tech-stack{
    background-color:#f9004d;
    width: 150px;
    padding: 10px;
    color: white;
    margin-top: 35px;
    border-radius: 5px;
    margin-bottom: 40px;
    cursor: pointer;
    text-align: center;
}

.load-more-tech-stack:hover{
    background-color: blueviolet;
    transition-duration: 1s;
}

@media (min-width: 1500px) {
    .section-title h2{
    margin-top: 20px;
    color: white;
	//font-size: 75px;
	width: 1130px;
    }
}

@media (max-width:1500px) {
    .section-title h2{
    margin-top: 20px;
    color: white;
    }

}
`
export default Wrapper