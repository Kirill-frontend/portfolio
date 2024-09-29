"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  aboutCode,
  firstTaskCode,
  secondTaskCode,
  tabsContent,
} from "./codeConsts";
import { useState } from "react";

const Page = () => {
  const [centerContent, setCenterContent] = useState<string>(
    tabsContent[0].content
  );

  const changeTab = (id: number) => {
    setCenterContent(tabsContent[id].content);
    tabsContent.forEach((i) =>
      i.id === id ? (i.selected = true) : (i.selected = false)
    );
  };

  return (
    <div className="flex h-full md:flex-row  flex-col">
      {/* left block */}
      <div className="flex-[0_0_16%] flex h-full">
        {/* some icons */}
        <div className="px-5 pt-5 flex-col gap-9 border-r hidden md:flex border-r-line-color h-full">
          <div className="text-primary-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12 15V17H18V15H12ZM8.41421 12L5.58579 14.8284L7 16.2426L11.2426 12L7 7.75736L5.58579 9.17157L8.41421 12Z"></path>
            </svg>
          </div>
          <div className="text-primary-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M14.2558 21.7442L12 24L9.74416 21.7442C5.30941 20.7204 2 16.7443 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 16.7443 18.6906 20.7204 14.2558 21.7442ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
            </svg>
          </div>
          <div className="text-primary-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z"></path>
            </svg>
          </div>
        </div>
        {/* tabs */}
        <div className="w-full border-r border-r-line-color">
          {/* folder title */}
          <details className="flex items-center gap-2 border-b border-b-line-color" open>
            <summary className="px-4 py-3 border-b border-b-line-color">personal-info</summary>
            <div className="px-4 py-5">
              {/* bio */}
              {tabsContent.map((tab) => (
                <div
                  key={tab.id}
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => changeTab(tab.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={tab.color}
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                  </svg>
                  <span
                    className={`${
                      tab.selected ? "text-white" : "text-primary-gray"
                    }`}
                  >
                    {tab.title}
                  </span>
                </div>
              ))}
            </div>
          </details>

          <details className="flex items-center  gap-2 border-t border-t-line-color border-b  border-b-line-color" open>
            <summary className="px-4 border-b py-2 border-b-line-color">
              contact
            </summary>
            <div className="px-4 pb-5">
              <div className="flex items-center gap-2 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-primary-gray text-sm">
                  coder.frontend@gmail.com
                </span>
              </div>
            </div>
          </details>
        </div>
      </div>
      {/* central block */}
      <div className="">
        {/* top file */}
        <div className="w-full border-b md:block hidden border-b-line-color">
          <div className="inline-flex text-primary-gray items-center px-4 py-3  border-r border-r-line-color">
            <p className="mr-14">personal-info</p> <span>&times;</span>
          </div>
        </div>
        <div className="">
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            showLineNumbers={true}
            customStyle={{
              backgroundColor: "rgba(1, 18, 33, 0)",
              padding: "1em",
              fontSize: ".9em",
              maxWidth: "600px",
            }}
          >
            {centerContent}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* right block */}
      <div className="w-full border-l border-l-line-color">
        {/* top empty row */}
        <div className="h-[49px] border-b border-b-line-color "></div>
        <div className="text-primary-gray pt-5 pl-2 ">
          // code snippets showcase:{" "}
        </div>
        <div className="pt-5  pl-2">
          <div className="">
            {/* task title */}
            <div className="text-lg text-primary-text">
              Sum Strings as Numbers
            </div>
            <div className="text-sm text-primary-gray">
              Given the string representations of two integers, return the
              string representation of the sum of those integers.
            </div>
            {/* syntax */}
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              customStyle={{
                backgroundColor: "rgba(1, 18, 33)",
                padding: ".7em",
                fontSize: ".7em",
                borderRadius: "15px",
                marginTop: "10px",
                marginRight: "30px",
              }}
            >
              {firstTaskCode}
            </SyntaxHighlighter>
          </div>
          <div className="mt-5">
            {/* task title */}
            <div className="text-lg text-primary-text">
              Extract the domain name from a URL
            </div>
            <div className="text-sm text-primary-gray">
              Writen a function that when given a URL as a string, parses out
              just the domain name and returns it as a string.
            </div>
            {/* syntax */}
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              customStyle={{
                backgroundColor: "rgba(1, 18, 33)",
                padding: ".7em",
                fontSize: ".7em",
                borderRadius: "15px",
                marginTop: "10px",
                marginRight: "30px",
              }}
            >
              {secondTaskCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
