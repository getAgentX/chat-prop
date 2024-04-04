import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "./_app";
import llmateConfig from "@/llmate.config";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const { home, apps } = llmateConfig;

  return (
    <>
      <div className="flex flex-col bg-background min-h-[100dvh] font-proximanova-regular">
        <nav className="px-4 py-3 border-b border-border">
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
            <p className="text-xl font-medium text-accent">Bharat Prop</p>

            <Link
              href="https://bharatprop.co/"
              target="_blank"
              className="px-3 py-2 text-sm font-medium tracking-wider rounded-lg sm:px-4 sm:py-3 text-accent-foreground bg-secondary hover:bg-secondary-foreground"
            >
              Bharat Prop
            </Link>
          </div>
        </nav>

        <section className="px-4 py-10 sm:py-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto space-y-8">
              <h1 className="text-2xl leading-9 xsm:text-3xl text-accent xsm:leading-10 sm:text-4xl sm:leading-[54px] md:text-5xl md:leading-[68px] font-semibold text-center">
                Hi! I’m <span className="text-secondary">Bharat Prop</span>
              </h1>

              <p className="max-w-3xl mx-auto text-base font-normal leading-7 text-center text-accent sm:leading-8 sm:text-lg">
                {home.description}
              </p>

              <div className="flex items-center justify-center w-full">
                {apps.map((app) => {
                  return (
                    <Link
                      className="px-3 py-2 text-sm font-medium tracking-wider rounded-lg sm:px-4 sm:py-3 text-accent-foreground bg-secondary hover:bg-secondary-foreground"
                      href={`/${app.slug}`}
                    >
                      Chat now
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
