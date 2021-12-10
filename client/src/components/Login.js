// import React,{useState} from "react"










// const Login =()=>{
//     const [firstname,setFirstname]=useState('')
//     const [lastname,setLastname]=useState('')
//     const [username,setUsername]=useState('')
//     const [password,setPassword]=useState('')
//     const [passwordConfirmation,setPasswordConfirmation]=useState('')
   
//     const handleChange1=(e)=>{
//         setFirstname(e.target.value)

//     }
//     const handleChange2=(e)=>{
//         setLastname(e.target.value)
//     }
//     const handleChange3=(e)=>{
//         setUsername(e.target.value)
//     }
//     const handleChange4=(e)=>{
//         setPassword(e.target.value)
//     }
//     const handleChange5=(e)=>{
//         setPasswordConfirmation(e.target.value)
//     }
  



//     const HandleSubmit=(e)=>{
//             e.preventDefault()
           
//         fetch('http://localhost:3000/clients',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json',
//                'Accept':'application/json'},
//             body: JSON.stringify({
   
//                    first_name: firstname,
//                    last_name:   lastname,
//                    password: password,
//                    username: username
      
     
//    })
//    })
// }
//     return(
//         <div>
//             Login
//             <form onSubmit={HandleSubmit}> 
//                 <input onChange={handleChange1} placeholder="first name"/>
//                 <br/>
//                 <input onChange={handleChange2} placeholder="last name"/>
//                 <br/>
//                 <input onChange={handleChange3} placeholder="username"/>
//                 <br/>
//                 <input type="password"onChange={handleChange4} placeholder="password"/>
//                 <br/>
//                 <input type="password"onChange={handleChange5} placeholder="confirm"/>
//                 <br/>
//                 <button type="submit">submit</button>

//             </form>
//         </div>
//     )
// }

// export default Login