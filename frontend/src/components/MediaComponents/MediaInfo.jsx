// from installed packages 
import { TbDeviceTvOld } from "react-icons/tb";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// media information or media headings 
function MediaInfo({ singleMediaData }) {
    const navigate = useNavigate();
    const mediaTypeCaptial = singleMediaData.mediaType
        ? singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1)
        : "NA";

    return (
        <div
            className="px-1 cursor-pointer group"
            onClick={() => navigate(`/${singleMediaData.mediaType}/details/${singleMediaData.id}`)}
        >
            {/* Meta info row */}
            <div className="flex gap-1 items-center text-xs text-waikawaGrey">
                <span className="font-medium">
                    {singleMediaData.releaseDate
                        ? singleMediaData.releaseDate.split('-')[0]
                        : 'NA'}
                </span>
                <LuDot />
                <span className="flex items-center gap-1">
                    {singleMediaData.mediaType === 'movie'
                        ? <MdLocalMovies className="text-cyan-500" />
                        : <TbDeviceTvOld className="text-cyan-500" />}
                    {mediaTypeCaptial}
                </span>
                <LuDot />
                <span className={`font-medium ${singleMediaData.isAdult ? 'text-red-400' : 'text-green-400'}`}>
                    {singleMediaData.isAdult ? "18+" : "PG"}
                </span>
            </div>

            {/* Title */}
            <p className="text-white text-sm font-semibold mt-0.5 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-1">
                {singleMediaData.title || "NA"}
            </p>
        </div>
    )
}
MediaInfo.propTypes = {
    singleMediaData: PropTypes.object.isRequired,
};


export default MediaInfo