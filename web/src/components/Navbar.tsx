import { useState } from "react";
import { Button, Drawer } from "antd";
import { Youtube, HamburgerButton } from "@icon-park/react";
import menus from "../config/menus";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <main className="bg-white shadow-sm border-t-4 border-rose-600 mb-6">
            <section className="lg:container px-3 py-3 grid grid-cols-[1fr_auto]">
                <div className="hidden lg:flex items-center gap-2">
                    <Link to={"/"} className="flex items-center gap-1 text-rose-600">
                        <Youtube theme="outline" size="35" strokeWidth={4} />
                        <span className="text-2xl uppercase font-bold">sniggiw</span>
                    </Link>

                    <div className="lg:flex gap-2 hidden">
                        {menus.map((menu, i) => {
                            return (
                                <Link to={menu.to} key={i} href="#" className="font-bold">
                                    {menu.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="lg:hidden">
                    <HamburgerButton theme="outline" size="30" fill="#333" onClick={showDrawer} />
                    <Drawer
                        title=""
                        placement="left"
                        extra={
                            <div className="flex items-center gap-1 text-rose-600">
                                <Youtube theme="outline" size="30" strokeWidth={4} />
                                <span className="text-2xl uppercase font-bold">sniggiw</span>
                            </div>
                        }
                        onClose={onClose}
                        open={open}
                    >
                        <div className="grid grid-flow-row gap-2">
                            {menus.map((menu, i) => {
                                return (
                                    <Link to={menu.to} onClick={onClose} key={i} href="#" className="font-bold">
                                        {menu.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </Drawer>
                </div>

                <div className="justify-self-end flex gap-1">
                    <Link to="/auth/login">
                        <Button type="primary">登录</Button>
                    </Link>
                    <Button>注册</Button>
                </div>
            </section>
        </main>
    );
}
