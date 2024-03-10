import cls from './Home.module.scss'
import { Link } from "react-router-dom";
import { api } from '../Store/apiSlice';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const Home = () => {
     //Получаем данные из стора
    const { data: posts, error, isLoading } = api.useGetPostsQuery(10);

    if (isLoading) {
        // Заставка при загрузке данных
        return <p>Loading...</p>;
    }

    if (error) {
        // Обработка ошибок
        return <p>Error occurred</p>;
      }

    return (
        // Возвращаем список постов
        <ul>
            {posts.map((post: Post) => (
                <li className={cls.li} key={post.id}>
                    <Link className={cls.title} to={`/post/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Home;
