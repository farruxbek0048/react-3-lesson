function Project2() {
    const users = [
        {
          id: 1,
          name: "Ali Valiyev",
          age: 25,
          email: "ali@example.com",
          status: "active",
          hobbies: ["Football", "Chess", "Coding"],
          address: { city: "Tashkent", country: "Uzbekistan" },
        },
        {
          id: 2,
          name: "Zarina Karimova",
          age: 30,
          email: "zarina@example.com",
          status: "inactive",
          hobbies: ["Reading", "Swimming"],
          address: { city: "Samarkand", country: "Uzbekistan" },
        },
        {
          id: 3,
          name: "Jasur Akhmedov",
          age: 28,
          email: "jasur@example.com",
          status: "pending",
          hobbies: ["Gaming", "Cooking", "Hiking"],
          address: { city: "Bukhara", country: "Uzbekistan" },
        },
        {
          id: 4,
          name: "Madina Rahimova",
          age: 22,
          email: "madina@example.com",
          status: "active",
          hobbies: ["Painting", "Music"],
          address: { city: "Nukus", country: "Uzbekistan" },
        },
        {
          id: 5,
          name: "Shoxruxbek Saidov",
          age: 35,
          email: "shoxrux@example.com",
          status: null,
          hobbies: [],
          address: { city: "Khiva", country: "Uzbekistan" },
        },
      ];
      

  return (
    <div>
      <ul>
        {users.map(users => (
            <li>
                Age: {users.age > 30? "Katta yoshli foydalanuvchi" : users.age}
                <br />
                Status: {users.status === "active"? (
                    <span style={{color:'red'}}>Active</span>
                ): users.status === "pending"? (
                    <span style={{color:'yellow'}}>Pending</span>
                ):users.status == null? "Status mavjud emas" : users.status}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Project2
