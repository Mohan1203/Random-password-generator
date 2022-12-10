
import React, { useState, useEffect } from "react";



function Body() {
    
    let [arrLength, setArrLength] = useState();
    let [passwordLength, setPasswordLength] = useState();
    let [password, setPassword] = useState(" ");
    let [message, setMessage] = useState("");
    let [lowercaseLatters, setLowercaseLatters] = useState(true);
    let [specialLatters, setSpecialLatters] = useState(true);
    let [numbers, setNumbers] = useState(true);
    let [userAlert, setUserAlert] = useState("");
    let [passwordrate, setPasswordRate] = useState("");
    let [passwordStyle, setPasswordStyle] = useState({});
   
  

    let randomgen = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "<", ">", "?", "/", ";", ":", "."];




    let passwordGenerate = () => {

        let pass = [];
        if (lowercaseLatters === false && numbers === false && specialLatters === false) {
            randomgen.splice(25);
            setArrLength(randomgen.length);
            setUserAlert("Please mixed up any two type character to secure password");
            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        }
        else if (lowercaseLatters === false && numbers === false) {
            randomgen.splice(25, 35);
            setArrLength(randomgen.length);
            setUserAlert("");
            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        } else if (lowercaseLatters === false && specialLatters === false) {
            randomgen.splice(25, 25);
            randomgen.splice(35, 50);
            setArrLength(randomgen.length);
            setUserAlert("");
            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        } else if (specialLatters === false && numbers === false) {
            randomgen.splice(50);
            setArrLength(randomgen.length);
            setUserAlert("");
            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        }
        else if (lowercaseLatters === false) {
            randomgen.splice(25, 25);
            setArrLength(randomgen.length);
            setUserAlert("");
            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        }
        else if (numbers === false) {
            randomgen.splice(50, 10);
            setArrLength(randomgen.length);
            setUserAlert("");
            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        } else if (specialLatters === false) {
            randomgen.splice(60, 25);
            setArrLength(randomgen.length);
            setUserAlert("");

            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        } else {
            setArrLength(randomgen.length);
            setUserAlert("");

            while (passwordLength) {
                let randomNumber = Math.floor(Math.random() * arrLength);
                pass.push(randomgen[randomNumber]);
                passwordLength--;
            }
        }
        setPassword(pass.toString());
        setMessage(" ");
        
      
    }

    const CopyToClipBoard = async (copyMe) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setMessage("Copy succesfully")
        } catch (error) {
            console.log(error);
            setMessage("Sorry some error occur try again")
        }
    }
    useEffect(() => {
        setArrLength(randomgen.length);
        passwordGenerate();
        setPasswordLength(13);
        
    }, []);

    
    
    
    
    const onStyleChange = e => {
        setPasswordLength(e.target.value);
        if (passwordLength <= 5) {
            setPasswordStyle('maroon');
            setPasswordRate("Poor")
        } else if (passwordLength > 5 && passwordLength <= 10) {
            setPasswordStyle("red");
            setPasswordRate("Weak")
        } else if (passwordLength > 10 && passwordLength < 15) {
            setPasswordStyle("orange")
            setPasswordRate("Good")
        } else {
            setPasswordStyle("green");
            setPasswordRate("Strong")
        }
    }

   

    return (
        <div className="h-[200vh]">
            <form>
                <div className="flex flex-col w-1/2 m-auto">
                    <div >
                        <input type="checkbox" id="uppercaseLatters" name="uppercaseLatters" checked="checked" />
                        <label htmlFor="uppercaseLatters" className="p-2">uppercaseLatters</label>
                    </div>
                    <div >
                        <input type="checkbox" id="lowercaseLatters" name="lowercaseLatters"
                            defaultChecked={lowercaseLatters} onChange={() => { setLowercaseLatters(!lowercaseLatters) }} />
                        <label htmlFor="lowercaseLatters" className="p-2"  >lowercaseLatters</label>
                    </div>
                    <div >
                        <input type="checkbox" id="special character" name="special character"
                            defaultChecked={specialLatters} onChange={() => { setSpecialLatters(!specialLatters) }} />
                        <label htmlFor="special character" className="p-2">special character</label>
                    </div>
                    <div >
                        <input type="checkbox" id="numbers" name="numbers" defaultChecked={numbers} onChange={() => { setNumbers(!numbers) }} />
                        <label htmlFor="numbers" className="p-2">numbers</label>
                    </div>
                    <div className="flex flex-col lg:my-5">
                    <span>password length:{passwordLength}</span>
                    <input type="range" min="1" max="25" step="1" value={passwordLength} onChange={onStyleChange}
                        className="border-2 border-black p-1 bg-slate-200 rounded-sm"
                    />
                    </div> 
                    <input type="button" value="Generate" className="bg-violet-600 w-[8rem] h-[3rem] mx-auto my-2  cursor-pointer text-xl border-2 border-black text-white" onClick={passwordGenerate} />
                </div>

             </form>
            
           
            {password ? <div className="text-center m-2 flex flex-col">
                <p className="p-5  ">{password.replaceAll(",", " ")}</p>
                {userAlert ? <span className="text-red-600 px-5 pb-10">{userAlert}</span> : null}
                <div className="flex my-3 mx-auto lg:mx-auto ">
                    <div className="border-[1px] border-black mx-1 h-[6px] px-6" style={{ backgroundColor: passwordStyle }} id="p1"></div>
                    <div className="border-[1px] border-black mx-1 h-[6px] px-6" style={passwordLength > 5 ? { backgroundColor: passwordStyle } : null}></div>
                    <div className="border-[1px] border-black mx-1 h-[6px] px-6" style={passwordLength > 10 ? { backgroundColor: passwordStyle } : null}></div>
                    <div className="border-[1px] border-black mx-1 h-[6px] px-6" style={passwordLength > 15 ? { backgroundColor: passwordStyle } : null}></div>
                </div>
                <div className="mb-4" style={{ color: passwordStyle }}>{passwordrate}</div>
                <button onClick={() => CopyToClipBoard(password.replaceAll(",", ''))} className=" px-10 py-2 w-1/2 m-auto bg-[#0C81F6]">Copy</button><span>{message}</span>
              
            </div>

                : null}

        </div>
    )
}

export default Body;