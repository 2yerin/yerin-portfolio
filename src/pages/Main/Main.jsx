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
      <div
        id="main"
        className="w-screen h-screen"
        // className="w-screen h-screen bg-cover bg-center relative"
        // style={{ backgroundImage: "url('/assets/appIntroBg.png')" }}
      >
        <div>
          <h1>Front-End----Developer</h1>

          <div>
            <p>안녕하세요. 프론트엔드 개발자 이예린입니다.</p>
            <p>
              기본에 충실하고 모든 사람에게 열린 웹을 만드는 걸 목표로 합니다!
            </p>
          </div>
        </div>

        <div>
          <span>아래로 내리기</span>
          <i>아이콘</i>
        </div>
      </div>
    </>
  );
}

export default memo(Main);
