import clsx from 'clsx';
import type { Cell as CellType } from '@/types';

type CellProps = {
  value: CellType;
  index: number;
  isWinning: boolean;
  isDisabled: boolean;
  onClick: (index: number) => void;
};

export default function Cell({ value, index, isWinning, isDisabled, onClick }: CellProps) {
  const handleClick = () => {
    if (!isDisabled && value === null) {
      onClick(index);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'flex items-center justify-center rounded-2xl text-5xl font-black transition-all duration-200 select-none',
        'w-full aspect-square',
        isWinning
          ? 'bg-indigo-400/30 scale-105 shadow-lg shadow-indigo-500/40'
          : 'bg-indigo-900/60',
        !value && !isDisabled
          ? 'hover:bg-indigo-700/70 hover:scale-105 cursor-pointer'
          : 'cursor-default',
        value === 'X' ? 'text-indigo-400' : 'text-pink-400'
      )}
      aria-label={value ? `Cell ${index + 1}: ${value}` : `Cell ${index + 1}: empty`}
    >
      {value && (
        <span
          className={clsx(
            'transition-all duration-200',
            isWinning ? 'drop-shadow-lg scale-110' : ''
          )}
        >
          {value}
        </span>
      )}
    </button>
  );
}
