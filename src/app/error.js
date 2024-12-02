"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex justify-center items-center mt-56">
      <div className="w-full h-0.5 border-2 border-cyan-500" />
      <div className="flex bg-black/70 text-white items-center justify-center rounded-lg border-2 border-cyan-500 w-full">
        <span className="p-2 font-bold tex-2xl">
          An error has occurred while accessing this website! 😭👎
        </span>
      </div>
      <div className="w-full h-0.5 border-2 border-cyan-500" />
    </div>
  );
}
