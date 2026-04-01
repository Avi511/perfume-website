import Button from '../components/common/Button';
import perfumeVideo from '../assets/video_01.mp4';

function About() {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[100vh] object-cover opacity-60 transition-opacity duration-1000"
        >
          <source src={perfumeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 animate-fade-in tracking-tighter">About Élan Fragrance</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
