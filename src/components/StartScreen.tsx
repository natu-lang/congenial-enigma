
interface Props {
    onStart: () => void;
}

export const StartScreen: React.FC<Props> = ({ onStart }) => {
    return (
        <div className="w-full text-center space-y-10 py-8">
            <div className="space-y-4">
                <p className="text-sm font-medium text-primary tracking-widest uppercase">あなたの会社は大丈夫？</p>
                <h1 className="text-3xl font-bold leading-relaxed font-title text-gray-800">
                    あなたの会社の<br />
                    <span className="text-4xl text-primary inline-block mt-2 font-black tracking-wider">JTC度</span><br />
                    診断
                </h1>
            </div>

            <div className="bg-[#f0f5f4] rounded-xl p-5 text-gray-600 text-sm leading-loose">
                紙、ハンコ、謎の暗黙ルール...<br />
                あなたの会社はどれくらい「伝統的」？<br />
                15問の簡単な質問から、<br />客観的なJTC度を算出します。
            </div>

            <button
                onClick={onStart}
                className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-full btn-soft text-lg shadow-md"
            >
                診断をはじめる
            </button>
        </div>
    );
};
