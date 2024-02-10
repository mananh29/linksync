import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white border-b flex justify-between p-3">
            <div className="flex gap-6 ">
                <Link href={"/"}>LinkSync</Link>
                <nav className="flex gap-4 items-center text-slate-500 text-sm">
                <Link href={"/about"}>About</Link>
                <Link href={"/pricing"}>Pricing</Link>
                <Link href={"/contact"}>Contact</Link>
                </nav>
            </div>
            <div className="flex gap-4 text-sm text-slate-500">
                <Link href={"/login"}>Sign In</Link>
                <Link href={"register"}>Create Account</Link>
            </div>
        </header>
    );
};

export default Header;
