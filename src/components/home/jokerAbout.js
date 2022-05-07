import { Link } from "react-router-dom";

function JokerAbout() {
  // const video = useRef(null);
  return (
    <div className="div relative w-full overflow-hidden">
      <video
        src="https://mdbootstrap.com/img/video/Lines.mp4"
        type="video/mp4"
        loop
        // ref={video}
        className="clip w-full"
        autoPlay={true}
        muted="mute"
        // onMouseEnter={() => {
        //   video.current.play();
        // }}
        // onMouseLeave={() => video.current.pause()}
      ></video>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden">
        <div className="flex justify-center items-center h-full">
          <div className="text-green-300 text-center px-10 px-md-0 flex flex-col items-center">
            <div className="content mb-[2em] text-2xl">
              <h2>TheJokerCompany</h2>
              <h2>TheJokerCompany</h2>
            </div>
            <h5 className="joker text-base font-semibold mb-6 w-3/6 uppercase tracking-wider animate-pulse">
              The Joker company is a Colombian startup conformed by a team of
              Mechatronical, Biomedical and Mechanical Engineers interested in
              web development, AI and everything related to Information
              technologies (IT). We would be pleased to help you to open digital
              channels of any idea you have in mind.
            </h5>
            <Link
              to="/contact"
              className="button inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg hover:text-green-600 hover:scale-105 transition duration-150 ease-in-out"
            >
              leave us a message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JokerAbout;
