"use client";

import { Suspense, useEffect, useRef } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { EventCard } from "@/app/(home)/event-card";
import { CustomButton } from "./custom-button";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Sphere } from "./sphere";
import { Cube } from "./cube";
import gsap from "gsap";

const sizes = {
  cubePosition: [10, -3.5, 0],
};

export const EventHero = ({
  title = "BUET CSE FEST 2024",
  description = "A Festival of Innovation and Creativity",
  ctaPrimary = {
    label: "Register",
    href: "#",
  },
  ctaSecondary = {
    label: "Rules",
    href: "#",
  },
  ctaSpecial,
  event,
}) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleRotate();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroWrapper>
      <div className="min-h-screen center pb-16 pt-32 md:pt-0 w-full">
        <div className="container w-full h-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-y-16 md:gap-y-0">
            <div className="h-full center flex-col items-center md:items-start flex-1 w-full md:w-1/2">
              {/* left */}
              <h1 className="text-3xl md:text-7xl font-semibold text-center md:text-left tracking-wider">
                {title}
              </h1>

              <p className="my-3 md:my-8 text-base md:text-2xl text-slate-400 text-center md:text-left">
                {description}
              </p>

              <div className="flex items-center gap-x-6">
                <CustomButton
                  variant="primary"
                  className={""}
                  link={ctaPrimary.href}
                >
                  {ctaPrimary.label}
                </CustomButton>

                {ctaSpecial && (
                  <CustomButton
                    variant="primary"
                    className={"from-secondary to-color5"}
                    link={ctaSpecial.href}
                  >
                    {ctaSpecial.label}
                  </CustomButton>
                )}

                <CustomButton
                  variant="secondary"
                  className={""}
                  link={ctaSecondary.href}
                >
                  {ctaSecondary.label}
                </CustomButton>
              </div>
            </div>

            <div className="h-full flex relative pb-8 md:pb-0 w-full md:w-1/2 center ml-auto">
              {/* right */}
              <EventCard event={event} />

              <div className="w-full h-full absolute inset-0 hidden sm:block z-10">
                <Canvas className="w-full h-full">
                  <Suspense fallback={"loading..."}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <group>
                      <Sphere sphereRef={sphereRef} />
                      <Cube cubeRef={cubeRef} position={sizes.cubePosition} />
                    </group>

                    <ambientLight intensity={1} />
                    <directionalLight
                      position={[9.2, 10, 10]}
                      intensity={0.5}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = ({ children }) => {
  return (
    <>
      <div className="block sm:hidden">{children}</div>

      <div className="hidden sm:block">
        <BackgroundGradientAnimation>
          <div className="bg-background/70 z-10 absolute inset-0">
            {children}
          </div>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
};
