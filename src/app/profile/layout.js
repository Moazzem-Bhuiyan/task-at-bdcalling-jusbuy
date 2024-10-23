import ProfileSideber from "../Components/ProfileSideber/ProfileSideber";



const Profilelayout = ({children}) => {
    return (
        <div className="grid grid-cols-6 gap-5 my-20">
            
            <div className=" p-1 ">

                {/* sideber */}
                <ProfileSideber></ProfileSideber>


             </div>

            <div className=" col-span-5">{children}</div>
            
        </div>
    );
};

export default Profilelayout;