import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">C</div>
                    <span className="text-xl font-bold tracking-tight">Career<span className="text-blue-500">Coach</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/mentors" className="hover:text-white transition-colors">Find Mentors</Link>
                    <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium hover:text-white text-gray-400 px-4 py-2 transition-colors">Login</button>
                    <button className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-blue-500/20">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
