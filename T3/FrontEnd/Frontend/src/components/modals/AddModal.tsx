import { useState } from "react";
import { User } from "../models/User";
import { add } from "../services/userServices";

interface AddModalProps {
    onClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({onClose}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const createUser = () => {
        const user : User = {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: name,
            email: email,
            password: password
        }
        add(user);
        onClose();
    }

    return (
        <>
        <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Adicionar novo usuario</h5>
                        <button onClick={() => onClose()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => createUser()} type="button" className="btn btn-primary">Add</button>
                        <button onClick={() => onClose()} type="button" className="btn btn-secondary" data-bsdismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddModal;