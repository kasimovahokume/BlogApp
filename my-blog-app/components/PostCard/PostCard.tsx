import { Post } from "@/types/post";
import styles from "./PostCard.module.css"
import Link from "next/link";

interface PostCardProps {
    post: Post;
}

export default function PostCard({post}: PostCardProps){
    return(
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.body}>
                    {post.body.length > 100
                    ? post.body.substring(0,100) + "..."
                    : post.body
                    }
                </p>
            </div>
            <Link 
            href={`/posts/${post.id}`}
            className={styles.button}>
            Etrafli
            </Link>
        </div>
    )
}