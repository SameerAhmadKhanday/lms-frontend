import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


function HomePage() {
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-4xl font-semibold">
                        Find out best 
                        <span className="text-yellow-500 font-bold ">
                            Online Courses
                        </span>    
                    </h1> 
                    <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.    
                    </p> 

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses 
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us 
                            </button>
                        </Link>
                        
                    </div>                  
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img className="rounded mix-blend-multiply " src="https://img.freepik.com/free-photo/man-thinking-with-augmented-reality-glasses_1149-1722.jpg?t=st=1725633155~exp=1725636755~hmac=535b84667b0e409e48a125d6a73ced16ca7475d908a1d346e8827b28fc5f92a2&w=996" alt="" />
                </div>

            </div>

        </HomeLayout>

    );

}

export default  HomePage;