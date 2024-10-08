import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    title: string;
    desc: string;
}

const ChapterItem = React.forwardRef<HTMLDivElement, Props>(({ src, title, desc }, ref) => {
    return (
        <div className="border rounded-lg overflow-hidden" ref={ref}>
            <div className="overflow-hidden cursor-pointer">
                <div className="hover:scale-110 duration-300">
                    <LazyLoadImage effect="blur" src={src} />
                </div>
            </div>
            <div className="py-3 px-5">
                <div className="font-bold mb-2 text-center">{title}</div>
                <div className="text-sm">{desc}</div>
            </div>
        </div>
    );
});

export default ChapterItem;
