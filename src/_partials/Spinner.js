import React from 'react';
import {Spinner} from "react-bootstrap"
export default function ProgressSpinner({ isLoading ,type}) {
   return isLoading ? (<Spinner
        as="span"
        animation="border"
        size={"sm"}
        variant={type}
        role="status"
    />) : ""
}
