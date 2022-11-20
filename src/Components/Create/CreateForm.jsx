import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function CreateForm(props) {
    const { inputs } = props;
    var [file, setfile] = useState(" ");
    var [files, setfiles] = useState([]);
    var [Title, setTitle] = useState(" ");
    var [Content, setContent] = useState(" ");
    var [errorMessages, setErrorMessages] = useState(" ");
    var [success, setSuccess] = useState(false);
    var token = localStorage.getItem("token");
    if (file != " ") {
        var imageUrl = URL.createObjectURL(file);

    };
    if (files != []) {
        var imageUrls = [];
        for (const file of files) {
            imageUrls.push(URL.createObjectURL(file));
        }
    }

    useEffect(() => {
        if (window.location.pathname == "/profile/createslider") {
            if (success) {
                alert("slider create succesful");
                setSuccess(false);
            }
        };
        if (window.location.pathname == "/profile/createnews") {
            if (success) {
                alert("news create succesful");
                setSuccess(false);
            }
        };
    });
    function onSubmitHandler(e) {
        e.preventDefault();

        if (window.location.pathname == "/profile/sliders/createslider") {
            axios.post("https://localhost:7049/api/katib/createslider", { title: Title, content: Content, imageUrl: imageUrl }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => { setErrorMessages(" "); setContent(" "); setTitle(" "); setSuccess(true); }).catch((err) => setErrorMessages(err.response.data.errors != null ? err.response.data.errors : " "));
        }
        if (window.location.pathname == "/profile/news/createnews") {
            axios.post("https://localhost:7049/api/katib/createnews", { title: Title, content: Content, images: imageUrls }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => { setErrorMessages(" "); setContent(" "); setTitle(" "); alert("news successfully added!") }).catch((err) => { setErrorMessages(err.response.data.errors != null ? err.response.data.errors : " "); });
        }
    }

    return (
        <>
            <div className="createForm d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="title d-flex justify-content-center mt-3">
                        {window.location.pathname == "/profile/sliders/createslider" && <h3>Slider elave edin</h3>}
                        {window.location.pathname == "/profile/news/createnews" && <h3>Xeber elave edin</h3>}
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        {window.location.pathname == "/profile/sliders/createslider" ? <>
                            <div className="formInputs">
                                <label htmlFor="Title">Title</label>
                                <input type="text" id="Title" value={Title} onChange={(e) => setTitle(e.target.value)} />
                                {errorMessages.Title != null ? <span className='text-danger'>{errorMessages.Title}</span> : null}
                            </div>
                            <div className="formInputs">
                                <label htmlFor="Content">Content</label>
                                <input type="text" value={Content} id="Content" onChange={(e) => setContent(e.target.value)} />
                                {errorMessages.Content != null ? <span className='text-danger'>{errorMessages.Content}</span> : null}
                            </div>
                            <div className="formInputs">
                                <label htmlFor="image">Image</label>
                                <input type="file" id='image' accept='image/*' onChange={(e) => { setfile(e.target.files[0]); }} />
                                {errorMessages.ImageUrl != null ? <span className='text-danger'>{errorMessages.ImageUrl}</span> : null}
                            </div>
                        </> : null}
                        {window.location.pathname == "/profile/news/createnews" ? <>
                            <div className="formInputs">
                                <label htmlFor="Title">Title</label>
                                <input type="text" id="Title" value={Title} onChange={(e) => setTitle(e.target.value)} />
                                {errorMessages.Title != null ? <span className='text-danger'>{errorMessages.Title}</span> : null}
                            </div>
                            <div className="formInputs">
                                <label htmlFor="Content">Content</label>
                                <input type="text" value={Content} id="Content" onChange={(e) => setContent(e.target.value)} />
                                {errorMessages.Content != null ? <span className='text-danger'>{errorMessages.Content}</span> : null}
                            </div>
                            <div className="formInputs">
                                <label htmlFor="image">Image</label>
                                <input type="file" id='image' multiple accept='image/*' onChange={(e) => { setfiles(e.target.files); console.log(e.target.files) }} />
                                {errorMessages.Images != null ? <span className='text-danger'>{errorMessages.Images}</span> : null}

                            </div>
                        </> : null}
                        <div className="submitButton mt-3 d-flex justify-content-center">
                            <button className='btn btn-primary'>Create</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}