import styled from 'styled-components'
const Wrapper = styled.nav`



.contact-section{
    background: #101010;
}

.section-title{
display: flex;
text-align: center;
justify-content: center;
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
    margin-bottom: -20px;
}

.prab p{
	color: #fcfc;
	font-size: 16px;
	line-height: 27px;
	margin-bottom: 25px;
}

.box{
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
}
.card{
	height: 225px;
	width: 335px;
	padding: 20px 35px;
	background: #191919;
	border-radius: 20px;
	margin: 15px;
	position: relative;
	overflow: hidden;
	text-align: center;
}
.card i{
	font-size: 50px;
	display: block;
	text-align: center;
	//margin: 25px 0px;
	color: #f9004d;

}
h5{
	color: white;
	font-size: 23px;
	margin-bottom: -5px;
}
.pra p{
	color: #fcfc;
	font-size: 16px;
	line-height: 27px;
}

.bell {
    margin-bottom: -20px;
}

footer{
	position: relative;
	width: 100%;
	height: 400px;
	background: #101010;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.bottom{
	font-size: 30px;
	color: white;
	margin-bottom: -20px;
	font-weight: bold;
}

.header {
    //margin-bottom: 20px;
}
.emailhead {
    color: white;
    text-align: center;
    margin-left: 20px;
}
.email{
    color: inherit;
    text-decoration: inherit;
}

.pcontrol{
    color: white;
}

@media (min-width: 1500px) {
.section-title h2{
    margin-top: 20px;
    color: white;
	font-size: 75px;
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