import React from 'react';

const EbookItem = ({ image, title, description }) => {
  return (
    <div className="text-center mb-4 w-1/4 p-4">
      {/* <img src={image} alt={title} className="w-36 h-48 mx-auto mb-2"/>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Baca</button> */}

      <article className="overflow-hidden rounded-lg  shadow-md">
        <img
          alt={title}
          src={image}
          className="h-48 w-36 mx-auto"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white">
            {description}
          </p>

          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-white">
            Find out more

            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default EbookItem;
