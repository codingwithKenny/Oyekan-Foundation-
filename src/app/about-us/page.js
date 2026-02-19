import Navbar from "../components/Navbar";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Centered Hero Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            About Oyekan Foundation
          </h1>
          <p className="text-xl leading-relaxed text-green-100">
            A structured nonprofit organization committed to delivering
            sustainable community development through education, health
            support, and empowerment initiatives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Our Foundation
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Oyekan Foundation was founded with a clear responsibility —
              to provide structured support systems for underserved
              individuals and communities. Our approach is rooted in
              long-term solutions rather than temporary assistance.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Through collaboration, strategic planning, and community
              partnerships, we implement programs that create measurable
              outcomes and sustainable transformation.
            </p>
          </div>

          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Aboutpage.png"
              alt="Oyekan Foundation Outreach"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
