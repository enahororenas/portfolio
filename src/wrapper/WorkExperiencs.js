import styled from 'styled-components'
const Wrapper = styled.nav`

.workexperience-section{
    background: #101010;
	width: 100%;
	padding: 100px 0px;  
}


.cover{
    margin-left: 150px;
}


.topelement{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: -40px;
}


.bh5{
	color: white;
	font-size: 23px;
	//margin-bottom: 15px;
}
.pra p{
	color: #fcfc;
	font-size: 16px;
	line-height: 27px;
	//margin-bottom: 25px;
}

.timeline-section{
    display: flex;
    align-items: center;
    justify-content: center;
}


.hpos{
    text-align: center;
}

.desi{
    margin-top: 20px;
    color: #fcfc;
}


.vertical-timeline {
    margin-left:0;
    margin-right:0px;
}

.tech-skills p{
    background-color: #FAF9F6;
    border-radius: 90px;
    color: black;
    padding: 10px;
    text-align: center;
}

.tech-skills p:hover{
    background-color: gold;
    //cursor: pointer;
    color: black;
}
.date-class{
    color:#ffffff;
}

#dark .date-class{
    color: white;
}

@media (min-width: 1500px) {
    .title h2{
	color: white;
	font-size: 75px;
	width: 1130px;
	margin: 30px auto;
	text-align: center;
    }
}

@media (max-width:1500px) {
    .vertical-timeline{
        //width: fit-content;
    }
    .title{
        margin-top: -70px;
    }
    .title h2{
	color: white;
	text-align: center;
    }

}
`
export default Wrapper