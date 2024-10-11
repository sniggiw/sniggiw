import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "@/layouts/AuthLayout";
import { Button, Input } from "antd";
import { Wechat } from "@icon-park/react";

export const Route = createFileRoute("/auth/register")({
    component: Page,
});

function Page() {
    return (
        <AuthLayout title="注册">
            <div className="flex flex-col gap-3">
                <Input placeholder="请输入用户名" size="large" />
                <Input placeholder="请输入登录密码" size="large" />
                <Input placeholder="请再次输入登录密码" size="large" />
                <Input placeholder="请输入验证码" size="large" />
            </div>
            <div className="mt-3">
                <Button type="primary" size="large" block>
                    注册
                </Button>
            </div>
        </AuthLayout>
    );
}
