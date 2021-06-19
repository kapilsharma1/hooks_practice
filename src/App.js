import logo from './logo.svg';
import './App.css';
import React,{ useState} from 'react';

// import {useHistory} from 'react-router-dom';

//  import {Card,Form,FormControl,Button} from 'react-bootstrap';

// import {incNumber} from "./actions";
// import {decNumber} from "./actions";

// import { useSelector, useDispatch } from "react-redux";

// import CardDisplay from './CardDisplay'

// import Child from './Child';



// function App() {

//   const history=useHistory();

//   const [userName,setUsername] = useState();
//   const [password,setPassword] = useState();
//   const [isValidated,setisValidated] = useState();

//   var user={name:"kapil",password:"123"};

//   function setUser(e)
//   {
//     setUsername(e.target.value);

//   }
//   function setPass(e)
//   {
//     setPassword(e.target.value);
//   }

//   function validate()
//   {
//     if (user.name==userName&&user.password==password)
//     {
//       console.log("validated");
//       history.push("/kapil");
//     }
//     else{
//       console.log("not validated");
//       setisValidated("User Not Validated");

//     }
//   }
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// const App = () => {

//   // it alternative to the useContext hooks in react / consumer from context API
//   const changeTheNumber = useSelector(state => state.changeTheNumber);
  
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="main-div">
      

//       <div class="container">
  
//       <h1>Increment/Decrement counter</h1>
//       <h4>using React and Redux</h4>
      
//       <div class="quantity">
//         <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(1))}><span>-</span></a>
//         <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
//         <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
//       </div>
  
//           </div>
//         </div>
//     </>
//   )
// }


// const App = () =>
// {
//   const [name , setName] = useState("");
//   const [year , setYear] = useState("");
//   const [budget , setBudget] = useState("");
//   const [isSubmit , setisSubmit] = useState(false);

//   function nameSetter(event)
//   {
//     setName(event.target.value);
//   }

//   function yearSetter(event)
//   {
//     setYear(event.target.value);
//   }


//   function budgetSetter(event)
//   {
//     setBudget(event.target.value);
//   }

//   function submitHandler(event)
//   {

//     event.preventD
//     setisSubmit(true);
//   }



//   return (
// <>

//   <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Name</Form.Label>
//     <Form.Control type="text" placeholder="Enter name" value={name}  onChange={nameSetter} />
//     <Form.Text className="text-muted">
//       Enter Name
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Year</Form.Label>
//     <Form.Control type="text" placeholder="Enter year" value={year}  onChange={yearSetter} />
//     <Form.Text className="text-muted">
//       Enter Year
//     </Form.Text>
//   </Form.Group>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Budget</Form.Label>
//     <Form.Control type="text" placeholder="Enter budget" value={budget}  onChange={budgetSetter}/>
//     <Form.Text className="text-muted">
//       Enter Budget
//     </Form.Text>
//   </Form.Group>

//   <Button variant="primary" type="submit"  onClick={submitHandler}>
//     Submit
//   </Button>
// </Form>

// {isSubmit && <CardDisplay name ={name} year={year} budget={budget}></CardDisplay> }

{/* 
<label>Name:</label>
<input type="text" value={name}  onChange={nameSetter}></input>

<label>Year:</label>
<input type="text" value={year}  onChange={yearSetter}></input>

<label>Budget:</label>
<input type="text" value={budget}  onChange={budgetSetter}></input> */}



// </>
//   )
// }


// const App = () =>{

//   const [txt,setTxt]=useState("Intial text");

  

//   return (<>
//   <Child txt={txt} setTxt={setTxt}></Child>

//   </>)
// }
// export default App;



const App = () =>{

  const [inputVal,setInputValue] =useState(localStorage.getItem("inp"))

  function handleChange(e)
  {
   setInputValue(e.target.value);
   localStorage.setItem("inp",inputVal);
  
  }
 
  return (<>

  <h1>{inputVal}</h1>

<form>
          <input
            type='text'
            onChange={handleChange}
            placeholder='Search'
            value={inputVal}
          />
</form>
  

  </>
  )
}
export default App;



