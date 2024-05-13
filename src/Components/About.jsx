function About({ roledescription }) {
  return (
    <section className="About-section w-full flex flex-col items-center">
      <div className="w-[90%] h-24 rounded-full -mt-10 flex justify-center items-center bg-gradient-to-r from-black via-gray-700 to-black drop-shadow-lg text-center italic text-4xl font-semibold tracking-tight font-serif text-gray-100">
        About me
      </div>

      {/* <div className="text-gray-700 px-10 text-lg font-semibold  tracking-tight  py-10 opacity-80 text-justify">{roledescription}</div> */}

      <div className="text-gray-700 px-10 text-lg font-semibold  tracking-tight  py-10 opacity-80 text-justify">
        <div>Hello 👋</div>
        An expense tracker is a tool, often digital or in app form, designed to
        help individuals or businesses monitor and manage their spending. It
        typically allows users to record their expenses, categorize them, set
        budgets, and generate reports to analyze their financial habits. Some
        expense trackers also offer features such as receipt scanning, automatic
        categorization, and synchronization with bank accounts or credit cards
        for real-time updates.{" "}
      </div>
    </section>
  );
}

export default About;
