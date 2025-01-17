import { memo } from 'react';

function End() {
  return (
    <>
      <div className="bg-black text-white w-full flex justify-between items-center px-20 pt-10 pb-40">
        <div>
          <p className="text-[20px]">Yerin Portfolio</p>
          <p>Front End Developer</p>
        </div>

        <div className="flex gap-3">
          <i>github</i>
          <i>blog</i>
        </div>
      </div>
    </>
  );
}

export default memo(End);
