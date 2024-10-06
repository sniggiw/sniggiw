import { Card, Pagination } from "antd";
import ActivityItem from "./ActivityItem";

export default function Activities() {
    return (
        <main>
            <Card>
                <div className="grid grid-flow-row gap-4">
                    {[...Array(10)].map((_, i) => {
                        return <ActivityItem key={i} />;
                    })}
                </div>
            </Card>

            <div className="bg-white rounded-lg mt-3 py-3">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </main>
    );
}
