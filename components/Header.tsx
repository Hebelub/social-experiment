import Link from "next/link"
import Image from "next/image";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[#0160FE] w-fit">
                <Image 
                    src="https://www.shareicon.net/data/128x128/2017/07/13/888371_aim_512x512.png" 
                    alt="logo"
                    // className="Invert"
                    width={50}
                    height={50} 
                />
            </div>
            <h1 className="font-bold font-xl">Try to be Average</h1>
        </Link>

        <div className="px-5 flex space-x-2 items-center">
            {/* Theme toggler */}
            <ThemeToggler />

            {/* User Button */}
            <UserButton afterSignOutUrl="/" />

            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal" />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header