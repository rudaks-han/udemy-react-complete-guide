import Link from "next/link";

function News() {
    return <>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href="/news/nextjs-is-a-greate-framework">
                    NextJs Is A Great Framework
                </Link>
            </li>
            <li>Something Else</li>
        </ul>
    </>
}

export default News;