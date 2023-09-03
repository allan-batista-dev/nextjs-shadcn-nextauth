export enum Role {
    user = "user",
    admin = "admin",
}

declare module "next-auth" {
    interface User {
        id?: number;
        name_clinic?: string;
        celNumber?: string;
        access_token?: string;
        customerId?: string;
        access_token?: string;

    }

    interface Session extends DefaultSession {
        user?: User;
    }
}