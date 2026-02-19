"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

// Full projects data
const projects = [
  {
    id: 1,
    name: "Free Bags Distribution Project – Iwo (2022)",
    shortDescription:
      "Distributed free school bags to over 250 students in Iwo, Osun State.",
    description: `
In 2022, the Foundation successfully carried out a Free School Bags Distribution Project in Iwo, Osun State, Nigeria, as part of its commitment to supporting education and easing the burden on students from less-privileged backgrounds. The project recorded a significant impact, with over 250 students benefiting from the initiative.

The distribution exercise covered selected secondary schools and a special needs institution within OSUN STATE, NIGERIA, AFRICA, ensuring inclusiveness and equal access to support. The beneficiary schools were:

1. Elemi Adana Community Grammar School, Iwo
2. L.A. Grammar School, Iwo
3. School for Special People / Disabilities, Adeke, Osun State
4. Methodist Grammar School, Iwo
5. Anglican High School, Iwo

Each beneficiary student received a free school bag to support their academic journey and encourage school attendance. Special attention was given to students with disabilities at the Adeke Special School, reinforcing the Foundation’s belief that every child deserves care, dignity, and access to education regardless of physical challenges.

The project was well received by school authorities, teachers, and students, who expressed gratitude for the timely intervention. This initiative not only provided material support but also served as a source of motivation and hope for the students.

The Foundation remains committed to investing in education and community development and looks forward to implementing more impactful projects that uplift lives and strengthen society.
`,
    image: "/hero.png",
    status: "Completed",
  },
  {
    id: 2,
    name: "Ogun State JAMB Scholarship Project – 2023",
    shortDescription:
      "Free JAMB registration for nearly 100 students in Ogun State.",
    description: `
In 2023, the Foundation implemented the Ogun State JAMB Scholarship Project as part of its ongoing commitment to promoting access to higher education and supporting students from underserved communities. Through this initiative, the Foundation facilitated free JAMB forms for close to 100 students, helping to reduce financial barriers faced by prospective tertiary institution candidates.

The scholarship support was extended to students from selected secondary schools across Ogun State. The beneficiary schools included:

Iganmode Grammar School (Senior), Ijuore, Ota, Ogun State
Area Community High School, Sabo, Iwo Idiiroko, Ogun State
Army Day Secondary School, 192 Motorised Battalion, Owode Iyewa, Ogun State

Eligible students from these schools received free JAMB registration support, enabling them to participate in the 2023 Unified Tertiary Matriculation Examination (UTME). The project was designed to encourage academic advancement, increase tertiary education enrollment, and empower young people to pursue their educational goals without financial constraints.

School administrators, teachers, and beneficiaries expressed appreciation for the Foundation’s intervention, noting its positive impact on student morale and academic aspirations. The initiative not only provided financial relief but also inspired students to remain focused and confident about their future.

The Foundation remains dedicated to advancing education, youth development, and equal opportunities, and will continue to roll out impactful programs that contribute to sustainable community growth across Ogun State and beyond.
`,
    image: "/hero.png",
    status: "Completed",
  },
  {
    id: 3,
    name: "Ijebu-Ode Prison Outreach and Legal Intervention Project – 2023",
    shortDescription:
      "Legal intervention resulting in the release of an inmate in Ogun State.",
    description: `
In August 2023, the Foundation carried out a Prison Outreach and Legal Intervention Project at the Ijebu-Ode Correctional Facility, Ogun State, Nigeria, as part of its commitment to justice, human dignity, and social rehabilitation.

Through the dedicated intervention of the Foundation’s legal team, one inmate was successfully released after a thorough review of the case. For ethical, legal, and security reasons, the identity of the beneficiary remains strictly anonymous. This intervention reflects the Foundation’s belief that access to justice should not be limited by poverty or lack of legal representation.

The project focused on identifying inmates who required urgent legal assistance and advocating for fair treatment under the law. The successful release stands as a testimony to the impact of timely legal support and professional advocacy.

The Foundation expresses deep appreciation to its volunteer lawyers and legal partners whose commitment and expertise made this intervention possible. Their selfless service continues to bring hope and restoration to lives often forgotten.

The Foundation remains committed to prison outreach, legal aid, and rehabilitation initiatives, and will continue to support programs that promote justice, reintegration, and societal transformation across Ogun State and Nigeria at large.
`,
    image: "/hero.png",
    status: "Completed",
  },
  {
    id: 4,
    name: "South West Nigeria Free Medical Test and Care Outreach – 2023",
    shortDescription:
      "Provided free medical tests and healthcare to 500+ individuals.",
    description: `
In 2023, the Foundation successfully organized a Free Medical Test and Care Outreach across the South West region of Nigeria, reaffirming its commitment to improving community health and promoting access to quality healthcare. The outreach recorded a significant impact, with over 500 individuals benefiting from the initiative.

The program provided free medical tests, basic healthcare services, consultations, and health education to residents who otherwise had limited access to medical care due to financial and social constraints. Beneficiaries included children, adults, and the elderly from various underserved communities within the South West region.

Qualified medical professionals and volunteers worked diligently to deliver services such as health screenings, routine medical checks, and general medical advice. The outreach also emphasized preventive healthcare by educating participants on healthy living, early detection of illnesses, and the importance of regular medical check-ups.

The initiative was warmly received by community members, who expressed deep appreciation for the Foundation’s timely intervention and compassionate care. Many beneficiaries noted that the outreach helped identify health issues early and provided much-needed relief and guidance.

The Foundation extends sincere gratitude to the medical practitioners, volunteers, and partners who made this project a success. The Foundation remains dedicated to expanding its health and humanitarian programs and will continue to implement impactful initiatives that enhance well-being and save lives across Nigeria and beyond.
`,
    image: "/hero.png",
    status: "Completed",
  },
  {
    id: 5,
    name: "Ogun State JAMB Scholarship Project – 2024",
    shortDescription:
      "Free JAMB registration for 30+ students in Ogun State for 2024 UTME.",
    description: `
In 2024, the Foundation continued its commitment to educational empowerment through the Ogun State JAMB Scholarship Project, aimed at supporting students from underserved communities by easing the financial burden of tertiary education entry requirements. Through this initiative, over 30 students benefited from free JAMB registration support across selected schools in Ogun State.

The Foundation facilitated free JAMB forms for the 2024 UTME to eligible students from the following beneficiary schools:

Asua Urdeen School, Ota, Oju-Ore, Ogun State – Over 10 students benefited
Lafewa High School, Oju-Ore, Ota, Ogun State – Over 10 students benefited

The project was designed to encourage academic excellence, promote equal access to higher education, and reduce financial barriers faced by students and their families. By providing free JAMB forms, the Foundation enabled beneficiaries to take a vital step toward gaining admission into tertiary institutions of their choice.

School authorities and students expressed appreciation for the Foundation’s intervention, noting its positive impact on student confidence, motivation, and academic aspirations. The initiative further strengthened the Foundation’s role in supporting youth development and educational advancement within Ogun State.

The Foundation remains committed to expanding its scholarship and educational support programs and looks forward to reaching more students in future academic years.
`,
    image: "/hero.png",
    status: "Completed",
  },
  {
    id: 6,
    name: "Marginalized Prison Intervention Program – Ogun State Prison Outreach 2025",
    shortDescription:
      "Legal intervention and support for marginalized inmates in Ogun State.",
    description: `
In August/September 2025, the Foundation implemented the Marginalized Prison Intervention Program at selected correctional facilities in Ogun State, Nigeria, as part of its ongoing commitment to justice, human rights, and social inclusion.

Through the strategic intervention and professional support of the Foundation’s Legal Department, legal assistance was provided to marginalized inmates who lacked access to adequate representation. As a result of this intervention, a beneficiary was successfully assisted, leading to a positive legal outcome. In adherence to ethical standards and legal requirements, the identity of the beneficiary remains strictly anonymous.

The program focused on identifying cases involving prolonged detention, vulnerable individuals, and those affected by socioeconomic disadvantages. Legal reviews, advocacy, and engagement with relevant authorities were carried out to ensure due process and fairness within the justice system.

The Foundation extends sincere appreciation to its Legal Department for their dedication, expertise, and commitment to upholding justice and restoring hope to the marginalized within correctional institutions.

The Foundation remains steadfast in its mission to expand prison outreach, legal aid, and rehabilitation programs, and will continue to advocate for justice, dignity, and reintegration across Ogun State and Nigeria as a whole.
`,
    image: "/hero.png",
    status: "Completed",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="bg-green-700 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            Explore how Oyekan Foundation is creating sustainable impact across communities.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.shortDescription}</p>
                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "Completed"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl w-full md:w-3/4 max-h-[90vh] overflow-y-auto shadow-xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              {selectedProject.name}
            </h2>

            <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed">
              {selectedProject.description}
            </p>

            <span
              className={`inline-block mt-3 px-4 py-2 rounded-full text-sm font-medium ${
                selectedProject.status === "Completed"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {selectedProject.status}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
