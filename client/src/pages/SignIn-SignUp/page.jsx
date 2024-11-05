import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" 
import { useState } from "react"



 function SignInUp() {
  const [email,setEmail]=useState("");
const [pass,setPass]=useState("");

function emailClickAction(e){
  setEmail(e.target.value);
}
function passClickAction(e){
  setPass(e.target.value)
}


  return (
   <div className='bg-zinc-800 flex  justify-center items-center w-full h-screen '>
     <Card className="w-[350px] backdrop-brightness-90 bg-transparent rounded-xl h-2/4 text-white">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">email</Label>
              <Input className="rounded-xl" onChange={emailClickAction} value={email} id="mail" placeholder="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">password</Label>
              <Input className="rounded-xl" onChange={passClickAction} value={pass} type="password" id="pass" placeholder="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between pt-5">
        <Button className=" hover:bg-blue-500 rounded-xl" variant="outline">Sign-In</Button>
        <Button className=" hover:bg-blue-500 rounded-xl" variant="outline"><Link to="/signup">Sign-up</Link></Button>
      </CardFooter>  
    </Card>
   </div>
  )
}
export default SignInUp