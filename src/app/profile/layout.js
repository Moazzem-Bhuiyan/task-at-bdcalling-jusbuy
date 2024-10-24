import ProfileSideber from "../Components/ProfileSideber/ProfileSideber";


const ProfileLayout = ({ children }) => {
    return (
        <div>
           
            <div className="grid grid-cols-6 gap-5 my-20">
                <div className="p-1">
                    <ProfileSideber />
                </div>
                <div className="col-span-5">{children}</div>
            </div>
        </div>
    );
};

export default ProfileLayout;
