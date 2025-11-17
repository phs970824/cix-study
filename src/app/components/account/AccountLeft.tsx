import Link from 'next/link';

const AccountLeft = ({ selected }: { selected: string }) => {
    const navList = [
        {
            label: '넷플릭스로 돌아가기',
            href: '/',
            svg: (
                <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    data-icon="ArrowLeftSmall"
                    data-icon-id=":R26laj9lalal6:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M4.81 8.75H14v-1.5H4.8l2.72-2.72-1.06-1.06-4 4a.75.75 0 0 0 0 1.06l4 4 1.06-1.06z"
                        clipRule="evenodd"></path>
                </svg>
            ),
        },
        {
            label: '개요',
            href: '/account/',
            svg: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="HomeMedium"
                    data-icon-id=":rvo:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.49 2.14a1 1 0 0 1 1.02 0l10 6c.3.18.49.5.49.86v12a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 .49-.86zM3 9.57V20h5v-6h8v6h5V9.57l-9-5.4z"
                        clipRule="evenodd"></path>
                </svg>
            ),
            svg2: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="HomeFillMedium"
                    data-icon-id=":r13j:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12.51 2.14a1 1 0 0 0-1.02 0l-10 6A1 1 0 0 0 1 9v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h6v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-.49-.86z"
                        clipRule="evenodd"></path>
                </svg>
            ),
        },
        {
            label: '멤버십',
            href: '/account/membership',
            svg: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="CreditCardMedium"
                    data-icon-id=":r109:"
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
            svg2: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="CreditCardFillMedium"
                    data-icon-id=":r132:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3 3a3 3 0 0 0-3 3v2h24V6a3 3 0 0 0-3-3zM0 18v-8h24v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3m16-2h4v-2h-4z"
                        clipRule="evenodd"></path>
                </svg>
            ),
        },
        {
            label: '보안',
            href: '/account/security',
            svg: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="ShieldCheckmarkMedium"
                    data-icon-id=":ru7:"
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
            svg2: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="ShieldCheckmarkFillMedium"
                    data-icon-id=":r156:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.6 1.09a1 1 0 0 1 .8 0l10 4.44a1 1 0 0 1 .6.95c-.11 2.78-.36 6.3-1.8 9.41-1.47 3.18-4.15 5.9-8.96 7.08a1 1 0 0 1-.48 0c-4.8-1.19-7.5-3.9-8.96-7.08C1.36 12.78 1.11 9.26 1 6.5a1 1 0 0 1 .6-.96zm.1 14.62 6-6-1.4-1.42-5.3 5.3-2.3-2.3-1.4 1.42 3 3 .7.7z"
                        clipRule="evenodd"></path>
                </svg>
            ),
        },
        {
            label: '디바이스',
            href: '/account/devices',
            svg: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="TvMobileMedium"
                    data-icon-id=":r11q:"
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
            svg2: (
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="TvMobileFillMedium"
                    data-icon-id=":r184:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M0 3.73C0 2.77.77 2 1.73 2h18.54c.96 0 1.73.77 1.73 1.73V7h-5a4 4 0 0 0-4 4v5H1.73C.77 16 0 15.23 0 14.27zM13 19.3v-2a73 73 0 0 0-8.07.12l.14 2A70 70 0 0 1 13 19.3m2-8.3c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm5.25 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
                        clipRule="evenodd"></path>
                </svg>
            ),
        },
    ];
    return (
        <>
            <nav className="acc-left">
                <ul className="acc-nav-list">
                    {navList.map((item) => {
                        return (
                            <li key={item.label}>
                                <Link href={item.href}>
                                    {selected === item.label ? item.svg2 : item.svg}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default AccountLeft;
