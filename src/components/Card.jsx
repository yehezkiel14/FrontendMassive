import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, image }) => {
    return (
        <div className="animate-[fade-in-right_1s_ease-in-out]">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt={title}
                    src={image}
                    className="h-56 w-full object-cover" 
                />
                <div className="bg-white p-4 sm:p-6">
                    <Link to={`/detailartikel/${id}`}>
                        <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
                    </Link>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Card;
