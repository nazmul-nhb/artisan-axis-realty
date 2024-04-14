import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userLogin, googleLogin, facebookLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [loginError, setLoginError] = useState(null)

    const handleLogin = data => {
        const { email, password } = data;
        userLogin(email, password)
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setLoginError(error);
                if (error.message.split(': ')[1] === "Error (auth/invalid-login-credentials).") {
                    toast.error("Email & Password Did Not Match");
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                // setLoginError(error);
                toast.error(error.message.split(': ')[1]);
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                // setLoginError(error);
                toast.error(error.message.split(': ')[1]);
            })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 text-teal-900 space-y-6 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6 w-[96%] md:w-4/5 lg:w-1/2 px-4 lg:px-20 py-4 lg:py-10 bg-white shadow-lg shadow-[#3c3939] border border-[#d3d0d0] rounded-md">
                <h2 className="text-2xl font-medium">Please, Login</h2>
                <div className="flex flex-col gap-3">
                    <label htmlFor="email">Your Email</label>
                    <input
                        {...register("email", {
                            required:
                                { value: true, message: "You must provide your email address." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" id="email" placeholder="Your Email" />
                    {
                        errors.email && <p className="text-red-700">{errors.email.message}</p>
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="password">Your Password</label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required:
                                    { value: true, message: "You must provide a valid password." }
                            })}
                            className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" />
                        {
                            errors.password && <p className="text-red-700">{errors.password.message}</p>
                        }
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                </div>
                {/* {
                    loginError ? <p className="text-red-700">{loginError}</p> : null
                } */}
                <div className="flex gap-2">
                    <h3>Forgot Password? <button className="text-red-700">Click Here</button></h3>
                </div>
                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Login'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="text-center text-sm md:text-base font-medium">New to this site? Please, <Link className="text-red-700" to={'/register'}>Register Here!</Link></p>
            </form>
            {/* Social Login */}
            <div className="flex flex-col gap-2">
                <h3 className="text-center">Or</h3>
                <h3 className="text-center">Login Using Social Media</h3>
                <div className="flex gap-4 justify-center items-center text-3xl">
                    <button onClick={handleGoogleLogin} className="text-[#4285f4] hover:text-green-700"><FaGoogle></FaGoogle></button>
                    <button onClick={handleFacebookLogin} className="text-[#0964ff] hover:text-green-700"><FaFacebook></FaFacebook></button>
                    <button className=""><FaGithub></FaGithub></button>
                    <button className=""><FaXTwitter></FaXTwitter></button>
                </div>
            </div>
        </section>
    );
};

export default Login;