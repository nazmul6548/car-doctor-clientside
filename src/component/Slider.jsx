import img1 from "../assets/images/banner/1.jpg"
import img2 from "../assets/images/banner/2.jpg"
import img3 from "../assets/images/banner/3.jpg"
import img4 from "../assets/images/banner/4.jpg"
import img5 from "../assets/images/banner/5.jpg"
import img6 from "../assets/images/banner/6.jpg"

const Slider = () => {

  
   
    return (
      <div className="carousel w-full h-[450px] md:h-[600px]">
      <div id="slide1" className=" carousel-item relative w-full">
        <img src={img1} className="w-full object-cover md:object-center" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-start w-full bg-gradient-to-r from-[#151515]  to-[rgba(21,21,21,0)] py-6 md:py-44 items-center">
        <div className="w-3/6 ">
        <h2 className="text-4xl md:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
        <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-5 text-white flex flex-col md:flex-row gap-4">
       
        <button className="btn glass md:mr-5 text-white hover:bg-[#FF3811]">Discover More</button>
        <button className="btn glass  md:ml-5 text-white hover:bg-[#FF3811]">Latest Project</button>
        </div>
        </div>
    </div>

      
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-2">
        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-none mr-6">❮</a> 
        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none ml-6">❯</a>
      </div>
       
    
      
       
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-start w-full bg-gradient-to-r from-[#151515]  to-[rgba(21,21,21,0)] py-6 md:py-44 items-center">
        <div className="w-3/6 ">
        <h2 className="text-4xl md:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
        <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-5 text-white flex flex-col md:flex-row gap-4">
       
        <button className="btn glass md:mr-5 text-white hover:bg-[#FF3811]">Discover More</button>
        <button className="btn glass  md:ml-5 text-white hover:bg-[#FF3811]">Latest Project</button>
        </div>
        </div>
    </div>

        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-2">
        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none mr-6">❮</a> 
        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none ml-6">❯</a>
      </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-start w-full bg-gradient-to-r from-[#151515]  to-[rgba(21,21,21,0)] py-6 md:py-44 items-center">
        <div className="w-3/6 ">
        <h2 className="text-4xl md:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
        <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-5 text-white flex flex-col md:flex-row gap-4">
       
        <button className="btn glass md:mr-5 text-white hover:bg-[#FF3811]">Discover More</button>
        <button className="btn glass  md:ml-5 text-white hover:bg-[#FF3811]">Latest Project</button>
        </div>
        </div>
    </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-2">
        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none mr-6">❮</a> 
        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none ml-6">❯</a>
      </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-start w-full bg-gradient-to-r from-[#151515]  to-[rgba(21,21,21,0)] py-6 md:py-44 items-center">
        <div className="w-3/6 ">
        <h2 className="text-4xl md:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
        <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-5 text-white flex flex-col md:flex-row gap-4">
       
        <button className="btn glass md:mr-5 text-white hover:bg-[#FF3811]">Discover More</button>
        <button className="btn glass  md:ml-5 text-white hover:bg-[#FF3811]">Latest Project</button>
        </div>
        </div>
    </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-2">
        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none mr-6">❮</a> 
        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none ml-6">❯</a>
      </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-start w-full bg-gradient-to-r from-[#151515]  to-[rgba(21,21,21,0)] py-6 md:py-44 items-center">
        <div className="w-3/6 ">
        <h2 className="text-4xl md:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
        <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-5 text-white flex flex-col md:flex-row gap-4">
       
        <button className="btn glass md:mr-5 text-white hover:bg-[#FF3811]">Discover More</button>
        <button className="btn glass  md:ml-5 text-white hover:bg-[#FF3811]">Latest Project</button>
        </div>
        </div>
    </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-2">
        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none mr-6">❮</a> 
        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-none ml-6">❯</a>
      </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-start w-full bg-gradient-to-r from-[#151515]  to-[rgba(21,21,21,0)] py-6 md:py-44 items-center">
        <div className="w-3/6 ">
        <h2 className="text-4xl md:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
        <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-5 text-white flex flex-col md:flex-row gap-4">
       
        <button className="btn glass md:mr-5 text-white hover:bg-[#FF3811]">Discover More</button>
        <button className="btn glass  md:ml-5 text-white hover:bg-[#FF3811]">Latest Project</button>
        </div>
        </div>
    </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-2">
        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none mr-6">❮</a> 
        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none ml-6">❯</a>
      </div>
      </div>
    </div>
    );
};

export default Slider;