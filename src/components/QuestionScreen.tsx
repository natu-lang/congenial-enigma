import type { Question } from '../data/questions';

interface Props {
    question: Question;
    questionIndex: number;
    totalQuestions: number;
    onAnswer: (score: number) => void;
}

export const QuestionScreen: React.FC<Props> = ({
    question,
    questionIndex,
    totalQuestions,
    onAnswer,
}) => {
    const progressPercent = ((questionIndex) / totalQuestions) * 100;

    return (
        <div className="w-full space-y-8 flex flex-col h-full pt-4 pb-8">
            {/* Progress Bar */}
            <div className="w-full space-y-2">
                <div className="h-1.5 w-full bg-[#eef2f1] rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                <div className="text-center text-xs font-medium text-gray-400 tracking-widest">
                    質問 {String(questionIndex + 1).padStart(2, '0')}/{totalQuestions}
                </div>
            </div>

            {/* Question Text */}
            <div className="flex-grow flex items-center justify-center rounded-2xl p-6 min-h-[160px]">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center font-title whitespace-pre-line">
                    {question.text}
                </h2>
            </div>

            {/* Answer Buttons */}
            <div className="space-y-4 w-full mt-auto">
                <div className="flex space-x-4">
                    <button
                        onClick={() => onAnswer(1)}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white font-medium py-3.5 rounded-xl btn-soft text-sm md:text-base"
                    >
                        あてはまる
                    </button>
                    <button
                        onClick={() => onAnswer(0)}
                        className="flex-1 bg-white border-2 border-primary text-primary hover:bg-[#f0f5f4] font-medium py-3.5 rounded-xl btn-soft text-sm md:text-base"
                    >
                        あてはまらない
                    </button>
                </div>
                <button
                    onClick={() => onAnswer(0.5)}
                    className="w-full text-gray-400 hover:text-gray-600 font-medium py-2 text-sm transition"
                >
                    どちらともいえない
                </button>
            </div>
        </div>
    );
};
