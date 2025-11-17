'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProfileDetail = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="pf-detail">
                <ul className="pf-list">
                    <li>
                        <Link href="/">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                data-icon="PencilMedium"
                                data-icon-id=":r1h:"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                role="img">
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M19.12 1.7a3 3 0 0 0-4.24 0l-1.59 1.6-.7.7-11 11A2 2 0 0 0 1 16.41V21c0 1.1.9 2 2 2h4.59A2 2 0 0 0 9 22.41l11-11 .7-.7 1.6-1.59a3 3 0 0 0 0-4.24zM15.6 7 14 5.41l-11 11V19a2 2 0 0 1 2 2h2.59l11-11L17 8.41 6.7 18.71l-1.4-1.42zm.7-3.88a1 1 0 0 1 1.42 0l3.17 3.17a1 1 0 0 1 0 1.42l-.88.88L15.41 4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            프로필 관리
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                data-icon="ProfileArrowMedium"
                                data-icon-id=":r1m:"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                role="img">
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M6 1a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h3.59l-1.3 1.3 1.42 1.4 3-3a1 1 0 0 0 0-1.4l-3-3-1.42 1.4L9.6 19H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v2h3a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.6 3.7a5 5 0 0 1-2.9.8 5 5 0 0 1-2.9-.8l-1.2 1.6a7 7 0 0 0 4.1 1.2c1.58 0 3.07-.43 4.1-1.2z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            프로필 이전
                        </Link>
                    </li>
                    <li>
                        <Link href="/account">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                data-icon="UserMedium"
                                data-icon-id=":rf:"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                role="img">
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 0A5 5 0 1 1 7 5a5 5 0 0 1 10 0M4 21a8 8 0 1 1 16 0v.51q-.66.09-1.72.19a68 68 0 0 1-12.56 0q-1.06-.1-1.72-.2zm17.15 2.38-.15-1za1 1 0 0 0 .85-1V21a10 10 0 0 0-20 0v1.39c0 .5.36.91.85.99l.15-1-.15 1h.05l.14.03a41 41 0 0 0 2.5.28 70 70 0 0 0 12.93 0 62 62 0 0 0 2.49-.28l.14-.02z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            계정
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                data-icon="CircleQuestionMarkMedium"
                                data-icon-id=":rk:"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                role="img">
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 8c-1.32 0-2 .74-2 1.5H8C8 7.26 10 6 12 6s4 1.26 4 3.5c0 1.35-1.08 2.27-2.18 2.68q-.4.16-.63.41-.2.24-.19.41v1h-2v-1c0-1.44 1.17-2.34 2.12-2.7.73-.27.88-.65.88-.8 0-.76-.68-1.5-2-1.5m1.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                                    clip-rule="evenodd"></path>
                            </svg>
                            고객 센터
                        </Link>
                    </li>
                </ul>
                <button type="button" className="btn-logout">
                    넷플릭스에서 로그아웃
                </button>
            </div>
        </motion.div>
    );
};

export default ProfileDetail;
