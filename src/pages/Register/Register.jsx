import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();

    const handleRegister = data => {
        const { name, photo, email, password } = data;
        if (errors.password) {
            toast.error(errors.password.message);
        }
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                // toast.warning(errors.password.message);

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
                // toast.error(error);
            })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 text-teal-900 space-y-6 flex flex-col justify-center items-center">
            <Helmet>
                <title>Register - ArtisanAxis</title>
            </Helmet>
            <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-6 w-[96%] md:w-4/5 lg:w-1/2 px-4 lg:px-20 py-4 lg:py-10 bg-white shadow-lg shadow-[#3c3939] border border-[#d3d0d0] rounded-md">
                <h2 className="text-lg md:text-2xl font-medium">Please, Register</h2>
                <div className="flex flex-col gap-3">
                    <label htmlFor="name">Your Name</label>
                    <input
                        {...register("name", {
                            required:
                                { value: true, message: "You must provide your name." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="name" id="name" placeholder="Your Name" />
                    {
                        errors.name && <p className="text-red-700">{errors.name.message}</p>
                    }
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="photo">Your Photo</label>
                    <input
                        {...register("photo", {
                            required:
                                { value: true, message: "You must provide a valid photo URL." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="photo" id="photo" placeholder="Your Photo URL" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="email">Your Email</label>
                    <input
                        {...register("email", {
                            required:
                                { value: true, message: "You must provide a valid email address." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                {
                    errors.email && <p className="text-red-700">{errors.email.message}</p>
                }
                <div className="flex flex-col gap-3">
                    <label htmlFor="password">Your Password</label>
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
                                // pattern: {
                                //     value: /(?=.*[a-z])/, message: "Password must contain at least 1 lower case character!"
                                // },
                                // pattern: {
                                //     value: /(?=.*[A-Z])/, message: "Password must contain at least 1 upper case character!"
                                // },
                            })}
                            className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                </div>
                {
                    errors.password && (
                        // toast.error(errors.password.message),
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
                <div className="flex gap-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept Our <Link>Terms & Conditions</Link></label>
                </div>
                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Register'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="text-center text-sm md:text-base font-medium">Already have an Account? Please, <Link className="text-red-700" to={'/login'}>Login Here!</Link></p>
            </form>
        </section>
    );
};

export default Register;