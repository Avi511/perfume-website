import Card from '../components/common/Card';
import Button from '../components/common/Button';
import perfumeImg from '../assets/luxury_perfume.png';
import perfumeVideo from '../assets/video_02.mp4';

const products = [
  {
    id: 1,
    name: "Midnight Silk",
    price: 120,
    rating: 5,
    category: "Parfum",
    image: perfumeImg
  },
  {
    id: 2,
    name: "Amber Glow",
    price: 95,
    rating: 4,
    category: "Eau de Toilette",
    image: perfumeImg
  },
  {
    id: 3,
    name: "Velvet Oud",
    price: 180,
    rating: 5,
    category: "Extrait de Parfum",
    image: perfumeImg
  }
];

function Home() {
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
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 animate-fade-in uppercase tracking-tighter">Élan Fragrance</h1>
            <p className="text-lg md:text-xl text-gray-300 tracking-[0.3em] uppercase">
              The Essence of Timeless Luxury
            </p>
          </div>
          <Button className="mt-4 scale-125">Explore the Scents</Button>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Curated Collection</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Explore our masterfully crafted scents, each designed to evoke a unique memory and leave a lasting impression.
            </p>
          </div>
          <Button className="!text-black !glass-button border-black/20 hover:!text-black scale-110">Shop All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;