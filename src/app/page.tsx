import { Suspense } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ContentStyleWrapper from "./components/ContentStyleWrap";
import DetailModalWrap from "./components/detailModal/DetailModalWrap";
import MainWrap from "./components/MianWrap";
import SimpleModal from "./components/SimpleModal";

export default function Home() {
    return (
        <>
            <ContentStyleWrapper>
                <Header />
                <MainWrap />
                <Footer />
            </ContentStyleWrapper>
            <SimpleModal />
            <Suspense fallback={<div>DetailModal 로딩 중...</div>}>
                <DetailModalWrap />
            </Suspense>
        </>
    );
}
