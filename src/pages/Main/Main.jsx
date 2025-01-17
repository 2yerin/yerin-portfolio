import { memo } from 'react';

function Main() {
  return (
    <>
      <title>프로젝트 템플릿</title>
      <meta name="description" content="프로젝트 템플릿" />
      <meta property="og:title" content="프로젝트 템플릿" />
      <meta name="twitter:title" content="프로젝트 템플릿" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="프로젝트 템플릿" />
      <div id="main" className="w-full h-screen text-center content-center">
        <h1 className="mb-10 text-[50px]">Front-End----Developer</h1>

        <div className="text-[15px] flex flex-col gap-1">
          <p>안녕하세요. 프론트엔드 개발자 이예린입니다.</p>
          <p>
            기본에 충실하고 모든 사람에게 열린 웹을 만드는 걸 목표로 합니다!
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(Main);
