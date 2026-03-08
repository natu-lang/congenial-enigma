
export const LoadingScreen: React.FC = () => {
    return (
        <div className="w-full flex-col flex items-center justify-center space-y-6 h-[400px]">
            <div className="w-12 h-12 border-4 border-[#eef2f1] border-t-primary rounded-full animate-spin"></div>
            <p className="font-medium text-gray-500 tracking-wider">分析中...</p>
        </div>
    );
};
