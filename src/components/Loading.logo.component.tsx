import React from 'react';
import Image from 'next/image';
import styles from './Loading.module.css'; // We'll create this CSS module next

const Loading: React.FC = () => {
    return (
        <div className={styles.loadingContainer}>
            <Image
                src="/Vector-logo.svg"
                alt="Loading..."
                width={200}
                height={200}
                className={`${styles.loadingLogo} animate-bounce`}
            />
        </div>
    );
};

export default Loading;
