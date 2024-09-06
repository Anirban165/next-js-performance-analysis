export interface BlogInterface extends Document {
    title: string;
    content: string;
    createdByName: string;
    createdByID?: string;
}

export interface BlogResponseInterface {
    status: number;
    message: string;
    data: BlogInterface;
}

export interface AllBlogsResponseInterface {
    status: number;
    message: string;
    Blogs: BlogInterface[];
}