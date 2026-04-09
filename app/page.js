import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid md:grid-cols-2 grid-cols-1 min-h-[50vh] gap-8 p-4">
        <div className="flex flex-col gap-4 items-center justify-center text-center md:text-left">
          <p className={`text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            We are most straighforward Url shortener in the world 
          </p>
          <div className='flex gap-3 text-white flex-wrap justify-center md:justify-start'>
            <Link href="/shorten">
              <button className='bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-4 py-2 font-bold text-sm md:text-base'>
                Try Now
              </button>
            </Link>
             <Link href="https://github.com/Hedayat002">
              <button className='bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-4 py-2 font-bold text-sm md:text-base'>
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start relative h-[300px] md:h-auto">
          <Image 
            className="mix-blend-darken object-contain" 
            src="/vector.jpg" 
            alt="an image of a vector"
            fill={true}
            priority
          />
        </div>
      </section>
    </main>
  );
}
