import React from "react";
import styles from "./PostList.module.css"
import {
    DataGrid,
    DataGridBody,
    DataGridCell,
    DataGridHeader,
    DataGridRow,
    Divider,
    makeStyles
} from "@fluentui/react-components"

const useStyles = makeStyles({
    root: {
        display: 'flex'
    }
})

const PostList = (props: any): JSX.Element => {
    const test = [
        {id: 'dd', pw: 'dddg'},
        {id: 'ggg'}
    ]
    console.log(props)
    return (
        <div className={styles.baseForm}>
            <h2>Post List</h2>
            {props.posts ? props.posts.map((post: any) => {
                return (
                    <div key={post.postId}>
                        <div className={styles.list}>
                            <div className={styles.regionItem}>{post.region1}</div>
                            <div className={styles.postItem}>
                                <div className={styles.titleItem}>{post.postTitle}</div>
                                <div className={styles.contentItem}>{post.postContent}</div>
                            </div>
                            <div className={styles.viewItem}>{post.postLikeCount}</div>
                        </div>
                    </div>
                )
            }) : <div>sorry</div>}
        </div>
    )
};

export default PostList;