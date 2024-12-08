import Link from "next/link";

export default async function Products(props: {params: {proData: string}}){
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.proData}`)
 let posts = await res.json()
    return(
        <div className="flex justify-center flex-col items-center mt-4">
            <h1 className=" text-2xl font-bold text-green-500 ">Product Data</h1>
            <p>{posts.id} {posts.body}</p>
            
        </div>
    )
}