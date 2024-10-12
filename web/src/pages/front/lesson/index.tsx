import { createFileRoute } from "@tanstack/react-router";
import { Card } from "antd";
import { Random } from "mockjs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Route = createFileRoute("/front/lesson/")({
    component: () => (
        <Card title="碎片课程">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3">
                {[...Array(12)].map((_, index) => {
                    return (
                        <div className="border rounded-lg overflow-hidden" key={index}>
                            <div className="overflow-hidden cursor-pointer">
                                <div className="hover:scale-110 duration-300">
                                    <LazyLoadImage effect="blur" src={`https://picsum.photos/id/${Random.integer(1, 100)}/400/250`} />
                                </div>
                            </div>
                            <div className="py-3 px-5">
                                <div className="font-bold mb-2 text-center">{Random.csentence(5, 10)}</div>
                                <div className="text-sm">{Random.csentence(20, 60)}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    ),
});
