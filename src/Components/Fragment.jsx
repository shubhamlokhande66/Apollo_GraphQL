import { gql } from '@apollo/client';

CommentsPage.fragments = {
  comment: gql`
    fragment CommentsPageComment on Comment {
      id
      postedBy {
        login
        html_url
      }
      createdAt
      content
    }
  `,
};
const SUBMIT_COMMENT_MUTATION = gql`
  mutation SubmitComment($postFullName: String!, $commentContent: String!) {
    submitComment(postFullName: $postFullName, commentContent: $commentContent) {
      ...CommentsPageComment    }
  }
  ${CommentsPage.fragments.comment}
`
;

export const COMMENT_QUERY = gql`
  query Comment($postName: String!) {
    entry(postFullName: $postName) {
      comments {
        ...CommentsPageComment      }
    }
  }
  ${CommentsPage.fragments.comment}
`
;