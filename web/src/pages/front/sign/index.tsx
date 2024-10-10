import { EmotionHappy, EmotionUnhappy, ExpressionlessFace, LoudlyCryingFace, PoutingFace, WearyFace } from "@icon-park/react";
import { createFileRoute } from "@tanstack/react-router";
import { Card, Input, Tooltip } from "antd";

export const Route = createFileRoute("/front/sign/")({
    component: () => (
        <main>
            <Card title="签到快乐，再接再厉">
                <div className="flex flex-col gap-3">
                    <Input placeholder="你今天的心情或最想说的话" size="large" />
                    <Input placeholder="验证码" size="large" />
                </div>

                <div className="flex gap-2 mt-3">
                    <Tooltip title="开心">
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            <EmotionHappy theme="outline" size="24" fill="#333" />
                        </div>
                    </Tooltip>

                    <Tooltip title="不开心">
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            <EmotionUnhappy theme="outline" size="24" fill="#333" />
                        </div>
                    </Tooltip>

                    <Tooltip title="无语">
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            <ExpressionlessFace theme="outline" size="24" fill="#333" />
                        </div>
                    </Tooltip>

                    <Tooltip title="沮丧">
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            <WearyFace theme="outline" size="24" fill="#333" />
                        </div>
                    </Tooltip>

                    <Tooltip title="大哭">
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            <LoudlyCryingFace theme="outline" size="24" fill="#333" />
                        </div>
                    </Tooltip>

                    <Tooltip title="愤怒">
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            <PoutingFace theme="outline" size="24" fill="#333" />
                        </div>
                    </Tooltip>
                </div>
            </Card>
        </main>
    ),
});
