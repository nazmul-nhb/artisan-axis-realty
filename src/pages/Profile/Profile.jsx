import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <section className="mx-4 md:mx-12 my-2 md:my-8 p-4 md:px-8 md:py-12 bg-gradient-to-r from-[#86cfa157] to-[#8d6dd9a3] rounded-lg flex flex-col items-center gap-6">
            <div className="flex flex-col gap-3 items-center my-4">
                <img className="rounded-full" src={user.photoURL} alt={user.displayName} title={user.displayName} />
                <h4 className="text-4xl font-bold">{user.displayName}</h4>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2 text-xl">
                <h4 className="font-semibold">Registered Email:</h4>
                {user.email}
                {
                    user.emailVerified
                        ? <p className="text-green-900">Your Email is Verified!</p>
                        : <p className="text-red-700">Your Email is Not Verified! Please, Verify!</p>
                }
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2 text-xl">
                <h4 className="font-semibold">Account Created on:</h4>
                {user.metadata.creationTime}
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2 text-xl">
                <h4 className="font-semibold">Last Login Time:</h4>
                {user.metadata.lastSignInTime}
            </div>
        </section>
    );
};

export default Profile;