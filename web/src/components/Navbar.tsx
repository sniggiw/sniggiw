import { useState } from "react";
import { Button, Drawer } from "antd";
import { Youtube, HamburgerButton } from "@icon-park/react";
import menus from "../config/menus";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <main className="bg-white shadow-sm border-t-4 border-rose-600">
            <section className="lg:container px-3 py-3 grid grid-cols-[1fr_auto]">
                <div className="hidden lg:flex items-center gap-2">
                    <div className="flex items-center gap-1 text-rose-600">
                        <Youtube theme="outline" size="35" strokeWidth={4} />
                        <span className="text-2xl uppercase font-bold">sniggiw</span>
                    </div>

                    <div className="lg:flex gap-2 hidden">
                        {menus.map((menu, i) => {
                            return (
                                <a key={i} href="#" className="font-bold">
                                    {menu.title}
                                </a>
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
                                    <a key={i} href="#" className="font-bold">
                                        {menu.title}
                                    </a>
                                );
                            })}
                        </div>
                    </Drawer>
                </div>

                <div className="justify-self-end flex gap-1">
                    <Button type="primary">登录</Button>
                    <Button>注册</Button>
                </div>
            </section>
        </main>
    );
}