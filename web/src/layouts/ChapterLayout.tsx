import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    desc: string;
}

const ChapterLayout = React.forwardRef<HTMLDivElement, Props>(({ title, desc, children }, ref) => {
    return (
        <main className="bg-white rounded-lg p-6" ref={ref}>
            <h1 className="text-center text-3xl font-bold mt-12">{title}</h1>
            <div className="text-center mt-6">{desc}</div>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">{children}</section>
        </main>
    );
});

export default ChapterLayout;
