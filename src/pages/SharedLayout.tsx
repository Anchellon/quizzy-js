import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import FixedNavbar from "../components/FixedNavbar";

export default function SharedLayout() {
  return (
    <>
      <FixedNavbar />
      <div className="px-5 py-4">
        <Outlet />
      </div>
    </>
  );
}
