import { useState } from "react";

export const Login = () => {
    const [Login, setLogin] = useState(false);

    return (
        <div className="">
            {!Login ? (
                    <button
                        className="" 
                        onClick={() => {
                            setLogin(true); 
                        }}
                    >
                        Login
                    </button>
            ) : (
                <button
                    className=""
                    onClick={() => {
                        setLogin(false); 
                    }}
                >
                    Logout
                </button>
            )}
        </div>
    );
};
