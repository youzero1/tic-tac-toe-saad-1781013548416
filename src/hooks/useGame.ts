import { useState, useCallback } from 'react';
import type { GameState, Player } from '@/types';
import { checkWinner, checkDraw, createEmptyBoard } from '@/lib/gameLogic';

const initialState: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
  winningLine: null,
  scores: { X: 0, O: 0, draws: 0 },
};

export function useGame(): {
  state: GameState;
  makeMove: (index: number) => void;
  resetGame: () => void;
  resetScores: () => void;
} {
  const [state, setState] = useState<GameState>(initialState);

  const makeMove = useCallback((index: number) => {
    setState((prev) => {
      if (prev.status !== 'playing' || prev.board[index] !== null) {
        return prev;
      }

      const newBoard = [...prev.board];
      newBoard[index] = prev.currentPlayer;

      const { winner, line } = checkWinner(newBoard);

      if (winner) {
        return {
          ...prev,
          board: newBoard,
          status: 'won',
          winner,
          winningLine: line,
          scores: {
            ...prev.scores,
            [winner]: prev.scores[winner] + 1,
          },
        };
      }

      if (checkDraw(newBoard)) {
        return {
          ...prev,
          board: newBoard,
          status: 'draw',
          winner: null,
          winningLine: null,
          scores: {
            ...prev.scores,
            draws: prev.scores.draws + 1,
          },
        };
      }

      const nextPlayer: Player = prev.currentPlayer === 'X' ? 'O' : 'X';
      return {
        ...prev,
        board: newBoard,
        currentPlayer: nextPlayer,
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setState((prev) => ({
      ...prev,
      board: createEmptyBoard(),
      currentPlayer: 'X',
      status: 'playing',
      winner: null,
      winningLine: null,
    }));
  }, []);

  const resetScores = useCallback(() => {
    setState({
      ...initialState,
      board: createEmptyBoard(),
    });
  }, []);

  return { state, makeMove, resetGame, resetScores };
}
