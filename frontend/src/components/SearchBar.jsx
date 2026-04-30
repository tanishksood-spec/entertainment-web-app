import { useForm } from "react-hook-form";
import { LuSearch } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const getPlaceholder = () => {
        if (pathname.includes("movie")) return "Search for movies...";
        if (pathname.includes("tv")) return "Search for TV series...";
        if (pathname.includes("bookmarks")) return "Search bookmarks...";
        return "Search for movies and TV series...";
    };

    const onSubmit = (data) => {
        if (!data.searchQuery?.trim()) return;
        switch (pathname) {
            case "/": navigate(`all/search/${encodeURIComponent(data.searchQuery)}`); break;
            case "/movie": navigate(`movie/search/${encodeURIComponent(data.searchQuery)}`); break;
            case "/tv": navigate(`tv/search/${encodeURIComponent(data.searchQuery)}`); break;
            default: navigate(`/all/search/${encodeURIComponent(data.searchQuery)}`);
        }
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-deepBlue/80 backdrop-blur-sm z-40 flex gap-3 items-center px-4 py-3 rounded-xl border border-white/5 focus-within:border-cyan-500/50 transition-all duration-200"
        >
            <LuSearch className="text-waikawaGrey text-xl flex-shrink-0" />
            <input
                type="search"
                {...register("searchQuery")}
                placeholder={getPlaceholder()}
                className="w-full h-fit bg-transparent caret-cyan-500 focus:outline-none text-white placeholder-waikawaGrey text-sm lg:text-base"
            />
        </form>
    );
};

export default SearchBar;