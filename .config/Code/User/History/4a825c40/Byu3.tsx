"use client"

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Services() {
  const features = [
    {
      title: "Penetration Testing",
      description:
        "Simulating real-world attacks to identify vulnerabilities in your systems before hackers can exploit them",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Consulting & Security Audits",
      description:
        "Tailored advice and audits to ensure that your security practices are up-to-date",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Network Security Assessment",
      description:
        "Identifying weaknesses in your network infrastructure and securing your internal and external network layers",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r border-b dark:border-neutral-800",
    },
    {
      title: "Cloud Security Testing",
      description:
        "Evaluating cloud environments to ensure they meet the highest security standards",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white">
          Our Services
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-semibold dark:text-neutral-300">
          We offer a range of services to help you secure your systems and
          protect your data
        </p>
      </div>

      <div className="relative bg-black/20 backdrop-blur-2xl rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12  rounded-md ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="font-bold max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-semibold dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/linear.webp"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  items-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkM3q63Bv4rJz3O5jtqeBhj8gfdI43dFzbA&s"
            alt="header"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center rounded-sm"
            unoptimized
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex flex-col items-start p-4 gap-10 overflow-hidden">
      <Image
        src="https://gifdb.com/images/high/network-dynamic-installations-gkxexxrw8wls9zpb.gif"
        alt="header"
        width={500}
        height={500}
        className="h-60 w-full object-cover object-left-top rounded-sm"
        unoptimized
      />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-24 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.2, 0.2],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.05 }, // San Francisco, USA
        { location: [40.7128, -74.006], size: 0.05 }, // New York, USA
        { location: [51.5074, -0.1278], size: 0.05 }, // London, UK
        { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo, Japan
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris, France
        { location: [55.7558, 37.6173], size: 0.05 }, // Moscow, Russia
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney, Australia
        { location: [28.6139, 77.209], size: 0.05 }, // New Delhi, India
            ],
            onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
