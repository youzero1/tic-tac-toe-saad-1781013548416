import clsx from 'clsx';
import type { GameStatus, Player } from '@/types';

type StatusBarProps = {
  status: GameStatus;
  currentPlayer: Player;
  winner: Player | null;
};

export default function StatusBar({ status, currentPlayer, winner }: StatusBarProps) {
  const getMessage = () => {
    if (status === 'won' && winner) {
      return (
        <span>
          Player{' '}
          <span className={clsx(winner === 'X' ? 'text-indigo-400' : 'text-pink-400', 'font-black')}>
            {winner}
          </span>{' '}
          wins! 🎉
        </span>
      );
    }
    if (status === 'draw') {
      return <span>It&apos;s a draw! 🤝</span>;
    }
    return (
      <span>
        Player{' '}
        <span className={clsx(currentPlayer === 'X' ? 'text-indigo-400' : 'text-pink-400', 'font-black')}>
          {currentPlayer}
        </span>&apos;s turn
      </span>
    );
  };

  return (
    <div
      className={clsx(
        'w-full max-w-xs mx-auto text-center py-3 px-4 rounded-2xl text-lg font-semibold text-white',
        status === 'won' ? 'bg-indigo-600/40 border border-indigo-500/50' : '',
        status === 'draw' ? 'bg-purple-600/30 border border-purple-500/40' : '',
        status === 'playing' ? 'bg-indigo-900/40 border border-indigo-700/30' : ''
      )}
    >
      {getMessage()}
    </div>
  );
}
