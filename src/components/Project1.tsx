function Project1() {
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
        {users.map(users =>(
            <li>
                Name: {users.name}
                <br />
                Email: {users.email}
                <br />
                Address: {users.address.city}, {users.address.country}
                <br />
                Hobbies: {users.hobbies.length > 0? users.hobbies : "Hobbysi yo'q"}
                <br />
                Status: {users.status == null? "Status mavjud emas" : users.status}
                <hr />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Project1
