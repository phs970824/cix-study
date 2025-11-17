import HeaderAccount from '@/components/layouts/HeaderAccount';
import AccountLeft from '../components/account/AccountLeft';
import AccountCon, { AccountConData } from '../components/account/AccountCon';

const AccountPage = () => {
    const con1Data: AccountConData = {
        title: '멤버십 정보',
        list: [
            {
                type: 'text',
                label: '프리미엄 멤버십',
                desc1: '1명의 추가 회원 등록',
                desc2: '다음 결제일: 2025년 12월 7일',
                membership: '2020년 9월',
            },
            {
                type: 'button',
                label: '멤버십 관리',
            },
        ],
    };
    const con2Data: AccountConData = {
        title: '빠른 링크',
        list: [
            {
                type: 'button',
                label: '멤버십 변경',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="MyPlanMedium"
                        data-icon-id=":r300:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M9 3H3v6h2V7c0-1.1.9-2 2-2h2zm-6 8h2v6c0 1.1.9 2 2 2h6v2c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2V7a2 2 0 0 0-2-2h-6V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2m12 10v-2h2a2 2 0 0 0 2-2v-2h2v6zm2-14H7v10h10zm-3.99 3.86L12 7.75l-1.01 3.1H7.72l2.65 1.93-1.02 3.11L12 13.97l2.64 1.92-1-3.1 2.64-1.93z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '결제 수단 관리',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="CreditCardMedium"
                        data-icon-id=":r302:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M0 6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2h20V6a1 1 0 0 0-1-1zM2 18v-8h20v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m14-2h4v-2h-4z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '추가 회원 관리',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="EnvelopeStarMedium"
                        data-icon-id=":r304:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M0 22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V9a1 1 0 0 0-.41-.8L13.18.61a2 2 0 0 0-2.36 0L.42 8.19A1 1 0 0 0 0 9zm2-1.96v-9.22l6.78 4.32zm2.09.96H19.9l-6.5-4.7-.87.54-.54.35-.54-.35-.86-.55zm11.13-5.86 6.78 4.9v-9.22zM12 14.8 2.78 8.94 12 2.24l9.22 6.7zm-1.5-5.46-.74 2.39a.1.1 0 0 0 .14.1l2.1-1.42 2.1 1.42a.1.1 0 0 0 .14-.1l-.74-2.4 1.8-1.32a.1.1 0 0 0-.05-.17q-1.12-.1-2.26-.13l-.9-2.47a.1.1 0 0 0-.18 0L11 7.72q-1.15.03-2.26.13a.1.1 0 0 0-.05.17z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '액세스 및 디바이스 관리',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="TvMobileMedium"
                        data-icon-id=":r306:"
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
                label: '비밀번호 업데이트',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="LockMedium"
                        data-icon-id=":r308:"
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
                label: '프로필 이전',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="ProfileArrowMedium"
                        data-icon-id=":r30a:"
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
            },
            {
                type: 'button',
                label: '자녀 보호 설정 조정',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="HexagonExclamationPointMedium"
                        data-icon-id=":r30c:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="m2.76 12 4.62 8h9.24l4.62-8-4.62-8H7.38zm-2.02-.5a1 1 0 0 0 0 1l5.2 9c.18.3.5.5.86.5h10.4a1 1 0 0 0 .86-.5l5.2-9a1 1 0 0 0 0-1l-5.2-9a1 1 0 0 0-.86-.5H6.8a1 1 0 0 0-.86.5zm12.76 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-8.5h-3l.5 6h2z"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
            {
                type: 'button',
                label: '설정 변경',
                desc1: '언어, 자막, 자동 재생, 알림, 개인정보 등',
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="SettingsMedium"
                        data-icon-id=":r30e:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.5 0a2 2 0 0 0-1.98 1.7L8.2 3.84a9 9 0 0 0-1.37.8l-2-.8a2 2 0 0 0-2.47.86L.86 7.3a2 2 0 0 0 .48 2.56l1.7 1.35a9 9 0 0 0 0 1.58l-1.7 1.35a2 2 0 0 0-.48 2.56l1.5 2.6a2 2 0 0 0 2.46.86l2.01-.8a9 9 0 0 0 1.37.8l.32 2.14A2 2 0 0 0 10.5 24h3a2 2 0 0 0 1.98-1.7l.32-2.14q.72-.33 1.37-.8l2 .8a2 2 0 0 0 2.47-.86l1.5-2.6a2 2 0 0 0-.48-2.56l-1.7-1.35a9 9 0 0 0 0-1.58l1.7-1.35a2 2 0 0 0 .48-2.56l-1.5-2.6a2 2 0 0 0-2.46-.86l-2.01.8q-.65-.47-1.37-.8l-.32-2.14A2 2 0 0 0 13.5 0zM7.19 6.92A7 7 0 0 1 10 5.29L10.5 2h3l.5 3.29a7 7 0 0 1 2.81 1.63l3.1-1.22 1.5 2.6-2.6 2.07a7 7 0 0 1 0 3.26l2.6 2.07-1.5 2.6-3.1-1.22A7 7 0 0 1 14 18.71L13.5 22h-3l-.5-3.29a7 7 0 0 1-2.81-1.63l-3.1 1.22-1.5-2.6 2.6-2.07a7 7 0 0 1 0-3.26L2.6 8.3l1.5-2.6zM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                            clipRule="evenodd"></path>
                    </svg>
                ),
            },
        ],
    };
    return (
        <>
            <HeaderAccount />
            <main className="acc-main account">
                <div className="acc-main-inner">
                    <AccountLeft selected="개요" />
                    <div className="acc-right">
                        <h2 className="acc-head">계정</h2>
                        <AccountCon data={con1Data} />
                        <AccountCon data={con2Data} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default AccountPage;
