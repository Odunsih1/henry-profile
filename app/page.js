import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-crypto-dark via-black to-crypto-dark/90 p-4 md:p-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-crypto-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-crypto-blue/20 rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,30,0.8)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(20,20,30,0.8)_0.5px,transparent_0.5px)] bg-[length:30px_30px] opacity-30"></div>
      </div>

      <ProfileCard />
    </div>
  );
}
