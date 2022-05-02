
import { jokerProjects } from "../../projects-data"
import "./Row.css"


// console.log(jokerProjects);
function Row(isLargeRow) {

    return (
        <div className="project-main pb-12 bg-cover bg-gradient-to-b from-indigo-100 to-indigo-900" >
            <div className="mb-6 py-10 ">
                <h1 className="title-projects mb-4 font-bold text-green-600 w-fit mx-auto">
                    Projects
                </h1>
                <p className="text-projects text-base animate-bounce duration-700 w-4/6 text-center mx-auto ">
                    Our experience as developers has been summarized in our web portfolio. Bellow you'll
                    see some examples of previous designs. Feel free to spent time checking out what we did, we're
                    currently doing and some upcoming designs.
                </p>
            </div>
            <div className='row'>

                <div className="row__posters">

                    {
                        jokerProjects.map(project => (
                            <>
                                <img
                                    key={project.id}
                                    // onClick={() => handleClick(poster)}
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    // src={`${base_url}/${isLargeRow ? poster.poster_path : poster.backdrop_path}`}
                                    src={project.image}
                                    alt={project.name} />
                                {/* <h2 className='m-y0'>{project.name}</h2> */}
                            </>
                        )
                        )}
                </div>
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
        </div>
    )
}

export default Row