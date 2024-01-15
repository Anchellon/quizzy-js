import React from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Button } from "react-bootstrap";

const defaultData = [
    {
        question: "Whats your name ?",
        options: [],
    },
    {
        question: "How are you?",
        options: [],
    },
];

const columnHelper = createColumnHelper();
const columns = [
    columnHelper.accessor("qnText", {
        cell: (info) => info.getValue(),
        header: () => "Question",
    }),
    columnHelper.accessor("_id", {
        id: "_id",
        cell: (info) => (
            <Button
                onClick={() => {
                    // populate a modal with the qns
                }}
            >
                Edit
            </Button>
        ),
        header: () => "",
    }),
    columnHelper.display({
        id: "Delete",
        // cell: (props) => <Button variant="danger">Delete</Button>,
        cell: () => <Button variant="danger">Delete</Button>,
    }),
];

export default function QuestionsTable({ questions }) {
    const [data] = React.useState(() => [...questions]); // data comes from the corresponding quiz
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="my-5 p-2 border">
            <table className="table table-striped table-hover">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="col-11">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="h-4" />
        </div>
    );
}
