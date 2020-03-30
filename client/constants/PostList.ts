interface Post {
    level: 'Basic' | 'Intermediate' |  'Advanced';
    slug: string;
}

const PostList: Post[] = [
    { slug: 'add-or-remove-class-from-an-element', level: 'Basic' }
];

export default PostList;
