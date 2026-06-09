import { RotateCcw, Trophy } from 'lucide-react';
import { useGame } from '@/hooks/useGame';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import StatusBar from '@/components/StatusBar';

export default function Game() {
  const { state, makeMove, resetGame, resetScores } = useGame();
  const { board, currentPlayer, status, winner, winningLine, scores } = state;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" size={28} />
            <h1 className="text-4xl font-black text-white tracking-tight">Tic-Tac-Toe</h1>
          </div>
          <p className="text-indigo-300/60 text-sm">Classic two-player game</p>
        </div>

        {/* Score Board */}
        <ScoreBoard scores={scores} />

        {/* Status Bar */}
        <StatusBar status={status} currentPlayer={currentPlayer} winner={winner} />

        {/* Board */}
        <Board
          board={board}
          winningLine={winningLine}
          isDisabled={status !== 'playing'}
          onCellClick={makeMove}
        />

        {/* Buttons */}
        <div className="flex gap-3 w-full max-w-xs">
          <button
            onClick={resetGame}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors duration-200 text-sm"
          >
            <RotateCcw size={16} />
            New Game
          </button>
          <button
            onClick={resetScores}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-900/60 hover:bg-indigo-800/70 text-indigo-300 font-semibold border border-indigo-700/40 transition-colors duration-200 text-sm"
          >
            Reset Scores
          </button>
        </div>
      </div>
    </div>
  );
}
