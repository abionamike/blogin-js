import axios from 'axios'
import { BLOG_DETAILS_FAIL, BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_LIST_FAIL, BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS, BLOG_CREATE_REQUEST, BLOG_CREATE_SUCCESS, BLOG_CREATE_FAIL, BLOG_UPDATE_REQUEST, BLOG_UPDATE_SUCCESS, BLOG_UPDATE_FAIL, BLOG_DELETE_REQUEST, BLOG_DELETE_SUCCESS, BLOG_DELETE_FAIL } from "../constants/blogConstant"

export const get_blogs = () => async (dispatch) => {
    try {
        dispatch({ type: BLOG_LIST_REQUEST });

        const { data } = await axios.get('/api/blogs');
        dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BLOG_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const get_blog_details = (blogId) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/blogs/${blogId}`);
        dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BLOG_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const blog_create = (blog) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_CREATE_REQUEST });

        const config = {
            'Content-Type': 'application/json'
        } 

        await axios.post(`/api/blogs/`, blog, config);
        dispatch({ type: BLOG_CREATE_SUCCESS });
        
    } catch (error) {
        dispatch({ type: BLOG_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const blog_update = (blog) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_UPDATE_REQUEST });

        const config = {
            'Content-Type': 'application/json'
        } 

        await axios.put(`/api/blogs/${blog.id}`, blog, config);
        dispatch({ type: BLOG_UPDATE_SUCCESS });
        
    } catch (error) {
        dispatch({ type: BLOG_UPDATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

export const blog_delete = (blogId) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DELETE_REQUEST });

        await axios.delete(`/api/blogs/${blogId}`);
        dispatch({ type: BLOG_DELETE_SUCCESS });
        
    } catch (error) {
        dispatch({ type: BLOG_DELETE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}