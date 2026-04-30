import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";
import { MdCheckCircle, MdError, MdClose } from "react-icons/md";

function Toast() {
    const { toast, setToast, toastMessage } = useContext(MyContext);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast, setToast]);

    if (!toast) return null;

    const isError = toastMessage?.toLowerCase().includes("error") ||
                    toastMessage?.toLowerCase().includes("wrong") ||
                    toastMessage?.toLowerCase().includes("invalid") ||
                    toastMessage?.toLowerCase().includes("failed");

    return (
        <div className="fixed top-5 right-5 z-[9999] animate-slide-in">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-sm max-w-sm ${
                isError
                    ? "bg-red-500/20 border-red-500/30 text-red-200"
                    : "bg-cyan-500/20 border-cyan-500/30 text-cyan-200"
            }`}>
                {isError
                    ? <MdError className="text-red-400 text-xl flex-shrink-0" />
                    : <MdCheckCircle className="text-cyan-400 text-xl flex-shrink-0" />
                }
                <p className="text-sm font-medium">{toastMessage}</p>
                <button
                    onClick={() => setToast(false)}
                    className="ml-auto text-white/50 hover:text-white transition-colors"
                >
                    <MdClose className="text-lg" />
                </button>
            </div>
        </div>
    );
}

export default Toast;