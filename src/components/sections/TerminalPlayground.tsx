"use client";

import { useState, useRef, useEffect } from 'react';

interface CommandOutput {
  id: string;
  command: string;
  output: string | React.ReactNode;
}

export default function TerminalPlayground() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: '',
      output: 'saurabh.dev playground v1.0.0'
    },
    {
      id: 'init-2',
      command: '',
      output: "type 'help' to see available commands."
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    let output: string | React.ReactNode = '';

    if (cmd === 'help') {
      output = 'Available commands: help, about, projects, stack, contact, joke, clear';
    } else if (cmd === 'about') {
      output = 'I design production-grade systems that are observable, reliable, and ship fast. Currently SDE at Zeotap.';
    } else if (cmd === 'projects') {
      output = 'IMO — AI Shopping Assistant, DocuQuery — AI chat-to-PDF, Integr8 — AI Integration Agent.';
    } else if (cmd === 'stack') {
      output = 'Python, Java, TypeScript, FastAPI, Django, React, AWS, Docker, Kubernetes...';
    } else if (cmd === 'contact') {
      output = 'Email: sv176734@gmail.com | LinkedIn: sv176734 | GitHub: Saurabh13042004';
    } else if (cmd === 'joke') {
      const jokes = [
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
        "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
        "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem."
      ];
      output = jokes[Math.floor(Math.random() * jokes.length)];
    } else if (cmd === 'clear') {
      setHistory([]);
      return;
    } else if (cmd === '') {
      output = '';
    } else {
      output = `command not found: ${cmd}. type 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { id: Date.now().toString(), command: cmdStr, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="playground" className="relative py-28 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-mono text-blue-400 text-sm">05.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">playground</h2>
          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>
        
        <p className="mt-6 max-w-2xl text-neutral-400">
          A live terminal that knows me well. Try <span className="font-mono text-blue-300">help</span>, <span className="font-mono text-blue-300">projects</span>, or <span className="font-mono text-blue-300">joke</span>.
        </p>

        <div className="mt-10 rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 border-b border-neutral-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-terminal"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
              <span className="font-mono text-[11px]">saurabh@portfolio:~</span>
            </div>
            <span className="font-mono text-[11px] text-neutral-600">zsh</span>
          </div>

          <div 
            ref={scrollRef}
            onClick={focusInput}
            className="p-5 font-mono text-sm leading-relaxed h-[420px] overflow-y-auto scrollbar-hide cursor-text"
          >
            {history.map((item) => (
              <div key={item.id} className="mb-2">
                {item.command && (
                  <div className="flex gap-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-neutral-200">{item.command}</span>
                  </div>
                )}
                {item.output && <div className="text-neutral-400 mt-1 mb-4 whitespace-pre-wrap">{item.output}</div>}
              </div>
            ))}
            
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <div className="flex-1 flex items-center gap-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none text-neutral-200 focus:outline-none placeholder:text-neutral-700 caret-transparent w-full"
                  spellCheck="false"
                  autoComplete="off"
                  placeholder="type a command…"
                />
                <span className="cursor-blink text-blue-400 -ml-[calc(100%-1ch)] pointer-events-none">▍</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {['help', 'about', 'projects', 'stack', 'contact', 'joke'].map(cmd => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-blue-400/40 hover:text-blue-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
