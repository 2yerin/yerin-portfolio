import { memo } from 'react';

function AboutMe() {
  return (
    <>
      <div
        id="aboutMe"
        className="w-full h-screen text-center content-center bg-yellow-200 px-5 py-20"
      >
        <div className="bg-pink-300 w-full h-full flex gap-12">
          <div className="flex flex-col justify-between items-start">
            <h1 className="text-[30px]">about me</h1>
            <i>github</i>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="flex flex-col items-start">
              <p className="text-[18px]">이름</p>
              <p className="text-[16px]">이예린</p>
            </li>
            <li className="flex flex-col items-start">
              <p className="text-[18px]">메일</p>
              <p className="text-[16px]">erin@naver.com</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(AboutMe);
