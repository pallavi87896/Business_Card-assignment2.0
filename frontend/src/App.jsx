import { useState,useEffect } from 'react'
import { Card } from './components/Card'
function App() {
  const [businessCard, setBusinessCard] = useState([]);
  const [formData,setFormData]=useState({
    name:'',
    description:'',
    linkedIn:'',
    github:'',
    interests:''
//formData keeps the user input from the form..initially all fields are empty , it is updated when usertypes in each form field
  });

  useEffect(()=>{
  fetch("http://localhost:3000/card")
  .then(async function(res){
    const json=await res.json();
    setBusinessCard(json.findCard);
  });
  //setBusinessCard updates the state to hold the fetched card
},[]);
//this code runs once when the component mounts 

function handleChange(e){
  const { name,value }=e.target;//gets which file user typed in and value gets the value user entered
  setFormData(prev=>({...prev,[name]:value}));
  //setFormData(...):updates the new data leavin behind the old ones
}

//send data to backend
function handleSubmit(e) {
 e.preventDefault();
 const updatedFormData={...formData,interests:formData.interests.split(',').map(function(i){
  return i.trim();
 })} 
 //page resubmit prevent

 //fetch...sends the new card data to backend and after submission it refetches all cards to render the new updated list using setBusinessCard...
fetch("http://localhost:3000/card",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(updatedFormData),
  }).then(()=>{
    fetch("http://localhost:3000/card")
    .then(res => res.json())
        .then(data => setBusinessCard(data.findCard));

  });
}

return(
  <div>
    
<form onSubmit={handleSubmit}>
  <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
  <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
  <input name="linkedIn" placeholder="LinkedIn URL" value={formData.linkedIn} onChange={handleChange}/>
  <input name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange}/>
  <input name="interests" placeholder="Interests" value={formData.interests} onChange={handleChange}/>
  <button type="submit">Create Card</button>
</form>


      {businessCard.map(function(card,index){
      return <Card
     key={index}
     name={card.name}
     description={card.description}
     interests={card.interests}
     linkedIn={card.linkedIn}
     github={card.github}></Card>
      })}
    </div>
  )
}
//onChange={handleChange}...keeps React's state updated as the user types

export default App
