import { memo } from 'react';

function Education() {
  return (
    <>
      <div
        id="education"
        className="w-full h-screen text-center content-center bg-green-200 px-5 py-20"
      >
        <div className="bg-sky-300 w-full h-full">
          <h1 className="text-[30px] mb-5">education</h1>

          <div className="bg-pink-300 px-4 py-2 mx-12">
            <p className="text-[20px]">멋사</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Education);
