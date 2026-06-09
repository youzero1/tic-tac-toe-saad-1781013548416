type ScoreBoardProps = {
  scores: { X: number; O: number; draws: number };
};

export default function ScoreBoard({ scores }: ScoreBoardProps) {
  return (
    <div className="flex gap-3 w-full max-w-xs mx-auto">
      <div className="flex-1 flex flex-col items-center bg-indigo-900/50 rounded-2xl py-3 px-2 border border-indigo-700/40">
        <span className="text-indigo-400 font-black text-xl">X</span>
        <span className="text-white font-bold text-2xl">{scores.X}</span>
        <span className="text-indigo-300/60 text-xs uppercase tracking-widest mt-1">Wins</span>
      </div>
      <div className="flex-1 flex flex-col items-center bg-indigo-900/30 rounded-2xl py-3 px-2 border border-indigo-700/20">
        <span className="text-indigo-300/70 font-black text-xl">=</span>
        <span className="text-white font-bold text-2xl">{scores.draws}</span>
        <span className="text-indigo-300/60 text-xs uppercase tracking-widest mt-1">Draws</span>
      </div>
      <div className="flex-1 flex flex-col items-center bg-pink-900/50 rounded-2xl py-3 px-2 border border-pink-700/40">
        <span className="text-pink-400 font-black text-xl">O</span>
        <span className="text-white font-bold text-2xl">{scores.O}</span>
        <span className="text-pink-300/60 text-xs uppercase tracking-widest mt-1">Wins</span>
      </div>
    </div>
  );
}
