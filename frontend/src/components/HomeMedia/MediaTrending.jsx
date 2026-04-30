// from installed packages 
import { useQuery } from 'react-query';
import FallbackMedia from '../FallbackComponents/FallbackMedia'

// from custom files 
import Media from '../MediaComponents/Media';
import fetchMultiMedia from '../../utils/fetchMultiMedia';

// trending media components  
function MediaTrending() {
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([1, 'trending'], () => fetchMultiMedia(1, "trending"));

    if (isLoading) return <FallbackMedia />;
    if (isError) return <div className="text-red-400 p-4">Error fetching trending data</div>;

    return (
        <div className="p-4 mt-2 flex flex-col gap-4">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="w-1 h-7 bg-cyan-500 rounded-full" />
                <h1 className="text-xl md:text-3xl font-bold text-white">
                    Trending Now
                </h1>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-500/30 font-medium">
                    LIVE
                </span>
            </div>

            {/* Scrollable Cards */}
            <div
                className="flex sm:grid grid-rows-1 grid-flow-col overflow-x-auto gap-4 pb-3 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
                style={{ gridAutoColumns: "minmax(180px, auto)" }}
            >
                <Media mediaData={mediaData} />
            </div>
        </div>
    )
}

export default MediaTrending;