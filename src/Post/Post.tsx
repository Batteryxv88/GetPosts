import { useParams } from "react-router-dom";
import { api } from "../Store/apiSlice";

const Post = () => {
    // Получаем параметры из URL
    const { postId } = useParams();
    //Получаем данные из стора
    const { data: post, error, isLoading } = api.useGetSinglePostQuery(postId);

    // Заставка при загрузке данных
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        // Обработка ошибок
        return <p>Error occurred</p>;
    }

    // Возвращаем пост
    return (
        <section>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </section>
    );
};

export default Post;
