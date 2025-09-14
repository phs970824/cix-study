"use client";

import { useContentWrapStore } from "@/store/detailModalStore";
import { useRouter } from "next/navigation";

const OpenDetailModal = ({
    id,
    children,
}: {
    id: number;
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const { setFixed } = useContentWrapStore();

    const handleOpenDetailModal = () => {
        setFixed();

        router.push(`/?id=${id}`);
    };

    return <div onClick={handleOpenDetailModal}>{children}</div>;
};

const CloseDetailModal = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const { setReset } = useContentWrapStore();

    const handleCloseDetailModal = () => {
        router.push("/");
        setReset();
    };

    return (
        <div className={className} onClick={handleCloseDetailModal}>
            {children}
        </div>
    );
};

export { OpenDetailModal, CloseDetailModal };
