/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import PageLayout from "../components/PageLayout";
import { userData } from "../constants/userData";

export default function projects() {
  return (
    <PageLayout>
      <section className="bh-white dark:bg-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto h-48">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects
          </h1>
        </div>
        <div className="dark:bg-gray-900 bg-[#F1F1F1]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            {userData.projects.map((proj, idx) => {
              return (
                <ProjectCard key={idx}>
                  <a
                    href={proj.link}
                    className="w-full px-8 xl:px-0 block shadow-2xl"
                  >
                    <div className="relative overflow-hidden">
                      <div className="h-72 object-cover">
                        <img
                          src={proj.imgUrl}
                          alt="proj image"
                          className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                        />
                      </div>
                      <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                        {proj.title}
                      </h1>
                    </div>
                  </a>
                </ProjectCard>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ProjectCard({ children }) {
  const ref = useRef<HTMLDivElement>();
  const [isHovered, setHovered] = useState<boolean>(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });
  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ];
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.interpolate(
          (x, y, s) => `perspective(600px) rotateX(${x}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}
