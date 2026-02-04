import { useState } from "react";
import mockData from "./usersData";
import styles from './Users.module.css'

const Users = () =>  {
    //useState must store ALL users. Initial value: mockData
    const [users, setUsers] = useState(mockData);
    //Rendering a list of users
    const usersData = users.map(user => (
                    <li key={user.email} className={styles.users_list_item}>
                        <span className={styles.usrname}>{user.username}</span>
                        <span className={styles.usrmail}>{user.email}</span>
                    </li>
                ));
    //Adding a new object
    function addUser(formData) {
        // const newUser = {
        //     username: formData.get("user"),
        //     email: formData.get("email"),
        // };
        const username = formData.get("user");
        const email = formData.get("email");
        //if something empty => quit
        if (!username || !email) {
        //if (!username.trim() || !email.trim())
            alert("Please fill in all fields 🙂");
            return ;
        }
        const newUser = {
            username,
            email,
        };

        setUsers(prev => [...prev, newUser])
    }
    
    
    return (
        <div className={styles.users_container}>
            <h2 className={styles.user_header}>Users component</h2>
            <form action={addUser} className={styles.users_form}>
                <div className={styles.input_container}>
                    <input className={styles.input_el}
                        type="text"
                        placeholder="Enter your name"
                        name="user"
                    />
                     <input className={styles.input_el}
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                    />
                </div>
                
                <button className={styles.add_user}>Add user</button>
            </form>
            <p className={styles.usr_lst_title}>List of users</p>
            <ul className={styles.users_list}>
                {usersData}
            </ul>
        </div>
    );
}

export default Users;