import Link from 'next/link'

export default function Component() {
  return (
    <section className="relative  text-white overflow-hidden pt-[100px]">
      <div className="container mx-auto px-4 pb-24 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Defending Your Digital World with Precision.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Specialized testing to secure your business against cyber threats.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start text-center gap-5">
            <Link
              href="#"
              className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition duration-300 w-fit"
            >
              Request a Consultation
            </Link>
            <Link
              href="#"
              className="border border-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300 w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3">
      </div>
    </section>
  )
}