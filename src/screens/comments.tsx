// import Header from '@components/header';
// import { useState } from 'react';
// import CommentsData from '@/comments.json';

// import CommentsComponent from '@components/comments/comment';

// type OptionsSelected = {
//   comments: boolean;
//   participate: boolean;
//   quests: boolean;
// };

// export default function Comments() {
//   const [selected, setSelected] = useState<OptionsSelected>({
//     comments: true,
//     participate: false,
//     quests: false,
//   });

//   const handleSelect = (option: keyof OptionsSelected) => {
//     setSelected((prevState) => ({
//       comments: false,
//       participate: false,
//       quests: false,
//       [option]: true,
//     }));
//   };

//   return (
//     <div className="bg-primary h-full">
//       <Header navItems={<a href="#top">Top</a>} />
//       <div id="top" className="flex flex-col items-center  ">
//         <div className="flex flex-col items-center gap-6 p-5 bg-white w-full lg:w-[900px] md:w-[700px] sm:w-[500px]">
//           <div className="flex flex-col gap-3 items-center">
//             <p className="text-2xl">Deixar minha marca</p>
//             <div className="flex gap-3">
//               <div onClick={() => handleSelect('comments')} className="hover:cursor-pointer">
//                 <p className={``}>Comentários</p>
//                 {!!selected.comments === true && <div className="border-[1px] border-secondary"></div>}
//               </div>
//               <div onClick={() => handleSelect('participate')} className="hover:cursor-pointer">
//                 <p className={``}>Participar</p>
//                 {!!selected.participate === true && <div className="border-[1px] border-secondary"></div>}
//               </div>
//               <div onClick={() => handleSelect('quests')} className="hover:cursor-pointer">
//                 <p className={``}>Dúvidas</p>
//                 {!!selected.quests === true && <div className="border-[1px] border-secondary"></div>}
//               </div>
//             </div>
//           </div>
//           <div>
//             {!!selected.comments == true && (
//               <CommentsComponent geral={CommentsData.geral} comments={CommentsData.comments} />
//             )}
//             {!!selected.participate == true && (
//               <div>
//                 <p>participate</p>
//               </div>
//             )}
//             {!!selected.quests == true && (
//               <div>
//                 <p>quests</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
