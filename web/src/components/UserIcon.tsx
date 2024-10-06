import React, { forwardRef } from "react";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
}

const UserIcon = forwardRef<HTMLDivElement, Props>(({ className, src }, ref) => {
    return (
        <div className="hover:scale-125 duration-300" ref={ref}>
            <LazyLoadImage src={src} className={classNames("w-12 h-12 rounded-lg object-cover cursor-pointer", className)} />
        </div>
    );
});

export default UserIcon;
