import React from 'react';
import { Spin } from 'antd';

interface LoadingProps {
    loading?: boolean;
    title?: string;
    className?: string;
}

const Loading: React.FC<LoadingProps> = ({ loading = true, title = '' }) => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-[999999]">
            <Spin spinning={loading} tip={title || '載入中...'}>  </Spin>
        </div >
    );
};

export const LoadingAbsolute: React.FC<LoadingProps> = ({ loading = true, title = '', className = '' }) => {
    return (
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white z-[999999] ${className}`}>
            <Spin spinning={loading} tip={title || ''}>  </Spin>
        </div >
    );
};


export default Loading;
