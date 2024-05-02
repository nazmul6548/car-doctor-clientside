
import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="mt-20">
            <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
  <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
    <div className="max-md:order-1 max-md:text-center">
      <p className="text-sm font-bold text-[#FF3811] mb-2"><span className="rotate-90 text-[#FF3811] inline-block mr-2">|</span> About us</p>
      <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">We are qualified & of experience in this field</h2>
      <p className="mt-4 text-base text-gray-500 leading-relaxed">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="mt-4 text-base text-gray-500 leading-relaxed">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <div className="mt-10 space-x-4">
        <button type='button'
          className="bg-[#FF3811]  border-none hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5">Get More Info</button>
        
      </div>
      <hr className="mt-10" />
      <div className="mt-10">
        <h4 className="font-bold text-base mb-2">Trusted by teams around the word</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
          <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
          <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
          <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
        </div>
      </div>
    </div>
    <div className="relative lg:h-[750px] md:h-[450px] flex items-center max-md:before:hidden before:absolute">
      <img src={person} className="rounded-md w-[100%] md:w-[100%] z-1 " alt="Dining Experience" />
      <img src={parts} className="absolute -bottom-6 md:bottom-20 -left-4   rounded-md border-8 border-white  w-[60%] md:w-[60%] z-2  " alt="Dining Experience" />
    </div>
  </div>
</div>
        </div>
    );
};

export default About;