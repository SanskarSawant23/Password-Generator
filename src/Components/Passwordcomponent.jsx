import { useState, useCallback, useEffect, useRef } from "react";


export const Passwordcomponent = ()=>{
    const [password, setPassword] =useState("");
    const [number, setNumber ] = useState(false);
    const [specialchar, setSpecialchar]= useState(false);
    const [length, setLength] = useState(7);

    const passwordRef = useRef(null);
  
    useEffect(()=>{
      onClickHandler()
    },[])
   
    function onClickHandler(){
     
      let pass ="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(number) str+= "0123456789";
      if(specialchar) str+= "!@#$%^&*(){}|"
      for(let i = 0; i<length; i++){
        let ch = Math.floor(Math.random()*str.length);
        pass += str.charAt(ch);
        
      }
      setPassword(pass);
    }

    function copyclipboard(){
        passwordRef.current?.select()
        console.log(passwordRef)
        window.navigator.clipboard.writeText(password)
    }
    return <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-4 pt-4">
        
        <div className="flex shadow rounded-lg mb-4 overflow-hidden  ">
            <input
                type="text"
                value={password}
                className="outline-none-w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
            />
            <button className="ml-4 p-2 rounded-lg text-white bg-blue-400" onClick={copyclipboard}>Copy</button>
        </div>
        <div className="flex texy-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input type="range"
                min={7}
                max={20}
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}
                onClick={onClickHandler}
                className="cursor-pointer"
                 />
                <label >Length:{length}</label>

                <input type="checkbox"
                onChange={()=>{
                    setNumber((prev)=>!prev)
                }} />
                <label>Number</label>

                <input type="checkbox"
                onChange={()=>{
                    setSpecialchar((prev)=>!prev)
                }} />
                <label>Special Characters</label>

               
            </div>
            
            
        </div>
        
  
      </div>
      
    </>
  
  }