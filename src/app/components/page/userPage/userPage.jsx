import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../../api";
import Qualitie from "../../ui/qualities/qualitie";

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    API.users.getById(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (loading || !user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>Профессия: {user.profession.name}</h2>
      <p>Качества:</p>
      <ul>
        {user.qualities.map((q) => (
          <Qualitie key={q._id} {...q} />
        ))}
      </ul>
      <p>Встретился, раз: {user.completedMeetings}</p>
      <h2>Рейтинг: {user.rate}</h2>

      <button onClick={() => navigate("/users")}>Все пользователи</button>
    </div>
  );
};

export default UserPage;
