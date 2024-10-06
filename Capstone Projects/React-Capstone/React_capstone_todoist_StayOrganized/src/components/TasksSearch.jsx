import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getAllCategories } from './APIutility';

export default function TasksSearchBar(props) {
    const allTasks = props.allTasks;
    const setFilteredTasksFunc = props.setTasks;
    const [categories, setCategories] = useState([]);
    // const [selectCats, setSelectCats] = useState([]);

    const searchData = props.searchData;
    const setSearchData = props.setSearchData;

    const filterByDescription = (e) => {
        const needle = e.target.value;
        performSearch({ ...searchData, "desc": needle })
    }

    const clearSearch = () => {
        setFilteredTasksFunc(allTasks);
        // searchData = { status: [], cats: [], desc: "" };
        setSearchData({ status: [], cats: [], desc: "" });
    }

    const filterByCateogry = (e) => {
        const catId = e.target.value;
        const choosen = e.target.checked;
        const selectedCats = refreshSelectedCats(catId, choosen);
        performSearch({ ...searchData, "cats": selectedCats });
    }

    const filterByStatus = (e) => {
        const statusId = e.target.value;
        const choosen = e.target.checked;
        let selectStatusCurrent = [];
        if (choosen) {
            selectStatusCurrent = [...searchData.status, statusId];
        } else {
            selectStatusCurrent = searchData.status.filter((id) => id !== statusId);
        }
        // setSelectCats(selectCatsCurrent);

        // const needle = e.target.value;
        performSearch({ ...searchData, "status": selectStatusCurrent })
    }

    const refreshSelectedCats = (selectedCategory, choosen) => {
        let selectCatsCurrent = [];
        if (choosen) {
            selectCatsCurrent = [...searchData.cats, selectedCategory];
        } else {
            selectCatsCurrent = searchData.cats.filter((id) => id !== selectedCategory);
        }
        // setSelectCats(selectCatsCurrent);
        return selectCatsCurrent;
    };

    function searchTasksByDesc(tasks, searchDesc) {
        if (!tasks) return [];
        return tasks.filter(task => task.description.toUpperCase().includes(searchDesc.toUpperCase()));
    }

    function searchTasksByCateogry(tasks, selectedCats) {
        if (!tasks) return [];
        let filteredTasks;
        if (selectedCats.length === 0) {
            filteredTasks = [...tasks];
        } else {
            filteredTasks = tasks.filter(task => selectedCats.includes(task.category));
        }
        return filteredTasks;
    }

    function searchTasksByStatus(tasks, status) {
        let filteredTasks = [];
        if (status.length === 0) {
            filteredTasks = [...tasks];
        } else {
            filteredTasks = tasks.filter(task => status.includes(task.completed ? "true" : "false"));
        }

        if (status === "0") { // All tasks
            filteredTasks = tasks;
        } else if (status === "1") { // Completed
            filteredTasks = tasks.filter(task => { console.log(task); return task.completed });
        } else if (status === "2") { // Not Completed
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (status === "") {
            filteredTasks = tasks;
        }
        return filteredTasks;
    }

    function performSearch(searchData) {
        console.log(searchData);
        let filteredTasks = searchTasksByDesc(allTasks, searchData.desc);
        console.log("after desc: ");
        console.log(filteredTasks);
        filteredTasks = searchTasksByCateogry(filteredTasks, searchData.cats);
        console.log("after cat: ");
        console.log(filteredTasks);
        filteredTasks = searchTasksByStatus(filteredTasks, searchData.status);
        console.log("after status: ");
        console.log(filteredTasks);
        setFilteredTasksFunc(filteredTasks);
        setSearchData(searchData);
    }

    useEffect(() => {
        // Fetch categories
        getAllCategories()
            .then((jsonData) => {
                setCategories(jsonData);
            })
    }, []
    );
    return (
        <>
            <div style={{ textAlign: "left", marginTop:"-140px", marginLeft:"-5px"}} className='row search-item'>
                <div>
                    <p style={{ marginLeft: "10px", textAlign:'center', fontWeight:'bold'}}>Filter</p>
                    <input type="text" name="search-form" id="search-form" className="search-input rounded-pill" style={{ display: "inline-block", width: "180px", height: "38px", marginLeft: "10px" }} onChange={filterByDescription} placeholder="Search task description" value={searchData.desc} />

                    <p style={{ marginTop: "50px", marginLeft:"10px" }}><strong>Search by categories</strong></p>
                    <div style={{ marginLeft: "10px", width: "180px" }}>

                        {categories.map((option) => (
                            <Form.Check
                                key={option.id}
                                type="checkbox"
                                id={option.id}
                                label={option.name}
                                checked={searchData.cats.includes(option.name)}
                                onChange={filterByCateogry}
                                value={option.name}
                            />
                        ))}

                    </div>
                    <p style={{ marginTop: "50px", marginLeft:"10px"}}><strong>Search by task status</strong></p>
                    <Form.Check type="checkbox" label="Completed" value="true" style={{marginLeft:"10px"}} onChange={filterByStatus} checked={searchData.status.includes("true")} />
                    <Form.Check type="checkbox" label="Pending" value="false" style={{marginLeft:"10px"}} onChange={filterByStatus} checked={searchData.status.includes("false")} />
                    </div>
                    <div style={{textAlign:'center', marginTop:"-180px"}}>
                    <button className='btn btn-secondary' onClick={() => { clearSearch() }}>Clear</button>
                </div>
            </div>
            <style jsc="true">{`
              .search-item {
    float: left;
    box-sizing: content-box;
    padding: 30px;
    margin: 00px 15px;
    min-height: 900px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    position: relative;
    background: gainsboro;
    border-radius: 15px;
  }
            `}
            </style>
        </>
    );
}
