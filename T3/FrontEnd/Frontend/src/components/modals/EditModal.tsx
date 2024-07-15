import { useState } from "react";
import { User } from "../models/User";
import { edit } from "../services/userServices";

interface EditModalProps {
    onClose: () => void;
    id: string;
}

const EditModal: React.FC<EditModalProps> = ({onClose, id}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const UpdateUser = () => {
        const user : User = {
            id: id,
            name: name,
            email: email,
            password: password
        }
        edit(user);
        onClose();
    }

    return (
        <>
        <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edição de usuario</h5>
                        <button onClick={() => onClose()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Novo nome</label>
                            <input type="text" className="form-control" id="name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Novo email</label>
                            <input type="email" className="form-control" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Nova senha</label>
                            <input type="password" className="form-control" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => UpdateUser()} type="button" className="btn btn-primary">Editar</button>
                        <button onClick={() => onClose()} type="button" className="btn btn-secondary" data-bsdismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditModal;