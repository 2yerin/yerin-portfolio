// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Navigate,
// } from 'react-router-dom';
// import Main from '@/pages/Main/Main';

// export const routes = createRoutesFromElements(
//   <Route path="/">
//     {/* 인트로, 로그인 페이지 */}
//     <Route path="/" element={<Navigate to="/main" />} />
//     <Route path="/main" element={<Main />} />

//     {/* 메인페이지
//     <Route
//       path="/main"
//       lazy={async () => {
//         let { default: Main } = await import('./pages/Main/Main');
//         return { Component: Main };
//       }}
//     /> */}
//   </Route>
// );
// const router = createBrowserRouter(routes, {
//   basename: import.meta.env.BASE_URL,
// });

// export default router;
