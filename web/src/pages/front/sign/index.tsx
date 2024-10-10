import SignSubmit from "@/components/SignSubmit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/front/sign/")({
    component: () => (
        <main>
            <SignSubmit />
        </main>
    ),
});
