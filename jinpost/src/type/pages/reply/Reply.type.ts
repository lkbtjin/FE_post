/**
 * 댓글 상세 반환 파라미터 타입
 */
export type ReplyInfoResponseType = {
    replyId: number
    replyContent: string,
    replyPinYn: string,
    replyWriter: string,
    regDateTime: string
}