import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleUpdate = data => {
        const { name, photo } = data;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                toast.success("Profile Updated Successfully!");
                navigate('/profile');
            })
            .catch(error => {
                toast.error(error.message.split(': ')[1]);
            })
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 text-teal-900 space-y-6 flex flex-col justify-center items-center">
            <Helmet>
                <title>Update Profile: {user.displayName} - ArtisanAxis</title>
            </Helmet>
            <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-6 w-[96%] md:w-4/5 lg:w-1/2 px-4 lg:px-20 py-6 lg:py-10 bg-gradient-to-r from-[#86cfa157] to-[#8d6dd9a3] shadow-lg shadow-[#3c3939] rounded-lg">
                <div className="flex flex-col gap-3 items-center my-4">
                    <img className="rounded-full border-2 p-1 border-green-900 w-24 md:w-32 h-24 md:h-32" src={user.photoURL} alt={user.displayName} title={user.displayName} />
                    <h4 className="text-2xl md:text-3xl font-bold">{user.displayName}</h4>
                </div>
                <h2 className="text-lg md:text-2xl font-medium text-center">Update Your Profile</h2>
                <div className="flex flex-col gap-3">
                    <label htmlFor="name">Your Name</label>
                    <input
                        {...register("name", {
                            value: `${user?.displayName || ''}`,
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
                            value: `${user?.photoURL || ''}`,
                            required:
                                { value: false, message: "You must provide a valid photo URL." }
                        })}
                        className="p-2 rounded-lg bg-[#F3F3F3]" type="text" name="photo" id="photo" placeholder="Your Photo URL" />
                </div>
                <Button buttonType={'submit'} className={'border w-full text-xl font-semibold'} buttonText={'Update Profile'} color={'teal'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
            </form>
        </section>
    );
};

export default UpdateProfile;