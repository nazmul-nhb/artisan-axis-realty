import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleRegister = data => {
        const { name, photo, email, password } = data;
        createUser(email, password)
            .then(result => {
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => { })
                    .catch(error => {
                        alert(error);
                    })
            })
            .catch(error => {
                alert(error);
            })
    }

    return (
        <section className="text-teal-900 space-y-6 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-6 w-1/2 px-20 py-10 bg-white shadow-lg shadow-[#3c3939] border border-[#d3d0d0] rounded-md">
                <h2 className="text-2xl font-medium">Please, Register</h2>
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
                    <input className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="photo" id="photo" placeholder="Your Photo URL" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="email">Your Email</label>
                    <input
                        {...register("email", {
                            required:
                                { value: true, message: "You must provide your email address." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="password">Your Password</label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required:
                                    { value: true, message: "You must choose a password." }
                            })}
                            className="p-2 rounded-lg w-full bg-[#F3F3F3]" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your Password" />
                        <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                </div>

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
                <Button buttonType={'submit'} className={'w-full text-xl font-semibold'} buttonText={'Register'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                <p className="font-medium">Already have an Account? Please, <Link to={'/login'}>Login Here!</Link></p>
            </form>
        </section>
    );
};

export default Register;