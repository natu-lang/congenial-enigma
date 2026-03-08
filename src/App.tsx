import { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { questions } from './data/questions';

type ScreenType = 'start' | 'question' | 'loading' | 'result';

function App() {
  const [screen, setScreen] = useState<ScreenType>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setScreen('question');
  };

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finished all questions
      setScreen('loading');
    }
  };

  const handleRestart = () => {
    setScreen('start');
  };

  // Handle loading screen timeout
  useEffect(() => {
    if (screen === 'loading') {
      const timer = setTimeout(() => {
        setScreen('result');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="bg-shape w-96 h-96 top-[-100px] left-[-100px]"></div>
      <div
        className="bg-shape w-[500px] h-[500px] bottom-[-200px] right-[-100px]"
        style={{ background: 'rgba(230, 220, 200, 0.5)' }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md h-[800px] max-h-[90vh] soft-card flex flex-col">
        {/* Header */}
        <header className="py-4 px-6 flex justify-between items-center bg-white border-b border-gray-100 shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary opacity-80 flex items-center justify-center">
              <span className="text-white text-xs font-bold leading-none">?</span>
            </div>
            <span className="text-sm font-bold text-gray-700 tracking-wide">JTC度診断</span>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-grow overflow-y-auto p-6 flex flex-col items-center justify-center relative bg-white">
          {screen === 'start' && <StartScreen onStart={handleStart} />}

          {screen === 'question' && (
            <QuestionScreen
              question={questions[currentQuestionIndex]}
              questionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}

          {screen === 'loading' && <LoadingScreen />}

          {screen === 'result' && (
            <ResultScreen
              score={score}
              maxScore={questions.length}
              onRestart={handleRestart}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="h-10 bg-white flex items-center justify-center text-[10px] text-gray-400 shrink-0 border-t border-gray-100">
          © 2026 JTC Degree Diagnosis
        </footer>
      </div>
    </div>
  );
}

export default App;
