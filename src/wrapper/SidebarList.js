import styled from 'styled-components'

const Wrapper = styled.nav`
.sidebar-profile-pic img{
    border-radius: 90px;
    margin-top: 10px;
    height: 150px;
    width: 150px;
    display: flex;
    vertical-align: middle;
    margin: 0 auto;
    object-fit: cover;
    border: 3px solid green;
}



.navbar-items ul li{
    color: white;
    list-style-type: none;
    cursor: pointer;
    margin-top: 30px;
    text-decoration: none;
}

.navbar-items ul li svg{
    margin-right: 25px;
    margin-left: 10px;
}

.navbar-items-only-icons ul li {
    margin-top: 30px;
    cursor: pointer;
    list-style-type: none;
}

.navbar-items-only-icons ul li svg{
    margin-left: 10px;
}

.navbar-items ul li a{
    text-decoration: none;
}

.nav-item{
    color:white;
}

.nav-item .active{
    border-left: 2px solid yellow;
    color: yellow;
}

.change{
    border-left: 2px solid yellow;
    color: yellow;
}

`
export default Wrapper