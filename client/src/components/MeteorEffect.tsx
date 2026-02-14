import { Meteors } from "../components/ui/meteors";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.jpg";

export function MeteorsDemo() {
  const education = [
    {
      id: 0,
      img: logo,
      school: "Lyallpur Khalsa College Technical Campus, Jalandhar",
      date: "2021 - Sep 2025",
      grade: "6.14 CGPA",
      desc:
        "Graduated with a Bachelor's degree in Computer Science and Engineering. Focused on MERN Stack and modern web development technologies.",
      degree: "B.Tech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: logo2,
      school: "T.W.E.I. Senior Secondary School",
      date: "Apr 2020 - Apr 2021",
      grade: "70%",
      desc: "Completed Class 12 in the Science stream.",
      degree: "PSEB (XII), Science",
    },
    {
      id: 2,
      img: logo2,
      school: "National Model School",
      date: "Apr 2018 - Apr 2019",
      grade: "60.3%",
      desc:
        "Completed Class 10 with Science and Computer Application.",
      degree: "PSEB (X), Science with Computer",
    },
  ];

  return (
    <section className="w-full py-16">
        <h2 className=" font-semibold text-4xl mt-10 mb-20 text-center">Education</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {education.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl border  p-6 shadow-lg"
          >
            {/* Glow background */}
            <div className="absolute inset-0 scale-[0.85] rounded-full  blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
              {/* Header */}
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={item.img}
                  alt="school logo"
                  className="h-12 w-12 rounded-full border border-gray-600 object-cover"
                />
                <div>
                  <h2 className="text-sm font-semibold">
                    {item.date}
                  </h2>
                </div>
              </div>

              {/* School */}
              <h1 className="mb-2 text-lg font-bold ">
                {item.school}
              </h1>

              {/* Degree & Grade */}
              <p className="mb-2 text-sm font-medium ">
                {item.degree}
              </p>
              <p className="mb-4 text-sm ">
                Grade: <span className="font-semibold">{item.grade}</span>
              </p>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed ">
                {item.desc}
              </p>

              {/* Action */}
              {/* <button className="mt-auto w-fit rounded-lg border border-gray-600 px-4 py-1.5 text-sm transition hover:border-gray-400 ">
                Explore
              </button> */}
            </div>

            {/* Meteor Effect */}
            <Meteors number={20} />
          </div>
        ))}
      </div>
    </section>
  );
}
