import React from "react";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return (
        <div className="font-mono flex flex-col items-center justify-center h-[75dvh]">
            <h1 className="title-medium mt-4">404 | Page Not Found</h1>
            <p className="text-p-medium mt-2 text-drd-neutral-600 max-w-lg text-center">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>
            <div className="mt-6">
                <Button btnType="primary" outline href="/">
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
