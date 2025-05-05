// @ts-nocheck
import Footer from "./components/footer"
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from './features/auth/authSlice';
// import { RootState, AppDispatch } from './app/store';
import { Link, useNavigate } from "react-router-dom";
import pf from "./assets/imagex/hash.svg";
import pass from "./assets/imagex/lock.svg";
import eye from "./assets/imagex/eye.svg";
import closeye from "./assets/imagex/eye-off.svg";

const Login = () => {
    const navigate = useNavigate()
        // const dispatch = useAppDispatch()
        const [cred, setcred] = useState({
            userId:'',
            password:'',
        })
        const [error, seterror] = useState([])
        const [visi, setvisi] = useState(false)
    
        const [errors, setErrors] = useState({});
    
        // Handle input change
        const handleChange = (e) => {
            const { name, value } = e.target;
            setcred({ ...cred, [name]: value });
        };
    
        // Validation rules
        const validate = () => {
            const newErrors = {};
    
            // Name validation
            // if (!cred.userId.trim()) {
            // newErrors.userId = "Name is required";
            // }
    
            // PF Number validation (basic pattern)
            const pfPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            const phonePattern = /^(?:\+234|0)[789][01]\d{8}$/;
            if (!cred.userId) {
            newErrors.userId = "Email or phone number is required";
            } else if (!pfPattern.test(cred.userId) && !phonePattern.test(cred.userId)) {
            newErrors.userId = "Invalid Email or phone number";
            }
    
            // Password validation (at least 6 characters)
            if (!cred.password) {
            newErrors.password = "Password is required";
            } else if (cred.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            }
    
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0; // return true if no errors
        };
    
        const {userId, password} = cred
        // const dispatch = useDispatch<AppDispatch>();
        // const { token, loading, error } = useSelector((state: RootState) => state.auth);
    
        const handleLogin = async (e: React.FormEvent) => {
            e.preventDefault();
             // Validate inputs
             const isValid = validate();
    
            //  console.log(isValid)
             if (isValid) {
                navigate('/welcome')
                // await dispatch(loginUser({ userId, password }));
             } else {
             console.log("Validation failed.");
             
             }
        };
  return (
    <div>
        <div className="m-auto w-[100px] h-[100px] rounded-full bg-gray-200 mt-[50px]"></div>
        <div className="mainform mt-6 grid m-auto w-[600px] gap-10 mb-10">
            
            <form action="" className="grid gap-4 mt-4 justify-center border-1 border-[#666666] rounded-xl w-[600px] m-auto py-10" autoComplete="nope">
                <h2 className="text-xl text-gray text-center">Sign in</h2>
                {error && <p className="text-center text-[#FF0000] py-3">{error}</p>}

                <label htmlFor="" className="text-[#666666]">Email or mobile phone number</label>
                <div className="border border-[#d4d4d4] rounded-md flex bg-white h-[50px]">
                    {/* <img className="m-4 w-[22px]" src={pf} alt="" /> */}
                    <input className="text-gray bg-white rounded-md w-[100%] p-4" type="text" name="userId" value={cred.userId} autoComplete="nope"  onChange={handleChange}/>
                </div>
                {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}

                <div className="flex justify-between items-center"><label htmlFor="" className="text-[#666666]">Your password</label><div className="flex gap-1 items-center cursor-pointer " onClick={(e)=>setvisi(!visi)}><img className="m-1 w-[22px] " src={visi === false ? eye : closeye} alt="" />{visi === false ? 'Show' : 'Hide'}</div></div>
                <div className="border border-[#d4d4d4] rounded-md flex bg-white h-[50px]">
                    {/* <img className="m-4 w-[22px]" src={pass} alt="" /> */}
                    <input className="text-gray bg-white w-[100%] rounded-md p-4" type={visi === false ? 'password' : 'text'} name="password" value={cred.password}  id="hide" autoComplete="off"  onChange={handleChange}/>
                    
                </div>
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                {/* <div><input type="text" name="Email"/></div> */}
                
                <div className="grid gap-3">
                    By continuing, you agree to the Terms of use and Privacy Policy. 
                
                    <button className="text-white bg-[#111111] rounded-full opacity-60 my-2 w-[100%] h-[40px] text-md font-bold cursor-pointer" onClick={handleLogin}>
                        Login
                    </button>
                    
                </div>
                <div className="flex justify-between">
                    <div className="text-right underline">Other issues with sign in</div>
                    <div className="text-right underline">Forgot Password?</div>
                </div>
                
            </form>
            <div className="grid grid-cols-3 items-center ">
                <hr />
                <p className="text-center text-[1.5vw]">Starting Out?</p>
                <hr />
            </div>
            <button className="text-[#111111] border border-[#111111] opacity-60 rounded-full w-[100%] h-[40px] text-md font-bold cursor-pointer" onClick={handleLogin}>
                Create an account
            </button>
        </div>
        <hr />
        <div className="w-[600px] flex justify-around m-auto p-2 opacity-60">
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>@2022yanliudesign</p>
        </div>
      <Footer/>
    </div>
  )
}

export default Login

