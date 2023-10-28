import { Table } from "antd"
import { ColumnsType } from "antd/es/table";
import { UserList as UserInfo } from "../../types";

interface Props {
    data?: UserInfo[];
    columns: ColumnsType<UserInfo>;
}

const UserList = ({ data, columns }: Props) => {
    
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default UserList;