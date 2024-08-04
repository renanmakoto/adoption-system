import { NextPage } from 'next';
import { useRegister } from '../../data/hooks/pages/pets/useRegister';

const Register: NextPage = () => {
    const {
        name,
        history,
        photo,
        setName,
        setHistory,
        setPhoto,
        register,
        message,
        setMessage,
    } = useRegister();

    return (
        <div>
            <h1>Register a Pet</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    register();
                }}
            >
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>History:</label>
                    <textarea value={history} onChange={(e) => setHistory(e.target.value)} />
                </div>
                <div>
                    <label>Photo URL:</label>
                    <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
