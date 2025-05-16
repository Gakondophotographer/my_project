import { Link } from "react-router-dom";

const Welcome = () => {

    return(
        <>
        <div className="flex min-h-screen justify-center bg-white items-center p-4  ">
            <div className="shadow-md  shadow-gray-900 w-800 p-10 max-w-3xl bg-gray-100 text-center bg-white h-400 rounded-2xl" >
                    <h1 className="text-4xl font-bold text-blue-600 mb-6">WELCOME TO OUR LIBRARY</h1> 

                    <p className="text-gray-600 text-md leading-relaxed mb-8">
                         Hello, I hope you're doing well.
                         I'm reaching out to learn more about your library store and explore the resources and services you offer.
                         I'm particularly interested in how your store supports the community through books, 
                         educational materials,
                          and reading programs.<br/><br/>
                           I'd love to hear more about your latest collections,
                            membership options,
                         and any upcoming events or initiatives you're involved in.
                          Thank you for your time—I'm looking forward to connecting and possibly collaborating in the future.
                        </p>

                <div className="flex justify-center gap-6 ">
                    <Link to="/login" className="px-20 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition">Login</Link>
                    <Link to="/signup" className="px-20 py-2 bg-yellow-500 text-white rounded-2xl hover:bg-yellow-600 transition">Sign Up</Link>
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Welcome;