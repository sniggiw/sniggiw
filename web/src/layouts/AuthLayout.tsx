import React, { forwardRef } from "react";
import { Link } from "@tanstack/react-router";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    // img?: string;
}

const menu = [
    { title: "用户登录", to: "/auth/login" },
    { title: "用户注册", to: "/auth/register" },
    { title: "找回密码", to: "/" },
    { title: "网站首页", to: "/" },
];

const AuthLayout = forwardRef<HTMLDivElement, Props>(({ title, children }) => {
    return (
        <main className="w-screen h-screen overflow-y-auto flex justify-center items-center bg-[#2c3e50]">
            <section className="">
                <div className="w-[400px] rounded-lg bg-gray-100 p-3">
                    <h2 className="text-center font-bold text-lg p-4">{title}</h2>
                    {children}
                    <div className="flex justify-center items-center gap-3 mt-12 text-xs font-bold opacity-80">
                        {menu.map((item, index) => {
                            return (
                                <Link
                                    to={item.to}
                                    // activeProps={{
                                    //     className: "text-violet-700 hover:text-violet-500",
                                    // }}
                                    key={index}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
});

export default AuthLayout;
