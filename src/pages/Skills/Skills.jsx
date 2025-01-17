import { memo } from 'react';

function Skills() {
  return (
    <>
      <div id="skills" className="w-full text-center bg-sky-200 px-5 py-20">
        <div className="bg-green-300">
          <h1 className="text-[28px]">skills</h1>

          <ul className="flex justify-between">
            <li>
              <p className="mb-2">FrontEnd</p>
              <ul className="bg-gray-300 flex gap-2 p-3">
                <li>html</li>
                <li>css</li>
                <li>js</li>
              </ul>
            </li>
            <li>
              <p className="mb-2">Design Tools</p>
              <ul className="bg-gray-300 flex gap-2  p-3">
                <li>Fiigma</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(Skills);
