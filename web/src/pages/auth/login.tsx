import { Wechat } from "@icon-park/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Button, Input } from "antd";

export const Route = createFileRoute("/auth/login")({
    component: Page,
});

function Page() {
    return (
        <main className="w-screen h-screen overflow-y-auto flex justify-center items-center bg-[#2c3e50]">
            <section className="">
                <div className="w-[400px] rounded-lg bg-gray-100 p-3">
                    <h2 className="text-center font-bold text-lg p-4">登录</h2>
                    <div className="flex flex-col gap-3">
                        <Input placeholder="请输入用户名或邮箱" size="large" />
                        <Input placeholder="请输入登录密码" size="large" />
                        <Input placeholder="请输入验证码" size="large" />
                    </div>
                    <div className="mt-3">
                        {/* <Button type="primary" size="large" block className="bg-violet-700 hover:!bg-violet-500">登录</Button> */}
                        <Button type="primary" size="large" block>
                            登录
                        </Button>
                    </div>

                    <div className="flex justify-center mt-3 cursor-pointer">
                        <div className="bg-green-600 hover:opacity-80 rounded-full p-[5px] duration-300">
                            <Wechat theme="outline" size="25" className="text-white" strokeWidth={4} />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-3 text-xs font-bold opacity-80">
                        <Link to="/front">网站首页</Link>
                        <Link to="/">会员注册</Link>
                        <Link to="/">找回密码</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
