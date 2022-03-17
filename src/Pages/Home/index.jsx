import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk, removeCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";
import "./styles.css";
import { toast } from "react-hot-toast";

const Home = () => {
    const dispatch = useDispatch();
    const [currentComment, setCurrentCommente] = useState("");
    const user = useSelector((state) => state.user);

    const addComment = () => {
        dispatch(addCommentThunk(currentComment));
        setCurrentCommente("");
        toast.success("Comentário adicionado com sucesso");
    };

    const removeComment = (comment) => {
        console.log(comment);
        dispatch(removeCommentThunk(comment));
        toast.error("Comentário excluido");
    };

    return (
        <div className="container">
            <h1>Anotações do {user.name}</h1>
            <div className="container_form">
                <input
                    onChange={(e) => setCurrentCommente(e.target.value)}
                    value={currentComment}
                    type={"text"}
                    placeholder="Digite seu comentário"
                ></input>
                <button onClick={addComment}>New Comment</button>
            </div>
            <div className="container_list_comments">
                {user.comments.map((comment, index) => (
                    <div className="list_comments">
                        <p key={index}>
                            {index + 1}: {comment}
                        </p>
                        <button onClick={() => removeComment(comment)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
