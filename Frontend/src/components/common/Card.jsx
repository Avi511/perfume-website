import { Link } from 'react-router-dom';

const Card = ({ image, name, price, rating, category, id }) => {
    return (
        <div className="group relative w-full rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
            <div className="relative h-96 w-full overflow-hidden">
                <Link to={`/products/${id}`}>
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer"
                    />
                </Link>
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">{category}</span>
                </div>

                <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:text-red-500 hover:bg-white transition-all duration-300 group/heart">
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/heart:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>


            <div className="p-6 bg-white flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <Link to={`/products/${id}`}>
                        <h3 className="text-xl font-medium tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-amber-700 cursor-pointer">
                            {name}
                        </h3>
                    </Link>
                    <p className="text-lg font-semibold text-gray-900">Rs. {price}</p>
                </div>

                <div className="flex items-center justify-between mt-2 overflow-hidden">
                    <div className="flex items-center gap-1 transition-transform duration-500 group-hover:-translate-y-1">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`h-4 w-4 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="ml-2 text-xs font-medium text-gray-500">({rating}.0)</span>
                    </div>

                    <div className="relative overflow-hidden group/btn translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <Link to={`/products/${id}`}>
                            <button className="text-xs font-semibold uppercase tracking-widest text-black border-b border-black/20 hover:border-amber-700 hover:text-amber-700 transition-all duration-300 pb-0.5 cursor-pointer">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-0 left-0 h-0.5 bg-amber-600 w-0 transition-all duration-500 group-hover:w-full" />
        </div>
    );
};

export default Card;
