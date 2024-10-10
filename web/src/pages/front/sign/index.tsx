import WechatSign from "@/components/Sign/WechatSign";
import SignSubmit from "@/components/Sign/SignSubmit";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "antd";
import SignList from "@/components/Sign/SignList";

export const Route = createFileRoute("/front/sign/")({
    component: () => (
        <main>
            <SignSubmit />
            <WechatSign />
            <Card title="早起少年" className="mt-3">
                <div className="text-slate-700">
                    早上 5:00 - 7:00 签到，并设置了 收货地址 和 手机号，即可参与 【早起少年】 活动，并有机会得到礼品。
                </div>
            </Card>
            <SignList />
        </main>
    ),
});
