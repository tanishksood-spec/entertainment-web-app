// importing from installed packages 
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { HiBookmark } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { MdMovie } from "react-icons/md";

// from custom files 
import userImage from '../assets/userImage.jpg'
import userLogo from '../assets/userLogo.jpg'
import MyContext from '../context/MyContext'

// Header component
const Header = () => {
    const { isAuthenticated } = useContext(MyContext)
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { mediaType } = useParams();

    const navItems = [
        { icon: AiFillAppstore, path: "/", label: "Home", match: ["", "multi"] },
        { icon: MdLocalMovies, path: "/movie", label: "Movies", match: ["movie"] },
        { icon: TbDeviceTvOld, path: "/tv", label: "TV Shows", match: ["tv"] },
        { icon: HiBookmark, path: "/bookmarks", label: "Bookmarks", match: ["bookmarks"] },
    ];

    const isActive = (item) =>
        pathname === item.path || item.match.includes(mediaType);

    return (
        <>
            {/* Mobile/Tablet Top Bar */}
            <div className="lg:hidden w-full bg-deepBlue px-4 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <MdMovie className="text-black text-lg" />
                    </div>
                    <span className="text-white font-bold text-lg tracking-wide">
                        Cine<span className="text-cyan-500">Verse</span>
                    </span>
                </div>

                {/* Mobile Nav */}
                <div className="flex items-center gap-5 text-xl">
                    {navItems.map((item) => (
                        <item.icon
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`cursor-pointer transition-all duration-200 ${
                                isActive(item)
                                    ? "text-cyan-500 scale-110"
                                    : "text-waikawaGrey hover:text-white"
                            }`}
                        />
                    ))}
                </div>

                {/* Profile */}
                <button
                    onClick={() => navigate("/profile")}
                    className="ring-2 ring-cyan-500 rounded-full overflow-hidden w-8 h-8 hover:ring-cyan-400 transition-all"
                >
                    <img
                        src={isAuthenticated ? userImage : userLogo}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col items-center justify-between w-20 min-h-screen sticky top-0 bg-deepBlue rounded-2xl py-8 px-4 border border-white/5 shadow-2xl">
                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer group"
                >
                    <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center group-hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/30">
                        <MdMovie className="text-black text-xl" />
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col items-center gap-6">
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className="relative group cursor-pointer"
                        >
                            {/* Active indicator */}
                            {isActive(item) && (
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyan-500 rounded-r-full" />
                            )}
                            <div className={`p-2 rounded-xl transition-all duration-200 ${
                                isActive(item)
                                    ? "bg-cyan-500/20 text-cyan-500"
                                    : "text-waikawaGrey hover:text-white hover:bg-white/10"
                            }`}>
                                <item.icon className="text-2xl" />
                            </div>
                            {/* Tooltip */}
                            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Profile */}
                <button
                    onClick={() => navigate("/profile")}
                    className="ring-2 ring-cyan-500 rounded-full overflow-hidden w-10 h-10 hover:ring-cyan-400 hover:scale-110 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                    <img
                        src={isAuthenticated ? userImage : userLogo}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </>
    );
};

export default Header;