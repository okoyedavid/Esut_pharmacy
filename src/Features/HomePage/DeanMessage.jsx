import FadeInSection from "../../ui/FadeInSection";

function DeanMessage() {
  return (
    <FadeInSection>
      <section className="bg-white dark:bg-gray-950 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Message from the President
            </h2>
            <img
              src="/jamie.jpg"
              alt="Dean"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
          </div>
          <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic text-center">
            I am excited to welcome you to the official website of the
            Pharmaceutical Association of Nigerian Students, a student
            organization within the Faculty of Pharmaceutical Sciences at Enugu
            State University of Science and Technology. This website is a
            resource for information about our Association, Faculty, research
            initiatives, educational activities, and various ongoing events. It
            has been an honor to serve as President of this Association and
            Faculty.
          </blockquote>
        </div>
      </section>
    </FadeInSection>
  );
}

export default DeanMessage;
