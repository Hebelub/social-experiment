import { auth } from "@clerk/nextjs";


async function Dashboard() {
    const { userId } = auth();

    return (
        <div className="border-t">

            <section className="container space-y-5">
                <h2 className="font-bold">Your Rank</h2>

            </section>
        </div>
    )
}

export default Dashboard