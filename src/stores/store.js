// import { create } from 'zustand';
// import { produce } from 'immer';

// export const mainStore = create((set) => {
//   const INITIAL_STATE = {
//     selectedCategory: '전체',
//   };

//   const handleCategoryClick = (category) => {
//     if (category === 'category') {
//       set(
//         produce((draft) => {
//           draft.selectedCategory = category;
//         })
//       );
//     }
//   };

//   return {
//     ...INITIAL_STATE,
//     handleMethod: {
//       handleCategoryClick,
//     },
//   };
// });
