"use client";
import Image from "next/image";
import { checkboxes, checkboxesType, project, projects } from "./projectsData";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [checkBoxState, setCheckBoxState] =
    useState<checkboxesType[]>(checkboxes);
  const [projectsState, setProjectState] = useState<project[]>(projects);

  console.log(projectsState);

  const checkboxHandler = (checkbox: checkboxesType) => {
    checkbox.checked = !checkbox.checked;
    setCheckBoxState((prev) =>
      prev.map((item) => (item.label === checkbox.label ? checkbox : item))
    );
  };

  useEffect(() => {
    setProjectState((prev) => {
      const checkedCategories = checkBoxState
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.label.toLowerCase());

      if (checkedCategories.length === 0) {
        return projects;
      }

      return projects.filter((project) =>
        checkedCategories.includes(project.category.toLowerCase())
      );
    });
  }, [checkBoxState]);

  return (
    <div className="flex h-full md:flex-row flex-col">
      <div className="min-w-[288px] flex-[0_0_16%] h-full">
        <details
          className="flex items-center gap-2 border-b border-b-line-color border-r h-full border-r-line-color"
          open
        >
          <summary className="px-4 py-3 border-b border-b-line-color">
            projects
          </summary>
          <div className="px-4 py-5">
            <div className="">
              <div className="flex flex-col justify-center md:items-start">
                {checkBoxState.map((checkbox) => (
                  <label
                    key={checkbox.label}
                    htmlFor={checkbox.label}
                    className={`label-style transition-colors ease-in-out duration-300 cursor-pointer ${checkbox.checked ? '!text-white' : ''} `}
                  >
                    <input
                      type="checkbox"
                      name={checkbox.label}
                      id={checkbox.label}
                      checked={checkbox.checked}
                      onChange={(e) => checkboxHandler(checkbox)}
                    />
                    {checkbox.icon}
                    <span> {checkbox.label} </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
      <div className="flex-1 h-full">
        <div className="border-b border-b-line-color ">
          <div className="px-4 py-3 inline-flex border-r border-r-line-color">
            <div className="text-primary-gray">
              {checkBoxState
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.label.toLowerCase())
                .join(",") || "projects"}
            </div>
            <div className="ml-4 text-primary-gray">&times;</div>
          </div>
        </div>
        <div className="flex md:px-20 md:py-14 px-5 py-3 flex-wrap gap-6">
          {projectsState.map((project, idx) => (
            <div className="" key={project.title}>
              {/* title */}
              <div className="inline-flex gap-2 mb-6">
                <span className="text-secondary-blue font-semibold">
                  Project {idx + 1}
                </span>
                <span className="text-primary-gray">// _{project.title}</span>
              </div>
              {/* card */}
              <div className="md:w-96 w-72 overflow-hidden border border-line-color pb-4 rounded-xl">
                {/* preview */}
                <div className="relative">
                  <Image
                    src={project.img}
                    alt=""
                    width={384}
                    height={144}
                    className="md:w-96 md:h-36 w-72 h-28"
                  />
                  <div className="absolute  right-3 bottom-2 bg-primary-2 p-1 rounded-full z-10">
                    {project.icon}
                  </div>
                </div>
                {/* description */}
                <div className="p-4 text-primary-gray text-sm">
                  {project.description}
                </div>
                {/* links */}
                <Link
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 inline-block bg-primary-dark-gray rounded-lg ml-4"
                >
                  view project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
