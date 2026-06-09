import type { Board as BoardType } from '@/types';
import Cell from '@/components/Cell';

type BoardProps = {
  board: BoardType;
  winningLine: number[] | null;
  isDisabled: boolean;
  onCellClick: (index: number) => void;
};

export default function Board({ board, winningLine, isDisabled, onCellClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-xs mx-auto">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          index={index}
          isWinning={winningLine ? winningLine.includes(index) : false}
          isDisabled={isDisabled}
          onClick={onCellClick}
        />
      ))}
    </div>
  );
}
