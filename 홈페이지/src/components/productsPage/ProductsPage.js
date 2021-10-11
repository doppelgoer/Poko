import ProductCard from "./ProductCard";



function Products() {


    const ourApp =
        [
            {
                appName: '할일메모장',
                teamName: 'OneJ3Kim',
                appText: '메모장 어플입니다.',
                link: 'https://todolistpoko1j3k.netlify.app/',
                createDate: '21/09/07'
            },
            {
                appName: '이번앱',
                teamName: '김하나??',
                appText: '김하나님이 만든 앱입니다',
                link: '#',
                createDate: '21/07/06'
            },
            {
                appName: '삼번앱',
                teamName: '김은혜?',
                appText: '김은혜님이 만든 앱입니다',
                link: '#',
                createDate: '21/08/06'
            },
            {
                appName: '일번앱',
                teamName: '김정연?',
                appText: '김정연님이 만든 앱입니다',
                link: '#',
                createDate: '21/10/06'
            }
        ]

    return (
        <div className='products'>
            <ProductCard data={ourApp}></ProductCard>
        </div>
    )
}

export default Products;