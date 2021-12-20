import React, { useEffect, useReducer } from 'react'
import Axios from 'axios';
import reducer from './reducer';

const initialValue = {
    post: []
}

const useUpdateReducer = (prevState, newState) =>
    typeof newState === 'function' ? newState(prevState) : newState

const useUpdateInitializer = initialValue =>
    typeof initialValue === 'function' ? initialValue() : initialValue

function useUpdate(initialValue) {
    return useReducer(useUpdateReducer, initialValue, useUpdateInitializer)
}

const PostReducer = () => {

    const [post, setPost] = useUpdate();
    const [show, setShow] = useUpdate(true);
    const [state, dispatch] = useReducer(reducer, initialValue)
    const [id, setId] = useUpdate(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        await Axios.get("http://localhost:3010/posts").then((response) => {
            if (response.data) {
                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: response.data
                })
                setPost(response.data)
            }
        })
    }

    const handleChangeFor = (input, e) => {
        return {
            type: 'UPDATE_FIELD',
            payload: { input, value: e.target.value },
        };
    };

    const onEdit = (postId) => {
        setShow(false)
        const index = post.findIndex((x) => x.id === postId);
        dispatch({ type: 'ON_EDIT', payload: index })
        setId(postId);
    }

    const submitHanlder = (e) => {
        e.preventDefault();
        if ((state['title'] !== undefined) && (state['body'] !== undefined)) {
            console.log(state['title'], state['body'])
            Axios.post("http://localhost:3010/posts", {
                title: state['title'],
                body: state['body']
            }).then(() => {
                dispatch({
                    type: 'ADD', payload: {
                        title: state['title'],
                        body: state['body']
                    }
                })
                getData();
                clearForm()
            })
        }
    }

    const editPosts = (e) => {
        e.preventDefault();
        if ((state['title'] !== undefined) && (state['body'] !== undefined)) {
            Axios.patch(`http://localhost:3010/posts/${id}`, {
                title: state['title'],
                body: state['body'],
                id: id
            }).then(() => {
                dispatch({
                    type: 'UPDATE', payload: {
                        id: id,
                        title: state['title'],
                        body: state['body']
                    }
                })
                getData();
                clearForm();
                setShow(true)
            });
        }
    }

    const clearForm = () => {
        dispatch({ type: 'CLEAR' })
    }

    const onDelete = (id) => {
        Axios.delete(`http://localhost:3010/posts/${id}`).then(() => {
            dispatch({ type: 'DELETE', payload: id })
            getData();
        });
    };

    return (
        <>
            <div>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Enter title</label>
                                <input type="text" size="150" value={state['title']} required onChange={(e) =>
                                    dispatch(handleChangeFor('title', e))} className="form-control" name="exampleInputEmail1" placeholder="Enter Name" />
                            </div>
                            <div className="col-md-6">
                                <label>Enter body</label>
                                <input type="text" value={state['body']} required onChange={(e) =>
                                    dispatch(handleChangeFor('body', e))
                                } className="form-control" name="exampleInputEmail1" placeholder="Enter username" />
                            </div>
                        </div>
                    </div>
                    {show ?
                        <button type="submit" className="btn btn-primary" onClick={submitHanlder}>Submit</button> :
                        <button type="submit" className="btn btn-primary" onClick={editPosts}>Edit</button>
                    }
                </form >
            </div>
            <div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                            <th>DELETE</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post && post.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td><button onClick={() => onDelete(item.id)}>❌ &nbsp;</button></td>
                                    <td><button className="primary" onClick={() => onEdit(item.id)}>Edit &nbsp;</button></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default PostReducer
