import ReplyWrite from "../../components/reply/ReplyWrite";
import ReplyList from "../../components/reply/ReplyList";
import axios from "axios";
import {ReplyAddRequestType} from "../../type/pages/reply/Reply.type";

/**
 * 댓글 페이지
 * - 이곳에서 댓글에 대한 API를 쏘고 받는다.
 * - 댓글 작성 컴포넌트 / 댓글 리스트 컴포넌트로 구성
 * @param props
 * @constructor
 */
const ReplyPage = (props: any) => {
    console.log(props)

    /**
     * 댓글 작성 기능
     */
    const replyAddApi = (writer: string, password: string, content: string) => {
        let replyAddParam: ReplyAddRequestType = {
            postId: props.postId,
            replyWriter: writer,
            replyPassword: password,
            replyContent: content
        }
        console.log("replyAddApi")
        axios.post('http://localhost:8080/reply/add', replyAddParam)
            .then((result) => {
                console.log(result)
                props.postInfoApi();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {

            })
    }

    return (
        <div>
            <ReplyWrite replyAddApi={replyAddApi}/>
            <ReplyList replies={props.replies}/>
        </div>
    )
}

export default ReplyPage;