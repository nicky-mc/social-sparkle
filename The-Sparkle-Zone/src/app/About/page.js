import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 via-pink-300 to-blue-400 text-white p-4">
      <div className="card w-full max-w-md bg-white shadow-xl text-gray-900">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-4xl font-bold mb-4">
            Welcome to the Sparkle Zone
          </h1>
          <p className="text-lg mb-4">
            I'm a coding nerdy girl in Norfolk. I created this social media site
            as an inclusive space for all due to my experiences being an openly
            out trans woman. The Sparkle Zone is a reference to my own
            neurodivergence, but all neuro types, identities, sexualities,
            races, beliefs, and all flavors of human are welcome.
          </p>
          <div className="avatar">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="/18A6B43C-FF49-4E7F-A1F9-BB71AEEA7437.jpeg" // Direct path from the public directory
                alt="Profile Photo"
                fill // Use fill prop instead of layout
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                style={{ objectFit: "cover" }} // Use style prop instead of objectFit
                priority // Add priority prop for LCP
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
