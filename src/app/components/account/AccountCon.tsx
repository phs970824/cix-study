import Image from 'next/image';
import Link from 'next/link';

interface AccountListProps {
    type: 'text' | 'button';
    label: string;
    desc1?: string;
    desc2?: string;
    desc3?: string;
    membership?: string;
    icon?: React.ReactNode;
    tag?: {
        type: 'image' | 'text';
        img?: string;
        text?: string;
    };
}

export type AccountConData = {
    title: string;
    list: AccountListProps[];
};

const AccountCon = ({ data }: { data: AccountConData }) => {
    return (
        <>
            <h3>{data.title}</h3>
            <ul className="acc-con-list">
                {data.list.map((item) => (
                    <li key={item.label}>
                        {item.type === 'text' && (
                            <div className="con-inner con-text">
                                {item.membership && <strong className="membership">멤버십 시작 : {item.membership}</strong>}
                                <h4>{item.label}</h4>
                                {item.desc1 && <p>{item.desc1}</p>}
                                {item.desc2 && <p>{item.desc2}</p>}
                                {item.desc3 && <p>{item.desc3}</p>}
                            </div>
                        )}
                        {item.type === 'button' && (
                            <Link href="/account">
                                {item.icon && item.icon}
                                <div className="con-inner">
                                    <h4>{item.label}</h4>
                                    {item.desc1 && <p>{item.desc1}</p>}
                                </div>
                                {item.tag?.type === 'image' && item.tag.img && (
                                    <Image src={item.tag.img} alt={item.label} width={40} height={40} className="user-img" />
                                )}
                                {item.tag?.type === 'text' && item.tag.text && <p className="tag">{item.tag.text}</p>}
                                <svg
                                    viewBox="0 0 16 16"
                                    width="16"
                                    height="16"
                                    data-icon="ChevronRightSmall"
                                    data-icon-id=":r295:"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    role="img">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M10.44 8 4.97 2.53l1.06-1.06 6 6a.75.75 0 0 1 0 1.06l-6 6-1.06-1.06z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AccountCon;
