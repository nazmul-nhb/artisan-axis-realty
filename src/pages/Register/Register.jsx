import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, logOut, googleLogin, facebookLogin, githubLogin, twitterLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = data => {
        const { name, photo, email, password } = data;
        if (errors.password) {
            toast.error(errors.password.message);
        }
        createUser(email, password)
            .then(result => {
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => { })
                    .catch(error => {
                        toast.error(error.message.split(': ')[1]);
                    })
                toast.success("Registration Successful! Please, Login Now!");
                logOut();
                navigate('/login');
            })
            .catch(error => {
                if (error.message.split(': ')[1] === "Error (auth/email-already-in-use).") {
                    toast.error(`Registration Failed! Your Email is Already Registered!`);
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    const handleTwitterLogin = () => {
        twitterLogin()
            .then(() => {
                toast.success("Successfully Logged in!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }
    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 text-teal-900 space-y-6 flex flex-col lg:flex-row justify-around items-around">
            <Helmet>
                <title>Register - ArtisanAxis</title>
            </Helmet>
            <form
                data-aos="zoom-out-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-6 w-[96%] md:w-4/5 lg:w-1/2 px-4 lg:px-20 py-4 lg:py-10 bg-white shadow-lg shadow-[#3c3939] border border-[#d3d0d0] rounded-md mx-auto">
                <h2 className="text-lg md:text-2xl font-medium">Please, Register</h2>
                <div className="flex flex-col gap-3">
                    <label className="font-medium" htmlFor="name">Your Name *</label>
                    <input
                        {...register("name", {
                            required:
                                { value: true, message: "You must provide your name." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="name" id="name" placeholder="Enter Your Name" />
                    {
                        errors.name && <p className="text-red-700">{errors.name.message}</p>
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-medium" htmlFor="email">Your Email *</label>
                    <input
                        {...register("email", {
                            required:
                                { value: true, message: "You must provide a valid email address." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" id="email" placeholder="Enter Your Email" />
                    {
                        errors.email && <p className="text-red-700">{errors.email.message}</p>
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-medium" htmlFor="photo">Your Photo URL *</label>
                    <input
                        {...register("photo", {
                            required:
                                { value: true, message: "You must provide a valid photo URL." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="photo" id="photo" placeholder="Enter Your Photo URL" />
                    {
                        errors.photo && <p className="text-red-700">{errors.photo.message}</p>
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-medium" htmlFor="password">Your Password *</label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: {
                                    value: true, message: "You must choose a password."
                                },
                                minLength: {
                                    value: 6, message: "Password should be at least 6 characters long!"
                                },
                                validate: {
                                    isUpper: (value) => {
                                        if (/(?=.*[A-Z])/.test(value)) {
                                            return true;
                                        }
                                        return "Password must contain at least 1 upper case character!"
                                    },
                                    isLower: (value) => {
                                        if (/(?=.*[a-z])/.test(value)) {
                                            return true;
                                        }
                                        return "Password must contain at least 1 lower case character!"
                                    }
                                }
                            })}
                            className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter Your Password" />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                </div>
                {
                    errors.password && (
                        <p className="text-red-700">{errors.password.message}</p>)
                }
                {/* <label htmlFor="confirm-password">Confirm Your Password</label>
                    <div className="relative">
                        <input
                            {...register("confirm-password", {
                                required:
                                    { value: true, message: "You must fill this field." }
                            })}
                            className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={showPassword ? "text" : "password"} name="confirm-password" id="confirm-password" placeholder="Confirm Your Password" />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div> */}
                {/* <div className="flex gap-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept Our <Link className="text-red-700 hover:text-blue-800">Terms & Conditions</Link></label>
                </div> */}
                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Register'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="text-center text-sm md:text-base font-medium">Already have an Account? <Link className="text-red-700 hover:text-blue-800" to={'/login'}>Login Here!</Link></p>
            </form>
            {/* Register with Social Media */}
            <div
                data-aos="zoom-out-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="flex flex-col gap-2 pt-6 lg:pt-20">
                <h3 className="text-center">Or</h3>
                <h3 className="text-center text-xl font-semibold">Login Using Social Media</h3>
                <div className="flex gap-4 justify-center items-center text-3xl">
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        onClick={handleGoogleLogin} className="text-[#4285f4] hover:text-green-700"><FaGoogle></FaGoogle></button>
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        onClick={handleFacebookLogin} className="text-[#0964ff] hover:text-green-700"><FaFacebook></FaFacebook></button>
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        data-aos-delay="1500"
                        onClick={handleGithubLogin} className="text-[#000000] hover:text-green-700"><FaGithub></FaGithub></button>
                    <button
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        data-aos-delay="2000"
                        onClick={handleTwitterLogin} className="text-[#000000] hover:text-green-700"><FaXTwitter></FaXTwitter></button>
                </div>
            </div>
        </section>
    );
};

export default Register;