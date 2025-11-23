
export default function AboutPage(){
  return(
    <div className="default"> 
      <div> 
        <a href="/">Go to Home Page</a>
      </div>
      <h1>About</h1>
      <p> Hello there. <br /> How do you do?</p>

      <h1>Welcome to my app</h1>
      <MyButton />

      <h1>
        {user.name}
      </h1>
    
      <img className="avatar" src="https://cards.scryfall.io/normal/front/5/4/54819d7a-eec6-49e6-a0bb-d9d07d42b4a6.jpg?1730491110" />
    </div> 
      
  );
}


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}



