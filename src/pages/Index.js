import React from 'react';
import CategoryList from "../components/CategoryList";
import InstructorList from "../components/InstructorList";

function Index() {
    return (
        <>
            <CategoryList title={'Featured Categories'} query={'featured=1'}/>
            <InstructorList title={'Featured Instructors'} query={'featured=1'}/>
        </>
    );
}

export default Index;