import { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { UserList as UserListComponent } from '../../components';
import { UserList as ListType } from '../../types';

const ListUser: React.FC = () => {
  const [users, setUsers] = useState<ListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const apiUrl = 'https://week-18-eoa03.cyclic.app/auth/admin'

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.allUsers)) {
            setUsers(data.allUsers);
        } else {
            console.error("Data is not in the expected format");
        }
      }      
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/');
      return;
    }
    getUsers();
  }, []);

  const handleDetails = async(username: string) => {
    try{
        const response = await fetch(`http://localhost:3000/todo/admin/${username}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
        })
        if (response.ok) {
            const data = await response.json();
            if (data && Array.isArray(data.datas)) {
                setUsers(data.datas);
            } else {
                console.error("Data is not in the expected format");
            }
          }   
    }
    catch(error){
        console.error(error);
        alert('Failed to fetch data');
    }
  }

  const columns: ColumnsType<ListType> = [
    {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Details',
        render: (_, record) => (
            <Button type="primary" onClick={()=>handleDetails}>
              Details
            </Button>
        ),
    },
  ];

  return (
    <>
      <div>
        <div>
          <Button type='primary' onClick={handleLogOut} danger>
            Log Out
          </Button>
          <h3>List of Users</h3>
        </div>
        {loading ? <Spin /> : <UserListComponent columns={columns} data={users} />}
      </div>
    </>
  );
};

export default ListUser;