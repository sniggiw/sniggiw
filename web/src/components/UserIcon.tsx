import React, { forwardRef } from "react";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
}

const UserIcon = forwardRef<HTMLDivElement, Props>(({ className, src }, ref) => {
    return (
        <div className={classNames("hover:scale-125 duration-300 cursor-pointer overflow-hidden h-12", className)} ref={ref}>
            <LazyLoadImage effect="blur" src={src} className={classNames("w-12 h-12 rounded-lg object-cover", className)} />
        </div>
    );
});

export default UserIcon;
