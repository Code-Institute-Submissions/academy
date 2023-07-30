import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import CategoryList from "../components/CategoryList";

function Categories({query}) {
    return (
        <CategoryList/>
    );
}

export default Categories;