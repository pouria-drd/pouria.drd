"use client";

import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Fragment, useState } from "react";

const Navigation = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    function handleSidebarOpenStatus(isOpen: boolean) {
        setIsSidebarOpen(isOpen);
    }

    return (
        <Fragment>
            <Navbar onOpenSidebar={() => handleSidebarOpenStatus(true)} />

            <Sidebar
                fullWidth
                isOpen={isSidebarOpen}
                onCloseSidebar={() => handleSidebarOpenStatus(false)}
            />
        </Fragment>
    );
};

export default Navigation;
