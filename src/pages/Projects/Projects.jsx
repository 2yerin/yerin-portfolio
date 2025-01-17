import { memo } from 'react';

function Projects() {
  return (
    <>
      <div
        id="projects"
        className="w-full h-screen text-center content-center bg-purple-200 px-5 py-20"
      >
        <div className="bg-yellow-300 w-full h-full">
          <h1 className="text-[30px] mb-5">projects</h1>

          <ul className="flex justify-around">
            <li className="bg-gray-300 px-6 py-2 w-40">project1</li>
            <li className="bg-gray-300 px-6 py-2 w-40">project2</li>
            <li className="bg-gray-300 px-6 py-2 w-40">project3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(Projects);
