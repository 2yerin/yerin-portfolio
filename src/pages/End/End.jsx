import { memo } from 'react';

function End() {
  return (
    <>
      <div className="bg-black text-white w-screen">
        <p>FrontEnd Developer</p>
        <div>
          <span>yern@naver.com</span>
          <span>이예린</span>
        </div>
      </div>
    </>
  );
}

export default memo(End);
