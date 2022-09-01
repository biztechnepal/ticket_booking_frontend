import React, { useState } from 'react'
import { Form, Container, Row } from 'react-bootstrap';

export default function TagInputs({ tags, onGetTags, hint }) {

    const [tagData, setTagData] = useState(tags);
    var KEY = {
        backspace: 8,
        tab: 9,
        space: 32,
        enter: 13
    }
    const [INVALID_CHARS, SET_INVALID_CHARS] = useState(/[^a-zA-Z0-9 ]/g);
    const removeTagData = indexToRemove => {
        setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
    };
    const addTagData = event => {
        if (event.target.value !== '') {
            setTagData([...tagData, event.target.value]);
            event.target.value = '';
        }
    };
    const deleteChip = (chip) => {
        let index = tagData.indexOf(chip);
        let temp = tagData;
        if (index >= 0) {
            temp.splice(index, 1);
            setTagData(temp)
        }
    }
    const tagControlHandler = (event) => {
        // let keyPressed = event.key;
        let keyPressed = event.which;
        let { value } = event.target;
        event.preventDefault();
        if (keyPressed === KEY.space || keyPressed === KEY.tab) {
            addTagData(value);
        } else if (keyPressed === KEY.backspace) {
            if (!value && tagData.length) {
                deleteChip(tagData[tagData.length - 1]);
            }
        }
        // if (event.key === ' ') {
        //     addTagData(event);
        // }
        // if (INVALID_CHARS.test(value)) {
        //   event.target.value = value.replace(INVALID_CHARS, '');
        // } else if (value.length > this.props.maxlength) {
        //   event.target.value = value.substr(0, this.props.maxlength);
        // }
    }
    return (
        <div className="tag-input">
            <ul className="tags">
                {tagData?.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span
                            className="tag-close-icon"
                            onClick={() => removeTagData(index)}
                        >                            x
                        </span>
                    </li>
                ))}
            </ul>
            <input
            className='form-control'
                type="text"
                onKeyUp={event => (event.key === ' ' ? addTagData(event) : null)}
                // onKeyUp={event => tagControlHandler(event) }
                onChange={onGetTags(tagData)}
                placeholder={hint}
            />
        </div>
    );
}

