import React, { useEffect, useState } from "react";
import API from "../../../api";
import PropTypes from "prop-types";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard data={user.qualities} />
            <MeetingsCard value={user.completedMeetings} />
          </div>
          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
//   const { userId } = useParams();

//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   if (loading || !user) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h2>Профессия: {user.profession.name}</h2>
//       <p>Качества:</p>
//       <ul>
//         {user.qualities.map((q) => (
//           <Qualitie key={q._id} {...q} />
//         ))}
//       </ul>
//       <p>Встретился, раз: {user.completedMeetings}</p>
//       <h2>Рейтинг: {user.rate}</h2>

//       <button onClick={() => navigate(`/users/${userId}/edit`)}>
//         Изменить
//       </button>
//     </div>
//   );
// };

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
