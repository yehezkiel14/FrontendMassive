import React from "react";

const Faq = (props) => {
    return ( 
    <div>
        <details className="w-[56rem] group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            className="flex cursor-pointer items-center justify-between bg-gradient-to-r from-third to-secondary group  gap-1.5 rounded-lg p-4 text-white"
          >
            <h2 className="font-medium">{props.name}</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
            consequuntur distinctio corporis earum similique!
          </p>
        </details>
    </div>
    )
};

export default Faq;