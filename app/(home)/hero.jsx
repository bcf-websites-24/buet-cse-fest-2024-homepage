"use client";

import { Carousel } from "@/components/carousel";
import { events } from "@/lib/data";
import { EventCard } from "./event-card";
import { CustomButton } from "@/components/custom-button";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Cube } from "@/components/cube";
import gsap from "gsap";
import { Sphere } from "@/components/sphere";

const sizes = {
  cubePosition: [10, -5.5, 0],
};

export const Hero = () => {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);

  const handleRotate = () => {
    if (!cubeRef?.current || !sphereRef?.current) return;
    gsap.to(cubeRef.current.rotation, {
      y: `+=${Math.PI * 2}`,
      x: `-=${Math.PI * 2}`,
      duration: 2,
      stagger: {
        each: 0.15,
      },
    });

    gsap.to(sphereRef.current.rotation, {
      y: `-=${Math.PI * 2}`,
      x: `+=${Math.PI * 2}`,

      duration: 2,
      stagger: {
        each: 0.15,
      },
    });
  };

  return (
    <div className="min-h-screen center pb-16 pt-32 md:pt-0 w-full">
      <div className="container w-full h-full">
        <div className="flex flex-col md:flex-row items-center w-full h-full gap-y-16 md:gap-y-0">
          <div className="w-full md:w-2/5 h-full center flex-col">
            {/* left */}
            <h1 className="text-3xl md:text-7xl font-semibold text-center tracking-wider">
              BUET
              <span className="relative z-10 inline-block mx-2 md:mx-5 mb-4">
                CSE
                {/* <div className="absolute -bottom-0 -left-1 -right-2.5 h-4 md:h-4 bg-primary -z-10"></div> */}
              </span>
              FEST
              <span className="text-3xl md:text-7xl ml-2 md:ml-5">2024</span>
            </h1>

            <p className="my-3 md:my-8 text-base md:text-2xl text-slate-400 text-center">
              A Festival of Innovation and Creativity
            </p>

            <CustomButton className={""}>Our Facebook Event</CustomButton>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-start md:items-center justify-center relative pb-8 md:pb-0">
            {/* right */}

            <Carousel
              className={"w-full md:w-2/3 flex flex-col"}
              handleRotate={handleRotate}
            >
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </Carousel>

            <div className="w-full h-full absolute inset-0 hidden md:block">
              <Canvas className="w-full h-full">
                {/* todo: canvas loader */}
                <Suspense fallback={"loading..."}>
                  <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                  <group>
                    <Sphere sphereRef={sphereRef} />
                    <Cube cubeRef={cubeRef} position={sizes.cubePosition} />
                  </group>

                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
