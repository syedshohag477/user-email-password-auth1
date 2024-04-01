import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const name =e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        // reset error and success
        setRegisterError('');
        setSuccess('')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character.')
            return;
        }
        else if(!accepted){
            setRegisterError('please accept our terms and conditions')
            return;
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')


                // updte profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: ""
                })
                .then(() => console.log('profile updated'))
                .catch()
                // send verrification email:
                sendEmailVerification(result.user)
                .then( () =>{
                    alert('please check your emal and verify your account');
                })
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            })
    }




    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full" type="text" placeholder="Your Name" name="name" id="" required />
                    <br />
                    <input className="mb-4 w-full" type="email" placeholder="Email Address" name="email" id="" required />
                    <br />
                    <div className="mb-4 relative border">
                        <input
                            className="w-full"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="" required />
                        <span className="absolute top-1 right-3" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }

                        </span>
                    </div>
                    <br />
                    <div className="mb-4">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">Accept Our <a href="">Terms and Conditions</a></label>
                    </div>
                    <br />
                    <input className=" btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p>Allready Have an Account Please <Link to="/Login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register; <h2 className="text-3xl">Please Register</h2>