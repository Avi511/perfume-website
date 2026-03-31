import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl">
            <div className="relative flex flex-col items-center gap-12">

                {/* Spinner */}
                <div className="relative h-24 w-24">
                    <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 animate-spin-slow" />
                    <div className="absolute -inset-4 rounded-full border border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                    <div className="absolute -inset-8 rounded-full bg-amber-400/10 blur-3xl animate-bloom" />
                </div>

                {/* Text */}
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-4xl font-serif tracking-[0.4em] text-white animate-pulse-slow">
                        Élan Fragrance
                    </h2>

                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />

                </div>

            </div>
        </div>
    );
};
export default Loader;
