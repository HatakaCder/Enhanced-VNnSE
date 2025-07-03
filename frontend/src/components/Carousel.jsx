import { useState } from "react";

const images = [
  {
    title: "Title 1",
    description: "Description 1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nZF8na1SRmuLiGEP7BQ-7HE8FT9Vj0xh1g&s"
  },
  {
    title: "Me may beo",
    description: "Me may beo",
    image: "https://m.media-amazon.com/images/M/MV5BNTQ3YzRmNzQtYTA0YS00MDcwLWI4NTctZDBhY2EwY2I4MDFmXkEyXkFqcGc@._V1_QL75_UX389_.jpg"
  },
  {
    title: "Never gonna give you up",
    description: "Never gonna let you down",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7yz4KJGlI2obww27tPt6iQDgeKJupAyVBA&s"
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <div className="relative w-[1200px] h-[500px] w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
                <img src={item.image} className=" w-[1200px] h-[500px] w-full flex-shrink-0 object-cover h-64" alt={item.title}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end z-10">
              <h2 className="text-white text-xl font-bold">{item.title}</h2>
              <p className="text-white text-sm">{item.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 w-fit">
                XEM THÔNG TIN
              </button>
            </div>
            </div>

        ))}
        
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
        ‹
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}