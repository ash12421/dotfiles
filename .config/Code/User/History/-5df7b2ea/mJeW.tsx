"use client";

import Image from "next/image";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { SVGProps, useState } from "react";
import { PhCaretLeftLight, PhCaretRightLight } from "./Icones";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials: {
	profile: string;
	name: string;
	role: string;
	feedback: string;
}[] = [
	{
		profile: "https://picsum.photos/200/200",
		name: "Roshini Balasubramanian",
		feedback:
			"Callisto Labs exceeded our design expectations, delivering not just designs but strategic visual solutions. Their attention to detail and professionalism truly set them apart from other design agencies",
		role: "Personal Portfolio",
	},
	{
		profile: "https://picsum.photos/200/200",
		name: "Mythili Padmanabhan",
		feedback:
			"Working with Callisto Labs was a pleasure. Their dedication to quality, creativity, and timely delivery made our collaboration seamless. Highly recommended for their design expertise",
		role: "Ecommerce Website",
	},
];

export default function Testimonials() {
	const [carouselAPI, setCarouselAPI] = useState<CarouselApi>();
	return (
		<section
			id="testimonials"
			className="font-DMSans my-14 text-white rounded-3xl  lg:p-10"
		>
			<p className="font-medium">{"//"} TESTIMONIALS</p>
			<div className="flex items-center justify-between flex-wrap">
				<p className="lg:text-[80px] text-[60px] leading-tight font-medium tracking-tight">
					Client Feedback
				</p>
				<div className="flex items-center gap-5 *:text-4xl *:cursor-pointer mt-5">
					<div className="justify-center items-center bg-white border-opacity-10 bg-clip-padding backdrop-filter bg-opacity-0 hover:bg-opacity-10 border border-gray-100 rounded-full">
						<PhCaretLeftLight
							className="m-3"
							onClick={() => {
								carouselAPI?.scrollPrev();
							}}
						/>
					</div>
					<div className="justify-center items-center bg-white border-opacity-10 bg-clip-padding backdrop-filter bg-opacity-0 hover:bg-opacity-10 border border-gray-100 rounded-full">
						<PhCaretRightLight
							className="m-3"
							onClick={() => {
								carouselAPI?.scrollNext();
							}}
						/>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<Carousel
					setApi={setCarouselAPI}
					className="w-full"
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						{/* <CarouselItem className="md:basis-1/2">
              <div className="bg-[#111] p-5 font-extralight text-xl rounded-xl flex flex-col justify-between h-[400px] sm:h-[300px]">
                <p>
                  Callisto Labs exceeded our design expectations, delivering not
                  just designs but strategic visual solutions. Their attention
                  to detail and professionalism truly set them apart from other
                  design agencies.
                </p>
                <div>
                  <p className="font-semibold">Roshini Balasubramanian</p>
                  <p>Personal Portfolio</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 ">
              <div className="bg-[#111] p-5 font-extralight text-xl rounded-xl space-y-4 h-[400px] sm:h-[300px] flex flex-col justify-between">
                <p>
                  Working with Callisto Labs was a pleasure. Their dedication to
                  quality, creativity, and timely delivery made our
                  collaboration seamless. Highly recommended for their design
                  expertise.
                </p>
                <div>
                  <p className="font-semibold">Mythili Padmanabhan</p>
                  <p>Rangavilas</p>
                </div>
              </div>
            </CarouselItem> */}
						{testimonials.map((t) => (
							<>
								<CarouselItem className="lg:basis-1/2 ">
									<TestimonialCard {...t} />
								</CarouselItem>
							</>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
}

function TestimonialCard({
	profile,
	name,
	role,
	feedback,
}: {
	profile: string;
	name: string;
	role: string;
	feedback: string;
}) {
	return (
		<motion.div
			className="w-full h-fit group/card bg-neutral-950 rounded-md"
		>
			<div
				className={cn(
					"cursor-pointer gap-2 md:gap-4 relative overflow-auto card h-96 rounded-md shadow-md [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.1),rgba(255,255,255,0))] mx-auto backgroundImage flex flex-col p-4"
					// "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
				)}
			>
				<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-neutral-900 opacity-60"></div>
				<div className="flex flex-row items-center space-x-4 z-10 ">
					<Image
						height="100"
						width="100"
						alt="Avatar"
						src={profile}
						className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/30 object-cover"
					/>
					<div className="flex flex-col">
						<p className="font-normal text-base md:text-xl text-gray-50 relative z-10">
							{name}
						</p>
						<p className="text-sm md:text-md text-gray-400">
							{role}
						</p>
					</div>
				</div>
				<div className="lg:px-10  w-full flex justify-center items-center h-full ">
					<p className=" text-lg md:text-2xl max-lg:text-center lg:text-2xl text-gray-50 relative z-10">
						<blockquote className="before:content-[open-quote] after:content-[close-quote] before:text-3xl after:text-3xl max-md:before:text-xl  max-md:after:text-xl  before:font-black after:font-black before:mr-2 after:ml-2 leading-relaxed">
							{feedback}
						</blockquote>
					</p>
				</div>
			</div>
		</motion.div>
	);
}

function MdiFormatQuoteClose(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3z"
			></path>
		</svg>
	);
}

function MdiFormatQuoteOpen(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="m10 7l-2 4h3v6H5v-6l2-4zm8 0l-2 4h3v6h-6v-6l2-4z"
			></path>
		</svg>
	);
}