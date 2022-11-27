import styled from 'styled-components'

const Wrapper = styled.nav`
.sidebar-section{
    //display: flex;
    //background-color: #030303da;
    background-color: #101010;
}

.sidebar{
    height: 100vh;
    background-color:#101010;
    width: 95px;
    position: fixed;
}

.sidebar-expand {
    width: 230px;
}

.icon-for-sidebar-expand-and-collapse{
    display: flex;
    align-items: right;
    justify-content: right;
    cursor: pointer;
}

.icon-for-sidebar-expand-and-collapse p svg{
    background-color: #19092c;
    padding: 5px;
    color: white;
    border-radius: 5px;
    margin-top: 50px;
}

.container-fluid{
    padding-left: 0px!important;
    padding-right: 0px!important;
    overflow: hidden;
}

@media (max-width:1500px) {
    .sidebar{
        display: none;
    }
}
`
export default Wrapper