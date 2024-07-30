// import { useState } from "react";
import "./App.css";

type User = { firstName: string; lastName: string };

function UserCard(props: { firstName: string; lastName: string }) {
  const lowerFirstName = props.firstName.toLowerCase();
  const lowerLastName = props.lastName.toLowerCase();

  return (
    <div className="user-card">
      <h2>
        {lowerFirstName} {lowerLastName}
      </h2>
    </div>
  );
}

function App() {
  const user = { firstName: "John", lastName: "Doe" };

  return (
    <>
      <div>
        <UserCard {...user} />
        <button onClick={() => alert(`Hello, ${user.firstName}!`)}>
          Greet
        </button>
      </div>
    </>
  );
}

export default App;
