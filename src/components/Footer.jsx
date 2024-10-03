export const Footer = () => {
    return (
        <div className="bg-customDark h-96 flex flex-col justify-between py-8">
            <footer className="max-w-screen-lg mx-auto px-4 flex flex-col text-white space-y-6">
                <div className="text-center space-y-4">
                    <p className="text-white text-sm font-mono">&copy; 2024 Mukund Jha. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a className="text-blue-400 underline font-mono" href="#">Privacy Policy</a>
                        <a className="text-blue-400 underline font-mono" href="#">Terms of Service</a>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-white font-bold mb-4 cursor-pointer">Company</h1>
                    <ul className="space-y-2 leading-5 text-left">
                        <li className="text-xl text-white">About</li>
                        <li className="text-xl text-white">Career</li>
                        <li className="text-xl text-white">Team</li>
                        <li className="text-xl text-white">Food Villa</li>
                        <li className="text-xl text-white">Contact</li>
                    </ul>
                </div>
               
            </footer>
        </div>
    );
};


