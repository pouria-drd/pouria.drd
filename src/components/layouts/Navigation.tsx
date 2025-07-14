"use client";

import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { useLocale } from "next-intl";
import { Fragment, useState } from "react";

const Navigation = () => {
    const locale = useLocale();
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
                side={locale === "fa" ? "right" : "left"}
                onCloseSidebar={() => handleSidebarOpenStatus(false)}
            />
        </Fragment>
    );
};

export default Navigation;
