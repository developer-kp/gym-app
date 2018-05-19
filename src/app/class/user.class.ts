export class User {
    constructor(
        public userId: Number = 0,
        public userName: String,
        public address: String,
        public email: String,
        public phoneNo: Number,
        public status: any,
        public roleId: any,
        public organizationId: any,
        public inserterId: any,
    ) {};
}