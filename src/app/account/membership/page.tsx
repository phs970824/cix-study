import AccountCon, { AccountConData } from '@/app/components/account/AccountCon';
import AccountLeft from '@/app/components/account/AccountLeft';
import HeaderAccount from '@/components/layouts/HeaderAccount';
import Link from 'next/link';

const MembershipPage = () => {
    const con1Data: AccountConData = {
        title: '멤버십 상세 정보',
        list: [
            {
                type: 'text',
                label: '프리미엄 멤버십',
                desc1: '1명의 추가 회원 등록',
                desc2: '4K 영상 해상도, 공간 음향, 광고 없이 시청 등.',
            },
            {
                type: 'button',
                label: '멤버십 변경',
            },
            {
                type: 'button',
                label: '추가 회원 관리',
                tag: {
                    type: 'image',
                    img: '/images/user2.png',
                },
            },
        ],
    };
    const con2Data: AccountConData = {
        title: '결제 정보',
        list: [
            {
                type: 'text',
                label: '다음 결제일',
                desc1: '2025년 12월 7일',
                desc2: '•••• •••• •••• 2795',
            },
            {
                type: 'button',
                label: '결제 수단 관리',
            },
            {
                type: 'button',
                label: '기프트 또는 프로모션 코드 사용',
            },
            {
                type: 'button',
                label: '결제 내역 확인',
            },
        ],
    };
    return (
        <>
            <HeaderAccount />
            <main className="acc-main membership">
                <div className="acc-main-inner">
                    <AccountLeft selected="멤버십" />

                    <div className="acc-right">
                        <h2 className="acc-head">멤버십</h2>
                        <AccountCon data={con1Data} />
                        <AccountCon data={con2Data} />
                        <Link href="/" className="link-clear">
                            멤버십 해지
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MembershipPage;
