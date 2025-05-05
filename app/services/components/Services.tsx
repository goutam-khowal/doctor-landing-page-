// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
// import React from "react";

// function Services() {
//   return (
//     <div className="bg-white dark:bg-gray-900 flex flex-col justify-center lg:flex-row items-center border-2 lg:-mt-6 dark:border-gray-700 ">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <Navbar />
//       </header>

//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <h1
//           className="mt-20
//         text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-6xl"
//         >
//           Services <span className="text-indigo-600">, we provide!</span>
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 px-5 py-15">
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Card Title</h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Card Title</h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Card Title</h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure>
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Card Title</h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      {/* Background Blur Top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
        />
      </div>

      {/* Main Content */}
      <main className="relative isolate px-6 pt-32 pb-24 lg:px-8">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          Services <span className="text-indigo-600">we provide!</span>
        </h1>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 px-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  className="rounded-xl"
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Service"
                />
              </figure>
              <div className="card-body items-center text-center px-6 pb-6">
                <h2 className="card-title text-gray-800 dark:text-gray-100">
                  Card Title
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts.
                </p>
                <div className="card-actions mt-4">
                  <Button variant={"outline"}>
                    <Link href={"/pricing"}>Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Background Blur Bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-25rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
        />
      </div>
    </div>
  );
}

export default Services;
