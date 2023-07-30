import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import CategoryList from "../components/CategoryList";
import InstructorList from "../components/InstructorList";

function Categories({query}) {
    return (
        <>
            <CategoryList title={'Featured Categories'} query={'featured=1'}/>
            <InstructorList title={'Featured Instructors'} query={'featured=1'}/>
        </>
    );
}

export default Categories;