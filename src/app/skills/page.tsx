import Image from "next/image";

const page = () => {
  const image = [
    {
      src: "/html.png",
      alt: "Html Logo",
    },
    {
      src: "/tailwind.png",
      alt: "Css Logo",
    },
    {
      src: "/js.png",
      alt: "Js Logo",
    },
    {
      src: "/react.png",
      alt: "React Logo",
    },
    {
      src: "/nextjs.png",
      alt: "Next Logo",
    },
    {
      src: "/python.png",
      alt: "Python Logo",
    },
    {
      src: "/nodejs.png",
      alt: "Node Logo",
    },
    {
      src: "/mongodb.png",
      alt: "Mongo Logo",
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {image.map((img, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:bg-gray-700 cursor-pointer"
            >
              <div className="relative w-32 h-32 mx-auto overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-3"
                />
              </div>
              <div className="mt-4 transform transition-all duration-500 ease-in-out group-hover:translate-y-1">
                <p className="text-center text-gray-400 group-hover:text-white">
                  {img.alt.replace(" Logo", "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page