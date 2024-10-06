import React, { forwardRef } from "react";
import { Card } from "antd";
import classNames from "classnames";
import LearnItem from "./LearnItem";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Learn = forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
    return (
        <Card title="学习动态" className={classNames(className)} ref={ref}>
            <div className="grid grid-flow-row gap-4">
                {[...Array(10)].map((_, i) => {
                    return <LearnItem key={i} />;
                })}
            </div>
        </Card>
    );
});

export default Learn;
