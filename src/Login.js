import { Link } from 'react-router-dom';

function Login(){
    return(
        
        <div className="main">
       
        <div className="body flex items-center justify-center min-h-screen">
            
            <div className="Right flex flex-col my-20 p-10 border rounded-md bg-slate-200">
            <div className="left mx-10">
            
            <img src="image/logo.jpg" className="mx-10 my-11 rounded-2xl h-36"></img>
            </div>

            <input type="text" placeholder="Enter Your Name" className="my-3 border border-slate-300 py-2 rounded-md hover:bg-slate-50" />
            <input type="text" placeholder="Password"  className="my-3 border border-slate-300 py-2 rounded-md hover:bg-slate-50" />
            <button className="bg-blue-500 px-10 py-2 my-3 rounded-md hover:bg-blue-600 font-bold">Log In</button>

            <button className=" justify-center text-center text-sm text-green-500 hover:underline h-10 ">Forgotton Password?</button>
            
            <Link to="/register" className='my-3 '>
                <button className="bg-green-500 px-10 w-full py-3  rounded-md">Create Account</button>
            </Link>
         </div>
        
         </div>
        
        </div>
    )
}

export default Login