import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4 italic font-serif">Perfume No. {id}</h1>
      <p className="text-lg text-gray-500 max-w-xl text-center">
        Explore the delicate notes of this unique fragrance. Experience the elegance.
      </p>
    </div>
  );
}

export default ProductDetails;
