/**
 * 게시글 리스트 반환 파라미터 타입
 */
export type PostListResponseType = {
    postTitle: string,
    postContent: string,
    postId: number
}

/**
 * 게시글 상세 반환 파라미터 타입
 */
export type PostInfoResponseType = {
    postId: number
    postTitle: string,
    postContent: string,
    postExpYn: string,
    region1: string,
    region2: string,
    region3: string
}

/**
 * 게시글 좋아요 요청 파라미터
 */
export type PostLikeRequestType = {
    postId: number | undefined,
    postLikeYn: string
}