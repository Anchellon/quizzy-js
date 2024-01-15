import React from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const columnHelper = createColumnHelper();
const columns = [
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: () => "Quiz Name",
    }),

    // Pass the name of the field as first arg. access it info Object's getValue method
    columnHelper.accessor("_id", {
        id: "_id",
        cell: (info) => (
            <Link to={"/quiz/" + info.getValue()}>
                <Button>View/edit</Button>
            </Link>
        ),
        header: () => "",
    }),
    columnHelper.display({
        id: "Delete",
        // cell: (props) => <Button variant="danger">Delete</Button>,
        cell: () => <Button variant="danger">Delete</Button>,
    }),
];

export default function QuizzesTable({ quizzes }) {
    const [data] = React.useState(() => [...quizzes]);
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
            {/* <button onClick={() => rerender()} className="border p-2">
            Rerender
          </button> */}
        </div>
    );
}
