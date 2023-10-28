export interface LoginForm{
    username: string;
    password: string
}

export interface RegisterForm{
    email: string;
    username: string;
    password: string;
    role: string;
}

export interface UserList{
    _id: string;
    email: string;
    username: string;
    role: string;
}