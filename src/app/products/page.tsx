import Link from "next/link";

export default async function Products(){
let res = await fetch("https://jsonplaceholder.typicode.com/posts")
 let posts = await res.json()
    return(
        <div className="flex justify-center flex-col items-starts pl-10 ">
            <h1 className="font-bold text-2xl text-yellow-500 ">Product List</h1>
            {
                posts.map(( item: any, i:number) =>{
                    return(
                       <div>
                            <ul>
                                <li>
                                    <Link href={`/products/${item.id}`}>{i+1}:{item.title}</Link>
                                </li>
                            </ul>

                       </div>
                    )
                })
            }
            
            
        </div>
    )
}