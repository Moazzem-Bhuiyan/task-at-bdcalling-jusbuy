import ProfileSideber from "../Components/ProfileSideber/ProfileSideber";
import Footer from "../Components/shared/Footer";
import Navberp from "./navber/Navberp";


const ProfileLayout = ({ children }) => {
    return (
        <div>
           
           <Navberp></Navberp>
            <div className="md:grid md:grid-cols-6 gap-5 my-20">
                <div className="md:p-1 p-5">

                    {/* sideber */}
                    <ProfileSideber />
                </div>
                <div className="col-span-5">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProfileLayout;
