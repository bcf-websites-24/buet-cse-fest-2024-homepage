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
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-y-16 md:gap-y-0">
          <div className="h-full center flex-col items-center md:items-start flex-1 w-full md:w-3/5">
            {/* left */}
            <h1 className="text-3xl md:text-7xl font-semibold text-center md:text-left tracking-wider">
              BUET CSE FEST 2024
            </h1>

            <p className="my-3 md:my-8 text-base md:text-2xl text-slate-400 text-center md:text-left">
              A Festival of Innovation and Creativity
            </p>

            <CustomButton className={""}>Our Facebook Event</CustomButton>
          </div>

          <div className="h-full flex relative pb-8 md:pb-0 w-full md:w-2/5 center">
            {/* right */}
            <Carousel className={""} handleRotate={handleRotate}>
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </Carousel>

            <div className="w-full h-full absolute inset-0 hidden sm:block">
              <Canvas className="w-full h-full">
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
