import React from 'react'
import Select from 'react-select'
import './InputDropdown.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const InputDropdown = () => (
    <div className="InputDropdown">
        <Select className="select" options={options} />
    </div>
)