import Tips from "@/components/Tips";
import TopicItem from "@/components/TopicItem";
import { SmilingFace } from "@icon-park/react";
import { createFileRoute } from "@tanstack/react-router";
import { Card, Pagination } from "antd";

export const Route = createFileRoute("/front/topic/")({
    component: () => (
        <main className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
                <Card
                    title="交流讨论"
                    extra={
                        <div className="flex gap-1 items-center">
                            <SmilingFace theme="outline" strokeWidth={4} className="text-green-700" />
                            <p>友好交流，共同进步</p>
                        </div>
                    }
                >
                    <div className="grid grid-flow-row gap-4">
                        {[...Array(10)].map((_, i) => {
                            return <TopicItem key={i} />;
                        })}
                    </div>
                </Card>

                <div className="bg-white rounded-lg mt-3 py-3">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <Tips />
        </main>
    ),
});
