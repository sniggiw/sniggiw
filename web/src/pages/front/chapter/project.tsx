import { createFileRoute } from "@tanstack/react-router";
import ChapterLayout from "@/layouts/ChapterLayout";
import ChapterItem from "@/components/ChapterItem";
import { Random } from "mockjs";

export const Route = createFileRoute("/front/chapter/project")({
    component: () => (
        <ChapterLayout title="实战项目" desc="以下是提高你编程能力的实战项目，希望能够帮助到你">
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
