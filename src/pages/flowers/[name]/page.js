import { useRouter } from 'next/router';

const FlowerID = () => {
    const router = useRouter();
    return (
        <p>Post: {router.query.slug}</p>
    )
}
export default FlowerID