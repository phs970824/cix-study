'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import ProfileDetail from './ProfileDetail';

const HeaderProfile = () => {
    const [isProfile, setIsProfile] = useState(false);

    return (
        <div className="pf-wrap" onMouseEnter={() => setIsProfile(true)} onMouseLeave={() => setIsProfile(false)}>
            <button type="button" className="profile" aria-label="계정&설정">
                <Image src="/images/user.png" alt="" width={32} height={32} />
                <span className="caret"></span>
            </button>
            <AnimatePresence>{isProfile && <ProfileDetail />}</AnimatePresence>
        </div>
    );
};

export default HeaderProfile;
