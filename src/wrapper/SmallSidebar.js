import styled from 'styled-components'

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .nav-item-mobileview{
    color: white;
  }

  .nav-item-mobileview .active{
    //background-color: darkgreen;
    color:yellow;
    border-radius: 90px;
    padding: 5px;
    width: 100%;
}


.nav-item-mobileview .hover{
  background-color: darkgreen;
}

  .navbar-header{
    width: 100%;
    background-color: #040720;
    color: white;
    padding: 5px;
    opacity: 1;
}

.navbar-header p svg{
    margin-left: 10px;
    cursor: pointer;
    margin-top: 20px;
}


  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    //justify-content: center;
    //align-items: center;
    z-index: -1;
    opacity: 0;
    transition: 500ms;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: #040720;
    width: fit-content;
    //height: 50vh;
    border-radius: 10px;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

.content ul{ list-style-type: none;}
.content li:hover {
  color: blue;
}

  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }
  
`
export default Wrapper
