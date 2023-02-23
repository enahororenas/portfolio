import styled from 'styled-components'
const Wrapper = styled.nav`



.general{   
  background-color: #191919;  
  padding-bottom: 50px;
}

.section-title{
display: flex;
text-align: center;
justify-content: center;
}

.cover{
  //margin-left: 200px;
}

.card{
	width: 100%;
	border-radius: 20px;
	//margin: 15px;
	//position: relative;
	overflow: hidden;
  //margin-left: 150px;
  //display: flex;
  text-align: center;
  //display: grid;
  //justify-items: center;
}

.description {
    margin: 5px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    margin-bottom: 20px;
    color:#fcfc;
    font-size: large;
  }

.tech-used-in-project {
    //margin-top: 20px;
    //margin: 5px;
    display: flex;
    //align-items: center;
	  justify-content: space-evenly;
    //align-self: left;
    gap:40px;
  }
  


.link{
  color: black;
}

  
  .demo {
    margin-top: 25px;
    background-color:#f9004d;
    width: 180px;
    padding: 10px;
    border-radius: 90px;
    cursor: pointer;
    text-align: center;
    padding: 25px 0;
    font-size: 17px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .demo:hover {
    background-color: darkgreen;
    transition-duration: 1s;
  }
  
  .cover{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  @media (min-width: 1500px) {
  .section-title h2{
    margin-top: 20px;
    color: white;
	  font-size: 75px;
	  width: 1130px;
    }
    .skill{
    background-color:#f9004d;
    text-align: center;
    width: 180px;
    padding: 10px;
    border-radius: 90px;
    cursor: pointer;
    //margin-top: 10px;
    //border: 2px solid white;
    font-size: 17px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
  }

  @media (max-width:1500px) {
    .section-title h2{
    margin-top: 20px;
    color: white;
    }
    .header{
      font-size: 20px;
    }
    .description {
      font-size: medium;
    }
    .tech-used-in-project {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .skill{
    background-color:#f9004d;
    text-align: center;
    padding: 2px;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-left: 20px;
    margin-right: 20px;
}
}

  `
  export default Wrapper  