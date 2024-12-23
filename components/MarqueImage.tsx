import React from "react";

export default function MarqueImage({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className=" h-full w-full">
            <img
                src={src}
                alt={alt}
                className="
            h-full w-full object-cover
            "
            />
        </div>
    );
}
