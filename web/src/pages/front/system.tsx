import { createFileRoute } from "@tanstack/react-router";
import { Card } from "antd";

export const Route = createFileRoute("/front/system")({
    component: () => <Card title="系统课程" extra={<a href="">More</a>}></Card>,
});
