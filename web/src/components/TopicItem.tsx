import React, { forwardRef } from "react";
import { Random } from "mockjs";
import classNames from "classnames";

import UserIcon from "./UserIcon";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TopicItem = forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
    return (
        <div className={classNames("grid grid-cols-[auto_1fr] gap-2 border-b pb-3", className)} ref={ref}>
            <UserIcon src={`https://picsum.photos/id/${Random.integer(1, 100)}/100`} />

            <div className="grid grid-rows-2">
                <a href="#" className="font-bold text-base opacity-90 truncate">
                    {Random.csentence(20, 80)}
                </a>
                <div className="flex text-xs gap-1 self-end">
                    <a href="#">{Random.ctitle(3, 6)}</a> 更新于 {Random.integer(2, 100)} 天前
                </div>
            </div>
        </div>
    );
});

export default TopicItem;
