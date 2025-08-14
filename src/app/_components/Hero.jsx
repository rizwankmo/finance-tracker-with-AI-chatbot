import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

function Hero () {
    return (
        <section className="bg-gray-100 flex items-center flex-col">
            <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Manage your Money with an AI-Driven Personal <br />
              <span className="text-6xl md:text-[6rem] font-bold mt-1 leading-none text-purple-900">
                Finance Assistant
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/dashboardss.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
        </section>
    )
}

export default Hero;