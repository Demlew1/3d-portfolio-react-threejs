import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HackerRoom = () => {
    const [text, setText] = useState("");
    const fullText = `const Developer = {
  name: "Demtse",
  skills: [
    "React", "Next.js",
    "Tailwind", "Three.js"
  ],
  status: "Building cool stuff...",
  passion: "Creating seamless UX"
};

console.log(Developer.status);`;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-lg rounded-xl overflow-hidden bg-[#1e1e1e] border border-gray-700 shadow-2xl"
        >
            {/* Window Header */}
            <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-gray-700">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">portfolio.js</div>
            </div>

            {/* Code Area */}
            <div className="p-4 font-mono text-sm sm:text-base overflow-x-auto">
                <pre className="text-gray-300">
                    <code>
                        {text.split("\n").map((line, i) => (
                            <div key={i} className="table-row">
                                <span className="table-cell text-right pr-4 text-gray-600 select-none">
                                    {i + 1}
                                </span>
                                <span className="table-cell">
                                    <span dangerouslySetInnerHTML={{
                                        __html: line
                                            .replace(/const|return|export|default|function/g, '<span class="text-purple-400">$&</span>')
                                            .replace(/"[^"]*"/g, '<span class="text-green-400">$&</span>')
                                            .replace(/:/g, '<span class="text-blue-300">:</span>')
                                            .replace(/\[|\]|\{|\}/g, '<span class="text-yellow-400">$&</span>')
                                            .replace(/\/\/.*/g, '<span class="text-gray-500">$&</span>')
                                    }} />
                                </span>
                            </div>
                        ))}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-5 ml-1 bg-blue-400 align-middle"
                        />
                    </code>
                </pre>
            </div>
        </motion.div>
    );
};

export default HackerRoom;
