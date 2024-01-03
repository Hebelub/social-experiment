import { ArrowRight } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Ready for "Try to be Average"? <br />
          </h1>

          <p className="pb-20">
            Your goal is to choose the same answer as the majority of people.<br />
          </p>

          <ul className="list-disc list-inside">
            <li>Se how you stacks up against your friends</li>
            <li>Use your phycological scills</li>
            <li>Learn how the world thinks</li>
          </ul>

        </div>

      </div>

      <Link
        href="/dashboard"
        className="flex cursor-pointer bg-blue-500 p-5 w-fit"
      >
        Try Now!
        <ArrowRight className="ml-10" />
      </Link>
    </main>
  )
}
