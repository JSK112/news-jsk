import news from '@/public/news.json'
import Link from 'next/link'

const NewsPost = () => {
    return(
       <>
            {news.map(news => (
                <div key={news.id} >
                    <Link href={"/" + news.id} className={"mb-6 flex border-4 rounded-xl border-gray-500 m-2 p-9 mx-52"}>
                        <div className='content-center pr-6'>
                            <h2 className='text-xl'>{news.title}</h2>
                            <hr />
                            <p className='pb-14'>{news.short_description}</p>
                        </div>
                        <img src={news.img} className='object-contain rounded-xl' alt={news.title}/>
                    </Link>
                </div>
            ))}
       </> 
    )
}
export default NewsPost