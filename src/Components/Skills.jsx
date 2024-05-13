function Skills({ skills }) {
  return (
    <div className="w-full flex flex-col items-center m space-y-4">
      <div className="w-[90%] h-24 rounded-full mt-5 flex justify-center items-center bg-gradient-to-r from-black via-gray-700 to-black drop-shadow-lg text-center italic text-4xl font-semibold tracking-tight font-serif text-gray-100">
        Technical Skills ⚙️
      </div>
      <ul className="flex flex-wrap justify-center">
        {skills.map((skillString, index) => (
          <li key={index} className="m-2">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="flex flex-wrap">
              {skillString.split(",").map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className=" text-indigo-600 bg-indigo-200 hover:bg-indigo-100 font-semibold  border border-indigo-600   px-4 py-2 rounded-lg mr-2 mb-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {skill.trim()}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;