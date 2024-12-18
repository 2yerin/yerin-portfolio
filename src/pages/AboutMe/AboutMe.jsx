import { memo } from 'react';

function AboutMe() {
  return (
    <>
      <div className="w-screen h-screen">
        <h1>#about me</h1>

        <div>
          <p>이예린</p>
          <div>
            <i>메일</i>
            <span>yerin@naver.com</span>
          </div>
          <div>
            <i>학교</i>
            <span>군산대학교</span>
          </div>
        </div>

        <div>
          <h2>##active</h2>
          <div>
            <i>깃허브</i>
            <i>블로그</i>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(AboutMe);
