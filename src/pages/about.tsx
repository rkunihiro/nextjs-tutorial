import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <main>
                <div>About</div>
                <Link href="/" prefetch={true}>
                    <a>Back to Home</a>
                </Link>
            </main>
        </>
    );
}
