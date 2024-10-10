import { Attention, EmotionHappy, EmotionUnhappy, ExpressionlessFace, LoudlyCryingFace, PoutingFace, WearyFace } from "@icon-park/react";
import { Button, Card, Input, Tooltip } from "antd";

const Emotions = [
    { title: "开心", icon: <EmotionHappy theme="outline" size="24" fill="#333" /> },
    { title: "不开心", icon: <EmotionUnhappy theme="outline" size="24" fill="#333" /> },
    { title: "无语", icon: <ExpressionlessFace theme="outline" size="24" fill="#333" /> },
    { title: "沮丧", icon: <WearyFace theme="outline" size="24" fill="#333" /> },
    { title: "大哭", icon: <LoudlyCryingFace theme="outline" size="24" fill="#333" /> },
    { title: "愤怒", icon: <PoutingFace theme="outline" size="24" fill="#333" /> },
];

export default function SignSubmit() {
    return (
        <Card title="签到快乐，再接再厉">
            <div className="flex flex-col gap-3">
                <Input placeholder="你今天的心情或最想说的话" size="large" />
                <Input placeholder="验证码" size="large" />
            </div>

            <div className="flex gap-2 mt-3">
                {Emotions.map((emotion, index) => (
                    <Tooltip key={index} title={emotion.title}>
                        <div className="cursor-pointer w-10 h-10 hover:border-rose-600 border-4 duration-150 rounded-lg p-[1px] flex items-center justify-center">
                            {emotion.icon}
                        </div>
                    </Tooltip>
                ))}
            </div>

            <div className="flex items-center gap-2 mt-3 border-4 rounded-lg bg-slate-100 p-3">
                <Button type="primary">立刻签到</Button>
                <div className="flex items-center gap-1 text-[#9b9b9b]">
                    <Attention theme="outline" size="20" fill="#9b9b9b" strokeWidth={4} />
                    <span>无意义的灌水内容会被删除！</span>
                </div>
            </div>
        </Card>
    );
}
