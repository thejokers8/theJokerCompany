import React from "react"

function AboutIntroduce () {
    return(
            <div className="about-introduce mt-[-5em] flex flex-col px-20 pt-20 pb-2 ">
                    {" "}
                    <h1 className="title-projects text-center font-bold pb-0 mb-5">
                        About us
                    </h1>
                    <p className="about-text text-center text-sm mx-auto w-3/4 border-b-4 border-gray-900 pb-12">
                    We created a <strong className="">multitask team</strong> with some IT
                    skills. Our prior background in biomedical sciences, electronic,
                    mechatronics and mechanics give us a widely open range of tools to
                    combine within our projects.{" "}
                    <strong className="">
                        We added web development skills beside our engineering knowledge to
                        setup, run, manage and advice projects all around the world.{" "}
                    </strong>
                    </p>
                </div>

    );
}

export default AboutIntroduce