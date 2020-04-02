interface Post {
    level: 'Basic' | 'Intermediate' |  'Advanced';
    slug: string;
}

const PostList: Post[] = [
    { slug: 'bash-mac-converting-mov-to-gif', level: 'Basic' }
];

export default PostList;
