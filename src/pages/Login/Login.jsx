import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userLogin, googleLogin, facebookLogin } = useContext(AuthContext);

    const handleLogin = data => {
        const { email, password } = data;
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                alert(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                alert(error);
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                alert(error);
            })
    }

    return (
        <section className="text-teal-900 space-y-6 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6 w-1/2 px-20 py-10 bg-white shadow-lg shadow-[#3c3939] border border-[#d3d0d0] rounded-md">
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
                <div className="flex gap-2">
                    <h3>Forgot Password? <button>Click Here</button></h3>
                </div>
                <Button buttonType={'submit'} className={'w-full text-xl font-semibold'} buttonText={'Login'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="font-medium">New to this site? Please, <Link to={'/register'}>Register Here!</Link></p>
            </form>
            {/* Social Login */}
            <div className="flex flex-col gap-2">
                <h3 className="text-center">Or</h3>
                <h3 className="text-center">Login Using Social Media</h3>
                <div className="flex gap-4 justify-center items-center text-3xl">
                    <button onClick={handleGoogleLogin} className=""><FaGoogle></FaGoogle></button>
                    <button onClick={handleFacebookLogin} className=""><FaFacebook></FaFacebook></button>
                    <button className=""><FaGithub></FaGithub></button>
                    <button className=""><FaXTwitter></FaXTwitter></button>
                </div>
            </div>
        </section>
    );
};

export default Login;