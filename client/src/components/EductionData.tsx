

interface EducationItem {
  id: number;
  img?: string;
  school: string;
  date: string;
  grade?: string;
  degree: string;
  desc: string;
}

interface EducationDataProps {
  data: EducationItem[];
}

const EducationData: React.FC<EducationDataProps> = ({ data }) => {
  return (
    <section
      id="education"
      className="relative py-16 bg-gray-100 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Education
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="
                group
                flex flex-col items-center 
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                rounded-2xl p-6
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* School Header */}
              <div className="flex items-start  mb-4">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.school}
                    className="
                      w-14 h-14 sm:w-16 sm:h-16
                      rounded-full object-cover
                      border border-gray-300 dark:border-gray-700
                      `flex-shrink-0`
                    "
                  />
                )}

                <div>
                  <h2 className="sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.school}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                  {item.degree}
                </p>

                {item.grade && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Grade: {item.grade}
                  </p>
                )}

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationData;
