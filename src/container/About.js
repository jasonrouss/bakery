import Staff from "../component/Staff";
import about from "../assets/about.jpg";

function About() {
  return (
    <>
      <div className="mx-16 title " style={{ fontFamily: "Helvetica" }}>
        <div className="about text-5xl mt-4 text-sky-900   ">Our Story</div>
        <p className="w-5/6 text-2xl leading-8 mb-8 mt-4 text-cyan-800 ">
          {/* Description of the bakery */}
          We are a family-owned bakery that has been serving the community for
          over 30 years. My father, a baker , taught me how to bake bread and
          how to make a cupcake so you could say that I was a little bit of a
          baker when I was a kid. I made a lot of bread and cupcakes , and now I
          am proud to be part of the buisness expending it while serving daily
          delicious meals for our neighberhood.
        </p>
      </div>

      <div className="image my-6  flex justify-center">
        <img src={about} alt="logo" className="rounded w-3/4 h-[500px]" />
      </div>
      <Staff />
    </>
  );
}

export default About;
