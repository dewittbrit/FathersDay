import { useState } from "react"

export default function SignUp(){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    async function handleSubmit(event){
        // event.preventDefault()
        // try{
        //           const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
        //             method: "POST",
        //           headers: {
        //             'Content-Type': 'application/json',
        //           },
        //           body: JSON.stringify({
        //             firstname: firstname,
        //             lastname: lastname,
        //             email: email,
                    
        //           })
        //         })
        //           const result = await response.json()
        //           console.log(result)
                  
        //         } catch(err){
        //                 console.error(err)
        //         }
    }
return (
<>
        <form onSubmit={handleSubmit}> 
            <label> Firstname:</label>
            <input value={firstname} onChange={(event)=>setFirstname(event.target.value)}></input>
            <br></br>
            <label> Lastname:</label>
            <input value={lastname} onChange={(event)=>setLastname(event.target.value)}></input>
            <br></br>
            <label> Email:</label>
            <input value={email} onChange={(event)=>setEmail(event.target.value)}></input>
            <br></br>
             <p> Be one of the first to know when I have something fun going on :)</p>
            <button>Submit</button>
        </form>
</>
)
}
