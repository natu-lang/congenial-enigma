import { results } from '../data/results';

interface Props {
    score: number;
    maxScore: number;
    onRestart: () => void;
}

export const ResultScreen: React.FC<Props> = ({ score, maxScore, onRestart }) => {
    const percentage = Math.round((score / maxScore) * 100);

    // Find the appropriate result pattern
    const resultData = results.find(
        (r) => percentage >= r.minScore && percentage <= r.maxScore
    ) || results[0]; // Fallback to the first one just in case

    const shareText = `私の会社のJTC度は【${percentage}%：${resultData.title}】でした\n\nあなたの会社はどれくらい「伝統的」？\n#JTC度診断 #脱JTC`;
    const shareUrl = "https://example.com"; // TODO: Replace with actual URL when deployed

    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

    return (
        <div className="w-full space-y-8 py-6">
            <div className="text-center space-y-4">
                <p className="text-xs font-bold text-gray-400 tracking-widest">診断結果</p>

                <div className="inline-block relative">
                    <div className="text-[5rem] font-bold text-gray-800 leading-none font-title">
                        {percentage}<span className="text-2xl text-gray-500 font-normal ml-1">%</span>
                    </div>
                </div>

                <h3 className="font-bold text-2xl text-primary font-title mt-2">
                    {resultData.title}
                </h3>
            </div>

            <div className="bg-[#fcfafd] rounded-2xl p-6 border border-[#f0ebf5] text-gray-600 text-sm leading-loose shadow-sm">
                {resultData.description}
            </div>

            <div className="space-y-3 pt-2">
                <a
                    href={twitterIntentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-medium py-3.5 rounded-xl btn-soft flex items-center justify-center space-x-2 shadow-sm"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span>結果をXでシェア</span>
                </a>
                <button
                    onClick={onRestart}
                    className="w-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium py-3.5 rounded-xl btn-soft shadow-sm"
                >
                    最初からやり直す
                </button>
            </div>

            {/* Affiliate Banner Placeholder */}
            <a href="#" className="block mt-6 border border-primary bg-[#f2f9f7] rounded-xl p-5 text-center cursor-pointer hover:bg-[#e6f4f1] transition group no-underline">
                <div className="text-xs font-bold text-primary mb-2 opacity-80">PR</div>
                <p className="font-bold text-gray-800 text-sm mb-1">新しい環境を探してみませんか？</p>
                <p className="text-xs text-gray-600 mb-3">若手向けのモダンな働き方ができる企業多数</p>
                <span className="inline-block bg-primary text-white text-xs font-bold py-1.5 px-4 rounded-full group-hover:scale-105 transition-transform">
                    おすすめの転職サイトを見る
                </span>
            </a>
        </div>
    );
};
