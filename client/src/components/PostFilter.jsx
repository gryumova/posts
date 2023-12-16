import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                type="text" 
                placeholder="Поиск..."
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            ></MyInput>
           <MySelect
                value={filter.sort}
                onChange={(selectedsort) => setFilter({...filter, sort: selectedsort})}
                options={[
                    { value: 'name', name: 'По названию' },
                    { value: 'createdAt', name: 'По дате' }
                ]} 
                defaultValue="Сортировка"
            />
        </div>
    )
}

export default PostFilter;