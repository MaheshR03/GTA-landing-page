import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

     gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.5}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-5 px-5">
              <div className="logo flex gap-3">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-7 h-1 bg-white"></div>
                  <div className="line w-4 h-1 bg-white"></div>
                </div>
                <h3 className="text-2xl -mt-[5px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.7] rotate-[-10deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="sky"
              />
              <img
                className="absolute bg scale-[1.7] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt="bg"
              />
              <div className="text text-white flex flex-col gap-2 top-10 absolute left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[7rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[7rem] leading-none ml-10">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-30">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[100%] left-1/2 -translate-x-1/2  scale-[2] rotate-[-20deg]"
                src="./girlbg.png"
                alt="girl"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-6 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-1 items-center">
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt="ps5"
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.7] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt="girl again"
                />
              </div>
              <div className="rg w-[50%] px-30">
                <h1 className="text-4xl">Still Running,</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-6 font-[Helvetica_Now_Display]">
                  Imagina un mundo de GTA con una protagonista femenina que desafíe las normas de la ciudad ficticia. Ella podría ser una mujer fuerte y astuta, capaz de abrirse camino en un entorno violento y dominado por hombres. A través de su historia, se podría explorar temas de empoderamiento y lucha contra las adversidades de una sociedad corrupta.
                </p>
                <p className="mt-2 font-[Helvetica_Now_Display]">
                  La ciudad de GTA es un lugar sin reglas, donde todo está permitido, y la inclusión de una protagonista femenina añadiría una nueva perspectiva al juego. Podría liderar bandas, realizar misiones arriesgadas, o incluso infiltrarse en los círculos más oscuros de poder. Con su agilidad mental y habilidades, se ganaría el respeto de sus aliados y enemigos por igual.
                </p>
                <p className="mt-2 font-[Helvetica_Now_Display]">
                  La ciudad de GTA está llena de caos, pero también de oportunidades para alguien con astucia y determinación. Con una protagonista femenina, podríamos explorar nuevas dinámicas de poder y liderazgo en un mundo donde la supervivencia es clave. Su habilidad para adaptarse y tomar decisiones rápidas sería crucial para enfrentarse a los desafíos que presenta el entorno urbano.
                </p>
                <button className="bg-yellow-500 px-4 py-4 text-black mt-5 text-xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;