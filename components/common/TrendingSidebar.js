import React from "react";
import llmateConfig from "@/llmate.cofig";

const TrendingSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  fetchData,
  slug,
}) => {
  const chatObject = llmateConfig.apps.find((app) => app.slug === slug);

  return (
    <div
      className={`fixed top-0 bottom-0 max-w-sm w-full border-r border-border flex flex-col bg-background space-y-8 transition-all duration-500 z-50 ${
        isSidebarOpen ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <div className="flex items-center justify-end p-4">
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-accent"
              onClick={() => setIsSidebarOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-center px-6 space-x-4">
          <div>
            <span className="flex items-center justify-center w-12 rounded-full aspect-square bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <h3 className="pr-4 text-xl font-semibold text-accent">
            What others are asking?
          </h3>
        </div>
      </div>

      <ul className="h-full overflow-x-hidden overflow-y-auto text-base font-normal text-muted scroll__bar">
        {chatObject?.trendingQuestions?.map((questions, index) => {
          return (
            <li
              className="px-6 py-6 cursor-pointer odd:bg-hover even:bg-transparent"
              key={index}
              onClick={() => fetchData(questions)}
            >
              {questions}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrendingSidebar;
