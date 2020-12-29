import Authority from './authority';

export interface User {
    id: number;
    name: string;
    account: string;
    avatar: string;
    birth: number;
    telephone: string;
    sex: string;
    enable: boolean;
    roles: Array<Authority>;
}
