export interface UserInterface {
    name: string;
    password: string;
    email: string;
    posts: string[];
    __v: number;
    _id: string;
}

export interface UserResponseInterface {
    status: number;
    message: string;
    data?: UserInterface;
}