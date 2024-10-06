import React from "react";

export default function Footer() {
    return (
        <div>
            <section className="border-t mb-30 flex flex-col items-center">
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white font-light px-3 py-1 rounded-md -mt-4 text-sm">
                    道路是曲折的，前途是光明的
                </div>

                <div className="w-64 mt-6 rounded-lg overflow-hidden">
                    <img src="/images/user/wiggins.jpg" alt="" />
                </div>

                <div className="flex items-center mt-6 font-bold text-amber-600">
                    <span>SNIGGIW</span>
                    <span>-</span>
                    <span>未见翁</span>
                </div>

                <div className="bg-[#27ae60] text-white rounded-md px-3 py-1 mt-3 text-sm">去码头整点薯条</div>
            </section>

            <div className="bg-gray-900 text-white mt-16 text-center py-16 text-slate-200/80 leading-7 text-sm">
                道路是曲折的，前途是光明的
                <br />
                邮箱：sniggiw@qq.com
            </div>
        </div>
    );
}
