import React, { forwardRef } from "react";
import { Card } from "antd";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Tips = forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
    return (
        <Card title="社区小贴" className={classNames(className)} ref={ref}>
            <div className="text-base text-center leading-7">
                道路是曲折的，前途是光明的
                <br />
                <div className="text-amber-600 font-bold text-xs">SNIGGIW - 未见翁</div>
            </div>
        </Card>
    );
});

export default Tips;
