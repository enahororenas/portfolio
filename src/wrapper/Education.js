import styled from 'styled-components'
const Wrapper = styled.nav`
.education-section{
    background: #101010;
}

.section-title{
display: flex;
text-align: center;
justify-content: center;
}

.timeline-section{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
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