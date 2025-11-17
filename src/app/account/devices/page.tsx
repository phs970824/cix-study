import AccountCon, { AccountConData } from '@/app/components/account/AccountCon';
import AccountLeft from '@/app/components/account/AccountLeft';
import HeaderAccount from '@/components/layouts/HeaderAccount';

const DevicesPage = () => {
    const con1Data: AccountConData = {
        title: '계정 액세스',
        list: [
            {
                type: 'button',
                label: '액세스 및 디바이스',
                desc1: '로그인된 디바이스 관리',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="TvMobileMedium"
                        data-icon-id=":r367:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M0 3.73C0 2.77.77 2 1.73 2h18.54c.96 0 1.73.77 1.73 1.73V7h-2V4H2v10h11v2H1.73C.77 16 0 15.23 0 14.27zM13 17.3a73 73 0 0 0-8.07.12l.14 2A70 70 0 0 1 13 19.3zm9-6.3h-5v9h5zm-5-2a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm2.5 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
        ],
    };
    const con2Data: AccountConData = {
        title: '모바일 저장',
        list: [
            {
                type: 'button',
                label: '모바일 저장 디바이스',
                desc1: '저장 가능 디바이스 총 6개 중 1개 사용 중',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="DownloadMedium"
                        data-icon-id=":r369:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M13 3v10.59l2.3-2.3 1.4 1.42-4 4a1 1 0 0 1-1.4 0l-4-4 1.4-1.42 2.3 2.3V3zM1.12 21.64a92 92 0 0 1 21.76 0l.24-1.99a94 94 0 0 0-22.24 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                ),
            },
        ],
    };
    return (
        <>
            <HeaderAccount />
            <main className="acc-main">
                <div className="acc-main-inner">
                    <AccountLeft selected="디바이스" />

                    <div className="acc-right">
                        <h2 className="acc-head">디바이스</h2>
                        <AccountCon data={con1Data} />
                        <AccountCon data={con2Data} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default DevicesPage;
