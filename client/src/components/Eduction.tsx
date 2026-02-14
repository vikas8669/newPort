
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.jpg';
import EducationData from '../components/EductionData';



const Education = () => {
  const education = [
    {
      id: 0,
      img: logo,
      school: "Lyallpur Khalsa College Technical Campus, Jalandhar",
      date: "2021 - Sep 2025",
      grade: "6.14 CGPA",
      desc: "I have graduated with a Bachelor's degree in Computer Science and Engineering, completing 8 semesters with a CGPA of 6.14, During my studies, I focused on courses in the MERN Stack and modern web development technologies.",

      degree: "B.Tech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: logo2,
      school: "T.W.E.I. Senior Secondary School",
      date: "Apr 2020 - Apr 2021",
      grade: "70%",
      desc: "I completed my Class 12 at T.W.E.I. School, Punjab, in the Science stream.",
      degree: "PSEB (XII), Science",
    },
    {
      id: 2,
      img: logo2,
      school: "National Model School",
      date: "Apr 2018 - Apr 2019",
      grade: "60.3%",
      desc: "I completed Class 10 at National Model School, Punjab, with Science and Computer Application.",
      degree: "PSEB (X), Science with Computer",
    },
  ];

  return <EducationData data={education} />;
};

export default Education;
