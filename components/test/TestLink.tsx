// components/TestClick.tsx - Create this file to test
"use client";

export default function TestClick() {
  const handleClick = () => {
    window.open("https://google.com", "_blank", "noopener,noreferrer");
    alert("Clicked! Should open Google");
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl text-white mb-4">Test Component</h2>
      <div 
        onClick={handleClick}
        className="inline-block p-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl cursor-pointer hover:scale-105 transition-transform"
      >
        Click me - Should open Google
      </div>
      <p className="text-gray-400 mt-4">If this works, the project cards will work too.</p>
    </div>
  );
}