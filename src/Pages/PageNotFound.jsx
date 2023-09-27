import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-[100px] font-bold">404</h1>
            <p className="text-xl">Page Not Found</p>
            <Link className="bg-red-500 text-white py-3 px-6 rounded-md mt-5 text-xl font-bold " to={"/"}>Home</Link>
        </div>
    );
};

export default PageNotFound;