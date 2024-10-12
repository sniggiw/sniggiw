import ChapterItem from "@/components/ChapterItem";
import ChapterLayout from "@/layouts/ChapterLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Random } from "mockjs";

export const Route = createFileRoute("/front/chapter/system")({
    component: () => (
        <ChapterLayout title="系统课程" desc="系统课程指从零开始学习一门编程语言，比如从零开始学习 JavaScript">
            {[...Array(12)].map((_, index) => {
                return (
                    <ChapterItem
                        key={index}
                        src={`https://picsum.photos/id/${Random.integer(1, 100)}/400/250`}
                        title={Random.csentence(10, 15)}
                        desc={Random.csentence(20, 60)}
                    />
                );
            })}
        </ChapterLayout>
    ),
});
