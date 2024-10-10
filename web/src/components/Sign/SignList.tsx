import React from "react";
import { Card, Table } from "antd";
import type { TableProps } from "antd";
import { Random } from "mockjs";

interface DataType {
    key: string;
    name: string;
    signTime: string;
    signNumInMonth: number;
    signNumTotal: number;
    emoji: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "签到的朋友",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "签到时间",
        dataIndex: "signTime",
        key: "signTime",
    },
    {
        title: "月签到签数",
        dataIndex: "signNumInMonth",
        key: "signNumInMonth",
    },
    {
        title: "总签到天数",
        dataIndex: "signNumTotal",
        key: "signNumTotal",
    },
    {
        title: "签到心情",
        dataIndex: "emoji",
        key: "emoji",
    },
];

const data: DataType[] = [
    {
        key: "1",
        name: Random.cname(),
        signTime: `${Random.date("2024-MM-dd")} ${Random.time("HH:mm:ss")}`,
        signNumInMonth: Random.integer(1, 30),
        signNumTotal: Random.integer(0, 1000),
        emoji: "😊",
    },
    {
        key: "2",
        name: Random.cname(),
        signTime: `${Random.date("2024-MM-dd")} ${Random.time("HH:mm:ss")}`,
        signNumInMonth: Random.integer(1, 30),
        signNumTotal: Random.integer(40, 500),
        emoji: "😊",
    },
    {
        key: "3",
        name: Random.cname(),
        signTime: `${Random.date("2024-MM-dd")} ${Random.time("HH:mm:ss")}`,
        signNumInMonth: Random.integer(1, 30),
        signNumTotal: Random.integer(0, 1000),
        emoji: "😊",
    },
];

const SignList: React.FC = () => (
    <Card title="日签列表" className="mt-3">
        <Table<DataType> columns={columns} dataSource={data} pagination={false} bordered scroll={{ x: 1000 }} />
    </Card>
);

export default SignList;
