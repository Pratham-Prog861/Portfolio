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
  const words = `I Have This Skill`;
  return (
    <div className="w-full h-screen">
      <div className="w-full h-28 text-4xl flex justify-center items-center">
        I have this Skiils 
      </div>
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="w-[1000px] flex flex-wrap p-5 gap-5 justify-center items-center">
          {image.map((img, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={150}
                height={150}
                className="rounded-full mx-4 my-2 transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page