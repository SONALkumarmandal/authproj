
import * as React from "react"
import { Link, Navigate, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
function SignUpPage() {

  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    mobile:"",
  });

function handleChange(e){
  const name=e.target.name;
  const value=e.target.value;
   setUser({
    ...user,
    [name]:value,
   })
}
  
 async function clickSubmitAction(e) {
    e.preventDefault()
    console.log(user)
   try {
    const response=await fetch("http://localhost:8000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user)
    });
   } catch (error) {
    console.log("error",error)
   }
  }

    return (
      <div className='bg-zinc-800 flex  justify-center items-center w-full h-screen'>
      <Card className="w-[350px] backdrop-brightness-90 bg-transparent rounded-xl h-4/5 text-white">
       <CardHeader>
         <CardTitle>Sign up</CardTitle>
       </CardHeader>
       <CardContent>
         <form>
           <div className="grid w-full items-center gap-6">
           <div className="flex flex-col space-y-1.5 pt-6">
               <Label htmlFor="name">email</Label>
               <Input onChange={handleChange} className="rounded-xl" name="username" id="name4" placeholder="username" value={user.username}/>
             </div>
             <div className="flex flex-col space-y-1.5">
               <Label htmlFor="name">email</Label>
               <Input onChange={handleChange} className="rounded-xl" name="email" id="name2" placeholder="email" value={user.email}/>
             </div>
             <div className="flex flex-col space-y-1.5">
               <Label htmlFor="name">mobile</Label>
               <Input onChange={handleChange} className="rounded-xl" name="mobile" id="name1" placeholder="mobile" value={user.mobile}/>
             </div>
             <div className="flex flex-col space-y-1.5">
               <Label htmlFor="name">password</Label>
               <Input onChange={handleChange} className="rounded-xl" type="password" name="password" id="name3" placeholder="password" value={user.password} />
             </div>
           </div>
         </form>
       </CardContent>
       <CardFooter className="flex justify-between pt-6">
         <Button onClick={clickSubmitAction} type="submit" className=" hover:bg-blue-500 rounded-xl" variant="outline">Submit</Button>
       </CardFooter>  
     </Card>
    </div>
      )
}

export default SignUpPage