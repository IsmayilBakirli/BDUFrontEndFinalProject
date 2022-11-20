import React from 'react';
import { useSelector } from 'react-redux';

export default function TableHead() {

    return (
        <>
            {window.location.pathname == "/profile/katibs" &&
                <tr>
                    <th>
                        <p>
                            Image
                        </p>

                    </th>
                    <th>
                        <p>FirstName</p>
                    </th>
                    <th>
                        <p>Username</p>
                    </th>
                    <th>
                        <p>Email</p>
                    </th>
                    <th>
                        <p>Details</p>
                    </th>
                </tr>}
            {window.location.pathname == "/profile/sliders" &&
                <tr>
                    <th>
                        <p>Image</p>
                    </th>
                    <th>
                        <p>Title</p>
                    </th>
                    <th>
                        <p>Content</p>
                    </th>
                    <th>
                        <p>Details</p>
                    </th>
                </tr>}

            {window.location.pathname == "/profile/news" &&
                <tr>
                    <th>
                        <p>Images</p>
                    </th>
                    <th>
                        <p>Title</p>
                    </th>
                    <th>
                        <p>Content</p>
                    </th>
                    <th>
                        <p>Details</p>
                    </th>
                </tr>}
            {window.location.pathname == "/profile/teachers" &&
                <tr>
                    <th>
                        <p>Image</p>
                    </th>
                    <th>
                        <p>FirstName</p>
                    </th>
                    <th>
                        <p>Username</p>
                    </th>
                    <th>
                        <p>Email</p>
                    </th>
                    <th>
                        <p>Details</p>
                    </th>
                </tr>}
        </>
    )
}
