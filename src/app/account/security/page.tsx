import AccountCon, { AccountConData } from '@/app/components/account/AccountCon';
import AccountLeft from '@/app/components/account/AccountLeft';
import HeaderAccount from '@/components/layouts/HeaderAccount';
import Link from 'next/link';

const SecurityPage = () => {
    const con1Data: AccountConData = {
        title: '계정 정보',
        list: [
            {
                type: 'button',
                label: '비밀번호',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="LockMedium"
                        data-icon-id=":r35g:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M7 6a5 5 0 0 1 10 0v1h2a2 2 0 0 1 2 2v9.65c0 .98-.71 1.84-1.72 1.96-1.25.15-3.79.39-7.28.39s-6.03-.24-7.28-.4c-1-.11-1.72-.97-1.72-1.95V9c0-1.1.9-2 2-2h2zm8 0v1H9V6a3 3 0 1 1 6 0M5 9v9.63c1.2.14 3.64.37 7 .37s5.8-.23 7-.37V9zm6 3v4h2v-4z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '이메일',
                desc1: 'heesoon.park@concentrix.com',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="EnvelopeMedium"
                        data-icon-id=":r35i:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M2 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 3.22V19h20V6.22q-.1.14-.24.26L20.4 5H3.6l8.4 7.65L20.41 5l1.35 1.48-9.09 8.26-.67.61-.67-.61-9.09-8.26z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '휴대폰',
                desc1: '010-0000-0000',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="PhoneMedium"
                        data-icon-id=":r35l:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6 0a2 2 0 0 0-2 2v20c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 2h12v20H6zm7.5 16.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
        ],
    };
    const con2Data: AccountConData = {
        title: '액세스 및 개인정보',
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
                        data-icon-id=":r35n:"
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
            {
                type: 'button',
                label: '프로필 이전',
                desc1: '켜짐',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="ProfileArrowMedium"
                        data-icon-id=":r35p:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6 1a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h3.59l-1.3 1.3 1.42 1.4 3-3a1 1 0 0 0 0-1.4l-3-3-1.42 1.4L9.6 19H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v2h3a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.6 3.7a5 5 0 0 1-2.9.8 5 5 0 0 1-2.9-.8l-1.2 1.6a7 7 0 0 0 4.1 1.2c1.58 0 3.07-.43 4.1-1.2z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
                tag: {
                    type: 'text',
                    text: '신규',
                },
            },
            {
                type: 'button',
                label: '개인 정보 액세스',
                desc1: '개인 정보 사본 요청',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="ShieldCheckmarkMedium"
                        data-icon-id=":r35r:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M12.4 1.09a1 1 0 0 0-.8 0l-10 4.44a1 1 0 0 0-.6.95c.11 2.78.36 6.3 1.8 9.41 1.47 3.18 4.15 5.9 8.96 7.08a1 1 0 0 0 .48 0c4.8-1.19 7.5-3.9 8.96-7.08 1.44-3.11 1.69-6.63 1.8-9.4a1 1 0 0 0-.6-.96zM4.63 15.05c-1.16-2.5-1.46-5.37-1.6-7.97L12 3.1l8.97 4c-.13 2.6-.43 5.46-1.59 7.96-1.2 2.6-3.34 4.86-7.38 5.92-4.04-1.06-6.18-3.31-7.38-5.92m7.09.66 6-6-1.42-1.42L11 13.6l-2.3-2.3-1.4 1.42 3 3 .7.7z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '기능 테스트',
                desc1: '켜짐',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="LabFlaskMedium"
                        data-icon-id=":r35t:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="m10 12.19-.38.52L7.97 15h8.06l-1.65-2.29-.38-.52V10h-2V8h2V6h-2V4h2V2h-4zM17.48 17H6.52l-2.46 3.41a1 1 0 0 0 .8 1.59h14.27a1 1 0 0 0 .81-1.59zM16 11.54V2h1V0H7v2h1v9.54l-5.56 7.7A3 3 0 0 0 4.87 24h14.26a3 3 0 0 0 2.43-4.76z"
                            clipRule="evenodd"></path>
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
                    <AccountLeft selected="보안" />

                    <div className="acc-right">
                        <h2 className="acc-head">보안</h2>
                        <AccountCon data={con1Data} />
                        <AccountCon data={con2Data} />
                        <Link href="/" className="link-clear">
                            계정 삭제
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SecurityPage;
