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
    region3: string,
    postPinYn: string,
    postLikeYn: string,
    likeCount: number,
    viewCount: number,
    hateCount: number
}

/**
 * 게시글 삭제 요청 파라미터
 */
export type PostRemoveRequestType = {
    postId: number
}

/**
 * 게시글 좋아요 요청 파라미터
 */
export type PostLikeRequestType = {
    postId: number | undefined,
    memberId: number | undefined
}

/**
 * 게시글 핀 고정 요청 파라미터
 */
export type PostPinRequestType = {
    postId: number,
    postPinYn: string | undefined
}

/**
 * 게시글 조회수 카운트 요청 파라미터
 */
export type ViewRequestType = {
    postId: number | undefined
}

/**
 * 게시글 작성 요청 파라미터
 */
export type PostAddRequestType = {
    postTitle: string,
    postContent: string
}

/**
 * 게시글 검색 요청 파라미터
 */
export type PostSearchRequestType = {
    startDate: string,
    endDate: string,
    postTitle: string,
    postWriter: string,
    keyword: string
}