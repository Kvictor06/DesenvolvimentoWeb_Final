import { useEffect, useState } from 'react'
import './App.css'
import { User } from './components/models/User'
import { getAll, remove } from './components/services/userServices'
import AddModal from './components/modals/AddModal';
import EditModal from './components/modals/EditModal';

function App() {

  const [users, setUser] = useState<User[]>([]);
  const [createUser, setCreateUser] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<string>('');

  const getUsers = async () => {
    const response = await getAll();
    setUser(response);
  }

  const removeUser = async (id: string) => {
    await remove(id);
    getUsers();
  }

  const closeModal = async () => {
    setCreateUser(false);
    setEditUser('');
  }

  useEffect(() => {
    getUsers();
  }, [createUser, editUser])

  return (
    <>
      {createUser && <AddModal onClose={closeModal} />}
      {editUser && <EditModal id={editUser} onClose={closeModal} />}
      <div className="container">
        <button className='btn btn-secondary'
        onClick={() => setCreateUser(true)}
        >Criar Usuario</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Senha</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.length > 0 ? (
              users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td scope="row">{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button className='btn btn-primary m-2'
                        onClick={() => setEditUser(user.id)}
                      >&#9998;</button>
                      <button className='btn btn-danger'
                        onClick={() => removeUser(user.id)}
                      >&#9249;</button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>Não há usuarios cadastrados...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
