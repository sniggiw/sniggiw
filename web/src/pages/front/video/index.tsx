import { Play, Time } from "@icon-park/react";
import { createFileRoute } from "@tanstack/react-router";
import { Card, Pagination } from "antd";
import { Random } from "mockjs";

export const Route = createFileRoute("/front/video/")({
    component: () => (
        <main className="mb-16">
            <Card title="最近更新">
                <div className="text-base">
                    {[...Array(16)].map((_, i) => {
                        return (
                            <div className="py-3 border-b first:pt-0 grid lg:grid-cols-2 items-center" key={i}>
                                <div className="grid grid-flow-col justify-start items-center gap-2">
                                    <Play theme="outline" size="20" className="text-green-600" strokeWidth={4} />
                                    <div className="truncate">{Random.csentence(10, 50)}</div>
                                    <div className="lg:grid hidden grid-flow-col justify-start items-center gap-1 text-xs text-slate-600/80">
                                        <Time theme="outline" strokeWidth={4} />
                                        {Random.integer(10, 200)} 小时前
                                    </div>
                                </div>

                                <div className="justify-self-end hidden lg:flex">
                                    <div className="border text-xs bg-slate-50 rounded-lg px-3 py-1">{Random.ctitle(10, 20)}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            <Pagination defaultCurrent={1} total={50} className="mt-3 rounded-lg bg-white p-3" />
        </main>
    ),
});
