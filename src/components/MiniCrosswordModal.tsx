import React, { useState, useEffect, useRef } from 'react';
import { X, Play, RotateCcw, CheckCircle2, HelpCircle, Trophy, Eye } from 'lucide-react';

interface MiniCrosswordModalProps {
  onClose: () => void;
}

const SOLUTION = [
  ['P', 'A', 'C', 'E', 'S'],
  ['A', 'L', 'O', 'N', 'E'],
  ['C', 'O', 'A', 'S', 'T'],
  ['E', 'N', 'S', 'U', 'E'],
  ['S', 'E', 'E', 'D', 'S']
];

const CLUES = {
  across: [
    { number: 1, text: 'Walks with measured steps', row: 0, col: 0, word: 'PACES' },
    { number: 2, text: 'Solitary, or without company', row: 1, col: 0, word: 'ALONE' },
    { number: 3, text: 'Shoreline by the ocean', row: 2, col: 0, word: 'COAST' },
    { number: 4, text: 'Happen as a result or follow', row: 3, col: 0, word: 'ENSUE' },
    { number: 5, text: 'Gardener’s springtime plantings', row: 4, col: 0, word: 'SEEDS' }
  ],
  down: [
    { number: 1, text: 'Walks back and forth anxiously', row: 0, col: 0, word: 'PACES' },
    { number: 2, text: 'All by oneself', row: 0, col: 1, word: 'ALONE' },
    { number: 3, text: 'Sail smoothly downhill', row: 0, col: 2, word: 'COAST' },
    { number: 4, text: 'Follow as a consequence', row: 0, col: 3, word: 'ENSUE' },
    { number: 5, text: 'Sunflower or pumpkin snacks', row: 0, col: 4, word: 'SEEDS' }
  ]
};

