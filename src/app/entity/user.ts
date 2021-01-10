import Authority from './authority';

export class User {
    id: number;
    name: string;
    account: string;
    avatar: string;
    birth: number;
    telephone: string;
    sex: number;
    enable: boolean;
    roles: Array<Authority>;
}