export const MiniCrosswordModal: React.FC<MiniCrosswordModalProps> = ({ onClose }) => {
  const [grid, setGrid] = useState<string[][]>(() =>
    Array(5)
      .fill(null)
      .map(() => Array(5).fill(''))
  );
  const [selectedRow, setSelectedRow] = useState<number>(0);
  const [selectedCol, setSelectedCol] = useState<number>(0);
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [checkErrors, setCheckErrors] = useState<boolean[][]>(() =>
    Array(5)
      .fill(null)
      .map(() => Array(5).fill(false))
  );

  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Timer effect
  useEffect(() => {
    if (!isTimerRunning || isSolved) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, isSolved]);

  // Check solve condition on every grid change
  useEffect(() => {
    let allFilled = true;
    let allCorrect = true;

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (!grid[r][c]) {
          allFilled = false;
        } else if (grid[r][c].toUpperCase() !== SOLUTION[r][c]) {
          allCorrect = false;
        }
      }
    }

    if (allFilled && allCorrect && !isSolved) {
      setIsSolved(true);
      setIsTimerRunning(false);
    }
  }, [grid, isSolved]);

  const handleCellClick = (r: number, c: number) => {
    if (selectedRow === r && selectedCol === c) {
      setDirection((prev) => (prev === 'across' ? 'down' : 'across'));
    } else {
      setSelectedRow(r);
      setSelectedCol(c);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isSolved) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      const newGrid = grid.map((row) => [...row]);
      if (newGrid[selectedRow][selectedCol]) {
        newGrid[selectedRow][selectedCol] = '';
      } else {
        // Move back
        if (direction === 'across' && selectedCol > 0) {
          setSelectedCol(selectedCol - 1);
          newGrid[selectedRow][selectedCol - 1] = '';
        } else if (direction === 'down' && selectedRow > 0) {
          setSelectedRow(selectedRow - 1);
          newGrid[selectedRow - 1][selectedCol] = '';
        }
      }
      setGrid(newGrid);
      return;
    }

    if (e.key === 'ArrowRight' && selectedCol < 4) {
      setSelectedCol(selectedCol + 1);
      return;
    }
    if (e.key === 'ArrowLeft' && selectedCol > 0) {
      setSelectedCol(selectedCol - 1);
      return;
    }
    if (e.key === 'ArrowDown' && selectedRow < 4) {
      setSelectedRow(selectedRow + 1);
      return;
    }
    if (e.key === 'ArrowUp' && selectedRow > 0) {
      setSelectedRow(selectedRow - 1);
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      setDirection((prev) => (prev === 'across' ? 'down' : 'across'));
      return;
    }

    if (/^[a-zA-Z]$/.test(e.key)) {
      const letter = e.key.toUpperCase();
      const newGrid = grid.map((row) => [...row]);
      newGrid[selectedRow][selectedCol] = letter;
      setGrid(newGrid);

      // Reset check error for this cell
      const newErrors = checkErrors.map((row) => [...row]);
      newErrors[selectedRow][selectedCol] = false;
      setCheckErrors(newErrors);

      // Advance to next cell
      if (direction === 'across') {
        if (selectedCol < 4) {
          setSelectedCol(selectedCol + 1);
        } else if (selectedRow < 4) {
          setSelectedRow(selectedRow + 1);
          setSelectedCol(0);
        }
      } else {
        if (selectedRow < 4) {
          setSelectedRow(selectedRow + 1);
        } else if (selectedCol < 4) {
          setSelectedRow(0);
          setSelectedCol(selectedCol + 1);
        }
      }
    }
  };

  const handleCheckGrid = () => {
    const newErrors = Array(5)
      .fill(null)
      .map(() => Array(5).fill(false));

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (grid[r][c] && grid[r][c].toUpperCase() !== SOLUTION[r][c]) {
          newErrors[r][c] = true;
        }
      }
    }
    setCheckErrors(newErrors);
  };

  const handleRevealAll = () => {
    setGrid(SOLUTION.map((row) => [...row]));
    setCheckErrors(
      Array(5)
        .fill(null)
        .map(() => Array(5).fill(false))
    );
  };

  const handleReset = () => {
    setGrid(
      Array(5)
        .fill(null)
        .map(() => Array(5).fill(''))
    );
    setSelectedRow(0);
    setSelectedCol(0);
    setSeconds(0);
    setIsSolved(false);
    setIsTimerRunning(true);
    setCheckErrors(
      Array(5)
        .fill(null)
        .map(() => Array(5).fill(false))
    );
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Find active clue
  const activeClue =
    direction === 'across'
      ? CLUES.across.find((c) => c.row === selectedRow)
      : CLUES.down.find((c) => c.col === selectedCol);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="bg-white text-[#121212] w-full max-w-[680px] rounded-sm shadow-2xl overflow-hidden border border-gray-300 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="border-b border-gray-200 px-5 py-3 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xs uppercase tracking-wider text-red-700">
              The Mini Crossword
            </span>
            <span className="text-gray-300">|</span>
            <span className="font-mono text-xs font-semibold text-gray-700">
              {formatTime(seconds)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-xs text-gray-600 hover:text-black px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
              title={isTimerRunning ? 'Pause timer' : 'Resume timer'}
            >
              {isTimerRunning ? 'Pause' : 'Resume'}
            </button>
            <button
              onClick={handleReset}
              className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-black cursor-pointer"
              title="Reset puzzle"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clue Banner */}
        <div className="bg-[#f7f7f7] border-b border-gray-200 px-5 py-2.5 flex items-center justify-between text-xs font-sans">
          <div className="flex items-center space-x-2 truncate">
            <span className="font-bold uppercase tracking-wider text-black shrink-0">
              {activeClue?.number} {direction === 'across' ? 'Across' : 'Down'}:
            </span>
            <span className="font-serif text-sm text-gray-900 truncate">
              {activeClue?.text || 'Select a cell'}
            </span>
          </div>
          <button
            onClick={() => setDirection((d) => (d === 'across' ? 'down' : 'across'))}
            className="text-[10px] uppercase font-bold text-[#326891] hover:underline shrink-0 ml-2 cursor-pointer"
          >
            Switch to {direction === 'across' ? 'Down' : 'Across'}
          </button>
        </div>

        {/* Puzzle Area */}
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* 5x5 Crossword Grid */}
          <div className="md:col-span-7 flex flex-col items-center">
            <div
              ref={gridContainerRef}
              className="grid grid-cols-5 gap-1 bg-gray-900 p-1 rounded-xs shadow-inner select-none w-[270px] h-[270px] sm:w-[300px] sm:h-[300px]"
            >
              {grid.map((row, r) =>
                row.map((cellValue, c) => {
                  const isSelected = selectedRow === r && selectedCol === c;
                  const isHighlighted =
                    direction === 'across' ? selectedRow === r : selectedCol === c;
                  const hasError = checkErrors[r][c];

                  // Cell number (1-5 on top row and left col)
                  let cellNumber = null;
                  if (r === 0) cellNumber = c + 1;
                  else if (c === 0) cellNumber = r + 1;

                  return (
                    <div
                      key={`${r}-${c}`}
                      onClick={() => handleCellClick(r, c)}
                      className={`relative flex items-center justify-center font-bold text-lg sm:text-xl font-sans cursor-pointer transition-colors duration-100 ${
                        isSelected
                          ? 'bg-[#ffda00] text-black font-extrabold ring-2 ring-blue-600 z-10'
                          : isHighlighted
                          ? 'bg-[#d8ebff] text-black'
                          : 'bg-white hover:bg-gray-50 text-black'
                      } ${hasError ? 'bg-red-200 text-red-900' : ''}`}
                    >
                      {cellNumber && (
                        <span className="absolute top-0.5 left-1 text-[9px] font-sans font-normal text-gray-600 pointer-events-none">
                          {cellNumber}
                        </span>
                      )}
                      <span className="uppercase">{cellValue}</span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2 mt-4 text-xs font-sans">
              <button
                onClick={handleCheckGrid}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition cursor-pointer text-gray-700"
              >
                Check Grid
              </button>
              <button
                onClick={handleRevealAll}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition cursor-pointer text-gray-700"
              >
                Reveal All
              </button>
            </div>
          </div>

          {/* Clues List */}
          <div className="md:col-span-5 space-y-4 text-xs font-sans">
            <div>
              <h4 className="font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
                Across
              </h4>
              <ul className="space-y-1.5 font-serif text-sm">
                {CLUES.across.map((clue) => {
                  const isActive = direction === 'across' && selectedRow === clue.row;
                  return (
                    <li
                      key={clue.number}
                      onClick={() => {
                        setSelectedRow(clue.row);
                        setSelectedCol(0);
                        setDirection('across');
                      }}
                      className={`p-1.5 rounded cursor-pointer transition ${
                        isActive ? 'bg-[#d8ebff] font-bold text-gray-900' : 'hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      <span className="font-sans font-bold text-xs text-gray-600 mr-1.5">
                        {clue.number}
                      </span>
                      {clue.text}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
                Down
              </h4>
              <ul className="space-y-1.5 font-serif text-sm">
                {CLUES.down.map((clue) => {
                  const isActive = direction === 'down' && selectedCol === clue.col;
                  return (
                    <li
                      key={clue.number}
                      onClick={() => {
                        setSelectedRow(0);
                        setSelectedCol(clue.col);
                        setDirection('down');
                      }}
                      className={`p-1.5 rounded cursor-pointer transition ${
                        isActive ? 'bg-[#d8ebff] font-bold text-gray-900' : 'hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      <span className="font-sans font-bold text-xs text-gray-600 mr-1.5">
                        {clue.number}
                      </span>
                      {clue.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Victory Screen Modal */}
        {isSolved && (
          <div className="bg-emerald-50 border-t border-emerald-200 p-4 text-center space-y-2 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-center space-x-2 text-emerald-800">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="font-serif font-bold text-lg">Congratulations! You solved The Mini!</h3>
            </div>
            <p className="text-xs text-emerald-700 font-sans">
              Completed in <span className="font-bold font-mono">{formatTime(seconds)}</span>.
            </p>
            <div className="pt-2 flex justify-center space-x-3">
              <button
                onClick={handleReset}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-sans text-xs font-bold px-4 py-1.5 rounded transition cursor-pointer"
              >
                Play Again
              </button>
              <button
                onClick={onClose}
                className="border border-emerald-700 text-emerald-800 hover:bg-emerald-100 font-sans text-xs font-bold px-4 py-1.5 rounded transition cursor-pointer"
              >
                Back to Front Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
